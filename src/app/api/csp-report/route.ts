import { NextResponse } from 'next/server';

/**
 * CSP Violation Report Endpoint
 * 接收並記錄 Content-Security-Policy 違規報告。
 * 用於監控 CSP 策略是否過於嚴格或存在繞過風險。
 */
export async function POST(request: Request): Promise<NextResponse> {
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
