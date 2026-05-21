import { NextRequest, NextResponse } from 'next/server';
import { createAdminToken, validateAdminPassword, setAdminCookie } from '@/lib/admin-auth';
import { withRateLimit } from '@/lib/api/middleware';
import { reportError } from '@/lib/observability/error-reporter';

async function handler(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    const password = body?.password;

    // SEC-016 fix: enforce max password length to prevent CPU-amplification DoS via huge input
    if (!password || typeof password !== 'string' || password.length > 256) {
      return NextResponse.json({ error: '請輸入密碼' }, { status: 400 });
    }

    // 即便密碼正確也固定回應延遲，降低 timing/throughput-based 偵測
    const start = Date.now();
    const valid = validateAdminPassword(password);
    const elapsed = Date.now() - start;
    if (elapsed < 200) {
      await new Promise((r) => setTimeout(r, 200 - elapsed));
    }

    if (!valid) {
      const ip =
        request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
        request.headers.get('x-real-ip') ??
        'unknown';
      console.warn(`[admin-login] failed attempt from ip=${ip}`);
      return NextResponse.json({ error: '密碼錯誤' }, { status: 401 });
    }

    const token = await createAdminToken();
    await setAdminCookie(token);
    return NextResponse.json({ success: true });
  } catch (err) {
    reportError(err, { scope: 'route:/api/admin/login' });
    return NextResponse.json({ error: '登入失敗' }, { status: 500 });
  }
}

// 嚴格限流：每 IP 每 15 分鐘只能嘗試 5 次
export const POST = withRateLimit(handler, { maxRequests: 5, windowSeconds: 900 });
