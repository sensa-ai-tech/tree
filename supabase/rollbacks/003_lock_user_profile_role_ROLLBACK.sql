-- 003_lock_user_profile_role_ROLLBACK.sql
-- 還原 003：移除 role 保護 trigger 與函式，自我 UPDATE 政策回到 001 的形狀（無 WITH CHECK）。
-- 注意：還原後 C-2 漏洞重新存在，只在 003 造成合法流程故障時使用。

DROP TRIGGER IF EXISTS tr_user_profiles_guard_privileged_columns ON public.user_profiles;
DROP FUNCTION IF EXISTS public.user_profiles_guard_privileged_columns();

DROP POLICY IF EXISTS "Users can update own profile" ON public.user_profiles;
CREATE POLICY "Users can update own profile" ON public.user_profiles
    FOR UPDATE USING (auth.uid() = id);
