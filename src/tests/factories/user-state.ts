import type {
  UserExperience,
  UserAchievement,
  UserNodeProgress,
  XPEvent,
  XPSource,
} from '@/types/gamification';

/**
 * UserExperience 預設：全新使用者 (Lv.1, 0 XP)。
 */
export function makeUserExperience(
  overrides: Partial<UserExperience> = {}
): UserExperience {
  return {
    user_id: 'test-user',
    total_xp: 0,
    current_level: 1,
    streak_days: 0,
    last_active_date: null,
    specialties_explored: [],
    ...overrides,
  };
}

/**
 * UserAchievement 預設：剛 unlock。
 */
let achCounter = 0;
export function makeUserAchievement(
  overrides: Partial<UserAchievement> = {}
): UserAchievement {
  achCounter += 1;
  return {
    user_id: 'test-user',
    achievement_id: `ach-${achCounter}`,
    unlocked_at: '2026-01-01T00:00:00Z',
    ...overrides,
  };
}

/**
 * UserNodeProgress 預設：completed + score 90。
 */
export function makeUserNodeProgress(
  overrides: Partial<UserNodeProgress> = {}
): UserNodeProgress {
  return {
    user_id: 'test-user',
    node_id: 'TEST-L3-001',
    status: 'completed',
    started_at: '2026-05-19T10:00:00Z',
    completed_at: '2026-05-19T10:15:00Z',
    score: 90,
    time_spent_minutes: 15,
    ...overrides,
  };
}

/**
 * XPEvent 預設：complete_node + 50 XP。
 */
export function makeXPEvent(
  amount: number = 50,
  source: XPSource = 'complete_node',
  overrides: Partial<XPEvent> = {}
): XPEvent {
  return {
    source,
    amount,
    description: `gain ${amount} XP from ${source}`,
    timestamp: new Date().toISOString(),
    ...overrides,
  };
}
