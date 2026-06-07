import { describe, expect, it } from 'vitest';
import {
  TOTAL_KNOWLEDGE_NODES,
  TOTAL_CASE_CHALLENGES,
  TOTAL_SPECIALTIES,
} from '@/lib/constants/content-stats';
import { ALL_NODES, ALL_CASES } from '@/data/seed';

/**
 * Drift guard for marketing/onboarding copy (iter 4 cruise finding).
 *
 * If you add nodes or cases without updating src/lib/constants/content-stats.ts,
 * WelcomeOnboarding and layout.tsx OG description silently lie about the catalog
 * size — that's how we ended up with "264 個知識節點" in onboarding while the
 * actual data was 274.
 */
describe('content-stats constants stay in sync with seed data', () => {
  it('TOTAL_KNOWLEDGE_NODES matches ALL_NODES.length', () => {
    expect(TOTAL_KNOWLEDGE_NODES).toBe(ALL_NODES.length);
  });

  it('TOTAL_CASE_CHALLENGES matches ALL_CASES.length', () => {
    expect(TOTAL_CASE_CHALLENGES).toBe(ALL_CASES.length);
  });

  it('TOTAL_SPECIALTIES matches distinct specialty count in ALL_NODES', () => {
    const specialties = new Set(ALL_NODES.map((n) => n.specialty));
    expect(TOTAL_SPECIALTIES).toBe(specialties.size);
  });
});
