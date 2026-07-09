# vet-knowledge-tree — Project-Local Claude Instructions

> This file is auto-loaded into every Claude Code session in this repo.
> Captures invariants and rabbit-holes that ONLY apply here.
> For cross-project rules see `~/.claude/CLAUDE.md`.

---

## 1. AI client mock mode (src/lib/ai/claude-client.ts)

- `MOCK_MODE = !process.env.ANTHROPIC_API_KEY` — absence of the env var auto-enables mock.
- In mock mode `callClaude(prompt)` returns deterministic JSON from `getMockResponse()` keyed off prompt substrings: `skeleton`/`骨架`, `edge`/`關聯`, `question`/`題`, `case`/`病例`, `path`/`路徑`. Anything else → `{ content: {} }`.
- All unit tests run in mock mode (no API key in CI). If a test expects real Anthropic output it is wrong — assert the deterministic mock shape instead.
- Live integration tests live in `src/tests/unit/ai/claude-client-live.test.ts` and skip themselves when `ANTHROPIC_API_KEY` is unset.
- When adding a new prompt category, also add a keyword branch to `getMockResponse` or downstream code will get the generic `{ content: {} }` fallback.
- **iter 2 logging**: `callClaude` now emits structured `console.info`/`console.warn` JSON records on success/retry/fail/mock with scope/model/tokens/latencyMs. Always pass `scope: 'route:/api/...'` from API route handlers; default `'unknown'` is for utility callers only.

## 2. Prompt registry (src/lib/ai/prompt-registry.ts)

- `PROMPT_MAP: Record<NodeType, PromptBuilder>` is the single dispatch table for content-generation prompts.
- Eight `NodeType` values fan into three builders: `disease`/`therapeutic` → disease, `diagnostic`/`procedure` → diagnostic, the rest → concept. Conscious choice — therapy nodes share disease's drug-table conventions; procedures share diagnostic's stepwise structure.
- If you add a new `NodeType` to `src/types/knowledge.ts`, TypeScript will fail to compile `PROMPT_MAP` until you add the mapping. Do NOT cast — pick the structurally closest builder.

## 3. FSRS scheduler (ts-fsrs)

- Spaced-repetition scheduling uses `ts-fsrs@^5.3.1`, wrapped in `src/lib/gamification/spaced-rep.ts` and consumed by `useLearningStore`.
- The FSRS state machine has 4 grades: Again(1) / Hard(2) / Good(3) / Easy(4). Map UI buttons to these exactly — don't invent a 5-point scale.
- Review queue derives from `nextReview <= now`. Test fakes must control clock via vitest `vi.useFakeTimers()`, not `Date.now` stubs.
- `todayReviewCount` in `useLearningStore` returns 0 for brand-new accounts — `home/page.tsx` gates the review-prompt card on `completedCount > 0` (iter 1 fix). `/review` synthesizes items only for completed nodes (iter 2 fix).

## 4. Coverage thresholds & istanbul provider (vitest.config.ts)

- Provider is **istanbul**, NOT v8. Reason: v8 re-parses uncovered files via raw rollup AST and chokes on TS-only syntax (parameter properties, `export type`). Switching back will produce mysterious `PARSE_ERROR` lines in CI. Do not switch without re-validating every TS file.
- Thresholds: `lines:65 / statements:64 / functions:61 / branches:54` — CI fails if any metric drops below. Set 1 pp under measured to leave buffer for new code.
- After adding a feature, run `npm run test:cov` and bump the threshold (in 1 pp increments) only when ALL four metrics rise; never bump just one.
- `istanbul-ignore next` / `istanbul-ignore else` comments are acceptable for genuinely-defensive branches (window/SSR guards, fallback after exhaustive switch). Do NOT use them to paper over untested business logic.

## 5. Route group convention (Next.js App Router)

- `src/app/(dashboard)/` is a route group — parentheses mean the segment is folder-only, no URL path. Pages inside live at `/home`, `/graph`, `/paths`, etc., NOT `/dashboard/home`.
- New URL-bearing pages MUST live in a real folder (no parentheses). `npm run build` prints the route table — diff it after any route change.
- Dynamic params (`[nodeId]`, `[pathId]`) require `notFound()` when the id misses; pattern in `nodes/[nodeId]/page.tsx`.

## 6. Zustand store conventions (src/stores/)

- Stores: `useAuthStore`, `useKnowledgeStore`, `useLearningStore`, `useGamificationStore`.
- Heavy components (KnowledgeGraph: 283 nodes + edges) MUST use `useShallow` selector to avoid re-mount on unrelated `set()` broadcasts. Canonical exemplar: `src/app/(dashboard)/graph/page.tsx`. The sweep is essentially DONE — `home`, `paths`, `paths/[pathId]`, `nodes/[nodeId]`, `NavbarSearch`, `SupabaseDataProvider` all use `useShallow` now. New store-consuming components should follow the same pattern.
- `getX()` selector functions on the store should be stable (defined once in `create`), NOT recreated per render.

