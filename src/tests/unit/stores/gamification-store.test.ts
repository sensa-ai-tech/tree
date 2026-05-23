import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { useGamificationStore } from '@/stores/gamification-store';
import type { XPEvent, UserExperience, UserAchievement } from '@/types/gamification';

function getState() {
  return useGamificationStore.getState();
}

const defaultExperience: UserExperience = {
  user_id: '',
  total_xp: 0,
  current_level: 1,
  streak_days: 0,
  last_active_date: null,
  specialties_explored: [],
};

function resetStore() {
  useGamificationStore.setState({
    experience: { ...defaultExperience },
    achievements: [],
    recentXPEvents: [],
    showLevelUpModal: false,
  });
  localStorage.clear();
}

function makeXPEvent(amount: number, source: XPEvent['source'] = 'complete_node'): XPEvent {
  return {
    source,
    amount,
    description: `gain ${amount} XP`,
    timestamp: new Date().toISOString(),
  };
}

describe('gamification-store: addXP', () => {
  beforeEach(resetStore);
  afterEach(resetStore);

  it('accumulates total_xp', () => {
    getState().addXP(makeXPEvent(100));
    getState().addXP(makeXPEvent(150));
    expect(getState().experience.total_xp).toBe(250);
  });

  it('triggers level-up modal when crossing threshold', () => {
    // Level 2 threshold = 500 XP
    expect(getState().experience.current_level).toBe(1);
    expect(getState().showLevelUpModal).toBe(false);
    getState().addXP(makeXPEvent(500));
    expect(getState().experience.current_level).toBe(2);
    expect(getState().showLevelUpModal).toBe(true);
  });

  it('does NOT trigger level-up modal when staying in same level', () => {
    getState().addXP(makeXPEvent(100));
    expect(getState().experience.current_level).toBe(1);
    expect(getState().showLevelUpModal).toBe(false);
  });

  it('appends events to recentXPEvents (newest first)', () => {
    getState().addXP(makeXPEvent(10, 'daily_review'));
    getState().addXP(makeXPEvent(50, 'complete_node'));
    const events = getState().recentXPEvents;
    expect(events).toHaveLength(2);
    expect(events[0]?.amount).toBe(50);
    expect(events[1]?.amount).toBe(10);
  });

  it('caps recentXPEvents at 20 items', () => {
    for (let i = 0; i < 25; i++) {
      getState().addXP(makeXPEvent(10));
    }
    expect(getState().recentXPEvents).toHaveLength(20);
  });

  it('correctly computes level for big XP gains across thresholds', () => {
    getState().addXP(makeXPEvent(2000));
    // Level 2: 500, Level 3: 1200, Level 4: 2100 — at 2000 should be level 3
    expect(getState().experience.current_level).toBe(3);
  });
});

describe('gamification-store: unlockAchievement', () => {
  beforeEach(resetStore);
  afterEach(resetStore);

  it('adds new achievement with timestamp', () => {
    useGamificationStore.setState({
      experience: { ...defaultExperience, user_id: 'user-42' },
    });
    getState().unlockAchievement('ach-1');
    expect(getState().achievements).toHaveLength(1);
    const ach = getState().achievements[0];
    expect(ach?.achievement_id).toBe('ach-1');
    expect(ach?.user_id).toBe('user-42');
    expect(ach?.unlocked_at).toBeTruthy();
  });

  it('idempotent — duplicate unlock keeps single entry', () => {
    getState().unlockAchievement('ach-1');
    getState().unlockAchievement('ach-1');
    expect(getState().achievements).toHaveLength(1);
  });

  it('allows multiple distinct achievements', () => {
    getState().unlockAchievement('ach-1');
    getState().unlockAchievement('ach-2');
    getState().unlockAchievement('ach-3');
    expect(getState().achievements).toHaveLength(3);
  });
});

describe('gamification-store: updateStreak', () => {
  beforeEach(resetStore);
  afterEach(resetStore);

  it('updates streak_days and last_active_date', () => {
    getState().updateStreak(7);
    expect(getState().experience.streak_days).toBe(7);
    const today = new Date().toISOString().split('T')[0];
    expect(getState().experience.last_active_date).toBe(today);
  });

  it('overwrites previous streak value', () => {
    getState().updateStreak(3);
    getState().updateStreak(0);
    expect(getState().experience.streak_days).toBe(0);
  });
});

