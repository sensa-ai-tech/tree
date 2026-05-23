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

// ── Mutation-killing: labelEn 完整斷言（kills survivors 3-8）──────────────────
describe('getTierFromLevel — labelEn & label exhaustive', () => {
  it('intern tier (1-5): labelEn is exactly "Intern"', () => {
    expect(getTierFromLevel(1).labelEn).toBe('Intern');
    expect(getTierFromLevel(5).labelEn).toBe('Intern');
  });

  it('resident tier (6-10): label and labelEn both correct', () => {
    expect(getTierFromLevel(6).label).toBe('住院獸醫');
    expect(getTierFromLevel(6).labelEn).toBe('Resident');
    expect(getTierFromLevel(10).labelEn).toBe('Resident');
  });

  it('diplomate tier (16-20): label and labelEn both correct', () => {
    expect(getTierFromLevel(16).label).toBe('學科專家');
    expect(getTierFromLevel(16).labelEn).toBe('Diplomate');
    expect(getTierFromLevel(20).label).toBe('學科專家');
    expect(getTierFromLevel(20).labelEn).toBe('Diplomate');
  });

  it('mentor tier (21+): label and labelEn both correct', () => {
    expect(getTierFromLevel(21).label).toBe('導師');
    expect(getTierFromLevel(21).labelEn).toBe('Mentor');
    expect(getTierFromLevel(25).label).toBe('導師');
    expect(getTierFromLevel(25).labelEn).toBe('Mentor');
  });
});

// ── Mutation-killing: exact progressToNext arithmetic（kills survivors 9 & 12）
describe('getLevelInfo — exact progressToNext arithmetic', () => {
  it('progressToNext = xpInLevel / xpNeeded (not +, not *)', () => {
    // Level 2: xpForCurrentLevel=500, xpForNextLevel=1200, xpNeeded=700
    // At XP=850: xpInLevel=350, progressToNext=350/700=0.5 exactly
    // mutant (+): xpNeeded=1700 → 350/1700≈0.206  ≠ 0.5
    // mutant (*): 350*700=245000 → clamped to 1        ≠ 0.5
    const info = getLevelInfo(850);
    expect(info.level).toBe(2);
    expect(info.progressToNext).toBe(0.5);
  });

  it('progressToNext mid-level is xpInLevel/xpNeeded (level 3 check)', () => {
    // Level 3: xpForCurrentLevel=1200, xpForNextLevel=2100, xpNeeded=900
    // At XP=1650: xpInLevel=450, progressToNext=450/900=0.5
    const info = getLevelInfo(1650);
    expect(info.level).toBe(3);
    expect(info.progressToNext).toBe(0.5);
  });

  it('progressToNext at XP=750 matches division not sum', () => {
    // xpNeeded should be 700 (1200-500), not 1700 (1200+500)
    // progressToNext = 250/700 ≈ 0.3571...
    const info = getLevelInfo(750);
    expect(info.progressToNext).toBeCloseTo(250 / 700, 5);
  });
});
