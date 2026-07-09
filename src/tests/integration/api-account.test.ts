// @vitest-environment node
import { NextRequest } from 'next/server';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

/**
 * DELETE /api/account — 隱私政策 §六承諾的不可逆刪帳號端點（台灣個資法 §3 / GDPR Art.17）。
 * 這是法遵且不可逆的高風險端點，補齊 CSRF/認證/服務金鑰/逐表刪除/成功各分支。
 *
 * 用 vi.mock 控制 @/lib/supabase/server，讓 getUser 與 service-role client 可注入，
 * 覆蓋真實部署才走得到的 204/500/503（原始碼以 istanbul-ignore 標記）。
 */

const mockGetUser = vi.fn();
const mockFrom = vi.fn();
const mockDeleteUser = vi.fn();

vi.mock('@/lib/supabase/server', () => ({
  createServerClient: vi.fn(async () => ({
    auth: { getUser: mockGetUser },
  })),
  createServiceRoleClient: vi.fn(() => ({
    from: mockFrom,
    auth: { admin: { deleteUser: mockDeleteUser } },
  })),
}));

import { DELETE } from '@/app/api/account/route';

const APP_URL = 'http://localhost:3001';

function delReq(headers: Record<string, string>): NextRequest {
  return new NextRequest(new URL('http://localhost:3001/api/account'), {
    method: 'DELETE',
    headers,
  });
}

/** 通過 CSRF 的同源 header（Sec-Fetch-Site: same-origin 走 fast-path）。 */
const SAME_ORIGIN = { 'sec-fetch-site': 'same-origin' };

const savedEnv = { ...process.env };

beforeEach(() => {
  vi.clearAllMocks();
  // 預設：service-role client 逐表刪除成功、auth.deleteUser 成功
  mockFrom.mockReturnValue({
    delete: () => ({ eq: () => Promise.resolve({ error: null }) }),
  });
  mockDeleteUser.mockResolvedValue({ error: null });
  process.env.NEXT_PUBLIC_APP_URL = APP_URL;
});

afterEach(() => {
  process.env = { ...savedEnv };
});

describe('DELETE /api/account — CSRF gate', () => {
  it('rejects cross-site request with 403', async () => {
    const res = await DELETE(delReq({ 'sec-fetch-site': 'cross-site' }));
    expect(res.status).toBe(403);
    // getUser 不該被呼叫（CSRF 早退）
    expect(mockGetUser).not.toHaveBeenCalled();
  });

  it('rejects Origin-mismatch request with 403', async () => {
    const res = await DELETE(delReq({ origin: 'https://evil.example.com' }));
    expect(res.status).toBe(403);
    expect(mockGetUser).not.toHaveBeenCalled();
  });
});

describe('DELETE /api/account — auth gate', () => {
  it('returns 401 when no authenticated user', async () => {
    mockGetUser.mockResolvedValue({ data: { user: null }, error: null });
    const res = await DELETE(delReq(SAME_ORIGIN));
    expect(res.status).toBe(401);
  });
});

describe('DELETE /api/account — service-role guard', () => {
  it('returns 503 when a real deployment lacks SUPABASE_SERVICE_ROLE_KEY', async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://x.supabase.co';
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'anon';
    delete process.env.SUPABASE_SERVICE_ROLE_KEY;
    mockGetUser.mockResolvedValue({ data: { user: { id: 'u1' } }, error: null });

    const res = await DELETE(delReq(SAME_ORIGIN));
    expect(res.status).toBe(503);
    // 不應進到真正刪除
    expect(mockFrom).not.toHaveBeenCalled();
  });
});

describe('DELETE /api/account — deletion', () => {
  it('returns 204 and clears owned tables + auth user on success', async () => {
    mockGetUser.mockResolvedValue({ data: { user: { id: 'u1' } }, error: null });

    const res = await DELETE(delReq(SAME_ORIGIN));
    expect(res.status).toBe(204);
    // 逐表刪除都被觸發
    expect(mockFrom).toHaveBeenCalledWith('learning_progress');
    expect(mockFrom).toHaveBeenCalledWith('review_history');
    expect(mockFrom).toHaveBeenCalledWith('achievements');
    expect(mockFrom).toHaveBeenCalledWith('user_xp');
    expect(mockFrom).toHaveBeenCalledWith('case_attempts');
    expect(mockFrom).toHaveBeenCalledWith('question_attempts');
    // 最後刪除 auth user
    expect(mockDeleteUser).toHaveBeenCalledWith('u1');
  });

  it('returns 500 and does not delete auth user when a table delete fails', async () => {
    mockGetUser.mockResolvedValue({ data: { user: { id: 'u1' } }, error: null });
    mockFrom.mockReturnValue({
      delete: () => ({ eq: () => Promise.resolve({ error: { message: 'permission denied' } }) }),
    });

    const res = await DELETE(delReq(SAME_ORIGIN));
    expect(res.status).toBe(500);
    // 表刪除失敗即中止，不得刪 auth user
    expect(mockDeleteUser).not.toHaveBeenCalled();
    // 對外訊息泛化、不洩內部
    const body = await res.json();
    expect(body.error).not.toContain('permission denied');
  });
});
