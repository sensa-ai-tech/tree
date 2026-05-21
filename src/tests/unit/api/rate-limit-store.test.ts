import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import {
  InMemoryRateLimitStore,
  UpstashRateLimitStore,
  getRateLimitStore,
  _resetRateLimitStore,
} from '@/lib/api/rate-limit-store';

describe('InMemoryRateLimitStore', () => {
  let store: InMemoryRateLimitStore;

  beforeEach(() => {
    store = new InMemoryRateLimitStore();
  });

  it('increments count on each hit within the window', async () => {
    const r1 = await store.hit('user:1', 60);
    const r2 = await store.hit('user:1', 60);
    const r3 = await store.hit('user:1', 60);
    expect(r1.count).toBe(1);
    expect(r2.count).toBe(2);
    expect(r3.count).toBe(3);
  });

  it('keeps separate counts per key', async () => {
    await store.hit('user:1', 60);
    await store.hit('user:1', 60);
    const result = await store.hit('user:2', 60);
    expect(result.count).toBe(1);
  });

  it('resets count once window expires', async () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-05-18T00:00:00Z'));

    const r1 = await store.hit('user:1', 60);
    expect(r1.count).toBe(1);

    // Jump past the 60-second window
    vi.setSystemTime(new Date('2026-05-18T00:01:01Z'));

    const r2 = await store.hit('user:1', 60);
    expect(r2.count).toBe(1);

    vi.useRealTimers();
  });

  it('reports resetTime in ms accurately', async () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-05-18T00:00:00Z'));
    const start = Date.now();
    const result = await store.hit('user:1', 30);
    expect(result.resetTime).toBe(start + 30_000);
    vi.useRealTimers();
  });

  it('cleanup runs after 5+ minutes and does not disrupt subsequent hits', async () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-05-18T00:00:00Z'));

    // Create entries: one 1-second window, one 1-hour window
    await store.hit('user:expire', 1);     // expires at T+1s
    await store.hit('user:persist', 3600); // expires at T+1h

    // Advance past the 5-minute cleanup interval AND past user:expire's window
    vi.setSystemTime(new Date('2026-05-18T00:06:00Z')); // +6 minutes

    // This hit() triggers cleanup() which should iterate and delete user:expire
    const result = await store.hit('user:expire', 1);
    expect(result.count).toBe(1); // fresh count after window reset

    // user:persist should still be in its window and remember count
    const persist = await store.hit('user:persist', 3600);
    expect(persist.count).toBe(2); // was 1, incremented

    vi.useRealTimers();
  });

  it('_reset() clears all entries and resets lastCleanup', async () => {
    await store.hit('user:a', 60);
    await store.hit('user:a', 60);
    await store.hit('user:b', 60);

    store._reset();

    // After reset all counts should restart from 1
    const a = await store.hit('user:a', 60);
    const b = await store.hit('user:b', 60);
    expect(a.count).toBe(1);
    expect(b.count).toBe(1);
  });
});

