import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isMockMode = !supabaseUrl || !supabaseAnonKey;

function createMockClient() {
  const handler: ProxyHandler<Record<string, unknown>> = {
    get(_target, prop) {
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
  return createClient<Database>(supabaseUrl!, supabaseAnonKey!);
}

let browserClient: ReturnType<typeof createBrowserClient> | null = null;

export function getSupabaseBrowserClient() {
  if (!browserClient) {
    browserClient = createBrowserClient();
  }
  return browserClient;
}
