import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const MOCK_MODE = !supabaseUrl || !supabaseAnonKey;

function createMockServerClient() {
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

export function createServerClient() {
  if (MOCK_MODE) {
    return createMockServerClient();
  }
  return createClient<Database>(supabaseUrl!, supabaseAnonKey!);
}

export function createServiceRoleClient() {
  if (MOCK_MODE || !supabaseServiceKey) {
    return createMockServerClient();
  }
  return createClient<Database>(supabaseUrl!, supabaseServiceKey);
}