## 7. Observability (src/lib/observability/error-reporter.ts)

- `reportError(error, { scope, tags })` is DSN-gated. No `SENTRY_DSN` → `console.error` fallback (dev/preview). With DSN → Sentry Envelope HTTP API (no @sentry/nextjs dependency).
- Scope format: `'route:/api/...'` for routes, `'component:Name'` for components.
- API routes wrap their `catch` and 422-validation paths with `reportError`. The client surface message MUST be generic — never leak upstream error.message (Anthropic SDK errors can embed request IDs / partial headers).

## 8. Security policy specifics

- CSP carries BOTH `report-uri` (legacy Firefox) AND `report-to csp-endpoint` + `Report-To` / `Reporting-Endpoints` headers (Chrome 96+). Don't drop `report-uri` until Firefox catches up.
- `withRateLimit` falls back to per-instance in-memory store on Upstash failure (`degradedFallback: true` default). Auth/admin routes MUST keep this; read-only generate routes may opt out.
- `markdown-renderer.parseContentMarkers` escapes `<>"&'` before interpolating into raw HTML — rehype-sanitize is defense-in-depth, not the primary boundary.
- `admin/login` open-redirect uses ALLOWLIST regex `/^\/admin\/[A-Za-z0-9/_-]{0,128}$/` + second-char guard. Never widen.

## 9. Graph algorithms (src/lib/utils/graph-algorithms.ts)

- `filterDependencyEdges` drops self-loops (A→A) and warns in dev — they are never legitimate prerequisites.
- `topologicalSort` and `getConnectedComponents` both filter ghost edges (source/target not in `nodeIds`). If you add a new graph algorithm, mirror this guard.
- `detectCycles` uses ITERATIVE DFS (not recursive) to avoid V8 stack overflow on >10K-node chains. If refactoring, preserve the phase-marker stack pattern.

## 10. Common gotchas

- `(dashboard)` route group does NOT produce a URL segment. Real folder for real path.
- Test files use `@/` path alias (`src/` root). vitest.config.ts wires it.
- `'use client';` directive is required at top of any Zustand-consuming component.
- Login/register post-auth redirect goes to `/home` (not `/graph`) so `WelcomeOnboarding` modal can fire (iter 1 fix).
- Privacy policy §六 promises account-deletion — `/api/account` DELETE endpoint + `/profile` 危險區 card are the implementation. Don't remove either without updating the policy.

## 11. Build & verify checklist

1. `npx tsc --noEmit` — 0 errors
2. `npm test` — all pass (current: 865+ tests)
3. `npm run test:cov` — no threshold drop
4. `npm run lint` — 0 errors (warnings tolerated in test files only)
5. **`npm run build` — MANDATORY GATE, never skip.** tsc + vitest do NOT exercise the Tailwind v4 production class-scan, so a 100%-green test suite can coexist with a 100%-broken deploy. This actually happened: a self-evolve loop declared "converged" while `next build` was failing on a Tailwind Oxide scanner RangeError (`String.fromCodePoint(2551915)` from a fabricated `\26F4AB` CSS escape on CJK-heavy source). `next dev` worked, masking it. Fix was tailwindcss 4.1.18 → 4.3.0. Treat build success as a hard requirement before any "done"/"converged" claim.
6. Commit, push.

> **Content integrity gate**: `npm run verify:citations` (scripts/verify-citations.ts) checks every `NodeContent.references[]` against Crossref — DOI must resolve AND title must match; DOI-less journal cites are biblio-resolved; FDA/textbook flagged for manual check. Run after adding/refreshing any node's references. `SUSPECT_TITLE_MISMATCH` / `SUSPECT_DOI_UNRESOLVED` = wrong/fabricated DOI → fix before commit. Reports land in `reports/citation-audit-*.{md,json}`.
> ⚠️ The v1 seed had a recurring **fabricated-"consensus" hallucination**: authoritative-sounding `ACVIM/ACVD/VSSO Consensus – Topic` titles carrying a wrong DOI (resolves to an unrelated real paper). When adding a guideline ref, confirm the consensus actually exists. (`open-access-resources.ts` — which held the fabricated-PMC-URL variant of this bug — was **removed 2026-07-04** as zero-consumer dead data, so that liveness/title-audit debt is moot; the fabricated-consensus caution still applies to every `references[]` DOI.)

> Tailwind pin: stay on tailwindcss + @tailwindcss/postcss **≥ 4.3.0**. 4.1.18's Oxide scanner crashes `next build` on this repo's CJK content. Do not downgrade below 4.3.0.
