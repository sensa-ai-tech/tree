import { createClient } from '@supabase/supabase-js';
import { createServerClient as createSSRServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import type { Database } from './types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const MOCK_MODE = !supabaseUrl || !supabaseAnonKey;

function createMockServerClient() {
  const handler: ProxyHandler<Record<string, unknown>> = {
    get(_target, prop) {
      // 真實 Supabase client 並非 thenable。若不排除 'then'，此 proxy 會被
      // `await`（如 route handler 的 `await createServerClient()`）誤判為
      // thenable 而永遠 pending → hang。回傳 undefined 讓它安全通過 await。
      if (prop === 'then') return undefined;
      if (prop === 'from') {
        return () =>
          new Proxy({} as Record<string, unknown>, {
            get() {
              return (..._args: unknown[]) =>
                Promise.resolve({ data: [], error: null, count: 0 });
            },
          });
      }
      if (prop === 'auth') {
        return {
          getSession: () =>
            Promise.resolve({ data: { session: null }, error: null }),
          getUser: () =>
            Promise.resolve({ data: { user: null }, error: null }),
        };
      }
      return () => Promise.resolve({ data: null, error: null });
    },
  };
  return new Proxy(
    {} as Record<string, unknown>,
    handler
  ) as unknown as ReturnType<typeof createClient<Database>>;
}

/**
 * Route-handler 專用 server client（SUPABASE-AUTH-SPEC §5）。
 * real 模式綁定請求 cookies，讓 auth.getUser() 讀得到使用者 session
 * （/api/account 刪帳號閘門的關鍵）。僅限 route handler / server component
 * 呼叫（依賴 next/headers）。
 */
export async function createServerClient() {
  if (MOCK_MODE) {
    return createMockServerClient();
  }
  // Live SSR path requires a real NEXT_PUBLIC_SUPABASE_URL; mock-mode test env can't exercise it.
  /* istanbul ignore next */
  const cookieStore = await cookies();
  /* istanbul ignore next */
  return createSSRServerClient<Database>(supabaseUrl!, supabaseAnonKey!, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        } catch {
          // Server Component 情境不可寫 cookie；session 刷新由 middleware 的
          // updateSession 負責，這裡吞掉即可（官方建議模式）。
        }
      },
    },
    // retest LOW: production 下 session cookie 帶 Secure 旗標。
    cookieOptions: { secure: process.env.NODE_ENV === 'production' },
  }) as unknown as ReturnType<typeof createClient<Database>>;
}

/**
 * 純匿名 server client（無 cookie 綁定）。供不需使用者 session 的伺服器端
 * DB 存取使用（如 /api/health 連線檢查）。需要使用者 auth 的操作請改用
 * createServerClient（cookie-aware）。
 */
export function createAnonServerClient() {
  if (MOCK_MODE) {
    return createMockServerClient();
  }
  // Live path requires a real NEXT_PUBLIC_SUPABASE_URL; mock-mode test env can't exercise it.
  /* istanbul ignore next */
  return createClient<Database>(supabaseUrl!, supabaseAnonKey!);
}

export function createServiceRoleClient() {
  if (MOCK_MODE || !supabaseServiceKey) {
    return createMockServerClient();
  }
  // Live service-role path requires SUPABASE_SERVICE_ROLE_KEY; mock-mode test env can't exercise it.
  /* istanbul ignore next */
  return createClient<Database>(supabaseUrl!, supabaseServiceKey);
}
