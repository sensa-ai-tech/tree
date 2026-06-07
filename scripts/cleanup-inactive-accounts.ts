/**
 * scripts/cleanup-inactive-accounts.ts
 *
 * Iter 3 PRIVACY-RETENTION-001 — documented stub for the 24-month inactivity
 * purge promised in privacy/page.tsx §六 ("資料保存期限").
 *
 * STATUS: NO-OP STUB. Does not delete anything. Logs intent only.
 *
 * Why a stub:
 * - The privacy policy promise binds us; the implementation can land later.
 * - Putting a documented stub in version control captures the contract
 *   (schema columns needed, safeguards required, opt-out flow) so reviewers
 *   can audit it BEFORE the destructive cron job goes live.
 *
 * Intended production behaviour (DO NOT IMPLEMENT WITHOUT REVIEW):
 *
 * 1. Schema additions needed:
 *    - auth.users.last_seen_at TIMESTAMP (refresh on every authenticated request)
 *    - auth.users.purge_notified_at TIMESTAMP (set when 60-day grace email sent)
 *    - account_purge_notices (audit log of all notifications + final purges)
 *
 * 2. Cron schedule:
 *    - Run daily at 03:00 Asia/Taipei (low-traffic window)
 *    - Use Vercel Cron or Supabase Scheduled Function (cron.schedule pg_cron)
 *
 * 3. Process (per user where last_seen_at < NOW() - INTERVAL '22 months'):
 *    a. If purge_notified_at IS NULL → send 60-day grace email → set purge_notified_at
 *    b. If purge_notified_at < NOW() - INTERVAL '60 days' → permanent delete via
 *       DELETE /api/account flow (re-use the route's table-cascade logic)
 *
 * 4. Safeguards (ALL MUST be in place before flipping off the stub):
 *    - DRY_RUN env flag defaults to TRUE; explicit override required to mutate
 *    - PER_RUN_CAP (e.g. 50 users/day) so a clock bug can't wipe the database
 *    - Opt-out: privacy/page.tsx should add an opt-out link that sets a flag
 *      stopping the cron from ever touching that account
 *    - All actions emit reportError-style audit log to Sentry scope
 *      'cron:account-purge'
 *    - GDPR Art.20 right-to-portability: before purge, offer JSON export
 *
 * 5. Test coverage (before production):
 *    - Unit: parseInactive(days) edge cases
 *    - Integration: against staging Supabase, dry-run produces expected list
 *    - E2E: synthetic account aged 24mo + grace expired → actually deleted
 */

/* istanbul ignore file -- documented stub, not part of test coverage */
async function main(): Promise<void> {
  console.warn(
    JSON.stringify({
      scope: 'cron:account-purge',
      event: 'stub.invoked',
      message:
        'cleanup-inactive-accounts.ts is a NO-OP stub. See file header for production rollout plan.',
      action: 'none',
      dryRun: true,
    })
  );
}

if (require.main === module) {
  main().catch((err) => {
    console.error(
      JSON.stringify({
        scope: 'cron:account-purge',
        event: 'stub.error',
        errorName: err instanceof Error ? err.name : 'unknown',
        errorMessage: err instanceof Error ? err.message : String(err),
      })
    );
    process.exit(1);
  });
}

export {};
