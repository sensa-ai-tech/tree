import { NextResponse } from 'next/server';
import { createServerClient, createServiceRoleClient } from '@/lib/supabase/server';

/**
 * DELETE /api/account
 *
 * Implements 台灣個資法 §3 / GDPR Art.17 right-to-erasure that the privacy
 * policy (src/app/(legal)/privacy/page.tsx §六) explicitly grants users.
 *
 * Flow:
 *   1. Verify the caller is authenticated via Supabase session cookie.
 *   2. Delete all rows the user owns in app tables (learning_progress,
 *      review_history, achievements, user_xp, case_attempts, question_attempts) —
 *      RLS would also enforce this, but explicit deletion avoids orphan rows
 *      if RLS is later relaxed.
 *   3. Call supabase.auth.admin.deleteUser via service-role client. This
 *      cascades to auth.users and any FK-bound tables.
 *   4. Return 204 No Content; client should clear local stores and redirect.
 *
 * Mock mode: createServiceRoleClient() returns a no-op proxy when
 * SUPABASE_SERVICE_ROLE_KEY is unset, so this endpoint stays callable in
 * local/demo without throwing.
 */
export async function DELETE(): Promise<NextResponse> {
  const supabase = createServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  const userId = user.id;
  const admin = createServiceRoleClient();

  // Owned-data tables — list reflects what user actually owns.
  // Extend this if new user-scoped tables are added.
  const ownedTables = [
    'learning_progress',
    'review_history',
    'achievements',
    'user_xp',
    'case_attempts',
    'question_attempts',
  ] as const;

  for (const table of ownedTables) {
    const { error } = await admin
      .from(table)
      .delete()
      .eq('user_id', userId);
    if (error) {
      console.error(`[account-delete] failed clearing ${table}:`, error.message);
      return NextResponse.json(
        { error: 'account deletion failed; please contact support' },
        { status: 500 }
      );
    }
  }

  // Final step: delete the auth user. Requires service-role key in prod;
  // mock-mode proxy resolves to { data: null, error: null }, which is fine.
  /* istanbul ignore next -- requires live SUPABASE_SERVICE_ROLE_KEY */
  const authClient = (admin as unknown as {
    auth?: { admin?: { deleteUser?: (id: string) => Promise<{ error: Error | null }> } };
  }).auth;
  /* istanbul ignore next */
  if (authClient?.admin?.deleteUser) {
    const { error: deleteError } = await authClient.admin.deleteUser(userId);
    if (deleteError) {
      console.error('[account-delete] auth.deleteUser failed:', deleteError.message);
      return NextResponse.json(
        { error: 'account deletion failed; please contact support' },
        { status: 500 }
      );
    }
  }

  return new NextResponse(null, { status: 204 });
}
