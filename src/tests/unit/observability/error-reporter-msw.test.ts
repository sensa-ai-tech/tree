// @vitest-environment node
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { http, HttpResponse } from 'msw';
import { server } from '@/tests/msw/server';
import { reportError } from '@/lib/observability/error-reporter';

/**
 * MSW-based version of error-reporter integration test.
 * 同樣的測試目的，但用 MSW 攔 network 層比 vi.fn 攔 globalThis.fetch 更乾淨：
 * - 不必手動還原 globalThis.fetch
 * - handlers 可以跨 test 重用（看 src/tests/msw/handlers.ts）
 */

beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const originalEnv = { ...process.env };

describe('error-reporter via MSW', () => {
  let consoleErrorSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    process.env = { ...originalEnv };
    vi.restoreAllMocks();
  });

  it('hits Sentry envelope endpoint when DSN set (handler returns 200)', async () => {
    process.env.SENTRY_DSN = 'https://abc@o1.ingest.sentry.io/2';

    let receivedBody = '';
    server.use(
      http.post('*/api/*/envelope/', async ({ request }) => {
        receivedBody = await request.text();
        return new HttpResponse(null, { status: 200 });
      })
    );

    reportError(new Error('msw test boom'), { scope: 'msw-test' });
    // fire-and-forget — 給兩個 microtask cycle 讓 fetch 解析
    await Promise.resolve();
    await Promise.resolve();
    await new Promise((r) => setTimeout(r, 50));

    expect(receivedBody).toContain('msw test boom');
    expect(receivedBody).toContain('msw-test');
  });

  it('swallows 5xx errors from Sentry', async () => {
    process.env.SENTRY_DSN = 'https://abc@o1.ingest.sentry.io/2';
    server.use(
      http.post('*/api/*/envelope/', () => new HttpResponse(null, { status: 500 }))
    );

    expect(() => reportError(new Error('y'))).not.toThrow();
    await Promise.resolve();
    await new Promise((r) => setTimeout(r, 50));
    // 預期：console.error 被呼叫 (錯誤本身)，但不能爆掉
    expect(consoleErrorSpy).toHaveBeenCalled();
  });

  it('does NOT call Sentry when DSN missing', async () => {
    delete process.env.SENTRY_DSN;
    delete process.env.NEXT_PUBLIC_SENTRY_DSN;

    let called = false;
    server.use(
      http.post('*/api/*/envelope/', () => {
        called = true;
        return new HttpResponse(null, { status: 200 });
      })
    );

    reportError(new Error('local only'));
    await Promise.resolve();
    await new Promise((r) => setTimeout(r, 30));

    expect(called).toBe(false);
    expect(consoleErrorSpy).toHaveBeenCalled();
  });
});
