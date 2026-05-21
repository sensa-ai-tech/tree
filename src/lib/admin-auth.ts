import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { createHash, timingSafeEqual } from 'crypto';

const COOKIE_NAME = 'vkt-admin-token';
const COOKIE_MAX_AGE = 60 * 60 * 2; // 2 hours (was 8)
const JWT_ISSUER = 'vet-knowledge-tree';
const JWT_AUDIENCE = 'vkt-admin';

function getSecret(): Uint8Array {
  const secret = process.env.VKT_JWT_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error('VKT_JWT_SECRET must be at least 32 characters');
  }
  return new TextEncoder().encode(secret);
}

export async function createAdminToken(): Promise<string> {
  return new SignJWT({ role: 'admin' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setIssuer(JWT_ISSUER)
    .setAudience(JWT_AUDIENCE)
    .setExpirationTime(`${COOKIE_MAX_AGE}s`)
    .sign(getSecret());
}

export async function verifyAdminToken(token: string): Promise<boolean> {
  try {
    const { payload } = await jwtVerify(token, getSecret(), {
      issuer: JWT_ISSUER,
      audience: JWT_AUDIENCE,
    });
    return payload.role === 'admin';
  } catch {
    return false;
  }
}

/**
 * 密碼驗證。
 * 支援兩種儲存格式：
 * 1. 「sha256:<hex>」純雜湊（建議生產環境用）
 * 2. 明文（向後相容，會自動以 SHA-256 比對）
 *
 * 兩種模式都用 timing-safe 比對防 timing attack。
 */
export function validateAdminPassword(password: string): boolean {
  const expected = process.env.VKT_ADMIN_PASSWORD;
  if (!expected) return false;

  if (expected.startsWith('sha256:')) {
    const expectedHash = Buffer.from(expected.slice(7), 'hex');
    const actualHash = createHash('sha256').update(password).digest();
    if (expectedHash.length !== actualHash.length) return false;
    return timingSafeEqual(expectedHash, actualHash);
  }

  // SEC-003 fix: plaintext fallback is forbidden in production
  if (process.env.NODE_ENV === 'production') {
    console.error('[admin-auth] FATAL: VKT_ADMIN_PASSWORD must use sha256: prefix in production. Refusing plaintext comparison.');
    return false;
  }
  // Fallback: plaintext compare (legacy — dev only)
  const expectedBuf = Buffer.from(expected);
  const actualBuf = Buffer.from(password);
  if (expectedBuf.length !== actualBuf.length) return false;
  return timingSafeEqual(expectedBuf, actualBuf);
}

export async function setAdminCookie(token: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: COOKIE_MAX_AGE,
  });
}

export async function clearAdminCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function getAdminTokenFromCookies(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(COOKIE_NAME)?.value;
}

export { COOKIE_NAME };
