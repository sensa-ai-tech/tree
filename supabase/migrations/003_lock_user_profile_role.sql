-- 003_lock_user_profile_role.sql
-- 修正 C-2（2026-11-21 安全審查）：user_profiles 的自我 UPDATE／INSERT 政策沒有 WITH CHECK、
-- 不限欄位，任何登入者可以 PATCH 自己的列把 role 改成 admin，知識庫各表以
-- user_profiles.role = 'admin' 判斷的 FOR ALL 政策就會放行。
--
-- 修法（兩層）：
--   1. BEFORE INSERT/UPDATE trigger：呼叫者是 anon／authenticated（瀏覽器經 PostgREST）時，
--      INSERT 只能建自己的列且 role 固定為 'student'；UPDATE 不能改 id 與 role。
--      service role、SQL Editor（postgres）、handle_new_user 這類 SECURITY DEFINER 函式
--      不受限，管理員改角色與 bootstrap admin 照舊可用。
--      用 trigger 而不是 column-level REVOKE：之後任何 GRANT ... ON ALL TABLES 都不會把它打開。
--   2. 自我 UPDATE 政策補 WITH CHECK (auth.uid() = id)，不能把列改成別人的 id。
--
-- 成對回滾：supabase/rollbacks/003_lock_user_profile_role_ROLLBACK.sql
--
-- 適用範圍：只給從 001 建起的全新專案。現行正式庫（共用池 iizotzzzfhqswjmcotil）的
-- public.user_profiles 不是 001 的結構（role 預設 'free'），知識庫寫入政策只給 service_role，
-- 沒有東西讀 user_profiles.role，不要套：INSERT trigger 會擋掉該表的 'free' 自建列。（2026-11-26 唯讀核對）

CREATE OR REPLACE FUNCTION public.user_profiles_guard_privileged_columns()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = ''
AS $$
BEGIN
    -- SECURITY INVOKER：current_user 是實際執行寫入的角色。
    -- PostgREST 以 anon／authenticated 執行使用者請求；service_role、postgres、
    -- supabase_auth_admin 與 SECURITY DEFINER 函式（owner 身分）屬於管理流程。
    IF current_user NOT IN ('anon', 'authenticated') THEN
        RETURN NEW;
    END IF;

    IF TG_OP = 'INSERT' THEN
        IF NEW.id IS DISTINCT FROM auth.uid() THEN
            RAISE EXCEPTION 'user_profiles: can only create your own profile'
                USING ERRCODE = '42501';
        END IF;
        IF NEW.role IS DISTINCT FROM 'student' THEN
            RAISE EXCEPTION 'user_profiles: role must be student on self sign-up'
                USING ERRCODE = '42501';
        END IF;
    ELSIF TG_OP = 'UPDATE' THEN
        IF NEW.id IS DISTINCT FROM OLD.id THEN
            RAISE EXCEPTION 'user_profiles: id cannot be changed'
                USING ERRCODE = '42501';
        END IF;
        IF NEW.role IS DISTINCT FROM OLD.role THEN
            RAISE EXCEPTION 'user_profiles: role can only be changed by an administrator process'
                USING ERRCODE = '42501';
        END IF;
    END IF;

    RETURN NEW;
END;
$$;

REVOKE ALL ON FUNCTION public.user_profiles_guard_privileged_columns() FROM PUBLIC;

DROP TRIGGER IF EXISTS tr_user_profiles_guard_privileged_columns ON public.user_profiles;
CREATE TRIGGER tr_user_profiles_guard_privileged_columns
    BEFORE INSERT OR UPDATE ON public.user_profiles
    FOR EACH ROW EXECUTE FUNCTION public.user_profiles_guard_privileged_columns();

DROP POLICY IF EXISTS "Users can update own profile" ON public.user_profiles;
CREATE POLICY "Users can update own profile" ON public.user_profiles
    FOR UPDATE USING (auth.uid() = id)
    WITH CHECK (auth.uid() = id);
