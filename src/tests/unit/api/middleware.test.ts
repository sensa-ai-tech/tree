// @vitest-environment node
import { NextRequest, NextResponse } from 'next/server';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  withAuth,
  withRateLimit,
  _resetDegradedFallback,
  enforceJsonBodyLimit,
  MAX_JSON_BODY_BYTES,
} from '@/lib/api/middleware';
import {
  InMemoryRateLimitStore,
  getRateLimitStore,
  _resetRateLimitStore,
} from '@/lib/api/rate-limit-store';

function makeRequest(
  url: string,
  init: { headers?: Record<string, string>; method?: string } = {}
): NextRequest {
  return new NextRequest(new URL(url), {
    method: init.method ?? 'GET',
    headers: init.headers,
  });
}

async function readJson(response: NextResponse): Promise<unknown> {
  return JSON.parse(await response.text());
}

describe('enforceJsonBodyLimit', () => {
  // NOTE: `content-length` is a fetch-spec *forbidden* request header, so a
  // JS-constructed NextRequest silently drops it — a real request can't carry it
  // in tests. In production the HTTP layer supplies content-length, so the guard
  // works there; here we drive the guard's logic with a minimal header-bearing stub.
  function reqWithLength(len?: string): NextRequest {
    return {
      headers: {
        get: (k: string) => (k.toLowerCase() === 'content-length' ? len ?? null : null),
      },
    } as unknown as NextRequest;
  }

  it('returns null when there is no content-length header (treated as 0)', () => {
    expect(enforceJsonBodyLimit(reqWithLength())).toBeNull();
  });

  it('returns null when content-length equals the limit (boundary, inclusive)', () => {
    expect(enforceJsonBodyLimit(reqWithLength(String(MAX_JSON_BODY_BYTES)))).toBeNull();
  });

  it('returns a 413 response when content-length exceeds the limit by one byte', async () => {
    const res = enforceJsonBodyLimit(reqWithLength(String(MAX_JSON_BODY_BYTES + 1)));
    expect(res).not.toBeNull();
    expect(res!.status).toBe(413);
    expect(await readJson(res!)).toMatchObject({ error: 'Request body too large' });
  });

  it('honors a custom max argument on both sides of the boundary', () => {
    expect(enforceJsonBodyLimit(reqWithLength('100'), 50)).not.toBeNull();
    expect(enforceJsonBodyLimit(reqWithLength('100'), 200)).toBeNull();
  });

  it('treats a non-numeric content-length as 0 (documented fail-open → allowed)', () => {
    // Number('not-a-number' ?? 0) === NaN; NaN > max is false → null. Pins the
    // fail-open semantics the retest flagged as unspecified.
    expect(enforceJsonBodyLimit(reqWithLength('not-a-number'))).toBeNull();
  });
});

describe('withAuth', () => {
  const originalEnv = { ...process.env };

  beforeEach(() => {
    process.env.ADMIN_API_KEY = 'super-secret-key';
  });

  afterEach(() => {
    process.env = { ...originalEnv };
  });

  it('rejects with 503 when ADMIN_API_KEY env is missing', async () => {
    delete process.env.ADMIN_API_KEY;
    const handler = vi.fn(async () => NextResponse.json({ ok: true }));
    const wrapped = withAuth(handler);

    const res = await wrapped(
      makeRequest('http://localhost/api/x', {
        headers: { authorization: 'Bearer anything' },
      })
    );

    expect(res.status).toBe(503);
    expect(handler).not.toHaveBeenCalled();
  });

  it('rejects with 401 when Authorization header is missing', async () => {
    const handler = vi.fn(async () => NextResponse.json({ ok: true }));
    const res = await withAuth(handler)(makeRequest('http://localhost/api/x'));
    expect(res.status).toBe(401);
    expect(handler).not.toHaveBeenCalled();
  });

  it('rejects with 401 when Authorization scheme is not Bearer', async () => {
    const handler = vi.fn(async () => NextResponse.json({ ok: true }));
    const res = await withAuth(handler)(
      makeRequest('http://localhost/api/x', {
        headers: { authorization: 'Basic abc==' },
      })
    );
    expect(res.status).toBe(401);
  });

  it('rejects with 403 when token does not match ADMIN_API_KEY', async () => {
    const handler = vi.fn(async () => NextResponse.json({ ok: true }));
    const res = await withAuth(handler)(
      makeRequest('http://localhost/api/x', {
        headers: { authorization: 'Bearer wrong-key' },
      })
    );
    expect(res.status).toBe(403);
    expect(await readJson(res)).toEqual({ error: 'Invalid API key' });
    expect(handler).not.toHaveBeenCalled();
  });

  it('forwards to handler with correct token', async () => {
    const handler = vi.fn(async () => NextResponse.json({ ok: true }));
    const res = await withAuth(handler)(
      makeRequest('http://localhost/api/x', {
        headers: { authorization: 'Bearer super-secret-key' },
      })
    );
    expect(res.status).toBe(200);
    expect(handler).toHaveBeenCalledTimes(1);
  });
});

