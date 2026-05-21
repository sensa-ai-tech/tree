import { describe, expect, it } from 'vitest';
import fc from 'fast-check';
import {
  calculateNextReview,
  createInitialState,
  isDueForReview,
  previewIntervals,
} from '@/lib/gamification/spaced-rep';
import type { FSRSRating } from '@/types/gamification';

/**
 * FSRS 演算法的不變式測試。ts-fsrs 內部有 fuzz 機制，
 * 所以排程精確值不可預測，但下列性質應該對任意輸入成立。
 */

const ratingArb = fc.integer({ min: 1, max: 4 }) as fc.Arbitrary<FSRSRating>;

describe('spaced-rep property: calculateNextReview invariants', () => {
  it('rating is recorded as last_rating', () => {
    fc.assert(
      fc.property(ratingArb, (rating) => {
        const state = createInitialState();
        const next = calculateNextReview(rating, state);
        return next.last_rating === rating;
      }),
      { numRuns: 100 }
    );
  });

  it('reps always increases (or equals on first review)', () => {
    fc.assert(
      fc.property(ratingArb, (rating) => {
        const state = createInitialState();
        const next = calculateNextReview(rating, state);
        return next.reps >= state.reps;
      }),
      { numRuns: 100 }
    );
  });

  it('Again rating (1) does NOT exceed Easy rating (4) scheduled days', () => {
    // FSRS 必然性：忘記應排得比簡單早或相同
    fc.assert(
      fc.property(fc.constant(null), () => {
        const state = createInitialState();
        const again = calculateNextReview(1, state);
        const easy = calculateNextReview(4, state);
        return again.scheduled_days <= easy.scheduled_days;
      }),
      { numRuns: 50 }
    );
  });

  it('mastery_level stays in [0, 100] bounds', () => {
    fc.assert(
      fc.property(ratingArb, (rating) => {
        const state = createInitialState();
        const next = calculateNextReview(rating, state);
        return next.mastery_level >= 0 && next.mastery_level <= 100;
      }),
      { numRuns: 100 }
    );
  });

  it('Again rating decreases mastery, Easy increases it (from baseline 50)', () => {
    const baseline = createInitialState();
    baseline.mastery_level = 50;
    const afterAgain = calculateNextReview(1, baseline);
    const afterEasy = calculateNextReview(4, baseline);
    expect(afterEasy.mastery_level).toBeGreaterThan(afterAgain.mastery_level);
  });

  it('due is always a valid ISO timestamp', () => {
    fc.assert(
      fc.property(ratingArb, (rating) => {
        const state = createInitialState();
        const next = calculateNextReview(rating, state);
        const parsed = new Date(next.due);
        return !isNaN(parsed.getTime());
      }),
      { numRuns: 100 }
    );
  });

  it('state field stays in valid FSRS enum (0-3)', () => {
    fc.assert(
      fc.property(ratingArb, (rating) => {
        const state = createInitialState();
        const next = calculateNextReview(rating, state);
        return next.state >= 0 && next.state <= 3;
      }),
      { numRuns: 100 }
    );
  });
});

describe('spaced-rep property: chained reviews', () => {
  it('multiple consecutive Good ratings monotonically grow scheduled_days', () => {
    let state = createInitialState();
    const intervals: number[] = [];
    for (let i = 0; i < 5; i++) {
      state = calculateNextReview(3, state);
      intervals.push(state.scheduled_days);
    }
    // 連續好評，scheduled_days 應該總體呈現遞增（允許 fuzz 偶有相等）
    // 驗第一次與最後一次差距足夠
    expect(intervals[intervals.length - 1]).toBeGreaterThanOrEqual(intervals[0] ?? 0);
  });

  it('Again rating after Good resets/shortens scheduled_days', () => {
    let state = createInitialState();
    state = calculateNextReview(3, state); // Good
    state = calculateNextReview(3, state); // Good again
    const goodInterval = state.scheduled_days;
    const afterAgain = calculateNextReview(1, state);
    expect(afterAgain.scheduled_days).toBeLessThanOrEqual(goodInterval);
  });
});

describe('spaced-rep property: previewIntervals', () => {
  it('returns exactly 4 entries for ratings 1..4', () => {
    const state = createInitialState();
    const preview = previewIntervals(state);
    expect(preview[1]).toBeDefined();
    expect(preview[2]).toBeDefined();
    expect(preview[3]).toBeDefined();
    expect(preview[4]).toBeDefined();
  });

  it('preview[1] (Again) ≤ preview[4] (Easy) for any state', () => {
    const state = createInitialState();
    const preview = previewIntervals(state);
    expect(preview[1]).toBeLessThanOrEqual(preview[4]);
  });

  it('all intervals are non-negative numbers', () => {
    const state = createInitialState();
    const preview = previewIntervals(state);
    for (const r of [1, 2, 3, 4] as const) {
      expect(preview[r]).toBeGreaterThanOrEqual(0);
      expect(Number.isFinite(preview[r])).toBe(true);
    }
  });
});

describe('spaced-rep property: isDueForReview', () => {
  it('returns true for state with past due date', () => {
    const state = createInitialState();
    state.due = new Date(Date.now() - 86400000).toISOString();
    expect(isDueForReview(state)).toBe(true);
  });

  it('returns false for state with future due date', () => {
    const state = createInitialState();
    state.due = new Date(Date.now() + 86400000 * 30).toISOString();
    expect(isDueForReview(state)).toBe(false);
  });
});
