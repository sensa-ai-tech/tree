import { describe, it, expect } from 'vitest';
import { calculateNextReview, createInitialState, isDueForReview, getDueCount } from '@/lib/gamification/spaced-rep';
import type { SpacedRepetitionState } from '@/types/gamification';

describe('createInitialState', () => {
  it('should create state with default values', () => {
    const state = createInitialState();
    expect(state.ease_factor).toBe(2.5);
    expect(state.interval_days).toBe(1);
    expect(state.repetitions).toBe(0);
    expect(state.mastery_level).toBe(0);
    expect(state.last_quality).toBe(3);
  });

  it('should set next_review to tomorrow', () => {
    const state = createInitialState();
    const nextReview = new Date(state.next_review);
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    expect(nextReview.getDate()).toBe(tomorrow.getDate());
  });
});

describe('calculateNextReview', () => {
  const baseState: SpacedRepetitionState = {
    ease_factor: 2.5,
    interval_days: 1,
    repetitions: 0,
    next_review: new Date().toISOString(),
    mastery_level: 50,
    last_quality: 3,
  };

  it('should reset on quality < 3 (failure)', () => {
    const result = calculateNextReview(2, baseState);
    expect(result.repetitions).toBe(0);
    expect(result.interval_days).toBe(1);
  });

  it('should set interval to 1 on first success', () => {
    const result = calculateNextReview(4, baseState);
    expect(result.interval_days).toBe(1);
    expect(result.repetitions).toBe(1);
  });

  it('should set interval to 6 on second success', () => {
    const state = { ...baseState, repetitions: 1 };
    const result = calculateNextReview(4, state);
    expect(result.interval_days).toBe(6);
    expect(result.repetitions).toBe(2);
  });

  it('should multiply interval by ease_factor on subsequent success', () => {
    const state = { ...baseState, repetitions: 2, interval_days: 6 };
    const result = calculateNextReview(4, state);
    expect(result.interval_days).toBe(Math.round(6 * 2.5));
  });

  it('should never let ease_factor go below 1.3', () => {
    const result = calculateNextReview(0, { ...baseState, ease_factor: 1.3 });
    expect(result.ease_factor).toBeGreaterThanOrEqual(1.3);
  });

  it('should increase mastery for high quality', () => {
    const result = calculateNextReview(5, baseState);
    expect(result.mastery_level).toBeGreaterThan(baseState.mastery_level);
  });

  it('should decrease mastery for low quality', () => {
    const result = calculateNextReview(0, baseState);
    expect(result.mastery_level).toBeLessThan(baseState.mastery_level);
  });

  it('should cap mastery between 0 and 100', () => {
    const highState = { ...baseState, mastery_level: 98 };
    const result = calculateNextReview(5, highState);
    expect(result.mastery_level).toBeLessThanOrEqual(100);

    const lowState = { ...baseState, mastery_level: 2 };
    const result2 = calculateNextReview(0, lowState);
    expect(result2.mastery_level).toBeGreaterThanOrEqual(0);
  });
});

describe('isDueForReview', () => {
  it('should return true when past due', () => {
    const state: SpacedRepetitionState = {
      ...createInitialState(),
      next_review: new Date(Date.now() - 86400000).toISOString(),
    };
    expect(isDueForReview(state)).toBe(true);
  });

  it('should return false when not yet due', () => {
    const state: SpacedRepetitionState = {
      ...createInitialState(),
      next_review: new Date(Date.now() + 86400000 * 2).toISOString(),
    };
    expect(isDueForReview(state)).toBe(false);
  });
});

describe('getDueCount', () => {
  it('should count due items', () => {
    const past = new Date(Date.now() - 86400000).toISOString();
    const future = new Date(Date.now() + 86400000 * 2).toISOString();
    const states: SpacedRepetitionState[] = [
      { ...createInitialState(), next_review: past },
      { ...createInitialState(), next_review: past },
      { ...createInitialState(), next_review: future },
    ];
    expect(getDueCount(states)).toBe(2);
  });

  it('should respect maxReviews limit', () => {
    const past = new Date(Date.now() - 86400000).toISOString();
    const states = Array.from({ length: 30 }, () => ({
      ...createInitialState(),
      next_review: past,
    }));
    expect(getDueCount(states, 10)).toBe(10);
  });
});
