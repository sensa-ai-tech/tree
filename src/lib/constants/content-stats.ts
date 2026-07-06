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
export const TOTAL_KNOWLEDGE_NODES = 283;

/** Total interactive case challenges (must equal ALL_CASES.length). */
export const TOTAL_CASE_CHALLENGES = 103;

/** Total clinical specialties: CARDIO, IM, DERM, SURG, NEURO, ONCO, ECC, CPATH. */
export const TOTAL_SPECIALTIES = 8;

/**
 * Per-specialty knowledge-node counts (real; must sum to TOTAL_KNOWLEDGE_NODES).
 * `code` = seed specialty code (node.specialty); `label` = 繁中顯示名。排序：多→少。
 * Drift-guarded by content-stats.test.ts against ALL_NODES grouped by specialty —
 * kept as a primitive constant (not an ALL_NODES import) so client bundles stay tiny.
 */
export const NODES_BY_SPECIALTY = [
  { code: 'IM', label: '內科', count: 57 },
  { code: 'SURG', label: '外科', count: 39 },
  { code: 'DERM', label: '皮膚科', count: 35 },
  { code: 'NEURO', label: '神經科', count: 35 },
  { code: 'ONCO', label: '腫瘤科', count: 34 },
  { code: 'ECC', label: '急診加護', count: 33 },
  { code: 'CARDIO', label: '心臟科', count: 28 },
  { code: 'CPATH', label: '臨床病理', count: 22 },
] as const;
