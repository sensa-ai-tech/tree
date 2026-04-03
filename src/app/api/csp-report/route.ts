import { NextRequest, NextResponse } from 'next/server';

// ─── In-memory rate limiting for CSP reports ───
// Prevents abuse of the report endpoint (DoS via flood of violation reports)
const reportCounts = new Map<string, { count: number; resetTime: number }>();
const MAX_REPORTS_PER_IP = 10;
const WINDOW_MS = 60_000; // 1 minute
const MAX_TRACKED_IPS = 2_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = reportCounts.get(ip);

  // Periodic cleanup
  if (reportCounts.size > MAX_TRACKED_IPS) {
    for (const [key, val] of reportCounts) {
      if (now > val.resetTime) reportCounts.delete(key);
    }
  }

  if (!entry || now > entry.resetTime) {
    reportCounts.set(ip, { count: 1, resetTime: now + WINDOW_MS });
    return false;
  }

  if (entry.count >= MAX_REPORTS_PER_IP) {
    return true;
  }

  entry.count += 1;
  return false;
}

/**
 * CSP Violation Report Endpoint
 * 接收並記錄 Content-Security-Policy 違規報告。
 * 用於監控 CSP 策略是否過於嚴格或存在繞過風險。
 * Rate limited: 10 reports/min per IP
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'unknown';

  if (isRateLimited(ip)) {
    return new NextResponse(null, { status: 429 });
  }

  try {
    const body = await request.json();
    const report = body['csp-report'] ?? body;

    // 記錄違規（未來應接入 Sentry 或寫入資料庫）
    console.warn('[CSP Violation]', {
      documentUri: report['document-uri'],
      violatedDirective: report['violated-directive'],
      blockedUri: report['blocked-uri'],
      sourceFile: report['source-file'],
      lineNumber: report['line-number'],
    });

    return new NextResponse(null, { status: 204 });
  } catch {
    return NextResponse.json({ error: 'Invalid report' }, { status: 400 });
  }
}
