import { renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useAchievementTracker } from '@/lib/gamification/use-achievement-tracker';
import { useLearningStore } from '@/stores/learning-store';
import { useGamificationStore } from '@/stores/gamification-store';

function resetStores() {
  useLearningStore.setState({
    progress: new Map(),
    todayReviewCount: 0,
    todayNewCount: 0,
    isLoading: false,
  });
  useGamificationStore.setState({
    experience: {
      user_id: '',
      total_xp: 0,
      current_level: 1,
      streak_days: 0,
      last_active_date: null,
      specialties_explored: [],
    },
    achievements: [],
    recentXPEvents: [],
    showLevelUpModal: false,
  });
  localStorage.clear();
}

describe('useAchievementTracker: achievement auto-unlock', () => {
  beforeEach(resetStores);
  afterEach(resetStores);

  it('does not unlock any when no progress', () => {
    renderHook(() => useAchievementTracker());
    expect(useGamificationStore.getState().achievements).toEqual([]);
  });

  it('unlocks first_step after 1 completed node', () => {
    // 寫入 1 個 completed node 後再 mount hook
    useLearningStore.getState().completeNode('IM-L3-001', 90, 10);
    renderHook(() => useAchievementTracker());
    const ids = useGamificationStore.getState().achievements.map((a) => a.achievement_id);
    expect(ids).toContain('first_step');
  });

  it('unlocks ten_nodes when reaching 10 completed', () => {
    for (let i = 0; i < 10; i++) {
      useLearningStore.getState().completeNode(`NODE-${i}`, 90, 10);
    }
    renderHook(() => useAchievementTracker());
    const ids = useGamificationStore.getState().achievements.map((a) => a.achievement_id);
    expect(ids).toContain('first_step');
    expect(ids).toContain('ten_nodes');
  });

  it('does not duplicate already-unlocked achievements', () => {
    useGamificationStore.setState({
      achievements: [
        { user_id: '', achievement_id: 'first_step', unlocked_at: '2026-01-01' },
      ],
    });
    useLearningStore.getState().completeNode('NODE', 90, 10);

    renderHook(() => useAchievementTracker());
    const firstStepEntries = useGamificationStore
      .getState()
      .achievements.filter((a) => a.achievement_id === 'first_step');
    expect(firstStepEntries).toHaveLength(1);
  });

  it('unlocks week_streak when streak_days reaches 7', () => {
    useGamificationStore.setState({
      experience: {
        user_id: '',
        total_xp: 0,
        current_level: 1,
        streak_days: 7,
        last_active_date: '2026-05-20',
        specialties_explored: [],
      },
    });
    // 觸發任一條件變化
    useLearningStore.getState().completeNode('A', 90, 10);
    renderHook(() => useAchievementTracker());
    const ids = useGamificationStore.getState().achievements.map((a) => a.achievement_id);
    expect(ids).toContain('week_streak');
  });
});

describe('useAchievementTracker: streak auto-update', () => {
  beforeEach(() => {
    resetStores();
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-05-20T10:00:00Z'));
  });

  afterEach(() => {
    vi.useRealTimers();
    resetStores();
  });

  it('starts streak at 1 on first activity (no last_active_date)', () => {
    useLearningStore.getState().completeNode('A', 90, 10);
    renderHook(() => useAchievementTracker());
    expect(useGamificationStore.getState().experience.streak_days).toBe(1);
    expect(useGamificationStore.getState().experience.last_active_date).toBe('2026-05-20');
  });

  it('increments streak when last activity was yesterday', () => {
    useGamificationStore.setState({
      experience: {
        user_id: '',
        total_xp: 0,
        current_level: 1,
        streak_days: 3,
        last_active_date: '2026-05-19',
        specialties_explored: [],
      },
    });
    useLearningStore.getState().completeNode('A', 90, 10);
    renderHook(() => useAchievementTracker());
    expect(useGamificationStore.getState().experience.streak_days).toBe(4);
  });

  it('resets streak to 1 when gap > 1 day', () => {
    useGamificationStore.setState({
      experience: {
        user_id: '',
        total_xp: 0,
        current_level: 1,
        streak_days: 10,
        last_active_date: '2026-05-10',
        specialties_explored: [],
      },
    });
    useLearningStore.getState().completeNode('A', 90, 10);
    renderHook(() => useAchievementTracker());
    expect(useGamificationStore.getState().experience.streak_days).toBe(1);
  });

  it('does NOT update streak if already updated today', () => {
    useGamificationStore.setState({
      experience: {
        user_id: '',
        total_xp: 0,
        current_level: 1,
        streak_days: 5,
        last_active_date: '2026-05-20',
        specialties_explored: [],
      },
    });
    useLearningStore.getState().completeNode('A', 90, 10);
    renderHook(() => useAchievementTracker());
    expect(useGamificationStore.getState().experience.streak_days).toBe(5);
  });

  it('does NOT update streak when no learning activity at all', () => {
    useGamificationStore.setState({
      experience: {
        user_id: '',
        total_xp: 0,
        current_level: 1,
        streak_days: 0,
        last_active_date: null,
        specialties_explored: [],
      },
    });
    renderHook(() => useAchievementTracker());
    expect(useGamificationStore.getState().experience.streak_days).toBe(0);
  });

  it('triggers on review activity alone (no node completion)', () => {
    useLearningStore.getState().incrementReviewCount();
    renderHook(() => useAchievementTracker());
    expect(useGamificationStore.getState().experience.streak_days).toBe(1);
  });
});
