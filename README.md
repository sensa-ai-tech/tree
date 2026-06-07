# VetKnowledgeTree

結構化的獸醫專科互動學習平台，涵蓋 8 大臨床專科的知識圖譜。266 個知識節點、806+ 條跨科關聯邊、103 個情境案例、1,874+ 道複習題、47 條學習路徑。

## Features

- **Knowledge Graph** — 266+ nodes, 806+ edges across 8 veterinary specialties
- **Spaced Repetition** — FSRS-5 + SM-2 algorithms for optimized review scheduling
- **Case Challenges** — 103 interactive clinical scenarios with step-by-step decision making
- **Gamification** — XP, levels, achievements, learning streaks
- **1,874+ Review Questions** — Multi-format questions covering all specialties
- **47 Learning Paths** — Structured curricula with milestones
- **Mock Mode** — Runs end-to-end with bundled seed data when Supabase credentials are absent

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript 5 (strict mode) |
| UI | React 19 + Tailwind CSS 4 |
| Graph | @xyflow/react v12 + @dagrejs/dagre |
| State | Zustand 5 |
| Backend | Supabase (PostgreSQL + Auth + RLS) |
| Auth | Supabase Auth + custom JWT (jose) for admin |
| AI | Anthropic Claude (content generation, optional) |
| Validation | Zod 4 |
| Testing | Vitest 4 + Playwright + Stryker (mutation) + fast-check |
| CI | GitHub Actions |
| Deploy | Vercel |

## Quick Start

```bash
git clone <repo-url>
cd vet-knowledge-tree
npm install
cp .env.local.example .env.local   # Edit values per the table below
npm run dev                        # http://localhost:3001
```

The app runs in **mock mode** when `NEXT_PUBLIC_SUPABASE_URL` is unset — it uses bundled seed data so you can explore the full UI without provisioning Supabase. Mock mode also skips writes (XP, progress, reviews are in-memory only).

See [docs/QUICKSTART.md](docs/QUICKSTART.md) for the verbose tour.

## Environment Variables

All variables live in `.env.local` (gitignored). Variables prefixed `NEXT_PUBLIC_` are exposed to the browser; everything else is server-only.

| Variable | Required | Purpose | Where to get |
|---|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Prod only | Supabase project REST URL | Supabase dashboard → Project Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Prod only | Public anon JWT (RLS-gated client reads) | Supabase dashboard → API → anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Prod only | Server-side admin client (DELETE /api/account, seeding) | Supabase dashboard → API → service_role key. **NEVER expose to browser.** |
| `VKT_JWT_SECRET` | Yes (≥32 chars) | Signs the `vkt-admin-token` HttpOnly cookie for `/admin/*` access | Generate locally: `openssl rand -base64 48` |
| `VKT_ADMIN_PASSWORD` | Yes | Plaintext password checked by `/api/admin/login` | Choose a strong value; rotate via env update |
| `ADMIN_API_KEY` | Yes (for `/api/generate/*`) | Bearer token gating Claude-backed content generation routes | Generate: `openssl rand -hex 32` |
| `ANTHROPIC_API_KEY` | Optional | Enables real Claude calls in `/api/generate/*`; unset → mock mode returns canned content | https://console.anthropic.com |
| `NEXT_PUBLIC_APP_URL` | Yes | Canonical site origin used by sitemap, OG metadata, redirects | `http://localhost:3001` dev / `https://your-domain` prod |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Optional | Clinical image CDN — disables image upload UI when unset | Cloudinary dashboard |
| `CLOUDINARY_API_KEY` | Optional | Signed upload requests (paired with secret) | Cloudinary dashboard → Settings → API Keys |
| `CLOUDINARY_API_SECRET` | Optional | Used by `/api/upload/*` signature generation only — never exposed to client | Cloudinary dashboard → Settings → API Keys |
| `SENTRY_DSN` | Optional | Wire `reportError()` output to Sentry; falls back to `console.error` when unset | https://sentry.io project settings |
| `UPSTASH_REDIS_REST_URL` | Optional | Cross-instance rate limit store (multi-instance Vercel); falls back to per-instance in-memory | https://console.upstash.com |
| `UPSTASH_REDIS_REST_TOKEN` | Optional | Paired with the URL above | Upstash dashboard |

**Boot check:** the app refuses to start in production mode (`NODE_ENV=production`) without `VKT_JWT_SECRET` and rejects admin logins. Mock mode masks several other missing values — verify all rows marked **Yes** before shipping.

## Specialties

| Code | Specialty | Nodes |
|------|-----------|-------|
| CARDIO | Cardiology | 26 |
| IM | Internal Medicine | 49 (+ IM-L3-029 系統性高血壓, iter 2) |
| DERM | Dermatology | 34 |
| SURG | Surgery | 34 |
| NEURO | Neurology | 33 |
| ONCO | Oncology | 34 |
| ECC | Emergency & Critical Care | 33 |
| CPATH | Clinical Pathology | 22 |

## Development

```bash
npm run dev          # Start dev server (port 3001)
npm run build        # Production build (Turbopack)
npm run start        # Serve the production build
npm run lint         # ESLint over src/
npm test             # Vitest single run
npm run test:watch   # Vitest watch mode
npm run test:cov     # Vitest with coverage report
npx tsc --noEmit     # Type check (no emit)
npx playwright test  # Browser e2e (requires `npx playwright install` first run)
```

Before opening a PR: run `npm run lint && npx tsc --noEmit && npm test && npm run build` and ensure all four pass.

## Deployment (Vercel)

1. **Connect repo** — Vercel dashboard → Add New Project → import this GitHub repo.
2. **Framework preset** — Next.js (auto-detected; build command `next build`, output `.next`).
3. **Environment variables** — Settings → Environment Variables. Add every **Required** row from the table above for the `Production`, `Preview`, and `Development` scopes. Treat `SUPABASE_SERVICE_ROLE_KEY` and `VKT_JWT_SECRET` as secrets (toggle the eye icon).
4. **Custom domain** — Settings → Domains → add your domain → update `NEXT_PUBLIC_APP_URL` to match. Re-deploy so OG metadata and `sitemap.ts` pick up the new origin.
5. **Supabase RLS** — confirm policies in `supabase/migrations/` are applied; rerun `supabase db push` after schema changes.
6. **Smoke test post-deploy** — `/` loads, `/graph` renders, `/login` accepts seeded credentials, `/admin/login` accepts `VKT_ADMIN_PASSWORD`.

Rollback: Vercel → Deployments → click previous green deploy → Promote to Production.

## Quality Metrics

- TypeScript: 0 errors (strict mode)
- ESLint: 0 errors (16 pre-existing test-file `any` warnings tolerated)
- Tests: 797+/797 passing (Vitest)
- Production build: 40+ routes
- Coverage: lines 70%+ / statements 69%+ / functions 68%+ / branches 59%+ (istanbul provider)
- npm audit (prod deps): 2 moderate (Next.js postcss transitive, build-time only)
- Self-Evolve Loop: iter 2 (avg score 84/100, 0 blocking)

## License

MIT
