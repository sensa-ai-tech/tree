import { describe, expect, it } from 'vitest';
import fc from 'fast-check';
import {
  getLevelFromXP,
  getLevelInfo,
  getTierFromLevel,
  getXPForLevel,
} from '@/lib/gamification/level-system';

/**
 * Property-based tests — 用 fast-check 隨機生成大量輸入，
 * 驗證演算法的不變式（invariants）而不是單點輸出。
 *
 * 比單元測試強的點：能找出邊界 case（最小/最大、零、空陣列）
 * 而不是只測你想到的那幾個。
 */

describe('level-system property: getLevelFromXP', () => {
  it('is monotonically non-decreasing — higher XP never lowers level', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 0, max: 5_000_000 }),
        fc.integer({ min: 0, max: 5_000_000 }),
        (a, b) => {
          const [low, high] = a < b ? [a, b] : [b, a];
          return getLevelFromXP(low) <= getLevelFromXP(high);
        }
      ),
      { numRuns: 300 }
    );
  });

  it('always returns an integer between 1 and 25 (inclusive)', () => {
    fc.assert(
      fc.property(fc.integer({ min: 0, max: 100_000_000 }), (xp) => {
        const lvl = getLevelFromXP(xp);
        return Number.isInteger(lvl) && lvl >= 1 && lvl <= 25;
      }),
      { numRuns: 300 }
    );
  });

  it('returns level 1 for any XP < threshold of level 2', () => {
    const xpForLevel2 = getXPForLevel(2);
    fc.assert(
      fc.property(fc.integer({ min: 0, max: xpForLevel2 - 1 }), (xp) => {
        return getLevelFromXP(xp) === 1;
      }),
      { numRuns: 100 }
    );
  });
});

describe('level-system property: getLevelInfo', () => {
  it('progressToNext ∈ [0, 1] for any non-negative XP', () => {
    fc.assert(
      fc.property(fc.integer({ min: 0, max: 10_000_000 }), (xp) => {
        const info = getLevelInfo(xp);
        return info.progressToNext >= 0 && info.progressToNext <= 1;
      }),
      { numRuns: 300 }
    );
  });

  it('xpForCurrentLevel ≤ currentXP holds for all XP', () => {
    fc.assert(
      fc.property(fc.integer({ min: 0, max: 10_000_000 }), (xp) => {
        const info = getLevelInfo(xp);
        return info.xpForCurrentLevel <= info.currentXP;
      }),
      { numRuns: 300 }
    );
  });

  it('xpForNextLevel ≥ xpForCurrentLevel (next ≥ current)', () => {
    fc.assert(
      fc.property(fc.integer({ min: 0, max: 10_000_000 }), (xp) => {
        const info = getLevelInfo(xp);
        return info.xpForNextLevel >= info.xpForCurrentLevel;
      }),
      { numRuns: 300 }
    );
  });

  it('tier matches getTierFromLevel(level)', () => {
    fc.assert(
      fc.property(fc.integer({ min: 0, max: 10_000_000 }), (xp) => {
        const info = getLevelInfo(xp);
        const tier = getTierFromLevel(info.level);
        return info.tier === tier.tier && info.tierLabel === tier.label;
      }),
      { numRuns: 200 }
    );
  });
});

describe('level-system property: getXPForLevel', () => {
  it('is strictly increasing for levels 1..25', () => {
    for (let lvl = 1; lvl < 25; lvl++) {
      expect(getXPForLevel(lvl + 1)).toBeGreaterThan(getXPForLevel(lvl));
    }
  });

  it('inverse property: getLevelFromXP(getXPForLevel(n)) === n', () => {
    fc.assert(
      fc.property(fc.integer({ min: 1, max: 25 }), (lvl) => {
        const xp = getXPForLevel(lvl);
        return getLevelFromXP(xp) === lvl;
      }),
      { numRuns: 25 }
    );
  });
});

describe('level-system property: getTierFromLevel', () => {
  it('returns one of 5 known tiers for any level', () => {
    const validTiers = ['intern', 'resident', 'specialist', 'diplomate', 'mentor'];
    fc.assert(
      fc.property(fc.integer({ min: 1, max: 100 }), (lvl) => {
        return validTiers.includes(getTierFromLevel(lvl).tier);
      }),
      { numRuns: 100 }
    );
  });

  it('tier is also monotonic — tier(n) progression matches level progression', () => {
    const tierOrder = ['intern', 'resident', 'specialist', 'diplomate', 'mentor'];
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 25 }),
        fc.integer({ min: 1, max: 25 }),
        (a, b) => {
          const [low, high] = a < b ? [a, b] : [b, a];
          const tierLow = tierOrder.indexOf(getTierFromLevel(low).tier);
          const tierHigh = tierOrder.indexOf(getTierFromLevel(high).tier);
          return tierLow <= tierHigh;
        }
      ),
      { numRuns: 200 }
    );
  });
});
