'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

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

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isLoading: false,
      error: null,
      _hasHydrated: false,

      login: async (email: string, _password: string) => {
        set({ isLoading: true, error: null });
        try {
          // ⚠️ 這個 store 目前是 demo 用 mock 登入：不驗證密碼。
          // 生產環境必須串 supabase.auth.signInWithPassword，並由 Supabase JWT
          // custom claims + RLS 控制 role，前端不能自己決定 admin。
          //
          // 為了縮小目前 mock 的攻擊面：
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

      register: async (email: string, _password: string) => {
        set({ isLoading: true, error: null });
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
