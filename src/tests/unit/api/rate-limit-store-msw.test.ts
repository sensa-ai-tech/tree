// @vitest-environment node
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';
import { http, HttpResponse } from 'msw';
import { server } from '@/tests/msw/server';
import { UpstashRateLimitStore } from '@/lib/api/rate-limit-store';

/**
 * Round 8 MSW migration — 把 vi.fn 攔 globalThis.fetch 改用 MSW network 層攔截。
 * 比 vi.fn 乾淨的地方：不必手動還原 fetch，handler 可以複用，能驗 request body。
 */

beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('UpstashRateLimitStore via MSW', () => {
  it('parses INCR/EXPIRE NX/PTTL pipeline response correctly', async () => {
    // 預設 handler 回 count=1、PTTL=60000
    const store = new UpstashRateLimitStore({
      url: 'https://test.upstash.io',
      token: 'test-token',
    });
    const result = await store.hit('user:1:/api/foo', 60);
    expect(result.count).toBe(1);
    expect(result.resetTime).toBeGreaterThan(Date.now());
    // resetTime 應在 60s 內
    expect(result.resetTime - Date.now()).toBeLessThanOrEqual(60_000 + 100);
  });

  it('throws when Upstash returns non-2xx', async () => {
    server.use(
      http.post('*/pipeline', () => new HttpResponse('Forbidden', { status: 403 }))
    );
    const store = new UpstashRateLimitStore({
      url: 'https://test.upstash.io',
      token: 'bad-token',
    });
    await expect(store.hit('k', 60)).rejects.toThrow(/Upstash REST error: 403/);
  });

  it('echoes correct Bearer token in Authorization header', async () => {
    let receivedAuth = '';
    server.use(
      http.post('*/pipeline', ({ request }) => {
        receivedAuth = request.headers.get('Authorization') ?? '';
        return HttpResponse.json([
          { result: 2 },
          { result: 1 },
          { result: 30_000 },
        ]);
      })
    );
    const store = new UpstashRateLimitStore({
      url: 'https://test.upstash.io',
      token: 'super-secret',
    });
    await store.hit('k', 30);
    expect(receivedAuth).toBe('Bearer super-secret');
  });

  it('sends pipeline body with correct INCR/EXPIRE/PTTL commands', async () => {
    let receivedBody: unknown[] = [];
    server.use(
      http.post('*/pipeline', async ({ request }) => {
        receivedBody = (await request.json()) as unknown[];
        return HttpResponse.json([
          { result: 1 },
          { result: 1 },
          { result: 60_000 },
        ]);
      })
    );
    const store = new UpstashRateLimitStore({
      url: 'https://test.upstash.io',
      token: 't',
    });
    await store.hit('user:42:/api/x', 60);

    expect(receivedBody).toEqual([
      ['INCR', 'user:42:/api/x'],
      ['EXPIRE', 'user:42:/api/x', '60', 'NX'],
      ['PTTL', 'user:42:/api/x'],
    ]);
  });
});
