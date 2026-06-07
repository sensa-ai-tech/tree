/**
 * Single-source-of-truth for marketing/onboarding copy that quotes content counts.
 *
 * Why a constants file (not direct ALL_NODES.length import):
 *  - WelcomeOnboarding is a client component; importing the full seed pulls
 *    ~1MB of node/edge/content/question data into the client bundle.
 *  - app/layout.tsx metadata description benefits from a literal string too.
 *  - A 3-number primitive module tree-shakes cleanly and stays tiny.
 *
 * Drift guard: src/tests/unit/lib/content-stats.test.ts asserts these match
 * the live seed-data counts (ALL_NODES.length, ALL_CASES.length, distinct
 * specialty count). If you add nodes/cases, the test fails — update these
 * constants together with the seed change in the same PR.
 *
 * History: iter 3 Playwright cruise reported "內科 48 節點" while seed had 49+.
 * Root cause was static marketing copy in WelcomeOnboarding and layout.tsx OG
 * description hardcoded 264 / 187 — these constants close that loop.
 */

/** Total knowledge nodes across all 8 specialties (must equal ALL_NODES.length). */
export const TOTAL_KNOWLEDGE_NODES = 274;

/** Total interactive case challenges (must equal ALL_CASES.length). */
export const TOTAL_CASE_CHALLENGES = 103;

/** Total clinical specialties: CARDIO, IM, DERM, SURG, NEURO, ONCO, ECC, CPATH. */
export const TOTAL_SPECIALTIES = 8;
