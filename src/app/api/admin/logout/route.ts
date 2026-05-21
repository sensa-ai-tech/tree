import { NextResponse } from 'next/server';
import { clearAdminCookie, getAdminTokenFromCookies, verifyAdminToken } from '@/lib/admin-auth';

export async function POST(): Promise<NextResponse> {
  // SEC-004 fix: verify admin cookie exists and is valid before clearing,
  // preventing unauthenticated CSRF-driven logout
  const token = await getAdminTokenFromCookies();
  if (!token || !(await verifyAdminToken(token))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  await clearAdminCookie();
  return NextResponse.json({ success: true });
}
