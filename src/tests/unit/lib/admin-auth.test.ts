// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { createHash } from 'crypto';
import { SignJWT } from 'jose';

// next/headers の cookies() は unit test では server context が無い。
// vi.fn() にしてテストごとに注入できるようにする。
vi.mock('next/headers', () => ({
  cookies: vi.fn(),
}));

const {
  createAdminToken,
  verifyAdminToken,
  validateAdminPassword,
  setAdminCookie,
  clearAdminCookie,
  getAdminTokenFromCookies,
  COOKIE_NAME,
} = await import('@/lib/admin-auth');

// Get the mocked cookies fn so we can control it per-test
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
const { cookies: cookiesMock } = vi.mocked(await import('next/headers'));

describe('admin-auth: JWT signing & verification', () => {
  const originalEnv = { ...process.env };

  beforeEach(() => {
    process.env.VKT_JWT_SECRET = 'this-is-a-test-secret-that-is-at-least-32-chars';
  });

  afterEach(() => {
    process.env = { ...originalEnv };
  });

  it('creates a JWT token successfully', async () => {
    const token = await createAdminToken();
    expect(typeof token).toBe('string');
    // JWT 格式：header.payload.signature
    expect(token.split('.')).toHaveLength(3);
  });

  it('verifies a freshly issued token', async () => {
    const token = await createAdminToken();
    expect(await verifyAdminToken(token)).toBe(true);
  });

  it('rejects garbage tokens', async () => {
    expect(await verifyAdminToken('not.a.jwt')).toBe(false);
    expect(await verifyAdminToken('')).toBe(false);
  });

  it('rejects tokens signed by a different secret', async () => {
    const token = await createAdminToken();
    process.env.VKT_JWT_SECRET = 'a-completely-different-secret-also-32-chars';
    expect(await verifyAdminToken(token)).toBe(false);
  });

  it('throws when VKT_JWT_SECRET is missing', async () => {
    delete process.env.VKT_JWT_SECRET;
    await expect(createAdminToken()).rejects.toThrow(/at least 32 characters/);
  });

  it('throws when VKT_JWT_SECRET is too short', async () => {
    process.env.VKT_JWT_SECRET = 'too-short';
    await expect(createAdminToken()).rejects.toThrow(/at least 32 characters/);
  });

  /**
   * Round 8 mutation testing 補強：
   * 以下 test 專門 kill 「return true」 / 「JWT_ISSUER = ''」這類 survived mutants。
   * 攻擊面：手刻一個非 admin role / wrong issuer / wrong audience 的 token，
   * 期望 verifyAdminToken 回 false。原本只測 createAdminToken→verify 的 round-trip
   * 沒辦法分辨「return true」跟「return role === 'admin'」哪個是真的。
   */
  it('rejects token with role != admin (kills "return true" mutant)', async () => {
    const secret = new TextEncoder().encode(
      'this-is-a-test-secret-that-is-at-least-32-chars'
    );
    // 手刻 role=user token，issuer/audience 正確
    const token = await new SignJWT({ role: 'user' })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuer('vet-knowledge-tree')
      .setAudience('vkt-admin')
      .setExpirationTime('1h')
      .sign(secret);
    expect(await verifyAdminToken(token)).toBe(false);
  });

  it('rejects token with role missing entirely', async () => {
    const secret = new TextEncoder().encode(
      'this-is-a-test-secret-that-is-at-least-32-chars'
    );
    const token = await new SignJWT({})
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuer('vet-knowledge-tree')
      .setAudience('vkt-admin')
      .setExpirationTime('1h')
      .sign(secret);
    expect(await verifyAdminToken(token)).toBe(false);
  });

  it('rejects token with wrong issuer (kills empty-string issuer mutant)', async () => {
    const secret = new TextEncoder().encode(
      'this-is-a-test-secret-that-is-at-least-32-chars'
    );
    const token = await new SignJWT({ role: 'admin' })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuer('different-issuer')
      .setAudience('vkt-admin')
      .setExpirationTime('1h')
      .sign(secret);
    expect(await verifyAdminToken(token)).toBe(false);
  });

  it('rejects token with wrong audience (kills empty-string audience mutant)', async () => {
    const secret = new TextEncoder().encode(
      'this-is-a-test-secret-that-is-at-least-32-chars'
    );
    const token = await new SignJWT({ role: 'admin' })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuer('vet-knowledge-tree')
      .setAudience('different-audience')
      .setExpirationTime('1h')
      .sign(secret);
    expect(await verifyAdminToken(token)).toBe(false);
  });

  it('rejects expired token (kills "no exp check" mutant variants)', async () => {
    const secret = new TextEncoder().encode(
      'this-is-a-test-secret-that-is-at-least-32-chars'
    );
    // 過期 1 小時的 token
    const token = await new SignJWT({ role: 'admin' })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuer('vet-knowledge-tree')
      .setAudience('vkt-admin')
      .setExpirationTime(Math.floor(Date.now() / 1000) - 3600)
      .sign(secret);
    expect(await verifyAdminToken(token)).toBe(false);
  });
});