describe('UpstashRateLimitStore', () => {
  const originalFetch = globalThis.fetch;

  afterEach(() => {
    globalThis.fetch = originalFetch;
    vi.restoreAllMocks();
  });

  it('sends INCR + EXPIRE + PTTL pipeline to Upstash REST', async () => {
    const mockFetch = vi.fn<typeof fetch>(async () =>
      new Response(JSON.stringify([{ result: 3 }, { result: 1 }, { result: 45_000 }]), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      })
    );
    globalThis.fetch = mockFetch;

    const store = new UpstashRateLimitStore({
      url: 'https://example.upstash.io',
      token: 'test-token',
    });
    const result = await store.hit('user:42:/api/foo', 60);

    expect(result.count).toBe(3);
    expect(result.resetTime).toBeGreaterThan(Date.now());
    expect(mockFetch).toHaveBeenCalledTimes(1);

    const [url, init] = mockFetch.mock.calls[0]!;
    expect(url).toBe('https://example.upstash.io/pipeline');
    const reqInit = init as RequestInit;
    expect(reqInit.method).toBe('POST');
    expect((reqInit.headers as Record<string, string>).Authorization).toBe('Bearer test-token');
    const body = JSON.parse(reqInit.body as string);
    expect(body).toEqual([
      ['INCR', 'user:42:/api/foo'],
      ['EXPIRE', 'user:42:/api/foo', '60', 'NX'],
      ['PTTL', 'user:42:/api/foo'],
    ]);
  });

  it('falls back to windowSeconds when PTTL returns -1 (no TTL set)', async () => {
    globalThis.fetch = vi.fn<typeof fetch>(async () =>
      new Response(JSON.stringify([{ result: 1 }, { result: 1 }, { result: -1 }]), {
        status: 200,
      })
    );

    const store = new UpstashRateLimitStore({ url: 'https://x.upstash.io', token: 't' });
    const before = Date.now();
    const result = await store.hit('k', 30);
    const expectedReset = before + 30_000;
    expect(result.resetTime).toBeGreaterThanOrEqual(expectedReset - 50);
    expect(result.resetTime).toBeLessThanOrEqual(expectedReset + 50);
  });

  it('throws when Upstash returns non-2xx', async () => {
    globalThis.fetch = vi.fn<typeof fetch>(async () =>
      new Response('Unauthorized', { status: 401, statusText: 'Unauthorized' })
    );

    const store = new UpstashRateLimitStore({ url: 'https://x.upstash.io', token: 'bad' });
    await expect(store.hit('k', 60)).rejects.toThrow(/Upstash REST error: 401/);
  });

  it('throws when Upstash returns malformed body', async () => {
    globalThis.fetch = vi.fn<typeof fetch>(async () =>
      new Response(JSON.stringify({ unexpected: 'shape' }), { status: 200 })
    );

    const store = new UpstashRateLimitStore({ url: 'https://x.upstash.io', token: 't' });
    await expect(store.hit('k', 60)).rejects.toThrow(/malformed pipeline response/);
  });

  it('throws malformed response when body has < 3 elements', async () => {
    // Tests body.length < 3 branch (not body.length < 3 → false mutant)
    globalThis.fetch = vi.fn<typeof fetch>(async () =>
      new Response(JSON.stringify([{ result: 1 }, { result: 1 }]), { status: 200 })
    );

    const store = new UpstashRateLimitStore({ url: 'https://x.upstash.io', token: 't' });
    await expect(store.hit('k', 60)).rejects.toThrow(/malformed pipeline response/);
  });

  it('throws when INCR result is null instead of a number', async () => {
    globalThis.fetch = vi.fn<typeof fetch>(async () =>
      new Response(JSON.stringify([{ result: null }, { result: 1 }, { result: 30_000 }]), { status: 200 })
    );

    const store = new UpstashRateLimitStore({ url: 'https://x.upstash.io', token: 't' });
    await expect(store.hit('k', 60)).rejects.toThrow(/INCR did not return a number/);
  });

  it('uses windowSeconds fallback when PTTL is exactly 0 (expired immediately)', async () => {
    // PTTL=0 means key expired between INCR and PTTL; pttlResult > 0 is false → use fallback
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-05-18T00:00:00Z'));

    globalThis.fetch = vi.fn<typeof fetch>(async () =>
      new Response(JSON.stringify([{ result: 1 }, { result: 1 }, { result: 0 }]), { status: 200 })
    );

    const store = new UpstashRateLimitStore({ url: 'https://x.upstash.io', token: 't' });
    const start = Date.now();
    const result = await store.hit('k', 30);

    // PTTL=0 is NOT > 0, so fallback to windowSeconds * 1000
    expect(result.resetTime).toBe(start + 30_000);

    vi.useRealTimers();
  });
});

describe('getRateLimitStore factory', () => {
  const originalEnv = { ...process.env };

  beforeEach(() => {
    _resetRateLimitStore();
  });

  afterEach(() => {
    process.env = { ...originalEnv };
    _resetRateLimitStore();
  });

  it('picks InMemoryRateLimitStore when Upstash env vars are missing', () => {
    delete process.env.UPSTASH_REDIS_REST_URL;
    delete process.env.UPSTASH_REDIS_REST_TOKEN;
    const store = getRateLimitStore();
    expect(store).toBeInstanceOf(InMemoryRateLimitStore);
  });

  it('picks UpstashRateLimitStore when both env vars are set', () => {
    process.env.UPSTASH_REDIS_REST_URL = 'https://x.upstash.io';
    process.env.UPSTASH_REDIS_REST_TOKEN = 'token';
    const store = getRateLimitStore();
    expect(store).toBeInstanceOf(UpstashRateLimitStore);
  });

  it('honours the `force` parameter for test injection', () => {
    const fake = new InMemoryRateLimitStore();
    expect(getRateLimitStore(fake)).toBe(fake);
    expect(getRateLimitStore()).toBe(fake);
  });

  it('uses InMemoryStore when only URL is set (no token) — url && token vs url || token', () => {
    // Only URL set, no token → should NOT create UpstashRateLimitStore
    process.env.UPSTASH_REDIS_REST_URL = 'https://x.upstash.io';
    delete process.env.UPSTASH_REDIS_REST_TOKEN;
    const store = getRateLimitStore();
    expect(store).toBeInstanceOf(InMemoryRateLimitStore);
  });

  it('uses InMemoryStore when only token is set (no URL)', () => {
    delete process.env.UPSTASH_REDIS_REST_URL;
    process.env.UPSTASH_REDIS_REST_TOKEN = 'some-token';
    const store = getRateLimitStore();
    expect(store).toBeInstanceOf(InMemoryRateLimitStore);
  });

  it('prints console.warn in production when Upstash is not configured', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    delete process.env.UPSTASH_REDIS_REST_URL;
    delete process.env.UPSTASH_REDIS_REST_TOKEN;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (process.env as any).NODE_ENV = 'production';

    getRateLimitStore();

    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining('[rate-limit]')
    );
    warnSpy.mockRestore();
  });
});
