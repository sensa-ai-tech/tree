import { createClient } from '@supabase/supabase-js';
import { createBrowserClient as createSSRBrowserClient } from '@supabase/ssr';
import type { Database } from './types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isMockMode = !supabaseUrl || !supabaseAnonKey;

function createMockClient() {
  const handler: ProxyHandler<Record<string, unknown>> = {
    get(_target, prop) {
      // 真實 Supabase client 並非 thenable；排除 'then' 避免未來被 await 誤判 hang。
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
          signInWithPassword: () =>
            Promise.resolve({ data: { user: null, session: null }, error: null }),
          signUp: () =>
            Promise.resolve({ data: { user: null, session: null }, error: null }),
          signOut: () => Promise.resolve({ error: null }),
          onAuthStateChange: () => ({
            data: { subscription: { unsubscribe: () => {} } },
          }),
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

export function createBrowserClient() {
  if (isMockMode) {
    return createMockClient();
  }
  // Live SSR path requires a real NEXT_PUBLIC_SUPABASE_URL; mock-mode test env can't exercise it.
  // @supabase/ssr 的 browser client 把 session 存在 cookie（非 localStorage），
  // 伺服器端（middleware / route handler）才讀得到 session（SUPABASE-AUTH-SPEC §5）。
  /* istanbul ignore next */
  return createSSRBrowserClient<Database>(supabaseUrl!, supabaseAnonKey!, {
    // retest LOW: production 下 session cookie 帶 Secure 旗標。
    cookieOptions: { secure: process.env.NODE_ENV === 'production' },
  });
}

let browserClient: ReturnType<typeof createBrowserClient> | null = null;

export function getSupabaseBrowserClient() {
  if (!browserClient) {
    browserClient = createBrowserClient();
  }
  return browserClient;
}
