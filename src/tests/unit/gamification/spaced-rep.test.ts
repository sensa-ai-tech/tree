import { describe, it, expect, vi } from 'vitest';
import { calculateNextReview, createInitialState, isDueForReview, getDueCount, previewIntervals } from '@/lib/gamification/spaced-rep';
import type { SpacedRepetitionState } from '@/types/gamification';

describe('createInitialState', () => {
  it('should create state with ts-fsrs default values', () => {
    const state = createInitialState();
    expect(state.stability).toBe(0);
    expect(state.difficulty).toBe(0);
    expect(state.reps).toBe(0);
    expect(state.lapses).toBe(0);
    expect(state.state).toBe(0); // New
    expect(state.mastery_level).toBe(0);
    expect(state.last_rating).toBe(3); // Good
  });

  it('should have a valid due date', () => {
    const state = createInitialState();
    const due = new Date(state.due);
    expect(due).toBeInstanceOf(Date);
    expect(due.getTime()).not.toBeNaN();
  });
});

describe('calculateNextReview', () => {
  it('should advance reps on Good rating', () => {
    const initial = createInitialState();
    const result = calculateNextReview(3, initial); // Good
    expect(result.reps).toBe(1);
    expect(result.state).not.toBe(0); // No longer New
    expect(result.stability).toBeGreaterThan(0);
  });

  it('should handle Again rating (lapse or relearning)', () => {
    const initial = createInitialState();
    // Learn the card
    const learned = calculateNextReview(3, initial);
    // Press Again — should either stay in Learning/Relearning or increase lapses
    const lapsed = calculateNextReview(1, learned);
    // After Again, the card should be in Learning(1) or Relearning(3)
    expect([1, 3]).toContain(lapsed.state);
    // Reps should reset or stay the same
    expect(lapsed.last_rating).toBe(1);
  });

  it('should give longer intervals for Easy vs Hard', () => {
    const initial = createInitialState();
    const afterHard = calculateNextReview(2, initial);
    const afterEasy = calculateNextReview(4, initial);
    // Easy should schedule further out than Hard
    expect(new Date(afterEasy.due).getTime()).toBeGreaterThanOrEqual(
      new Date(afterHard.due).getTime()
    );
  });

  it('should increase mastery for Good/Easy ratings', () => {
    const state = { ...createInitialState(), mastery_level: 50 };
    const afterGood = calculateNextReview(3, state);
    expect(afterGood.mastery_level).toBeGreaterThan(50);

    const afterEasy = calculateNextReview(4, state);
    expect(afterEasy.mastery_level).toBeGreaterThan(50);
  });

  it('should decrease mastery for Again rating', () => {
    const state = { ...createInitialState(), mastery_level: 50 };
    const afterAgain = calculateNextReview(1, state);
    expect(afterAgain.mastery_level).toBeLessThan(50);
  });

  it('should cap mastery between 0 and 100', () => {
    const highState = { ...createInitialState(), mastery_level: 98 };
    const result = calculateNextReview(4, highState);
    expect(result.mastery_level).toBeLessThanOrEqual(100);

    const lowState = { ...createInitialState(), mastery_level: 2 };
    const result2 = calculateNextReview(1, lowState);
    expect(result2.mastery_level).toBeGreaterThanOrEqual(0);
  });

  it('should store the last rating', () => {
    const initial = createInitialState();
    const result = calculateNextReview(2, initial);
    expect(result.last_rating).toBe(2);
  });
});

describe('isDueForReview', () => {
  it('should return true when past due', () => {
    const state: SpacedRepetitionState = {
      ...createInitialState(),
      due: new Date(Date.now() - 86400000).toISOString(),
    };
    expect(isDueForReview(state)).toBe(true);
  });

  it('should return false when not yet due', () => {
    const state: SpacedRepetitionState = {
      ...createInitialState(),
      due: new Date(Date.now() + 86400000 * 2).toISOString(),
    };
    expect(isDueForReview(state)).toBe(false);
  });

  it('returns true when due equals current time (boundary: <= not <)', () => {
    vi.useFakeTimers();
    vi.setSystemTime(1_000_000);
    try {
      const state: SpacedRepetitionState = {
        ...createInitialState(),
        due: new Date(1_000_000).toISOString(),
      };
      // <= means "due now" is truthy; a < mutant would return false here
      expect(isDueForReview(state)).toBe(true);
    } finally {
      vi.useRealTimers();
    }
  });
});

describe('getDueCount', () => {
  it('should count due items', () => {
    const past = new Date(Date.now() - 86400000).toISOString();
    const future = new Date(Date.now() + 86400000 * 2).toISOString();
    const states: SpacedRepetitionState[] = [
      { ...createInitialState(), due: past },
      { ...createInitialState(), due: past },
      { ...createInitialState(), due: future },
    ];
    expect(getDueCount(states)).toBe(2);
  });

  it('should respect maxReviews limit', () => {
    const past = new Date(Date.now() - 86400000).toISOString();
    const states = Array.from({ length: 30 }, () => ({
      ...createInitialState(),
      due: past,
    }));
    expect(getDueCount(states, 10)).toBe(10);
  });
});

