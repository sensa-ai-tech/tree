import { type NextRequest, NextResponse } from 'next/server';
import { createServerClient as createSSRServerClient } from '@supabase/ssr';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// 與 client.ts / server.ts 一致：URL 或 anon key 任一缺 → mock（no-op）。
const MOCK_MODE = !supabaseUrl || !supabaseAnonKey;

/**
 * Supabase session 刷新（SUPABASE-AUTH-SPEC §5）。
 *
 * - 以 request cookies 建立 SSR client，`getUser()` 觸發 access-token refresh，
 *   更新後的 session cookie 由 setAll 寫回 response。
 * - root middleware 傳入自己的 response（帶 nonce/CSP headers），cookie 直接
 *   綁在同一個 response 上，避免雙 response 合併漏 header 的經典坑。
 * - mock 模式：原樣返回（本機/測試無 Supabase 時零副作用）。
 */
export async function updateSession(
  request: NextRequest,
  response?: NextResponse
) {
  const res =
    response ??
    NextResponse.next({
      request: { headers: request.headers },
    });

  if (MOCK_MODE) {
    return res;
  }

  const supabase = createSSRServerClient(supabaseUrl!, supabaseAnonKey!, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          res.cookies.set(name, value, options);
        });
      },
    },
    // retest LOW: 明確要求 production 下 session cookie 帶 Secure 旗標。
    cookieOptions: { secure: process.env.NODE_ENV === 'production' },
  });

  // 必須 await：getUser() 才會刷新 token 並把新 cookie 寫回 response（規格 §8）。
  await supabase.auth.getUser();

  return res;
}
