import { type NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

/**
 * Middleware — Admin auth + CSP nonce + Supabase session
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

export async function middleware(request: NextRequest) {
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
