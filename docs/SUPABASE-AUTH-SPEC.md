# Supabase Auth Integration Spec

> 從 mock auth-store 過渡到真實 Supabase Auth 的詳細規格。
> 在執行此規格前，**不要**改 `src/stores/auth-store.ts` 的 mock 流程，
> 那是目前唯一不依賴 Supabase 帳號就能跑起來的入口。

最後更新：2026-05-18 — Round 3 收尾規劃

---

## 1. 為什麼要做這件事

目前狀態（mock）：

```ts
// auth-store.ts
login: async (email, _password) => {
  const isAdminEmail = email === 'admin@vetknowledgetree.com';
  const role = !hasSupabase && isAdminEmail ? 'admin' : 'user';
  set({ user: { id: `mock-${Date.now()}`, email, role } });
}
```

問題：

- **不驗證密碼**：任何字串都可登入，本地測試方便但絕對不能上線
- **role 由前端決定**：客戶端可篡改 `localStorage` 把 role 改成 admin
- **沒有 session lifecycle**：refresh token、過期、跨頁同步全缺
- **與 `/api/admin/*` JWT cookie 重疊**：admin 操作走 cookie，user 走 zustand，
  兩套 source of truth 容易飄移

目標：用 Supabase Auth 統一做使用者驗證、由 RLS 控制存取、用 JWT custom
claim 標 admin role。

---

## 2. 角色模型

| Role | 來源 | 用途 |
|------|------|------|
| `anon` | 未登入請求自動取得 | 只能讀 `published` 知識節點、`is_published` 路徑 |
| `student` | `user_profiles.role` default | 一般使用者，能寫自己的 progress/experience/spaced_rep |
| `reviewer` | 由 admin 升級 | 可審稿（讀 `review` 狀態的節點），不可改 schema |
| `admin` | 由 admin 升級（首批由 SQL 手動建立） | 全表 CRUD + `/admin/*` 路由 |

### 2.1 怎麼從 `user_profiles.role` 變成 JWT claim

問題：RLS policy 寫 `auth.uid() = user_id` 沒問題，但 `role = 'admin'` 要去
sub-query `user_profiles` 才能拿到，每個 policy 都 join 一次效能不好。

