import { NextRequest, NextResponse } from 'next/server';
import { createServerClient, createServiceRoleClient } from '@/lib/supabase/server';
import { isSameOriginRequest } from '@/lib/security/csrf';

/**
 * DELETE /api/account
 *
 * Implements 台灣個資法 §3 / GDPR Art.17 right-to-erasure that the privacy
 * policy (src/app/(legal)/privacy/page.tsx §六) explicitly grants users.
 *
 * Flow:
 *   0. (iter 3 SEC-R3-001) Reject cross-origin requests via Sec-Fetch-Site /
 *      Origin checks. Closes residual CSRF window on this irreversible endpoint
 *      since Supabase session cookie defaults to SameSite=lax (NOT strict).
 *   1. Verify the caller is authenticated via Supabase session cookie.
 *   2. Delete all rows the user owns in app tables.
 *   3. Call supabase.auth.admin.deleteUser via service-role client.
 *   4. Return 204 No Content; client should clear local stores and redirect.
 *
 * Mock mode: createServiceRoleClient() returns a no-op proxy when
 * SUPABASE_SERVICE_ROLE_KEY is unset, so this endpoint stays callable in
 * local/demo without throwing.
 */
export async function DELETE(request: NextRequest): Promise<NextResponse> {
  // SEC-R3-001: CSRF defense-in-depth (OWASP CSRF Cheat Sheet §6)
  if (!isSameOriginRequest(request)) {
    console.warn('[account-delete] cross-origin request rejected:', {
      origin: request.headers.get('origin'),
      referer: request.headers.get('referer'),
      secFetchSite: request.headers.get('sec-fetch-site'),
    });
    return NextResponse.json(
      { error: 'Forbidden: cross-origin request rejected' },
      { status: 403 }
    );
  }

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
