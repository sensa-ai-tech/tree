# VetKnowledgeTree

結構化的獸醫專科互動學習平台，涵蓋 8 大臨床專科的知識圖譜。

## Features

- **Knowledge Graph** — 264 nodes, 792 edges across 8 veterinary specialties
- **Spaced Repetition** — SM-2 algorithm for optimized review scheduling
- **Case Challenges** — 99 interactive clinical scenarios with step-by-step decision making
- **Gamification** — XP, levels, achievements, and learning streaks
- **1,890 Review Questions** — Multi-format questions covering all specialties
- **43 Learning Paths** — Structured curricula with milestones

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript 5 (strict mode) |
| UI | React 19 + Tailwind CSS 4 |
| State | Zustand |
| Backend | Supabase (PostgreSQL + Auth + RLS) |
| Testing | Vitest + Playwright |
| Deploy | Vercel |

## Quick Start

```bash
git clone <repo-url>
cd vet-knowledge-tree
npm install
cp .env.local.example .env.local  # Configure environment variables
npm run dev
```

The app runs in **mock mode** when Supabase credentials are not configured, using built-in seed data.

See [docs/QUICKSTART.md](docs/QUICKSTART.md) for detailed setup instructions.

## Specialties

| Code | Specialty | Nodes |
|------|-----------|-------|
| CARDIO | Cardiology | 26 |
| IM | Internal Medicine | 48 |
| DERM | Dermatology | 34 |
| SURG | Surgery | 34 |
| NEURO | Neurology | 33 |
| ONCO | Oncology | 34 |
| ECC | Emergency & Critical Care | 33 |
| CPATH | Clinical Pathology | 22 |

## Development

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run lint         # ESLint check
npm test             # Run tests
npx tsc --noEmit     # Type check
```

## Quality Metrics

- TypeScript: 0 errors (strict mode)
- ESLint: 0 errors, 0 warnings
- Tests: 165/165 passing
- npm audit: 0 vulnerabilities
- Seed Quality Audit: 100/100
- Engineering Audit: 100/100

## License

MIT
