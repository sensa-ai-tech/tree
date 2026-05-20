import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { useAuthStore } from '@/stores/auth-store';

/**
 * auth-store 目前是 demo mock：不驗證密碼，但「絕對不能讓前端自己決定 admin role」
 * 是安全核心，這組 test 守住該行為。
 */

function getState() {
  return useAuthStore.getState();
}

function resetStore() {
  useAuthStore.setState({
    user: null,
    isLoading: false,
    error: null,
    _hasHydrated: false,
  });
  localStorage.clear();
}

describe('auth-store: login', () => {
  beforeEach(resetStore);
  afterEach(resetStore);

  it('starts with no user', () => {
    expect(getState().user).toBeNull();
    expect(getState().error).toBeNull();
  });

  it('sets user with role=user for non-admin emails', async () => {
    await getState().login('user@example.com', 'pwd');
    const user = getState().user;
    expect(user).not.toBeNull();
    expect(user?.email).toBe('user@example.com');
    expect(user?.role).toBe('user');
  });

  it('grants admin role to admin email only when no Supabase URL is set', async () => {
    // process.env.NEXT_PUBLIC_SUPABASE_URL must be undefined at module load,
    // 在 test env (`.env.test` 或無 env) 應該沒設。確認一下：
    expect(process.env.NEXT_PUBLIC_SUPABASE_URL).toBeFalsy();

    await getState().login('admin@vetknowledgetree.com', 'anything');
    const user = getState().user;
    expect(user?.role).toBe('admin');
  });

  it('demotes admin email to user when Supabase URL exists (production guard)', async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://x.supabase.co';
    try {
      await getState().login('admin@vetknowledgetree.com', 'anything');
      const user = getState().user;
      // 即使 email 對，也不能拿到 admin — 安全核心
      expect(user?.role).toBe('user');
    } finally {
      delete process.env.NEXT_PUBLIC_SUPABASE_URL;
    }
  });

  it('persists user via zustand persist middleware', async () => {
    await getState().login('foo@bar.com', 'pwd');
    const stored = localStorage.getItem('vet-auth-storage');
    expect(stored).toBeTruthy();
    const parsed = JSON.parse(stored!);
    expect(parsed.state.user.email).toBe('foo@bar.com');
  });

  it('produces a fresh mock id each login', async () => {
    await getState().login('a@a.com', 'p');
    const id1 = getState().user?.id;
    resetStore();
    await new Promise((r) => setTimeout(r, 2)); // 確保 Date.now 不同
    await getState().login('a@a.com', 'p');
    const id2 = getState().user?.id;
    expect(id1).not.toBe(id2);
  });
});

describe('auth-store: register', () => {
  beforeEach(resetStore);
  afterEach(resetStore);

  it('always assigns role=user regardless of email', async () => {
    await getState().register('admin@vetknowledgetree.com', 'pwd');
    expect(getState().user?.role).toBe('user');
  });

  it('sets isLoading transient state then user', async () => {
    const promise = getState().register('new@user.com', 'pwd');
    await promise;
    expect(getState().isLoading).toBe(false);
    expect(getState().user?.email).toBe('new@user.com');
  });
});

describe('auth-store: logout', () => {
  beforeEach(resetStore);
  afterEach(resetStore);

  it('clears user and error', async () => {
    await getState().login('foo@bar.com', 'pwd');
    useAuthStore.setState({ error: 'leftover' });
    await getState().logout();
    expect(getState().user).toBeNull();
    expect(getState().error).toBeNull();
  });
});

describe('auth-store: helpers', () => {
  beforeEach(resetStore);
  afterEach(resetStore);

  it('setUser updates user directly', () => {
    getState().setUser({ id: 'x', email: 'x@y.com', role: 'user' });
    expect(getState().user?.id).toBe('x');
  });

  it('clearError resets error to null', () => {
    useAuthStore.setState({ error: 'oops' });
    getState().clearError();
    expect(getState().error).toBeNull();
  });

  it('setHasHydrated flips the hydration flag', () => {
    expect(getState()._hasHydrated).toBe(false);
    getState().setHasHydrated(true);
    expect(getState()._hasHydrated).toBe(true);
  });
});