describe('gamification-store: addSpecialty', () => {
  beforeEach(resetStore);
  afterEach(resetStore);

  it('adds new specialty', () => {
    getState().addSpecialty('IM');
    expect(getState().experience.specialties_explored).toContain('IM');
  });

  it('dedupes when adding same specialty twice', () => {
    getState().addSpecialty('IM');
    getState().addSpecialty('IM');
    expect(getState().experience.specialties_explored).toEqual(['IM']);
  });

  it('preserves order of distinct specialties', () => {
    getState().addSpecialty('IM');
    getState().addSpecialty('CARDIO');
    getState().addSpecialty('NEURO');
    expect(getState().experience.specialties_explored).toEqual(['IM', 'CARDIO', 'NEURO']);
  });
});

describe('gamification-store: setters + reset', () => {
  beforeEach(resetStore);
  afterEach(resetStore);

  it('setShowLevelUpModal flips modal flag', () => {
    getState().setShowLevelUpModal(true);
    expect(getState().showLevelUpModal).toBe(true);
    getState().setShowLevelUpModal(false);
    expect(getState().showLevelUpModal).toBe(false);
  });

  it('setExperience replaces entire experience object', () => {
    const exp: UserExperience = {
      user_id: 'u1',
      total_xp: 1234,
      current_level: 5,
      streak_days: 12,
      last_active_date: '2026-05-20',
      specialties_explored: ['IM', 'SURG'],
    };
    getState().setExperience(exp);
    expect(getState().experience).toEqual(exp);
  });

  it('setAchievements replaces achievement list', () => {
    const list: UserAchievement[] = [
      { user_id: 'u', achievement_id: 'a1', unlocked_at: '2026-01-01' },
      { user_id: 'u', achievement_id: 'a2', unlocked_at: '2026-01-02' },
    ];
    getState().setAchievements(list);
    expect(getState().achievements).toEqual(list);
  });

  it('setRecentXPEvents replaces the recentXPEvents list', () => {
    // line 101 of gamification-store.ts — previously uncovered
    const events: XPEvent[] = [
      makeXPEvent(50, 'complete_node'),
      makeXPEvent(20, 'daily_review'),
    ];
    getState().setRecentXPEvents(events);
    expect(getState().recentXPEvents).toHaveLength(2);
    expect(getState().recentXPEvents[0]?.amount).toBe(50);
    expect(getState().recentXPEvents[1]?.amount).toBe(20);

    // passing empty array clears events
    getState().setRecentXPEvents([]);
    expect(getState().recentXPEvents).toHaveLength(0);
  });

  it('resetStore clears everything', () => {
    getState().addXP(makeXPEvent(1000));
    getState().unlockAchievement('a1');
    getState().updateStreak(5);
    getState().addSpecialty('IM');
    getState().setShowLevelUpModal(true);

    getState().resetStore();

    expect(getState().experience.total_xp).toBe(0);
    expect(getState().achievements).toEqual([]);
    expect(getState().recentXPEvents).toEqual([]);
    expect(getState().showLevelUpModal).toBe(false);
  });
});

describe('gamification-store: persist', () => {
  beforeEach(resetStore);
  afterEach(resetStore);

  it('persists experience + achievements + recentXPEvents to localStorage', () => {
    getState().addXP(makeXPEvent(100));
    getState().unlockAchievement('a-persist');

    const stored = localStorage.getItem('vet-gamification-storage');
    expect(stored).toBeTruthy();
    const parsed = JSON.parse(stored!);
    expect(parsed.state.experience.total_xp).toBe(100);
    expect(parsed.state.achievements).toHaveLength(1);
  });

  it('does NOT persist showLevelUpModal (transient UI state)', () => {
    getState().setShowLevelUpModal(true);
    const stored = localStorage.getItem('vet-gamification-storage');
    if (stored) {
      const parsed = JSON.parse(stored);
      expect(parsed.state.showLevelUpModal).toBeUndefined();
    }
  });
});