describe('previewIntervals', () => {
  it('should return intervals for all 4 ratings', () => {
    const state = createInitialState();
    const intervals = previewIntervals(state);
    expect(intervals).toHaveProperty('1'); // Again
    expect(intervals).toHaveProperty('2'); // Hard
    expect(intervals).toHaveProperty('3'); // Good
    expect(intervals).toHaveProperty('4'); // Easy
  });

  it('should return non-negative intervals', () => {
    const state = createInitialState();
    const intervals = previewIntervals(state);
    expect(intervals[1]).toBeGreaterThanOrEqual(0);
    expect(intervals[2]).toBeGreaterThanOrEqual(0);
    expect(intervals[3]).toBeGreaterThanOrEqual(0);
    expect(intervals[4]).toBeGreaterThanOrEqual(0);
  });

  it('intervals are monotonically ordered: Again ≤ Hard ≤ Good ≤ Easy', () => {
    const state = createInitialState();
    const intervals = previewIntervals(state);
    // Kills mutants that swap Rating.Again↔Rating.Easy etc.
    expect(intervals[1]).toBeLessThanOrEqual(intervals[2]); // Again ≤ Hard
    expect(intervals[2]).toBeLessThanOrEqual(intervals[3]); // Hard ≤ Good
    expect(intervals[3]).toBeLessThanOrEqual(intervals[4]); // Good ≤ Easy
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// Mutation-targeted tests: exact mastery deltas with a high-reps Review card.
// With reps=100 → result.reps ≥ 100 → Math.min(5, reps*0.5) = 5 always.
// This pins each ratingImpact literal and the Math.min(5,…) clamp constant.
// ─────────────────────────────────────────────────────────────────────────────

/** A "mature" Review card: reps=100 guarantees reps_contribution = 5 regardless
 *  of whether FSRS increments reps for Again/Hard lapses. */
function matureState(mastery: number): SpacedRepetitionState {
  const now = Date.now();
  return {
    due: new Date(now - 86_400_000).toISOString(), // 1 day past due
    stability: 20,
    difficulty: 5,
    elapsed_days: 1,
    scheduled_days: 20,
    reps: 100,
    lapses: 0,
    state: 2, // Review
    last_review: new Date(now - 86_400_000).toISOString(),
    mastery_level: mastery,
    last_rating: 3,
  };
}

describe('calculateNextReview — exact mastery deltas', () => {
  // formula: mastery = Math.min(100, Math.max(0, Math.round(
  //   currentMastery + ratingImpact[rating] + Math.min(5, result.reps * 0.5)
  // )))
  // With result.reps ≥ 100, Math.min(5, reps*0.5) = 5 in all cases.

  it('applies ratingImpact -15 for Again (rating=1)', () => {
    // 50 + (-15) + 5 = 40
    expect(calculateNextReview(1, matureState(50)).mastery_level).toBe(40);
  });

  it('applies ratingImpact -3 for Hard (rating=2)', () => {
    // 50 + (-3) + 5 = 52
    expect(calculateNextReview(2, matureState(50)).mastery_level).toBe(52);
  });

  it('applies ratingImpact +5 for Good (rating=3)', () => {
    // 50 + 5 + 5 = 60
    expect(calculateNextReview(3, matureState(50)).mastery_level).toBe(60);
  });

  it('applies ratingImpact +10 for Easy (rating=4)', () => {
    // 50 + 10 + 5 = 65
    expect(calculateNextReview(4, matureState(50)).mastery_level).toBe(65);
  });

  it('clamps mastery at exactly 100 — not 107', () => {
    // 92 + 10 + 5 = 107 → Math.min(100, 107) = 100
    expect(calculateNextReview(4, matureState(92)).mastery_level).toBe(100);
  });

  it('clamps mastery at exactly 0 — not negative', () => {
    // 8 + (-15) + 5 = -2 → Math.max(0, -2) = 0
    expect(calculateNextReview(1, matureState(8)).mastery_level).toBe(0);
  });
});

describe('calculateNextReview — stability/difficulty rounding', () => {
  it('rounds stability to 2 decimal places', () => {
    const result = calculateNextReview(3, createInitialState());
    // If Math.round is omitted, result.stability would have many decimal places
    // and the following identity would fail: x == Math.round(x*100)/100
    expect(result.stability).toBe(Math.round(result.stability * 100) / 100);
  });

  it('rounds difficulty to 2 decimal places', () => {
    const mid = calculateNextReview(3, createInitialState());
    const result = calculateNextReview(2, mid);
    expect(result.difficulty).toBe(Math.round(result.difficulty * 100) / 100);
  });
});

describe('calculateNextReview — last_review tracking', () => {
  it('initial state has null last_review (no last_review to set)', () => {
    expect(createInitialState().last_review).toBeNull();
  });

  it('sets last_review to approximately now after first review', () => {
    const before = Date.now();
    const result = calculateNextReview(3, createInitialState());
    const after = Date.now();
    expect(result.last_review).not.toBeNull();
    const t = new Date(result.last_review!).getTime();
    expect(t).toBeGreaterThanOrEqual(before);
    expect(t).toBeLessThanOrEqual(after + 100);
  });
});

describe('getDueCount — edge cases', () => {
  it('returns 0 for an empty array', () => {
    expect(getDueCount([])).toBe(0);
  });

  it('returns exact count when dueCount < default maxReviews (20)', () => {
    const past = new Date(Date.now() - 1000).toISOString();
    const states = Array.from({ length: 7 }, () => ({ ...createInitialState(), due: past }));
    // Math.min(7, 20) = 7; Math.max(7, 20) = 20 → pins Math.min
    expect(getDueCount(states)).toBe(7);
  });

  it('default maxReviews is exactly 20 (not 19 or 21)', () => {
    const past = new Date(Date.now() - 1000).toISOString();
    const states = Array.from({ length: 25 }, () => ({ ...createInitialState(), due: past }));
    expect(getDueCount(states)).toBe(20);
  });
});
