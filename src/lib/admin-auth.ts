import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { createHash, timingSafeEqual } from 'crypto';

const COOKIE_NAME = 'vkt-admin-token';
const COOKIE_MAX_AGE = 60 * 60 * 2; // 2 hours (was 8)
const JWT_ISSUER = 'vet-knowledge-tree';
const JWT_AUDIENCE = 'vkt-admin';

// SEC-R3-002 startup warning (iter 5): when both env vars set, USERS wins —
// surface this once so operators mid-migration don't discover the precedence
// rule via mysterious failed logins. Module-load level (runs once per server).
if (typeof process !== 'undefined' && process.env.VKT_ADMIN_USERS && process.env.VKT_ADMIN_PASSWORD) {
  // eslint-disable-next-line no-console
  console.warn(
    '[admin-auth] Both VKT_ADMIN_USERS and VKT_ADMIN_PASSWORD are set. ' +
    'VKT_ADMIN_USERS takes precedence; VKT_ADMIN_PASSWORD will be IGNORED. ' +
    'Remove VKT_ADMIN_PASSWORD to silence this warning once migration completes.'
  );
}

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
 * SEC-R3-002 multi-admin parser.
 * 解析 VKT_ADMIN_USERS=alice:sha256:hex,bob:sha256:hex 為 entries 陣列。
 * 純函式 (testable)；不讀 env。跳過格式錯誤（缺 id、缺 sha256: 前綴、hex 長度錯）的條目。
 */
export function parseAdminUsers(raw: string | undefined): Array<{ id: string; hash: Buffer }> {
  if (!raw) return [];
  const entries: Array<{ id: string; hash: Buffer }> = [];
  for (const rawEntry of raw.split(',')) {
    const entry = rawEntry.trim();
    if (!entry) continue;
    const firstColon = entry.indexOf(':');
    if (firstColon <= 0) continue;
    const id = entry.slice(0, firstColon).trim();
    const rest = entry.slice(firstColon + 1).trim();
    if (!id) continue;
    if (!rest.startsWith('sha256:')) continue;
    const hex = rest.slice('sha256:'.length).trim();
    if (!/^[0-9a-fA-F]{64}$/.test(hex)) continue;
    entries.push({ id, hash: Buffer.from(hex, 'hex') });
  }
  return entries;
}

/**
 * SEC-R3-002 多管理員密碼驗證 + 身份識別。
 * - 優先讀 VKT_ADMIN_USERS（多管理員模式）；走訪「所有」entries 比對，避免 short-circuit timing leak。
 * - 若 VKT_ADMIN_USERS 未設，向後相容讀 VKT_ADMIN_PASSWORD（單管理員模式），match 時回 'admin'。
 * 回傳：匹配的 admin id（字串）；無匹配回 null。
 */
export function validateAdminPasswordWithId(password: string): string | null {
  const actualHash = createHash('sha256').update(password).digest();

  // 多管理員模式
  const usersRaw = process.env.VKT_ADMIN_USERS;
  if (usersRaw) {
    const entries = parseAdminUsers(usersRaw);
    let matchedId: string | null = null;
    // 「無 short-circuit」走訪：即使第 1 筆 match 也繼續跑完，避免 timing 洩漏 index
    for (const entry of entries) {
      const equalLen = entry.hash.length === actualHash.length;
      const match = equalLen && timingSafeEqual(entry.hash, actualHash);
      if (match && matchedId === null) {
        matchedId = entry.id;
      }
    }
    return matchedId;
  }

  // 向後相容：單管理員模式 (VKT_ADMIN_PASSWORD)
  // `.trim()` 正規化「設定值」（非使用者輸入），避免環境變數尾端混入換行/空白導致比對失敗。
  // 實測 footgun：`vercel env pull` 產生的 .env.local 可能把值寫成 "secret\n"（dotenv 會展開成真換行），
  // 於是真人在 /admin/login 輸入正確密碼仍因長度/內容不符而被拒，等於整個後台無法登入。
  // 多管理員路徑（VKT_ADMIN_USERS）本來就逐項 trim，這裡對單密碼路徑做相同正規化以求一致。
  const expected = process.env.VKT_ADMIN_PASSWORD?.trim();
  if (!expected) return null;

  if (expected.startsWith('sha256:')) {
    const expectedHash = Buffer.from(expected.slice(7), 'hex');
    if (expectedHash.length !== actualHash.length) return null;
    return timingSafeEqual(expectedHash, actualHash) ? 'admin' : null;
  }

  // SEC-003: plaintext fallback forbidden in production
  if (process.env.NODE_ENV === 'production') {
    console.error('[admin-auth] FATAL: VKT_ADMIN_PASSWORD must use sha256: prefix in production. Refusing plaintext comparison.');
    return null;
  }
  // Plaintext compare (dev only)
  const expectedBuf = Buffer.from(expected);
  const actualBuf = Buffer.from(password);
  if (expectedBuf.length !== actualBuf.length) return null;
  return timingSafeEqual(expectedBuf, actualBuf) ? 'admin' : null;
}

/**
 * 密碼驗證（boolean wrapper，向後相容）。
 * 新程式請改用 validateAdminPasswordWithId 取得 audit identity。
 */
export function validateAdminPassword(password: string): boolean {
  return validateAdminPasswordWithId(password) !== null;
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
