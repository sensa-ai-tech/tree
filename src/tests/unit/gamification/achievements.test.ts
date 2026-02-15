import { describe, it, expect } from 'vitest';
import {
  ACHIEVEMENTS,
  getAchievementsByCategory,
  getAchievementById,
  getVisibleAchievements,
  checkNewAchievements,
  type UserAchievementState,
} from '@/lib/gamification/achievements';

describe('ACHIEVEMENTS', () => {
  it('should have at least 20 achievements defined', () => {
    expect(ACHIEVEMENTS.length).toBeGreaterThanOrEqual(20);
  });

  it('should have unique IDs', () => {
    const ids = ACHIEVEMENTS.map((a) => a.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('should cover all 6 categories', () => {
    const categories = new Set(ACHIEVEMENTS.map((a) => a.category));
    expect(categories.size).toBe(6);
    expect(categories.has('learning_progress')).toBe(true);
    expect(categories.has('knowledge_mastery')).toBe(true);
    expect(categories.has('diagnostic_skill')).toBe(true);
    expect(categories.has('case_challenge')).toBe(true);
    expect(categories.has('perseverance')).toBe(true);
    expect(categories.has('exploration')).toBe(true);
  });
});

describe('getAchievementsByCategory', () => {
  it('should filter by category', () => {
    const learning = getAchievementsByCategory('learning_progress');
    expect(learning.length).toBeGreaterThan(0);
    expect(learning.every((a) => a.category === 'learning_progress')).toBe(true);
  });
});

describe('getAchievementById', () => {
  it('should find existing achievement', () => {
    const achievement = getAchievementById('first_step');
    expect(achievement).toBeDefined();
    expect(achievement?.title).toBe('踏出第一步');
  });

  it('should return undefined for non-existing ID', () => {
    expect(getAchievementById('non_existent')).toBeUndefined();
  });
});

describe('getVisibleAchievements', () => {
  it('should exclude hidden achievements', () => {
    const visible = getVisibleAchievements();
    const hidden = ACHIEVEMENTS.filter((a) => a.hidden);
    expect(visible.length).toBe(ACHIEVEMENTS.length - hidden.length);
    expect(visible.every((a) => !a.hidden)).toBe(true);
  });
});

describe('checkNewAchievements', () => {
  const baseState: UserAchievementState = {
    completedNodes: 0,
    completedPaths: 0,
    completedCases: 0,
    streakDays: 0,
    specialtiesExplored: 0,
    caseAccuracy: 0,
    allMasteryAbove80: false,
    reviewStreak: 0,
  };

  it('should detect first_step achievement', () => {
    const state = { ...baseState, completedNodes: 1 };
    const newAchievements = checkNewAchievements(state, []);
    expect(newAchievements).toContain('first_step');
  });

  it('should detect multiple achievements at once', () => {
    const state = { ...baseState, completedNodes: 50, completedPaths: 1, streakDays: 30 };
    const newAchievements = checkNewAchievements(state, []);
    expect(newAchievements).toContain('first_step');
    expect(newAchievements).toContain('ten_nodes');
    expect(newAchievements).toContain('fifty_nodes');
    expect(newAchievements).toContain('specialist_path');
    expect(newAchievements).toContain('month_streak');
  });

  it('should not re-detect already unlocked achievements', () => {
    const state = { ...baseState, completedNodes: 10 };
    const newAchievements = checkNewAchievements(state, ['first_step', 'ten_nodes']);
    expect(newAchievements).not.toContain('first_step');
    expect(newAchievements).not.toContain('ten_nodes');
  });

  it('should return empty array when no new achievements', () => {
    const newAchievements = checkNewAchievements(baseState, []);
    expect(newAchievements).toEqual([]);
  });
});
