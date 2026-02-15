import { type NextRequest, NextResponse } from 'next/server';

const MOCK_MODE = !process.env.NEXT_PUBLIC_SUPABASE_URL;

export async function updateSession(request: NextRequest) {
  const response = NextResponse.next({
    request: { headers: request.headers },
  });

  if (MOCK_MODE) {
    return response;
  }

  // When Supabase is configured, handle session refresh here
  // using @supabase/ssr createServerClient with cookie management
  return response;
}
