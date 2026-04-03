import { describe, it, expect } from 'vitest';
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
});