describe('admin-auth: validateAdminPassword', () => {
  const originalEnv = { ...process.env };

  afterEach(() => {
    process.env = { ...originalEnv };
  });

  it('returns false when VKT_ADMIN_PASSWORD is unset (fail-closed)', () => {
    delete process.env.VKT_ADMIN_PASSWORD;
    expect(validateAdminPassword('anything')).toBe(false);
  });

  it('accepts correct plaintext password', () => {
    process.env.VKT_ADMIN_PASSWORD = 'correct-horse-battery-staple';
    expect(validateAdminPassword('correct-horse-battery-staple')).toBe(true);
  });

  it('rejects wrong plaintext password', () => {
    process.env.VKT_ADMIN_PASSWORD = 'correct-horse-battery-staple';
    expect(validateAdminPassword('wrong-password')).toBe(false);
  });

  it('rejects password of different length (timing-safe early exit)', () => {
    process.env.VKT_ADMIN_PASSWORD = 'abcd';
    expect(validateAdminPassword('xy')).toBe(false);
    expect(validateAdminPassword('abcde')).toBe(false);
  });

  it('accepts correct sha256-hashed password', () => {
    const hex = createHash('sha256').update('hashed-password').digest('hex');
    process.env.VKT_ADMIN_PASSWORD = `sha256:${hex}`;
    expect(validateAdminPassword('hashed-password')).toBe(true);
  });

  it('rejects wrong password against sha256 hash', () => {
    const hex = createHash('sha256').update('hashed-password').digest('hex');
    process.env.VKT_ADMIN_PASSWORD = `sha256:${hex}`;
    expect(validateAdminPassword('not-the-password')).toBe(false);
  });

  it('rejects malformed sha256 hex (wrong length)', () => {
    // 雜湊應為 64 hex chars (32 bytes)，這裡塞短的觸發 length mismatch
    process.env.VKT_ADMIN_PASSWORD = 'sha256:deadbeef';
    expect(validateAdminPassword('anything')).toBe(false);
  });
});

/**
 * Round 10 新增：cookie helper 函式測試
 * setAdminCookie / clearAdminCookie / getAdminTokenFromCookies
 * 使用可注入的 vi.fn() mock 讓每個 test 都能獨立驗證 cookies() 呼叫。
 *
 * 殺死 mutants：
 * - COOKIE_NAME 常數被替換成空字串
 * - httpOnly: true → false
 * - secure: NODE_ENV==='production' → true / false
 * - sameSite: 'lax' → 'strict' / 'none'
 * - maxAge: 7200 → 0
 * - path: '/' → ''
 * - cookieStore.get(COOKIE_NAME)?.value → undefined (optional chain removed)
 */
