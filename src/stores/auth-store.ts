'use client';

import { create } from 'zustand';

interface User {
  id: string;
  email: string;
  role: 'user' | 'admin';
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  setUser: (user: User | null) => void;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  error: null,

  login: async (email: string, _password: string) => {
    set({ isLoading: true, error: null });
    try {
      // Mock mode: simulate login
      const mockUser: User = {
        id: 'mock-user-id',
        email,
        role: email.includes('admin') ? 'admin' : 'user',
      };
      set({ user: mockUser, isLoading: false });
    } catch (err) {
      const message = err instanceof Error ? err.message : '登入失敗';
      set({ error: message, isLoading: false });
    }
  },

  register: async (email: string, _password: string) => {
    set({ isLoading: true, error: null });
    try {
      const mockUser: User = { id: 'mock-new-user', email, role: 'user' };
      set({ user: mockUser, isLoading: false });
    } catch (err) {
      const message = err instanceof Error ? err.message : '註冊失敗';
      set({ error: message, isLoading: false });
    }
  },

  logout: async () => {
    set({ user: null, isLoading: false, error: null });
  },

  setUser: (user) => set({ user }),
  clearError: () => set({ error: null }),
}));
