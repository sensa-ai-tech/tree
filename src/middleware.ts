import { type NextRequest, NextResponse } from 'next/server';

/**
 * Middleware — CSP nonce + Supabase session
 *
 * 安全策略：
 * - script-src: nonce-based + strict-dynamic（移除 unsafe-inline）
 * - unsafe-eval: Mermaid 圖表引擎需要（已用 securityLevel:'strict' + DOMPurify 緩解）
 * - style-src: 保留 unsafe-inline（Next.js / Tailwind 內聯樣式需要）
 * - report-uri: CSP 違規自動報告至 /api/csp-report
 */

const MOCK_MODE = !process.env.NEXT_PUBLIC_SUPABASE_URL;

export async function middleware(request: NextRequest) {
  // 1. Generate per-request nonce
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

  // 2. Forward nonce to downstream via x-nonce header
  //    Next.js 14+ automatically reads x-nonce and adds it to its inline scripts
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  // 3. Supabase session refresh (future: add cookie management here)
  if (!MOCK_MODE) {
    // When Supabase is configured, handle session refresh here
    // using @supabase/ssr createServerClient with cookie management
  }

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
  ].join('; ');

  response.headers.set('Content-Security-Policy', csp);

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
};