describe('admin-auth: cookie helpers', () => {
  const originalEnv = { ...process.env };

  // Fresh spies for each test
  let mockGet: ReturnType<typeof vi.fn>;
  let mockSet: ReturnType<typeof vi.fn>;
  let mockDelete: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockGet = vi.fn().mockReturnValue(undefined);
    mockSet = vi.fn();
    mockDelete = vi.fn();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (cookiesMock as ReturnType<typeof vi.fn>).mockResolvedValue({
      get: mockGet,
      set: mockSet,
      delete: mockDelete,
    } as unknown as Awaited<ReturnType<typeof cookiesMock>>);
    process.env.VKT_JWT_SECRET = 'this-is-a-test-secret-that-is-at-least-32-chars';
  });

  afterEach(() => {
    process.env = { ...originalEnv };
    vi.clearAllMocks();
  });

  // ── setAdminCookie ──────────────────────────────────────────────────────────

  it('setAdminCookie calls cookies().set with correct cookie name and token', async () => {
    await setAdminCookie('tok-abc');
    expect(mockSet).toHaveBeenCalledOnce();
    const [name, value] = mockSet.mock.calls[0] as [string, string, unknown];
    expect(name).toBe(COOKIE_NAME);      // kills COOKIE_NAME→'' mutant
    expect(name).toBe('vkt-admin-token'); // double-pin the literal
    expect(value).toBe('tok-abc');
  });

  it('setAdminCookie passes httpOnly:true (kills httpOnly:false mutant)', async () => {
    await setAdminCookie('tok');
    const opts = mockSet.mock.calls[0]?.[2] as Record<string, unknown>;
    expect(opts).toBeDefined();
    expect(opts.httpOnly).toBe(true);
  });

  it('setAdminCookie passes sameSite:"lax" (kills "strict"/"none" mutants)', async () => {
    await setAdminCookie('tok');
    const opts = mockSet.mock.calls[0]?.[2] as Record<string, unknown>;
    expect(opts.sameSite).toBe('lax');
  });

  it('setAdminCookie passes path:"/" (kills empty-path mutant)', async () => {
    await setAdminCookie('tok');
    const opts = mockSet.mock.calls[0]?.[2] as Record<string, unknown>;
    expect(opts.path).toBe('/');
  });

  it('setAdminCookie passes maxAge:7200 (60*60*2) (kills maxAge:0 mutant)', async () => {
    await setAdminCookie('tok');
    const opts = mockSet.mock.calls[0]?.[2] as Record<string, unknown>;
    expect(opts.maxAge).toBe(7200);
  });

  it('setAdminCookie passes secure:false in non-production (vitest uses NODE_ENV=test)', async () => {
    // In Vitest, NODE_ENV='test' — not 'production', so secure should be false.
    // Kills the mutant that replaces === with !== (would give secure:true).
    await setAdminCookie('tok');
    const opts = mockSet.mock.calls[0]?.[2] as Record<string, unknown>;
    expect(opts.secure).toBe(false);
  });

  it('setAdminCookie passes secure:true in production (kills hardcoded-false mutant)', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (process.env as any).NODE_ENV = 'production';
    await setAdminCookie('tok');
    const opts = mockSet.mock.calls[0]?.[2] as Record<string, unknown>;
    expect(opts.secure).toBe(true);
  });

  // ── clearAdminCookie ────────────────────────────────────────────────────────

  it('clearAdminCookie calls cookies().delete with the correct cookie name', async () => {
    await clearAdminCookie();
    expect(mockDelete).toHaveBeenCalledOnce();
    expect(mockDelete).toHaveBeenCalledWith(COOKIE_NAME);      // kills COOKIE_NAME→'' mutant
    expect(mockDelete).toHaveBeenCalledWith('vkt-admin-token'); // double-pin literal
  });

  it('clearAdminCookie does not call set or get', async () => {
    await clearAdminCookie();
    expect(mockSet).not.toHaveBeenCalled();
    expect(mockGet).not.toHaveBeenCalled();
  });

  // ── getAdminTokenFromCookies ────────────────────────────────────────────────

  it('getAdminTokenFromCookies returns the cookie value when present', async () => {
    mockGet.mockReturnValue({ name: COOKIE_NAME, value: 'jwt-token-xyz' });
    const result = await getAdminTokenFromCookies();
    expect(result).toBe('jwt-token-xyz');
    expect(mockGet).toHaveBeenCalledWith(COOKIE_NAME);
  });

  it('getAdminTokenFromCookies returns undefined when cookie is absent', async () => {
    mockGet.mockReturnValue(undefined);
    const result = await getAdminTokenFromCookies();
    expect(result).toBeUndefined();
  });

  it('getAdminTokenFromCookies uses COOKIE_NAME constant not an empty string', async () => {
    // Kills: cookieStore.get('') or cookieStore.get(undefined) mutants
    mockGet.mockReturnValue({ name: COOKIE_NAME, value: 'some-token' });
    await getAdminTokenFromCookies();
    const calledWith = mockGet.mock.calls[0]?.[0] as string;
    expect(calledWith).toBe('vkt-admin-token');
    expect(calledWith.length).toBeGreaterThan(0);
  });

  it('getAdminTokenFromCookies returns undefined when cookie value is an empty string', async () => {
    // Ensures optional chain ?.value is tested — value='' is different from undefined
    mockGet.mockReturnValue({ name: COOKIE_NAME, value: '' });
    const result = await getAdminTokenFromCookies();
    // .value is '', which is falsy but not undefined — the function returns it as-is
    expect(result).toBe('');
  });
});
