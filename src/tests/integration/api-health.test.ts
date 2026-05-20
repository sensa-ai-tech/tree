// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

/**
 * /api/health 直接讀 process.env 兩個 Supabase 變數來決定 mock-mode。
 * 而且 supabase/server.ts 把 MOCK_MODE 寫成 module-level constant，
 * 一旦 import 就 freeze。所以每個 test 都要 vi.resetModules() 重新 import。
 */

const originalEnv = { ...process.env };

describe('GET /api/health', () => {
  beforeEach(() => {
    vi.resetModules();
    // 清乾淨，每個 test 自己 set
    delete process.env.NEXT_PUBLIC_SUPABASE_URL;
    delete process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    delete process.env.SUPABASE_SERVICE_ROLE_KEY;
    delete process.env.VKT_JWT_SECRET;
  });

  afterEach(() => {
    process.env = { ...originalEnv };
    vi.resetModules();
    vi.restoreAllMocks();
  });

  it('returns 200 + status=ok in mock mode (no Supabase env, but VKT_JWT_SECRET set)', async () => {
    process.env.VKT_JWT_SECRET = 'x'.repeat(40);
    const { GET } = await import('@/app/api/health/route');
    const res = await GET();
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.status).toBe('ok');
    expect(body.checks.app.ok).toBe(true);
    expect(body.checks.env.ok).toBe(true);
    expect(body.checks.supabase.ok).toBe(true);
    expect(body.checks.supabase.reason).toBe('mock-mode');
  });

  it('returns 503 + status=degraded when VKT_JWT_SECRET is missing', async () => {
    // 沒設 VKT_JWT_SECRET
    const { GET } = await import('@/app/api/health/route');
    const res = await GET();
    expect(res.status).toBe(503);
    const body = await res.json();
    expect(body.status).toBe('degraded');
    expect(body.checks.env.ok).toBe(false);
    expect(body.checks.env.reason).toMatch(/VKT_JWT_SECRET/);
  });

  it('includes ISO timestamp + version + durationMs in payload', async () => {
    process.env.VKT_JWT_SECRET = 'x'.repeat(40);
    const { GET } = await import('@/app/api/health/route');
    const res = await GET();
    const body = await res.json();
    expect(body.timestamp).toMatch(/^\d{4}-\d{2}-\d{2}T/);
    expect(body.version).toBeTruthy();
    expect(typeof body.durationMs).toBe('number');
    expect(body.durationMs).toBeGreaterThanOrEqual(0);
  });

  it('pings Supabase when both env vars set, succeeds → 200', async () => {
    process.env.VKT_JWT_SECRET = 'x'.repeat(40);
    process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://fake.supabase.co';
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'fake-anon-key';

    // Mock @supabase/supabase-js 讓 ping 成功
    vi.doMock('@supabase/supabase-js', () => ({
      createClient: () => ({
        from: () => ({
          select: () => ({
            limit: () => Promise.resolve({ data: [{ id: 'X' }], error: null }),
          }),
        }),
      }),
    }));

    const { GET } = await import('@/app/api/health/route');
    const res = await GET();
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.checks.supabase.ok).toBe(true);
    expect(body.checks.supabase.latencyMs).toBeGreaterThanOrEqual(0);
  });

  it('returns 503 when Supabase ping returns error', async () => {
    process.env.VKT_JWT_SECRET = 'x'.repeat(40);
    process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://fake.supabase.co';
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'fake-anon-key';

    vi.doMock('@supabase/supabase-js', () => ({
      createClient: () => ({
        from: () => ({
          select: () => ({
            limit: () => Promise.resolve({ data: null, error: { message: 'connection refused' } }),
          }),
        }),
      }),
    }));

    const { GET } = await import('@/app/api/health/route');
    const res = await GET();
    expect(res.status).toBe(503);
    const body = await res.json();
    expect(body.status).toBe('degraded');
    expect(body.checks.supabase.ok).toBe(false);
    expect(body.checks.supabase.reason).toMatch(/connection refused/);
  });

  it('catches thrown errors from Supabase client and returns 503', async () => {
    process.env.VKT_JWT_SECRET = 'x'.repeat(40);
    process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://fake.supabase.co';
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'fake-anon-key';

    vi.doMock('@supabase/supabase-js', () => ({
      createClient: () => ({
        from: () => ({
          select: () => ({
            limit: () => {
              throw new Error('network unreachable');
            },
          }),
        }),
      }),
    }));

    const { GET } = await import('@/app/api/health/route');
    const res = await GET();
    expect(res.status).toBe(503);
    const body = await res.json();
    expect(body.checks.supabase.ok).toBe(false);
    expect(body.checks.supabase.reason).toMatch(/network unreachable/);
  });
});
