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

    it('should apply 0.75x multiplier for difficulty 2', () => {
      const xp = calculateXP('complete_node', { difficulty: 2 });
      expect(xp).toBe(75);
    });

    it('should apply 1.5x multiplier for difficulty 4', () => {
      const xp = calculateXP('complete_node', { difficulty: 4 });
      expect(xp).toBe(150);
    });

    it('should apply 2x multiplier for difficulty 5', () => {
      const xp = calculateXP('complete_node', { difficulty: 5 });
      expect(xp).toBe(200);
    });

    it('should use default difficulty 3 when not provided', () => {
      const xp = calculateXP('complete_node', {});
      expect(xp).toBe(100);
    });
  });

  describe('pass_checkpoint', () => {
    it('should apply accuracy bonus for >= 90%', () => {
      const xp = calculateXP('pass_checkpoint', { difficulty: 3, accuracy: 0.95 });
      expect(xp).toBe(300); // 200 * 1.0 * 1.5
    });

    it('should apply accuracy bonus for exactly 90% (boundary)', () => {
      const xp = calculateXP('pass_checkpoint', { difficulty: 3, accuracy: 0.9 });
      expect(xp).toBe(300); // 0.9 >= 0.9 → bonus applies
    });

    it('should NOT apply accuracy bonus for just below 90%', () => {
      const xp = calculateXP('pass_checkpoint', { difficulty: 3, accuracy: 0.89 });
      expect(xp).toBe(200); // 0.89 < 0.9 → no bonus
    });

    it('should not apply accuracy bonus for < 90%', () => {
      const xp = calculateXP('pass_checkpoint', { difficulty: 3, accuracy: 0.85 });
      expect(xp).toBe(200); // 200 * 1.0 * 1.0
    });

    it('should use default accuracy 0.8 when not provided (no bonus)', () => {
      const xp = calculateXP('pass_checkpoint', { difficulty: 3 });
      expect(xp).toBe(200); // 0.8 < 0.9 → no bonus
    });

    it('should apply difficulty multiplier at difficulty 5 with high accuracy', () => {
      const xp = calculateXP('pass_checkpoint', { difficulty: 5, accuracy: 1.0 });
      expect(xp).toBe(600); // 200 * 2.0 * 1.5
    });
  });

  describe('daily_review', () => {
    it('should return 30 for full accuracy (1.0)', () => {
      const xp = calculateXP('daily_review', { accuracy: 1.0 });
      expect(xp).toBe(30); // 30 * (0.5 + 1.0 * 0.5) = 30
    });

    it('should return 15 for zero accuracy (0.0)', () => {
      const xp = calculateXP('daily_review', { accuracy: 0.0 });
      expect(xp).toBe(15); // 30 * (0.5 + 0 * 0.5) = 15
    });

    it('should return 30 when accuracy not provided (default = 1)', () => {
      const xp = calculateXP('daily_review', {});
      expect(xp).toBe(30); // default accuracy=1 → same as 1.0
    });

    it('should cap accuracy at 1.0 even if value > 1', () => {
      const xp = calculateXP('daily_review', { accuracy: 2.0 });
      expect(xp).toBe(30); // Math.min(2.0, 1) = 1 → 30
    });

    it('should return 23 for accuracy 0.5 (mid-point)', () => {
      const xp = calculateXP('daily_review', { accuracy: 0.5 });
      expect(xp).toBe(23); // 30 * (0.5 + 0.5 * 0.5) = 30 * 0.75 = 22.5 → 23
    });
  });

  describe('case_challenge', () => {
    it('should calculate XP for difficulty 3, 50% accuracy', () => {
      const xp = calculateXP('case_challenge', { difficulty: 3, accuracy: 0.5 });
      expect(xp).toBe(150); // 150 * 1.0 * max(0.5, 1.0) = 150
    });

    it('should apply floor of 0.5 for low accuracy', () => {
      const xp = calculateXP('case_challenge', { difficulty: 3, accuracy: 0.1 });
      expect(xp).toBe(75); // 150 * 1.0 * max(0.5, 0.2) = 75
    });

    it('should scale with difficulty 5 and perfect accuracy', () => {
      const xp = calculateXP('case_challenge', { difficulty: 5, accuracy: 1.0 });
      expect(xp).toBe(600); // 150 * 2.0 * max(0.5, 2.0) = 600
    });

    it('should use default accuracy 0.5 when not provided', () => {
      const xp = calculateXP('case_challenge', { difficulty: 3 });
      expect(xp).toBe(150); // accuracy default=0.5, 0.5*2=1.0 → max(0.5,1.0)=1.0 → 150
    });

    it('should hit accuracy floor at exactly accuracy=0.25', () => {
      const xp = calculateXP('case_challenge', { difficulty: 3, accuracy: 0.25 });
      expect(xp).toBe(75); // 0.25*2=0.5, max(0.5, 0.5)=0.5 → 150*0.5=75
    });

    it('should exceed floor just above accuracy=0.25', () => {
      const xp = calculateXP('case_challenge', { difficulty: 3, accuracy: 0.3 });
      expect(xp).toBe(90); // 0.3*2=0.6, max(0.5, 0.6)=0.6 → 150*0.6=90
    });

    it('should apply difficulty multiplier at difficulty 1', () => {
      const xp = calculateXP('case_challenge', { difficulty: 1, accuracy: 1.0 });
      expect(xp).toBe(150); // 150 * 0.5 * max(0.5, 2.0) = 150
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

    it('should use default streakDays=1 when not provided', () => {
      const xp = calculateXP('streak_bonus', {});
      expect(xp).toBe(10); // 10 * 1 = 10
    });

    it('should return 250 at exactly 25 days (cap boundary)', () => {
      const xp = calculateXP('streak_bonus', { streakDays: 25 });
      expect(xp).toBe(250); // 10 * 25 = 250
    });

    it('should still cap at 250 beyond boundary (26 days)', () => {
      const xp = calculateXP('streak_bonus', { streakDays: 26 });
      expect(xp).toBe(250); // Math.min(250, 260) = 250
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

    it('should give double bonus at exactly 30s (lower boundary)', () => {
      const xp = calculateXP('speed_bonus', { timeSpentSeconds: 30 });
      expect(xp).toBe(30); // <= 30 → double bonus
    });

    it('should give base bonus just above 30s', () => {
      const xp = calculateXP('speed_bonus', { timeSpentSeconds: 31 });
      expect(xp).toBe(15); // 31 <= 60 → base
    });

    it('should give base bonus for moderate speed', () => {
      const xp = calculateXP('speed_bonus', { timeSpentSeconds: 45 });
      expect(xp).toBe(15);
    });

    it('should give base bonus at exactly 60s (upper boundary)', () => {
      const xp = calculateXP('speed_bonus', { timeSpentSeconds: 60 });
      expect(xp).toBe(15); // <= 60 → base
    });

    it('should give 0 for just above 60s', () => {
      const xp = calculateXP('speed_bonus', { timeSpentSeconds: 61 });
      expect(xp).toBe(0);
    });

    it('should give 0 for slow completion', () => {
      const xp = calculateXP('speed_bonus', { timeSpentSeconds: 120 });
      expect(xp).toBe(0);
    });

    it('should give double bonus when time not provided (default 60 ≤ 60)', () => {
      // default timeSpentSeconds=60 → 60 <= 60 → base bonus
      const xp = calculateXP('speed_bonus', {});
      expect(xp).toBe(15);
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
