import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { reportError, _internal } from '@/lib/observability/error-reporter';

const { parseDsn, buildEvent } = _internal;

describe('parseDsn', () => {
  it('parses a valid Sentry DSN', () => {
    const dsn = parseDsn('https://abc123@o12345.ingest.sentry.io/67890');
    expect(dsn).toEqual({
      protocol: 'https',
      publicKey: 'abc123',
      host: 'o12345.ingest.sentry.io',
      projectId: '67890',
    });
  });

  it('returns null for malformed input', () => {
    expect(parseDsn('not-a-url')).toBeNull();
    expect(parseDsn('')).toBeNull();
  });

  it('returns null when public key is missing', () => {
    expect(parseDsn('https://o12345.ingest.sentry.io/67890')).toBeNull();
  });

  it('returns null when project id is missing', () => {
    expect(parseDsn('https://key@o12345.ingest.sentry.io/')).toBeNull();
  });
});

describe('buildEvent', () => {
  it('produces a Sentry-shaped event for an Error instance', () => {
    const err = new Error('boom');
    const event = buildEvent(
      err,
      { scope: 'test', tags: { foo: 'bar', count: 42 } },
      { dsn: 'x', release: 'v1.2.3', environment: 'test' }
    );

    expect(event.level).toBe('error');
    expect(event.environment).toBe('test');
    expect(event.release).toBe('v1.2.3');
    expect(event.transaction).toBe('test');
    expect(event.tags).toEqual({ foo: 'bar', count: '42' });
    expect(event.exception.values[0]?.value).toBe('boom');
    expect(event.exception.values[0]?.type).toBe('Error');
    expect(event.event_id).toMatch(/^[a-f0-9]{32}$/);
  });

  it('coerces non-Error throws into Error', () => {
    const event = buildEvent('string thrown', {}, { dsn: 'x', release: undefined, environment: 'test' });
    expect(event.exception.values[0]?.value).toBe('string thrown');
    expect(event.exception.values[0]?.type).toBe('Error');
  });

  it('omits release when not provided', () => {
    const event = buildEvent(new Error('x'), {}, { dsn: 'x', release: undefined, environment: 'test' });
    expect(event.release).toBeUndefined();
  });

  it('attaches user id when provided', () => {
    const event = buildEvent(new Error('x'), { userId: 'hashed-id' }, { dsn: 'x', release: undefined, environment: 'test' });
    expect(event.user).toEqual({ id: 'hashed-id' });
  });

  it('sets platform to "javascript" in jsdom (window is defined) and never empty', () => {
    // jsdom test env has window defined → typeof window !== 'undefined' → platform = 'javascript'
    // Kills mutants: if(true)→'node', typeof!=='undefined'→'node', ?'node':''→''
    const event = buildEvent(new Error('x'), {}, { dsn: 'x', release: undefined, environment: 'test' });
    expect(event.platform).toBe('javascript');
  });

  it('sets timestamp as unix seconds (integer, 1e9 < ts < 2e9)', () => {
    const event = buildEvent(new Error('x'), {}, { dsn: 'x', release: undefined, environment: 'test' });
    // unix seconds are ~1.7e9 right now; ms would be ~1.7e12
    expect(event.timestamp).toBeGreaterThan(1_000_000_000);
    expect(event.timestamp).toBeLessThan(2_000_000_000);
    expect(Number.isInteger(event.timestamp)).toBe(true);
  });

  it('includes stacktrace when error has a stack', () => {
    const err = new Error('has a stack');
    expect(err.stack).toBeDefined(); // always true in Node
    const event = buildEvent(err, {}, { dsn: 'x', release: undefined, environment: 'test' });
    expect(event.exception.values[0]?.stacktrace).toBeDefined();
    expect(Array.isArray(event.exception.values[0]?.stacktrace?.frames)).toBe(true);
  });

  it('omits stacktrace when error.stack is absent', () => {
    const err = new Error('no stack');
    delete err.stack;
    const event = buildEvent(err, {}, { dsn: 'x', release: undefined, environment: 'test' });
    expect(event.exception.values[0]?.stacktrace).toBeUndefined();
  });

  it('omits tags field when context has no tags', () => {
    const event = buildEvent(new Error('x'), {}, { dsn: 'x', release: undefined, environment: 'test' });
    expect(event.tags).toBeUndefined();
  });

  it('omits tags field when context.tags is an empty object', () => {
    const event = buildEvent(new Error('x'), { tags: {} }, { dsn: 'x', release: undefined, environment: 'test' });
    expect(event.tags).toBeUndefined();
  });

  it('includes tags field only when context.tags is non-empty', () => {
    const event = buildEvent(new Error('x'), { tags: { k: 'v' } }, { dsn: 'x', release: undefined, environment: 'test' });
    expect(event.tags).toEqual({ k: 'v' });
  });
});

