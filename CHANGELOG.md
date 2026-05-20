# Changelog

All notable changes to VetKnowledgeTree are documented in this file.
Format follows [Keep a Changelog](https://keepachangelog.com/).

## [Unreleased]

### Added
- Expert self-evolution audit system (Round 6+)
- Open-access resource expansion (+20 resources for NEURO/ECC/CPATH)
- Cross-specialty learning paths
- Onboarding welcome flow for new users
- CSP violation reporting endpoint

### Fixed
- Dynamic routes now trigger proper 404 pages via `notFound()`
- README replaced from default template to project-specific documentation

## [0.6.1] - 2026-05-18

### Added
- Rate-limit store abstraction (`src/lib/api/rate-limit-store.ts`)：In-memory + Upstash Redis REST 兩種實作，由 `UPSTASH_REDIS_REST_URL`/`UPSTASH_REDIS_REST_TOKEN` 自動切換；Upstash 用 `INCR + EXPIRE NX + PTTL` pipeline，跨 Vercel instance 共享計數
- Error reporter (`src/lib/observability/error-reporter.ts`)：DSN-gated Sentry envelope POST，沒設 `SENTRY_DSN`/`NEXT_PUBLIC_SENTRY_DSN` 時 fallback `console.error`；不引入 `@sentry/nextjs` 套件，可一行替換成 official SDK
- Supabase auth integration spec (`docs/SUPABASE-AUTH-SPEC.md`)：詳述 mock store → Supabase Auth 4 phase rollout，含 `custom_access_token_hook` SQL、RLS JWT claim 改寫、middleware 切換、test plan
- QuizEngine 模組化拆分 (`src/components/features/quiz/`)：`useQuizState` hook + `QuizOptions` / `QuizFillBlank` / `QuizFeedback` / `QuizResults` / `QuizProgressHeader` 5 個展示型元件
- 34 個新測試：QuizEngine 互動 (10)、rate-limit store 兩種實作 + factory (11)、error-reporter DSN 解析/envelope 送出/fallback (13)

### Changed
- `withRateLimit` 改用 store 抽象層，store 失敗 fail-open 並 `console.error`；429 回應加 `X-RateLimit-Limit`/`Remaining`/`Reset` headers
- `QuizEngine.tsx` 從 324 行縮減到 91 行，純粹當 orchestrator；keyboard navigation 移到 `QuizOptions` 內聚
- `app/error.tsx`、`app/global-error.tsx`、`SupabaseDataProvider`、`/api/admin/login` 改用 `reportError()` 取代裸 `console.error`，預備 Sentry 接線

### Security
- Rate-limit fail-open 加 stderr log，方便 Sentry 撈異常事件
- Error reporter swallow fetch failures，避免上報路徑自爆連帶把 React render 卡住

## [0.6.0] - 2026-05-18

### Added
- GitHub Actions CI workflow（lint + typecheck + test + audit + build + Playwright）
- Dynamic SEO metadata for `cases/[caseId]` and `paths/[pathId]`
- Knowledge graph 「綜覽全圖（264 節點）」 entry point on specialty grid
- Loading skeleton for ProcedureLinks
- SupabaseDataProvider auto-fallback to seed when DB nodes loaded but edges missing
- `/api/health` real subsystem check (supabase ping + env validation)
- FPV (貓泛白血球減少症) full content node — covers SNAP/PCR diagnosis, IV supportive Tx, environment disinfection, Taiwan shelter epidemiology
- Malignant Hyperthermia (麻醉惡性高熱) procedural node — RYR1 mechanism, EtCO2 early warning, Dantrolene protocol, full step_by_step

### Changed
- Migrated `reactflow@11.11.4` → `@xyflow/react@12` (React 19 compatibility)
- KnowledgeGraph uses `useNodesState`/`useEdgesState` for proper async data sync
- FIP GS-441524 dosing updated to ABCD 2024 consensus (effusive 6-10, dry 10-12, ocular 12-15, neurologic 15-20 mg/kg)
- SDMA threshold language harmonized (25-40% nephron loss, 9-17 months earlier than Cre)
- Admin JWT now includes `iss` + `aud` claims, expiry 2h (was 8h)
- Admin password hash support via `sha256:<hex>` prefix
- Sitemap uses node `updated_at` (stable) instead of deploy-time `new Date()`
- Supabase migrations idempotent: `CREATE TABLE/INDEX IF NOT EXISTS` + `CREATE OR REPLACE TRIGGER` + `DROP POLICY IF EXISTS` guards

### Fixed
- Dual `/dashboard` vs `/home` route conflict — root redirects to /home, WelcomeOnboarding moved to home page
- `/api/admin/login` brute-force vulnerability — added `withRateLimit(5/15min)` + 200ms response delay
- Playwright e2e config — `npx playwright install` ran, port `3099` → `4310` (avoid SAMAS collision), `stdout: 'pipe'`
- E2E selectors switched from `text=登入` (fragile) to `getByRole` (i18n-safe)
- `x-forwarded-for` rate-limit bypass — extract IP via `x-real-ip` first, then leftmost forwarded with length cap
- auth-store admin-role injection — production with `NEXT_PUBLIC_SUPABASE_URL` forces all logins to `user` role
- MarkdownRenderer XSS hardening — explicit `data-*` attribute whitelist, restricted URL protocols, documented sanitize boundary
- `npm audit` 11 → 2 vulnerabilities (remaining 2 are Next.js postcss transitive, build-time only)

### Security
- See `SECURITY` section above. Outstanding: in-memory rate-limit needs Upstash/Vercel KV migration for serverless; mock auth-store needs real Supabase auth integration before production.

## [0.5.0] - 2026-03-04

### Added
- Professor team structural audit: +68 prerequisite edges
- 3 cross-specialty paths (jaundice DDx, acute abdomen, systemic pruritus)
- 15 CPATH review questions
- 10 new open-access resources
- 1 IM forward edge

### Fixed
- Prerequisite edge weights normalized (3 to 1)

## [0.4.0] - 2026-03-01

### Added
- VetPro encyclopedia sync: +15 disease nodes across 5 specialties (249 to 264)
- +75 edges, +90 questions, +5 cross-specialty edges
- Case coverage improved from 49% to 81%

### Fixed
- Duplicate edges removed
- DERM cross-specialty edges strengthened

## [0.3.0] - 2026-03-01

### Added
- Expert self-evolution review Round 3: 19 fixes across security, accessibility, performance, content

### Fixed
- Security headers hardened (CSP, HSTS, X-Frame-Options)
- Error boundaries added to all routes
- Loading skeletons for all pages
- API rate limiting and auth middleware

## [0.2.0] - 2026-02-28

### Added
- 8-specialty knowledge tree expansion: 178 to 233 nodes (+55)
- Expert review Rounds 1-2: content individualization, dosage corrections, cross-specialty edges
- Full-stack engineering audit: 200/200 score

### Fixed
- Template content replaced with individualized disease data
- L5 template sections cleared
- 20 cross-specialty edges corrected

## [0.1.0] - 2026-02-22

### Added
- Initial release with 178 knowledge nodes
- 6-layer knowledge architecture (L0-L5)
- Interactive knowledge graph visualization (React Flow)
- SM-2 spaced repetition review system
- Gamification system (XP, levels, 20+ achievements)
- Case challenge system with step-by-step clinical scenarios
- Supabase integration with RLS policies
- Vercel deployment with security headers
- SEO optimization (sitemap, robots, JSON-LD, Open Graph)
- Legal pages (Privacy Policy, Terms of Service)
- Responsive design with mobile bottom navigation