解法：用 [Supabase Auth Hooks](https://supabase.com/docs/guides/auth/auth-hooks)
的 `custom_access_token_hook`，在簽 JWT 時把 role 寫進 `app_metadata`：

```sql
-- auth/hooks.sql
CREATE OR REPLACE FUNCTION public.custom_access_token_hook(event jsonb)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  user_role text;
  claims jsonb;
BEGIN
  SELECT role INTO user_role
  FROM public.user_profiles
  WHERE id = (event->>'user_id')::uuid;

  claims := event->'claims';

  IF user_role IS NOT NULL THEN
    claims := jsonb_set(claims, '{app_metadata,role}', to_jsonb(user_role));
  ELSE
    claims := jsonb_set(claims, '{app_metadata,role}', to_jsonb('student'::text));
  END IF;

  RETURN jsonb_set(event, '{claims}', claims);
END;
$$;

-- 授權給 supabase_auth_admin
GRANT EXECUTE ON FUNCTION public.custom_access_token_hook TO supabase_auth_admin;
REVOKE EXECUTE ON FUNCTION public.custom_access_token_hook FROM authenticated, anon, public;
GRANT SELECT ON public.user_profiles TO supabase_auth_admin;
CREATE POLICY "Allow auth admin to read user roles" ON public.user_profiles
  AS PERMISSIVE FOR SELECT TO supabase_auth_admin USING (true);
```

然後在 Dashboard → Authentication → Hooks 啟用 `Custom Access Token`。

### 2.2 RLS policy 改寫

原本：

```sql
CREATE POLICY "Admins can manage paths" ON learning_paths
  FOR ALL USING (EXISTS (
    SELECT 1 FROM user_profiles WHERE id = auth.uid() AND role = 'admin'
  ));
```

改成（讀 JWT claim）：

```sql
CREATE POLICY "Admins can manage paths" ON learning_paths
  FOR ALL USING (
    (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
  );
```

效能差別：原本每筆 row 都要 sub-query user_profiles，改完直接讀 JWT 不打 DB。

### 2.3 admin 帳號 bootstrap

第一個 admin 不能透過前端建立（沒人能升）。用 migration：

```sql
-- supabase/migrations/00X_bootstrap_admin.sql
-- 從環境變數讀 BOOTSTRAP_ADMIN_EMAIL，新建後在 user_profiles 寫 role=admin
INSERT INTO user_profiles (id, display_name, role)
SELECT id, email, 'admin'
FROM auth.users
WHERE email = current_setting('app.bootstrap_admin_email', true)
ON CONFLICT (id) DO UPDATE SET role = 'admin';
```

deploy 步驟：

1. SQL Editor 跑：`SET app.bootstrap_admin_email = 'first@example.com';`
2. 該 email 註冊一個帳號（一般流程，不會自動是 admin）
3. 跑這個 migration → 升為 admin
4. 之後再用前端管理 UI 升其他人

---

## 3. Auth Store 改寫

`src/stores/auth-store.ts` 完整替換成：

```ts
import { create } from 'zustand';
import { createBrowserClient } from '@/lib/supabase/client';
import type { Session, User as SupabaseUser } from '@supabase/supabase-js';

interface User {
  id: string;
  email: string;
  role: 'student' | 'reviewer' | 'admin';
  displayName: string;
}

interface AuthState {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  error: string | null;
  _hasHydrated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, displayName: string) => Promise<void>;
  logout: () => Promise<void>;
  initialize: () => Promise<void>;  // 啟動時呼叫，從 session 恢復狀態
  clearError: () => void;
}

function sessionToUser(s: Session | null): User | null {
  if (!s?.user) return null;
  const claimedRole = (s.user.app_metadata?.role as string) ?? 'student';
  const role: User['role'] =
    claimedRole === 'admin' || claimedRole === 'reviewer' ? claimedRole : 'student';
  return {
    id: s.user.id,
    email: s.user.email ?? '',
    role,
    displayName: (s.user.user_metadata?.display_name as string) ?? s.user.email ?? '',
  };
}

export const useAuthStore = create<AuthState>((set, get) => {
  const supabase = createBrowserClient();

  // 監聽 session 變化（refresh token、跨 tab logout）
  supabase.auth.onAuthStateChange((_event, session) => {
    set({ session, user: sessionToUser(session) });
  });

  return {
    user: null,
    session: null,
    isLoading: false,
    error: null,
    _hasHydrated: false,

    initialize: async () => {
      const { data: { session } } = await supabase.auth.getSession();
      set({ session, user: sessionToUser(session), _hasHydrated: true });
    },

    login: async (email, password) => {
      set({ isLoading: true, error: null });
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        set({ error: error.message, isLoading: false });
        return;
      }
      set({ session: data.session, user: sessionToUser(data.session), isLoading: false });
    },

    register: async (email, password, displayName) => {
      set({ isLoading: true, error: null });
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { display_name: displayName } },
      });
      if (error) {
        set({ error: error.message, isLoading: false });
        return;
      }
      // 由 trigger 自動建 user_profiles row（見 §4）
      set({ session: data.session, user: sessionToUser(data.session), isLoading: false });
    },

    logout: async () => {
      await supabase.auth.signOut();
      set({ user: null, session: null });
    },

    clearError: () => set({ error: null }),
  };
});
```

關鍵變化：

- 不再用 `persist` middleware（Supabase 自己處理 token 儲存）
- role 來自 JWT，不接受任何前端傳的值
- 多 tab 一起 logout 透過 `onAuthStateChange` 同步
- `register` 不再寫死 role=user，由 DB trigger 建 `user_profiles`

---

## 4. DB triggers

註冊時自動建 `user_profiles` row：

```sql
-- supabase/migrations/00X_user_profile_trigger.sql
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.user_profiles (id, display_name, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'display_name', NEW.email),
    'student'
  )
  ON CONFLICT (id) DO NOTHING;  -- 重複註冊不噴錯
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
```

**為什麼用 `ON CONFLICT DO NOTHING`**：避免使用者重新註冊（舊帳號未刪除）
時觸發 duplicate key error，把整個 signup flow 炸掉。

---

## 5. 中介層整合

`src/middleware.ts` 已經有檢查 `/admin/*` JWT 的邏輯，需要對齊到 Supabase
session cookie：

```ts
import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (toSet) => toSet.forEach(({ name, value, options }) => {
          response.cookies.set(name, value, options);
        }),
      },
    }
  );

  // 重要：呼叫 getUser 才會 refresh token，並把更新後的 cookie 寫回 response
  const { data: { user } } = await supabase.auth.getUser();

  // /admin/* 限 role=admin
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const role = user?.app_metadata?.role;
    if (role !== 'admin') {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // /api/admin/* 也比照
  // /home /graph 等 dashboard 路由需要登入
  if (
    !user &&
    !request.nextUrl.pathname.startsWith('/login') &&
    !request.nextUrl.pathname.startsWith('/register') &&
    isProtectedPath(request.nextUrl.pathname)
  ) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return response;
}
```

刪除 `src/lib/admin-auth.ts` 的 JWT cookie 自家簽發邏輯（被 Supabase 取代）。
但保留 `/api/admin/login` 路由作為「以密碼換 admin session」的 demo 模式
fallback，並用 env 開關控制：

- `NEXT_PUBLIC_SUPABASE_URL` 有設 → middleware 走 Supabase session
- 沒設 → 走原本 `/api/admin/login` cookie flow（純 demo 模式）

---

## 6. Test plan

1. **匿名測試**
   - GET `/api/nodes` → 只回 `status='published'`
   - GET `/api/admin/analytics` → 401

2. **student 測試**
   - signUp → user_profiles 自動建 row、role=student、JWT claim 為 student
   - PATCH `/api/progress/<my_id>` → 200
   - PATCH `/api/progress/<other_id>` → RLS 擋住
   - GET `/api/admin/*` → 403

3. **admin 測試**
   - 從 bootstrap migration 升級的 email 登入
   - JWT 解出來看 `app_metadata.role === 'admin'`
   - POST `/api/generate/skeleton` → 200
   - PATCH 別人的 user_profiles → 看設計：admin 是否能改別人的 role

4. **JWT refresh 測試**
   - 等 access token 過期（預設 1 小時，可改成 5 分鐘加速測試）
   - middleware `getUser()` 觸發 refresh
   - 新 access token 仍帶正確 role

5. **跨 tab logout 測試**
   - 開兩個 tab 都登入
   - 在 tab A logout
   - tab B 的 `onAuthStateChange` 應該觸發、user 變 null

---

## 7. Rollout 步驟

1. **Phase 0（不動 prod）**：在 Supabase staging project 跑所有 migration，
   建立第一個 admin
2. **Phase 1（雙寫）**：auth-store 加入 Supabase login 但保留 mock fallback，
   靠 `NEXT_PUBLIC_AUTH_MODE=supabase|mock` 切換
3. **Phase 2（middleware 切換）**：`/admin/*` 改走 Supabase session
4. **Phase 3（清掉 mock）**：移除 auth-store mock 分支、刪 `lib/admin-auth.ts`

每個 phase 都要在 staging 跑 §6 的 5 個 test plan 才能下一步。

---

## 8. 風險與已知地雷

- **RLS 循環依賴**：custom_access_token_hook 要 SELECT user_profiles，
  user_profiles 又有 RLS。所以要 `SECURITY DEFINER` + 明確的 GRANT。
  詳見 §2.1 的最後三行 SQL。
- **Session cookie 跟 Vercel preview**：Vercel preview deploy 用獨立網域，
  Supabase session cookie 的 domain 限制會擋掉。要在 Supabase Dashboard →
  Authentication → URL Configuration 加 `*.vercel.app` 到 redirect allow list。
- **App Router middleware 跟 Supabase getUser**：必須 await，否則 cookie
  不會更新進 response。錯了會 silent fail。
- **`/api/admin/login` 跟新 flow 並存**：先別刪，給 demo 模式留路。等 Phase
  3 再清。
- **rate-limit + auth**：把 rate-limit key 改成 `${user_id || ip}`，避免被同
  IP 多帳號互相 DoS（office NAT 環境特別重要）。
