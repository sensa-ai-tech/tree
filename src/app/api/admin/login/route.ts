import { NextResponse } from 'next/server';
import { createAdminToken, validateAdminPassword, setAdminCookie } from '@/lib/admin-auth';

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const { password } = await request.json();

    if (!password || typeof password !== 'string') {
      return NextResponse.json({ error: '請輸入密碼' }, { status: 400 });
    }

    if (!validateAdminPassword(password)) {
      return NextResponse.json({ error: '密碼錯誤' }, { status: 401 });
    }

    const token = await createAdminToken();
    await setAdminCookie(token);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: '登入失敗' }, { status: 500 });
  }
}
