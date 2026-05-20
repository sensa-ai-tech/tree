import { describe, expect, it } from 'vitest';
import {
  getLevelFromXP,
  getTierFromLevel,
  getLevelInfo,
  getXPForLevel,
} from '@/lib/gamification/level-system';

describe('getLevelFromXP', () => {
  it('starts at level 1 with 0 XP', () => {
    expect(getLevelFromXP(0)).toBe(1);
  });

  it('stays at level 1 just below threshold', () => {
    expect(getLevelFromXP(499)).toBe(1);
  });

  it('reaches level 2 at exactly 500 XP', () => {
    expect(getLevelFromXP(500)).toBe(2);
  });

  it('reaches level 3 at 1200 XP', () => {
    // Level 2: 500, Level 3: 500 + 700 = 1200
    expect(getLevelFromXP(1200)).toBe(3);
  });

  it('caps at level 25 for unreasonably high XP', () => {
    expect(getLevelFromXP(10_000_000)).toBe(25);
  });

  it('is monotonic — higher XP never lowers level', () => {
    let prev = 0;
    for (let xp = 0; xp <= 100_000; xp += 137) {
      const lvl = getLevelFromXP(xp);
      expect(lvl).toBeGreaterThanOrEqual(prev);
      prev = lvl;
    }
  });
});

describe('getTierFromLevel', () => {
  it('level 1-5 → intern', () => {
    expect(getTierFromLevel(1).tier).toBe('intern');
    expect(getTierFromLevel(5).tier).toBe('intern');
    expect(getTierFromLevel(1).label).toBe('見習獸醫');
  });

  it('level 6-10 → resident', () => {
    expect(getTierFromLevel(6).tier).toBe('resident');
    expect(getTierFromLevel(10).tier).toBe('resident');
  });

  it('level 11-15 → specialist', () => {
    expect(getTierFromLevel(11).tier).toBe('specialist');
    expect(getTierFromLevel(15).tier).toBe('specialist');
  });

  it('level 16-20 → diplomate', () => {
    expect(getTierFromLevel(16).tier).toBe('diplomate');
    expect(getTierFromLevel(20).tier).toBe('diplomate');
  });

  it('level 21+ → mentor', () => {
    expect(getTierFromLevel(21).tier).toBe('mentor');
    expect(getTierFromLevel(25).tier).toBe('mentor');
  });

  it('attaches both 中英文 labels', () => {
    const t = getTierFromLevel(11);
    expect(t.label).toBe('專科醫師');
    expect(t.labelEn).toBe('Specialist');
  });
});

describe('getLevelInfo', () => {
  it('returns 0%–100% progressToNext bounded', () => {
    for (const xp of [0, 250, 500, 800, 1200, 5000, 50000]) {
      const info = getLevelInfo(xp);
      expect(info.progressToNext).toBeGreaterThanOrEqual(0);
      expect(info.progressToNext).toBeLessThanOrEqual(1);
    }
  });

  it('progressToNext is 0 at exact threshold start', () => {
    const info = getLevelInfo(500);
    expect(info.level).toBe(2);
    expect(info.xpForCurrentLevel).toBe(500);
    expect(info.progressToNext).toBe(0);
  });

  it('xpForCurrentLevel ≤ currentXP < xpForNextLevel', () => {
    const info = getLevelInfo(800);
    expect(info.xpForCurrentLevel).toBeLessThanOrEqual(info.currentXP);
    expect(info.currentXP).toBeLessThan(info.xpForNextLevel);
  });

  it('attaches tier info matching getTierFromLevel', () => {
    const info = getLevelInfo(0);
    expect(info.tier).toBe('intern');
    expect(info.tierLabel).toBe('見習獸醫');
  });

  it('handles max level (25) where next == current', () => {
    const info = getLevelInfo(1_000_000);
    expect(info.level).toBe(25);
    expect(info.xpForNextLevel).toBe(info.xpForCurrentLevel);
    expect(info.progressToNext).toBe(1); // no next, treat as full
  });
});

describe('getXPForLevel', () => {
  it('level 1 needs 0 XP', () => {
    expect(getXPForLevel(1)).toBe(0);
  });

  it('level 2 needs 500 XP', () => {
    expect(getXPForLevel(2)).toBe(500);
  });

  it('matches getLevelInfo.xpForCurrentLevel', () => {
    for (const lvl of [1, 3, 7, 12, 20]) {
      const xp = getXPForLevel(lvl);
      const info = getLevelInfo(xp);
      expect(info.level).toBe(lvl);
      expect(info.xpForCurrentLevel).toBe(xp);
    }
  });

  it('is strictly increasing across levels', () => {
    for (let lvl = 1; lvl < 25; lvl++) {
      expect(getXPForLevel(lvl + 1)).toBeGreaterThan(getXPForLevel(lvl));
    }
  });
});
