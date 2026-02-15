import { describe, it, expect } from 'vitest';
import { calculateXP, calculateTotalSessionXP } from '@/lib/gamification/xp-calculator';

describe('calculateXP', () => {
  describe('complete_node', () => {
    it('should calculate base XP for difficulty 3', () => {
      const xp = calculateXP('complete_node', { difficulty: 3 });
      expect(xp).toBe(100);
    });

    it('should apply 0.5x multiplier for difficulty 1', () => {
      const xp = calculateXP('complete_node', { difficulty: 1 });
      expect(xp).toBe(50);
    });

    it('should apply 2x multiplier for difficulty 5', () => {
      const xp = calculateXP('complete_node', { difficulty: 5 });
      expect(xp).toBe(200);
    });
  });

  describe('pass_checkpoint', () => {
    it('should apply accuracy bonus for >= 90%', () => {
      const xp = calculateXP('pass_checkpoint', { difficulty: 3, accuracy: 0.95 });
      expect(xp).toBe(300); // 200 * 1.0 * 1.5
    });

    it('should not apply accuracy bonus for < 90%', () => {
      const xp = calculateXP('pass_checkpoint', { difficulty: 3, accuracy: 0.85 });
      expect(xp).toBe(200); // 200 * 1.0 * 1.0
    });
  });

  describe('streak_bonus', () => {
    it('should scale with streak days', () => {
      const xp1 = calculateXP('streak_bonus', { streakDays: 1 });
      const xp5 = calculateXP('streak_bonus', { streakDays: 5 });
      expect(xp1).toBe(10);
      expect(xp5).toBe(50);
    });

    it('should cap at 250', () => {
      const xp = calculateXP('streak_bonus', { streakDays: 100 });
      expect(xp).toBe(250);
    });
  });

  describe('first_attempt_bonus', () => {
    it('should return bonus for first attempt', () => {
      const xp = calculateXP('first_attempt_bonus', { isFirstAttempt: true });
      expect(xp).toBe(50);
    });

    it('should return 0 for non-first attempt', () => {
      const xp = calculateXP('first_attempt_bonus', { isFirstAttempt: false });
      expect(xp).toBe(0);
    });
  });

  describe('speed_bonus', () => {
    it('should give double bonus for fast completion', () => {
      const xp = calculateXP('speed_bonus', { timeSpentSeconds: 20 });
      expect(xp).toBe(30); // 15 * 2
    });

    it('should give base bonus for moderate speed', () => {
      const xp = calculateXP('speed_bonus', { timeSpentSeconds: 45 });
      expect(xp).toBe(15);
    });

    it('should give 0 for slow completion', () => {
      const xp = calculateXP('speed_bonus', { timeSpentSeconds: 120 });
      expect(xp).toBe(0);
    });
  });

  describe('exploration_bonus', () => {
    it('should return flat bonus', () => {
      const xp = calculateXP('exploration_bonus');
      expect(xp).toBe(100);
    });
  });
});

describe('calculateTotalSessionXP', () => {
  it('should sum up all event XP', () => {
    const total = calculateTotalSessionXP([
      { source: 'complete_node', params: { difficulty: 3 } },
      { source: 'first_attempt_bonus', params: { isFirstAttempt: true } },
      { source: 'exploration_bonus', params: {} },
    ]);
    expect(total).toBe(100 + 50 + 100);
  });

  it('should return 0 for empty events', () => {
    expect(calculateTotalSessionXP([])).toBe(0);
  });
});
