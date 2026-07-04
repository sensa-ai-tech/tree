'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { Session } from '@supabase/supabase-js';
import { getSupabaseBrowserClient } from '@/lib/supabase/client';

interface User {
  id: string;
  email: string;
  role: 'user' | 'admin';
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  _hasHydrated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  setUser: (user: User | null) => void;
  clearError: () => void;
  setHasHydrated: (state: boolean) => void;
}

/**
 * 真實 Auth 模式判定（SUPABASE-AUTH-SPEC §7 Phase 1 雙模式）。
 * 每次呼叫時評估（非模組載入時定死）——與測試在 runtime 變更 env 的行為相容，
 * 也與 client.ts 的 isMockMode 準則一致（URL + anon key 均存在才算 real）。
 */
function isRealAuthMode(): boolean {
  return (
    !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
    !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}

/**
 * role 權威來源 = Supabase JWT 的 app_metadata.role
 * （由 custom_access_token_hook 寫入，見 SUPABASE-AUTH-SPEC §2.1）。
 * 前端只做映射、不決定 role：非 'admin' 一律降為 'user'。
 */
function sessionToUser(session: Session | null): User | null {
  /* istanbul ignore next -- requires live Supabase session */
  if (!session?.user) return null;
  /* istanbul ignore next */
  const claimedRole =
    (session.user.app_metadata?.role as string | undefined) ?? 'student';
  /* istanbul ignore next */
  return {
    id: session.user.id,
    email: session.user.email ?? '',
    role: claimedRole === 'admin' ? 'admin' : 'user',
  };
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isLoading: false,
      error: null,
      _hasHydrated: false,

      login: async (email: string, password: string) => {
        set({ isLoading: true, error: null });

        // ── Real 模式：Supabase Auth 驗證密碼，role 來自 JWT claim ──
        /* istanbul ignore next -- requires live Supabase (mock-mode CI can't exercise) */
        if (isRealAuthMode()) {
          const supabase = getSupabaseBrowserClient();
          const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
          });
          if (error) {
            // 不外洩上游錯誤細節；常見情境映射為友善訊息
            const message =
              error.message === 'Invalid login credentials'
                ? '帳號或密碼錯誤'
                : error.message === 'Email not confirmed'
                  ? '請先完成 Email 驗證'
                  : '登入失敗，請稍後再試';
            set({ error: message, isLoading: false });
            return;
          }
          set({ user: sessionToUser(data.session), isLoading: false });
          return;
        }

        // ── Mock 模式（無 Supabase env）：demo 登入，不驗證密碼 ──
        try {
          // ⚠️ mock 登入僅供本機 demo。攻擊面限制：
          // 1. admin role 只能在沒有 Supabase URL（純 demo）時才能拿到
          // 2. 有 Supabase URL 時統一回 user role，admin 操作交給後端 /api/admin/*
          //    用 JWT cookie 驗證（middleware + admin-auth.ts）
          const hasSupabase =
            typeof window !== 'undefined' &&
            !!process.env.NEXT_PUBLIC_SUPABASE_URL;

          const isAdminEmail = email === 'admin@vetknowledgetree.com';
          const role: User['role'] = !hasSupabase && isAdminEmail ? 'admin' : 'user';

          const mockUser: User = {
            id: `mock-${Date.now()}`,
            email,
            role,
          };
          set({ user: mockUser, isLoading: false });
        } catch (err) {
          /* istanbul ignore next — mock try body is synchronous + cannot throw */
          const message = err instanceof Error ? err.message : '登入失敗';
          /* istanbul ignore next */
          set({ error: message, isLoading: false });
        }
      },

      register: async (email: string, password: string) => {
        set({ isLoading: true, error: null });

        // ── Real 模式：Supabase signUp；user_profiles 由 handle_new_user trigger 建立 ──
        /* istanbul ignore next -- requires live Supabase (mock-mode CI can't exercise) */
        if (isRealAuthMode()) {
          const supabase = getSupabaseBrowserClient();
          const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: { data: { display_name: email.split('@')[0] } },
          });
          if (error) {
            const message = error.message.includes('already registered')
              ? '此 Email 已註冊，請直接登入'
              : '註冊失敗，請稍後再試';
            set({ error: message, isLoading: false });
            return;
          }
          // retest HIGH: Email 確認開啟時 signUp 回 user 但 session 為 null。
          // 這不是登入成功——若照常導向 /home 會被 dashboard layout 踢回 /login
          // 形成「假成功→靜默彈回」死路。改為明確提示去收信、且不設 user。
          if (data.user && !data.session) {
            set({
              error: '註冊成功，驗證信已寄出——請至信箱點擊連結完成驗證後再登入',
              isLoading: false,
            });
            return;
          }
          set({ user: sessionToUser(data.session), isLoading: false });
          return;
        }

        // ── Mock 模式 ──
        try {
          const mockUser: User = { id: `mock-${Date.now()}`, email, role: 'user' };
          set({ user: mockUser, isLoading: false });
        } catch (err) {
          /* istanbul ignore next — mock try body is synchronous + cannot throw */
          const message = err instanceof Error ? err.message : '註冊失敗';
          /* istanbul ignore next */
          set({ error: message, isLoading: false });
        }
      },

      logout: async () => {
        /* istanbul ignore next -- requires live Supabase (mock-mode CI can't exercise) */
        if (isRealAuthMode()) {
          await getSupabaseBrowserClient().auth.signOut();
        }
        set({ user: null, isLoading: false, error: null });
      },

      setUser: (user) => set({ user }),
      clearError: () => set({ error: null }),
      setHasHydrated: (state) => set({ _hasHydrated: state }),
    }),
    {
      name: 'vet-auth-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ user: state.user }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);

// ── Real 模式：訂閱 session 生命週期（SUPABASE-AUTH-SPEC §3）──
// INITIAL_SESSION 啟動時恢復 session、TOKEN_REFRESHED 靜默續期、
// SIGNED_OUT 跨 tab 同步登出。mock 模式（含測試環境）不訂閱。
/* istanbul ignore next -- requires live Supabase (mock-mode CI can't exercise) */
if (typeof window !== 'undefined' && isRealAuthMode()) {
  getSupabaseBrowserClient().auth.onAuthStateChange((_event, session) => {
    useAuthStore.setState({ user: sessionToUser(session) });
  });
}