describe('reportError', () => {
  const originalFetch = globalThis.fetch;
  const originalEnv = { ...process.env };
  let consoleErrorSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    globalThis.fetch = originalFetch;
    process.env = { ...originalEnv };
    vi.restoreAllMocks();
  });

  it('logs to console.error with scope prefix when no DSN configured', () => {
    delete process.env.SENTRY_DSN;
    delete process.env.NEXT_PUBLIC_SENTRY_DSN;

    reportError(new Error('local fail'), { scope: 'route:/api/foo' });
    expect(consoleErrorSpy).toHaveBeenCalledWith('[route:/api/foo]', expect.any(Error));
  });

  it('logs with generic prefix when scope is omitted', () => {
    delete process.env.SENTRY_DSN;
    delete process.env.NEXT_PUBLIC_SENTRY_DSN;

    reportError(new Error('no scope'));
    expect(consoleErrorSpy).toHaveBeenCalledWith('[error]', expect.any(Error));
  });

  it('sends envelope to Sentry when DSN is configured', async () => {
    process.env.SENTRY_DSN = 'https://abc@o1.ingest.sentry.io/2';
    const mockFetch = vi.fn<typeof fetch>(async () => new Response(null, { status: 200 }));
    globalThis.fetch = mockFetch;

    reportError(new Error('prod boom'), { scope: 'prod-route' });
    // give the fire-and-forget fetch a tick to flush
    await Promise.resolve();
    await Promise.resolve();

    expect(consoleErrorSpy).toHaveBeenCalled();
    expect(mockFetch).toHaveBeenCalledTimes(1);
    const [url, init] = mockFetch.mock.calls[0]!;
    expect(url).toBe('https://o1.ingest.sentry.io/api/2/envelope/');
    const reqInit = init as RequestInit;
    expect(reqInit.method).toBe('POST');
    const headers = reqInit.headers as Record<string, string>;
    expect(headers['Content-Type']).toBe('application/x-sentry-envelope');
    expect(headers['X-Sentry-Auth']).toContain('sentry_key=abc');

    // body is newline-delimited JSON envelope
    const lines = (reqInit.body as string).split('\n').filter(Boolean);
    expect(lines.length).toBe(3);
    const envHeader = JSON.parse(lines[0]!);
    expect(envHeader.dsn).toBe('https://abc@o1.ingest.sentry.io/2');
  });

  it('swallows fetch failures so caller is not affected', async () => {
    process.env.SENTRY_DSN = 'https://abc@o1.ingest.sentry.io/2';
    globalThis.fetch = vi.fn<typeof fetch>(async () => { throw new Error('network down'); });

    expect(() => reportError(new Error('x'))).not.toThrow();
    await Promise.resolve();
    await Promise.resolve();
    // 一次給 user error，一次給 fetch error
    expect(consoleErrorSpy).toHaveBeenCalled();
  });

  it('skips Sentry call when DSN is invalid', async () => {
    process.env.SENTRY_DSN = 'not-a-url';
    const mockFetch = vi.fn<typeof fetch>();
    globalThis.fetch = mockFetch;

    reportError(new Error('x'));
    await Promise.resolve();

    expect(mockFetch).not.toHaveBeenCalled();
  });

  it('X-Sentry-Auth contains sentry_version=7 and sentry_client', async () => {
    process.env.SENTRY_DSN = 'https://abc@o1.ingest.sentry.io/2';
    const mockFetch = vi.fn<typeof fetch>(async () => new Response(null, { status: 200 }));
    globalThis.fetch = mockFetch;

    reportError(new Error('auth-test'), {});
    await Promise.resolve();
    await Promise.resolve();

    const [, init] = mockFetch.mock.calls[0]!;
    const headers = (init as RequestInit).headers as Record<string, string>;
    expect(headers['X-Sentry-Auth']).toContain('sentry_version=7');
    expect(headers['X-Sentry-Auth']).toContain('sentry_client=vet-knowledge-tree/0.6.1');
    // Parts joined with ", "
    expect(headers['X-Sentry-Auth']).toMatch(/sentry_version=7, sentry_client=/);
  });

  it('envelope item header is exactly {"type":"event"}', async () => {
    process.env.SENTRY_DSN = 'https://abc@o1.ingest.sentry.io/2';
    const mockFetch = vi.fn<typeof fetch>(async () => new Response(null, { status: 200 }));
    globalThis.fetch = mockFetch;

    reportError(new Error('item-header-test'), {});
    await Promise.resolve();
    await Promise.resolve();

    const [, init] = mockFetch.mock.calls[0]!;
    const lines = ((init as RequestInit).body as string).split('\n').filter(Boolean);
    expect(lines.length).toBe(3);
    const itemHeader = JSON.parse(lines[1]!);
    expect(itemHeader).toEqual({ type: 'event' });
  });

  it('console.error called with [error-reporter] prefix when fetch throws', async () => {
    process.env.SENTRY_DSN = 'https://abc@o1.ingest.sentry.io/2';
    globalThis.fetch = vi.fn<typeof fetch>(async () => { throw new Error('network down'); });

    reportError(new Error('network-fail'));
    await Promise.resolve();
    await new Promise((r) => setTimeout(r, 20));

    const allCalls = consoleErrorSpy.mock.calls.flat();
    const hasReporterPrefix = allCalls.some(
      (arg: unknown) => typeof arg === 'string' && arg.includes('[error-reporter]')
    );
    expect(hasReporterPrefix).toBe(true);
  });

  it('uses SENTRY_RELEASE env var in event release field', async () => {
    process.env.SENTRY_DSN = 'https://abc@o1.ingest.sentry.io/2';
    process.env.SENTRY_RELEASE = 'v3.1.4';
    delete process.env.NEXT_PUBLIC_SENTRY_RELEASE;
    const mockFetch = vi.fn<typeof fetch>(async () => new Response(null, { status: 200 }));
    globalThis.fetch = mockFetch;

    reportError(new Error('release-test'), {});
    await Promise.resolve();
    await Promise.resolve();

    const [, init] = mockFetch.mock.calls[0]!;
    const lines = ((init as RequestInit).body as string).split('\n').filter(Boolean);
    const event = JSON.parse(lines[2]!);
    expect(event.release).toBe('v3.1.4');
  });

  it('event.environment matches NODE_ENV (not hardcoded "development")', async () => {
    process.env.SENTRY_DSN = 'https://abc@o1.ingest.sentry.io/2';
    // NODE_ENV='test' in vitest; if ?? mutates to &&, result would be 'development'
    const mockFetch = vi.fn<typeof fetch>(async () => new Response(null, { status: 200 }));
    globalThis.fetch = mockFetch;

    reportError(new Error('env-test'), {});
    await Promise.resolve();
    await Promise.resolve();

    const [, init] = mockFetch.mock.calls[0]!;
    const lines = ((init as RequestInit).body as string).split('\n').filter(Boolean);
    const event = JSON.parse(lines[2]!);
    expect(event.environment).toBe('test'); // vitest sets NODE_ENV='test'
  });
});
