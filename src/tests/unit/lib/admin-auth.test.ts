// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { createHash } from 'crypto';
import { SignJWT } from 'jose';

// next/headers 的 cookies() 在 unit test 沒 server context。
// 只測純函式（createAdminToken / verifyAdminToken / validateAdminPassword）。
// 用 mock 取代 next/headers 的部分讓 import 不爆炸。
vi.mock('next/headers', () => ({
  cookies: async () => ({
    get: vi.fn(),
    set: vi.fn(),
    delete: vi.fn(),
  }),
}));

const { createAdminToken, verifyAdminToken, validateAdminPassword } =
  await import('@/lib/admin-auth');

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