describe('withRateLimit', () => {
  const originalEnv = { ...process.env };

  beforeEach(() => {
    // 確保 factory 走 in-memory（不戳 Upstash REST）
    delete process.env.UPSTASH_REDIS_REST_URL;
    delete process.env.UPSTASH_REDIS_REST_TOKEN;
    _resetRateLimitStore();
  });

  afterEach(() => {
    process.env = { ...originalEnv };
    _resetRateLimitStore();
  });

  it('passes through when under the limit', async () => {
    const handler = vi.fn(async () => NextResponse.json({ ok: true }));
    const wrapped = withRateLimit(handler, { maxRequests: 3, windowSeconds: 60 });
    const req = () =>
      makeRequest('http://localhost/api/x', {
        headers: { 'x-real-ip': '203.0.113.1' },
      });

    const r1 = await wrapped(req());
    const r2 = await wrapped(req());
    const r3 = await wrapped(req());

    expect(r1.status).toBe(200);
    expect(r2.status).toBe(200);
    expect(r3.status).toBe(200);
    expect(handler).toHaveBeenCalledTimes(3);
  });

  it('returns 429 when limit exceeded', async () => {
    const handler = vi.fn(async () => NextResponse.json({ ok: true }));
    const wrapped = withRateLimit(handler, { maxRequests: 2, windowSeconds: 60 });
    const req = () =>
      makeRequest('http://localhost/api/y', {
        headers: { 'x-real-ip': '203.0.113.2' },
      });

    await wrapped(req());
    await wrapped(req());
    const blocked = await wrapped(req());

    expect(blocked.status).toBe(429);
    expect(handler).toHaveBeenCalledTimes(2);
  });

  it('sets Retry-After and X-RateLimit-* headers on 429', async () => {
    const handler = vi.fn(async () => NextResponse.json({ ok: true }));
    const wrapped = withRateLimit(handler, { maxRequests: 1, windowSeconds: 60 });
    const req = () =>
      makeRequest('http://localhost/api/z', {
        headers: { 'x-real-ip': '203.0.113.3' },
      });

    await wrapped(req());
    const blocked = await wrapped(req());

    expect(blocked.headers.get('Retry-After')).toBeTruthy();
    expect(Number(blocked.headers.get('Retry-After'))).toBeGreaterThan(0);
    expect(blocked.headers.get('X-RateLimit-Limit')).toBe('1');
    expect(blocked.headers.get('X-RateLimit-Remaining')).toBe('0');
    expect(blocked.headers.get('X-RateLimit-Reset')).toBeTruthy();
  });

  it('uses x-real-ip in preference to x-forwarded-for', async () => {
    const handler = vi.fn(async () => NextResponse.json({ ok: true }));
    const wrapped = withRateLimit(handler, { maxRequests: 1, windowSeconds: 60 });

    // 兩個請求帶不同 x-real-ip 但同 x-forwarded-for —
    // 如果 IP 抽取錯成 forwarded，第二個會被擋
    await wrapped(
      makeRequest('http://localhost/api/a', {
        headers: { 'x-real-ip': '10.0.0.1', 'x-forwarded-for': '8.8.8.8' },
      })
    );
    const res = await wrapped(
      makeRequest('http://localhost/api/a', {
        headers: { 'x-real-ip': '10.0.0.2', 'x-forwarded-for': '8.8.8.8' },
      })
    );

    expect(res.status).toBe(200);
  });

  it('falls back to leftmost x-forwarded-for when x-real-ip is missing', async () => {
    const handler = vi.fn(async () => NextResponse.json({ ok: true }));
    const wrapped = withRateLimit(handler, { maxRequests: 1, windowSeconds: 60 });

    await wrapped(
      makeRequest('http://localhost/api/b', {
        headers: { 'x-forwarded-for': '198.51.100.10, 10.0.0.1, 10.0.0.2' },
      })
    );
    const blocked = await wrapped(
      makeRequest('http://localhost/api/b', {
        headers: { 'x-forwarded-for': '198.51.100.10, different-proxy' },
      })
    );

    expect(blocked.status).toBe(429);
  });

  it('separates limits per path', async () => {
    const handler = vi.fn(async () => NextResponse.json({ ok: true }));
    const wrapped = withRateLimit(handler, { maxRequests: 1, windowSeconds: 60 });

    const req = (path: string) =>
      makeRequest(`http://localhost${path}`, {
        headers: { 'x-real-ip': '203.0.113.99' },
      });

    await wrapped(req('/api/foo'));
    // 不同 path 應該不共用 quota
    const other = await wrapped(req('/api/bar'));
    expect(other.status).toBe(200);
  });

  it('caps absurdly long IP-like header strings (anti-spoof)', async () => {
    const handler = vi.fn(async () => NextResponse.json({ ok: true }));
    const wrapped = withRateLimit(handler, { maxRequests: 1, windowSeconds: 60 });

    // 64+ chars 應被擋下，落到 "unknown"
    const giant = 'a'.repeat(100);
    await wrapped(
      makeRequest('http://localhost/api/c', { headers: { 'x-real-ip': giant } })
    );
    const blocked = await wrapped(
      makeRequest('http://localhost/api/c', { headers: { 'x-real-ip': giant } })
    );
    expect(blocked.status).toBe(429); // 都被歸到 unknown，第二次該擋
  });

  it('fails open when store throws (legacy: degradedFallback:false)', async () => {
    _resetRateLimitStore();
    _resetDegradedFallback();
    const brokenStore = {
      hit: vi.fn(async () => {
        throw new Error('upstash down');
      }),
    };
    getRateLimitStore(brokenStore);

    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const handler = vi.fn(async () => NextResponse.json({ ok: true }));
    const res = await withRateLimit(handler, { maxRequests: 1, windowSeconds: 60, degradedFallback: false })(
      makeRequest('http://localhost/api/x', {
        headers: { 'x-real-ip': '203.0.113.50' },
      })
    );

    expect(res.status).toBe(200);
    expect(brokenStore.hit).toHaveBeenCalled();
    expect(handler).toHaveBeenCalled();
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      expect.stringContaining('fail-open'),
      expect.any(Error)
    );
    consoleErrorSpy.mockRestore();
  });

  it('SEC-R2-001: degraded fallback caps brute-force when primary store fails (default on)', async () => {
    _resetRateLimitStore();
    _resetDegradedFallback();
    const brokenStore = {
      hit: vi.fn(async () => {
        throw new Error('upstash 503');
      }),
    };
    getRateLimitStore(brokenStore);

    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const handler = vi.fn(async () => NextResponse.json({ ok: true }));
    const wrapped = withRateLimit(handler, { maxRequests: 2, windowSeconds: 60 });
    const ip = { headers: { 'x-real-ip': '198.51.100.7' } };

    // First 2 hits go through (degraded counts locally, count=1 and count=2)
    expect((await wrapped(makeRequest('http://localhost/api/admin/login', ip))).status).toBe(200);
    expect((await wrapped(makeRequest('http://localhost/api/admin/login', ip))).status).toBe(200);
    // 3rd hit should be 429 — degraded fallback enforced the cap per-instance
    const blocked = await wrapped(makeRequest('http://localhost/api/admin/login', ip));
    expect(blocked.status).toBe(429);
    expect(brokenStore.hit).toHaveBeenCalledTimes(3);
    consoleErrorSpy.mockRestore();
  });

  it('uses in-memory store concretely (full integration)', async () => {
    const handler = vi.fn(async () => NextResponse.json({ ok: true }));
    getRateLimitStore(new InMemoryRateLimitStore());

    const wrapped = withRateLimit(handler, { maxRequests: 2, windowSeconds: 60 });
    const req = () =>
      makeRequest('http://localhost/api/e', {
        headers: { 'x-real-ip': '203.0.113.80' },
      });

    expect((await wrapped(req())).status).toBe(200);
    expect((await wrapped(req())).status).toBe(200);
    expect((await wrapped(req())).status).toBe(429);
  });
});
