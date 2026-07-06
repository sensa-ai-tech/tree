import { type NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { updateSession } from '@/lib/supabase/middleware';

/**
 * Proxy — Admin auth + CSP nonce + Supabase session
 *
 * (Next 16：原 `middleware` 慣例已棄用，改用 `proxy` 檔名 + `proxy` 函式；
 *  config/matcher、簽名、行為不變。見 nextjs.org/docs/messages/middleware-to-proxy)
 *
 * 安全策略：
 * - /admin/* 路由需要有效的 JWT cookie（/admin/login 除外）
 * - script-src: nonce-based + strict-dynamic（移除 unsafe-inline）
 * - unsafe-eval: Mermaid 圖表引擎需要（已用 securityLevel:'strict' + DOMPurify 緩解）
 * - style-src: 保留 unsafe-inline（Next.js / Tailwind 內聯樣式需要）
 * - report-uri: CSP 違規自動報告至 /api/csp-report
 */

const ADMIN_COOKIE_NAME = 'vkt-admin-token';
const JWT_ISSUER = 'vet-knowledge-tree';
const JWT_AUDIENCE = 'vkt-admin';

async function verifyAdminCookie(token: string): Promise<boolean> {
  const secret = process.env.VKT_JWT_SECRET;
  if (!secret || secret.length < 32) return false;
  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(secret),
      { issuer: JWT_ISSUER, audience: JWT_AUDIENCE }
    );
    return payload.role === 'admin';
  } catch {
    return false;
  }
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // --- Admin route protection ---
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    const token = request.cookies.get(ADMIN_COOKIE_NAME)?.value;
    if (!token || !(await verifyAdminCookie(token))) {
      const loginUrl = new URL('/admin/login', request.url);
      loginUrl.searchParams.set('from', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // 1. Generate per-request nonce
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

  // 2. Forward nonce to downstream via x-nonce header
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  // P0-1: Supabase session 刷新（SUPABASE-AUTH-SPEC §5）。
  // 把本 proxy 的 response 傳入，刷新後的 session cookie 直接綁在同一個
  // response 上（避免雙 response 合併掉 header）。mock 模式為 no-op。
  await updateSession(request, response);

  // SEC-R2-002: report-uri is deprecated; Chrome M96+ prefers Reporting API.
  // Advertise both Report-To (legacy Reporting API) and Reporting-Endpoints (current spec)
  // headers so violation reports keep flowing across the full UA matrix.
  // CSP also keeps both report-uri (Firefox/older Chrome) and report-to (Chrome 96+).
  const reportToGroup = JSON.stringify({
    group: 'csp-endpoint',
    max_age: 10886400,
    endpoints: [{ url: '/api/csp-report' }],
    include_subdomains: true,
  });
  response.headers.set('Report-To', reportToGroup);
  response.headers.set('Reporting-Endpoints', 'csp-endpoint="/api/csp-report"');

  // ENG-R3-002: Cross-origin isolation (COOP + COEP + CORP).
  // - COOP: same-origin — sandboxes top-level browsing context so cross-origin popups
  //   can't reference our window.opener (Spectre + cross-window scripting defense).
  // - COEP: credentialless — modern relaxed mode that strips cookies/auth from cross-origin
  //   subresource requests. Picked over require-corp because Cloudinary images and Google
  //   Fonts (in CSP img-src/font-src) don't reliably send CORP; require-corp would break them.
  //   Supported: Chrome 96+, Firefox 110+, Safari 16.4+.
  // - CORP: same-origin — declares OUR responses as same-origin-only subresources.
  // Combined: enables self.crossOriginIsolated === true, unlocking SharedArrayBuffer
  // + high-resolution performance.now().
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  response.headers.set('Cross-Origin-Embedder-Policy', 'credentialless');
  response.headers.set('Cross-Origin-Resource-Policy', 'same-origin');

  // 4. Set CSP with nonce
  const csp = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-eval'`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https://res.cloudinary.com",
    "font-src 'self' https://fonts.gstatic.com",
    "connect-src 'self' https://*.supabase.co",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "report-uri /api/csp-report",
    "report-to csp-endpoint",
  ].join('; ');

  response.headers.set('Content-Security-Policy', csp);

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
};
