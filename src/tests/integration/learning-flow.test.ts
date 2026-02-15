import { describe, it, expect, beforeEach } from 'vitest';
import { calculateXP, calculateTotalSessionXP } from '@/lib/gamification/xp-calculator';
import { getLevelFromXP, getTierFromLevel, getLevelInfo } from '@/lib/gamification/level-system';
import { calculateNextReview, createInitialState, isDueForReview } from '@/lib/gamification/spaced-rep';
import { checkNewAchievements, type UserAchievementState } from '@/lib/gamification/achievements';

describe('Complete Learning Flow', () => {
  it('should simulate a full learning session', () => {
    // 1. 完成一個節點 → 獲得 XP
    const nodeXP = calculateXP('complete_node', { difficulty: 3 });
    expect(nodeXP).toBe(100);

    // 2. 首次嘗試獎勵
    const firstAttemptXP = calculateXP('first_attempt_bonus', { isFirstAttempt: true });
    expect(firstAttemptXP).toBe(50);

    // 3. 總 XP
    const totalXP = calculateTotalSessionXP([
      { source: 'complete_node', params: { difficulty: 3 } },
      { source: 'first_attempt_bonus', params: { isFirstAttempt: true } },
    ]);
    expect(totalXP).toBe(150);

    // 4. 檢查等級
    const level = getLevelFromXP(totalXP);
    expect(level).toBe(1);

    const levelInfo = getLevelInfo(totalXP);
    expect(levelInfo.tier).toBe('intern');

    // 5. 檢查成就
    const achievements = checkNewAchievements(
      {
        completedNodes: 1,
        completedPaths: 0,
        completedCases: 0,
        streakDays: 1,
        specialtiesExplored: 1,
        caseAccuracy: 0,
        allMasteryAbove80: false,
        reviewStreak: 0,
      },
      []
    );
    expect(achievements).toContain('first_step');
  });

  it('should simulate level progression', () => {
    // Level 1: 0 XP
    expect(getLevelFromXP(0)).toBe(1);
    expect(getTierFromLevel(1).tier).toBe('intern');

    // Level 2: 500 XP
    expect(getLevelFromXP(500)).toBe(2);
    expect(getTierFromLevel(2).tier).toBe('intern');

    // Level 6 should be resident
    const level6Info = getTierFromLevel(6);
    expect(level6Info.tier).toBe('resident');

    // Level 11 should be specialist
    expect(getTierFromLevel(11).tier).toBe('specialist');

    // Level 21 should be mentor
    expect(getTierFromLevel(21).tier).toBe('mentor');
  });

  it('should simulate spaced repetition flow', () => {
    // 1. 建立初始狀態
    const initial = createInitialState();
    expect(initial.repetitions).toBe(0);

    // 2. 第一次成功複習 (quality 4)
    const after1 = calculateNextReview(4, initial);
    expect(after1.repetitions).toBe(1);
    expect(after1.interval_days).toBe(1);

    // 3. 第二次成功複習
    const after2 = calculateNextReview(4, after1);
    expect(after2.repetitions).toBe(2);
    expect(after2.interval_days).toBe(6);

    // 4. 第三次失敗
    const after3 = calculateNextReview(1, after2);
    expect(after3.repetitions).toBe(0);
    expect(after3.interval_days).toBe(1);

    // 5. 回到第一次
    const after4 = calculateNextReview(5, after3);
    expect(after4.repetitions).toBe(1);
    expect(after4.mastery_level).toBeGreaterThan(0);
  });

  it('should handle achievement progression over time', () => {
    const state: UserAchievementState = {
      completedNodes: 0,
      completedPaths: 0,
      completedCases: 0,
      streakDays: 0,
      specialtiesExplored: 0,
      caseAccuracy: 0,
      allMasteryAbove80: false,
      reviewStreak: 0,
    };

    // Day 1: 完成 1 個節點
    state.completedNodes = 1;
    state.streakDays = 1;
    let newAchievements = checkNewAchievements(state, []);
    expect(newAchievements).toContain('first_step');

    const unlocked = [...newAchievements];

    // Day 7: 完成 10 個節點, 7 天 streak
    state.completedNodes = 10;
    state.streakDays = 7;
    newAchievements = checkNewAchievements(state, unlocked);
    expect(newAchievements).toContain('ten_nodes');
    expect(newAchievements).toContain('week_streak');
    expect(newAchievements).not.toContain('first_step');
  });
});
