import { NextResponse } from 'next/server';
import { clearAdminCookie } from '@/lib/admin-auth';

export async function POST(): Promise<NextResponse> {
  await clearAdminCookie();
  return NextResponse.json({ success: true });
}
