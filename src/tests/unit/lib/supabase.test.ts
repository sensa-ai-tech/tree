/**
 * Tests for lib/supabase/client.ts, server.ts, and middleware.ts
 *
 * In the test environment, Supabase env vars are absent → MOCK_MODE = true.
 * These tests validate mock-mode behaviour (the proxy delegation) without
 * requiring a real Supabase instance.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// P0-1: 攔截 @supabase/ssr — live-mode 測試不可打真網路。
// mock-mode 測試不受影響（mock 路徑從不呼叫 SSR client）。
const { mockGetUser } = vi.hoisted(() => ({
  mockGetUser: vi.fn(),
}));

vi.mock('@supabase/ssr', () => ({
  createServerClient: vi.fn(() => ({ auth: { getUser: mockGetUser } })),
  createBrowserClient: vi.fn(() => ({})),
}));

// ─── client.ts ───────────────────────────────────────────────────────────────

describe('lib/supabase/client — mock mode', () => {
  it('isMockMode is true when env vars are absent', async () => {
    const { isMockMode } = await import('@/lib/supabase/client');
    expect(isMockMode).toBe(true);
  });

  it('createBrowserClient() returns an object in mock mode', async () => {
    const { createBrowserClient } = await import('@/lib/supabase/client');
    const client = createBrowserClient();
    expect(client).toBeDefined();
    expect(typeof client).toBe('object');
  });

  it('mock client from() returns a chainable proxy', async () => {
    const { createBrowserClient } = await import('@/lib/supabase/client');
    const client = createBrowserClient();
    const chainable = (client as any).from('nodes');
    expect(chainable).toBeDefined();
  });

  it('mock client from() query resolves with data/error/count', async () => {
    const { createBrowserClient } = await import('@/lib/supabase/client');
    const client = createBrowserClient();
    const result = await (client as any).from('nodes').select();
    expect(result).toMatchObject({ data: [], error: null, count: 0 });
  });

  it('mock client auth.getSession() resolves with null session', async () => {
    const { createBrowserClient } = await import('@/lib/supabase/client');
    const client = createBrowserClient();
    const { data } = await (client as any).auth.getSession();
    expect(data.session).toBeNull();
  });

  it('mock client auth.getUser() resolves with null user', async () => {
    const { createBrowserClient } = await import('@/lib/supabase/client');
    const client = createBrowserClient();
    const { data } = await (client as any).auth.getUser();
    expect(data.user).toBeNull();
  });

  it('mock client auth.signInWithPassword() resolves without error', async () => {
    const { createBrowserClient } = await import('@/lib/supabase/client');
    const client = createBrowserClient();
    const result = await (client as any).auth.signInWithPassword({ email: 'a@b.com', password: 'pw' });
    expect(result.error).toBeNull();
  });

  it('mock client auth.signUp() resolves without error', async () => {
    const { createBrowserClient } = await import('@/lib/supabase/client');
    const client = createBrowserClient();
    const result = await (client as any).auth.signUp({ email: 'a@b.com', password: 'pw' });
    expect(result.error).toBeNull();
  });

  it('mock client auth.signOut() resolves without error', async () => {
    const { createBrowserClient } = await import('@/lib/supabase/client');
    const client = createBrowserClient();
    const result = await (client as any).auth.signOut();
    expect(result.error).toBeNull();
  });

  it('mock client auth.onAuthStateChange() returns an unsubscribe function', async () => {
    const { createBrowserClient } = await import('@/lib/supabase/client');
    const client = createBrowserClient();
    const sub = (client as any).auth.onAuthStateChange(() => {});
    expect(typeof sub.data.subscription.unsubscribe).toBe('function');
    expect(() => sub.data.subscription.unsubscribe()).not.toThrow();
  });

  it('mock client unknown method resolves with { data: null, error: null }', async () => {
    const { createBrowserClient } = await import('@/lib/supabase/client');
    const client = createBrowserClient();
    const result = await (client as any).unknownMethod();
    expect(result).toMatchObject({ data: null, error: null });
  });

  it('getSupabaseBrowserClient() returns a singleton (same reference on repeated calls)', async () => {
    const { getSupabaseBrowserClient } = await import('@/lib/supabase/client');
    const first = getSupabaseBrowserClient();
    const second = getSupabaseBrowserClient();
    expect(first).toBe(second);
  });
});

// ─── server.ts ───────────────────────────────────────────────────────────────

describe('lib/supabase/server — mock mode', () => {
  it('createServerClient() returns an object in mock mode', async () => {
    const { createServerClient } = await import('@/lib/supabase/server');
    const client = await createServerClient();
    expect(client).toBeDefined();
  });

  it('createServiceRoleClient() returns an object in mock mode', async () => {
    const { createServiceRoleClient } = await import('@/lib/supabase/server');
    const client = createServiceRoleClient();
    expect(client).toBeDefined();
  });

  it('createAnonServerClient() returns an object in mock mode', async () => {
    const { createAnonServerClient } = await import('@/lib/supabase/server');
    const client = createAnonServerClient();
    expect(client).toBeDefined();
  });

  it('anon server mock client from() query resolves with expected shape', async () => {
    const { createAnonServerClient } = await import('@/lib/supabase/server');
    const client = createAnonServerClient();
    const result = await (client as any).from('nodes').select();
    expect(result).toMatchObject({ data: [], error: null, count: 0 });
  });

  it('server mock client from() query resolves with expected shape', async () => {
    const { createServerClient } = await import('@/lib/supabase/server');
    const client = await createServerClient();
    const result = await (client as any).from('nodes').select();
    expect(result).toMatchObject({ data: [], error: null, count: 0 });
  });

  it('server mock client auth.getSession() resolves', async () => {
    const { createServerClient } = await import('@/lib/supabase/server');
    const client = await createServerClient();
    const { data } = await (client as any).auth.getSession();
    expect(data.session).toBeNull();
  });

  it('server mock client auth.getUser() resolves', async () => {
    const { createServerClient } = await import('@/lib/supabase/server');
    const client = await createServerClient();
    const { data } = await (client as any).auth.getUser();
    expect(data.user).toBeNull();
  });

  it('service role mock client from() also resolves', async () => {
    const { createServiceRoleClient } = await import('@/lib/supabase/server');
    const client = createServiceRoleClient();
    const result = await (client as any).from('nodes').select();
    expect(result).toMatchObject({ data: [], error: null, count: 0 });
  });

  it('server mock client unknown property returns { data: null, error: null }', async () => {
    // covers server.ts line 30: default proxy handler for properties other than 'from' or 'auth'
    const { createServerClient } = await import('@/lib/supabase/server');
    const client = await createServerClient();
    const result = await (client as any).unknownProp();
    expect(result).toMatchObject({ data: null, error: null });
  });
});

// ─── middleware.ts ───────────────────────────────────────────────────────────

describe('lib/supabase/middleware — mock mode updateSession', () => {
  it('updateSession() returns a response object without throwing', async () => {
    const { updateSession } = await import('@/lib/supabase/middleware');
    const mockRequest = {
      headers: new Headers({ 'x-test': '1' }),
    } as Parameters<typeof updateSession>[0];

    // In mock mode (no SUPABASE_URL env var), updateSession just calls
    // NextResponse.next() and returns immediately without Supabase interaction.
    const response = await updateSession(mockRequest);
    expect(response).toBeDefined();
    expect(typeof response).toBe('object');
  });
});

describe('lib/supabase/middleware — live mode updateSession', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.stubEnv('NEXT_PUBLIC_SUPABASE_URL', 'https://test-project.supabase.co');
    vi.stubEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY', 'test-anon-key');
    mockGetUser.mockReset();
    mockGetUser.mockResolvedValue({ data: { user: null }, error: null });
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('updateSession() builds an SSR client and calls getUser() to refresh the session', async () => {
    // MOCK_MODE = false（URL + anon key 均設）→ 走 live 路徑：
    // createSSRServerClient（已被 vi.mock 攔截）→ await supabase.auth.getUser()
    const { updateSession } = await import('@/lib/supabase/middleware');
    const mockRequest = {
      headers: new Headers({ 'x-test': '1' }),
      cookies: { getAll: () => [] },
    } as unknown as Parameters<typeof updateSession>[0];

    const response = await updateSession(mockRequest);
    expect(response).toBeDefined();
    expect(mockGetUser).toHaveBeenCalledTimes(1);
  });

  it('updateSession() returns the caller-provided response object (cookie binding target)', async () => {
    const { updateSession } = await import('@/lib/supabase/middleware');
    const { NextResponse } = await import('next/server');
    const mockRequest = {
      headers: new Headers(),
      cookies: { getAll: () => [] },
    } as unknown as Parameters<typeof updateSession>[0];
    const provided = NextResponse.next();

    const response = await updateSession(mockRequest, provided);
    // root middleware 依賴這個不變式：回傳的必須是同一個 response 物件
    expect(response).toBe(provided);
  });
});
