# Changelog

All notable changes to VetKnowledgeTree are documented in this file.
Format follows [Keep a Changelog](https://keepachangelog.com/).

## [Unreleased]

### Added
- Expert self-evolution audit system (Round 6)
- Open-access resource expansion (+20 resources for NEURO/ECC/CPATH)
- Cross-specialty learning paths
- Onboarding welcome flow for new users
- CSP violation reporting endpoint

### Fixed
- Dynamic routes now trigger proper 404 pages via `notFound()`
- README replaced from default template to project-specific documentation

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
