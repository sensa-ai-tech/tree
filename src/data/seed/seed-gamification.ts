import type { UserExperience, UserAchievement, XPEvent } from '@/types/gamification';

const userId = 'demo-student-001';

export const SEED_EXPERIENCE: UserExperience = {
  user_id: userId,
  total_xp: 930,
  current_level: 2,
  streak_days: 5,
  last_active_date: '2026-02-15',
  specialties_explored: ['CARDIO'],
};

export const SEED_ACHIEVEMENTS: UserAchievement[] = [
  {
    user_id: userId,
    achievement_id: 'first_step',
    unlocked_at: '2026-02-08T09:15:00Z',
  },
  {
    user_id: userId,
    achievement_id: 'week_streak',
    unlocked_at: '2026-02-14T10:00:00Z',
  },
];

export const SEED_XP_EVENTS: XPEvent[] = [
  {
    source: 'complete_node',
    amount: 100,
    description: '完成節點：心臟科總覽',
    timestamp: '2026-02-08T09:15:00Z',
  },
  {
    source: 'first_attempt_bonus',
    amount: 50,
    description: '首次學習獎勵',
    timestamp: '2026-02-08T09:15:00Z',
  },
  {
    source: 'exploration_bonus',
    amount: 100,
    description: '探索新專科：心臟科',
    timestamp: '2026-02-08T09:15:00Z',
  },
  {
    source: 'complete_node',
    amount: 150,
    description: '完成節點：心臟解剖學',
    timestamp: '2026-02-09T10:22:00Z',
  },
  {
    source: 'complete_node',
    amount: 150,
    description: '完成節點：心臟電生理學',
    timestamp: '2026-02-10T11:30:00Z',
  },
  {
    source: 'complete_node',
    amount: 130,
    description: '完成節點：心臟血流動力學',
    timestamp: '2026-02-11T09:25:00Z',
  },
  {
    source: 'complete_node',
    amount: 150,
    description: '完成節點：瓣膜退化機轉',
    timestamp: '2026-02-12T14:20:00Z',
  },
  {
    source: 'streak_bonus',
    amount: 100,
    description: '連續學習 5 天獎勵',
    timestamp: '2026-02-14T10:00:00Z',
  },
];
