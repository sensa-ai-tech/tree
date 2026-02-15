export type XPSource =
  | 'complete_node'
  | 'pass_checkpoint'
  | 'daily_review'
  | 'case_challenge'
  | 'streak_bonus'
  | 'first_attempt_bonus'
  | 'speed_bonus'
  | 'exploration_bonus';

export const XP_RANGES: Record<XPSource, { min: number; max: number }> = {
  complete_node: { min: 50, max: 200 },
  pass_checkpoint: { min: 100, max: 500 },
  daily_review: { min: 20, max: 50 },
  case_challenge: { min: 100, max: 300 },
  streak_bonus: { min: 10, max: 250 },
  first_attempt_bonus: { min: 50, max: 50 },
  speed_bonus: { min: 0, max: 30 },
  exploration_bonus: { min: 100, max: 100 },
};

export type LevelTier =
  | 'intern'
  | 'resident'
  | 'specialist'
  | 'diplomate'
  | 'mentor';

export const LEVEL_TIERS: Record<
  LevelTier,
  { min_level: number; max_level: number; label_zh: string; label_en: string }
> = {
  intern: { min_level: 1, max_level: 5, label_zh: '見習獸醫', label_en: 'Intern' },
  resident: { min_level: 6, max_level: 10, label_zh: '住院獸醫', label_en: 'Resident' },
  specialist: { min_level: 11, max_level: 15, label_zh: '專科醫師', label_en: 'Specialist' },
  diplomate: { min_level: 16, max_level: 20, label_zh: '學科專家', label_en: 'Diplomate' },
  mentor: { min_level: 21, max_level: 25, label_zh: '導師', label_en: 'Mentor' },
};

export type AchievementCategory =
  | 'learning_progress'
  | 'knowledge_mastery'
  | 'diagnostic_skill'
  | 'case_challenge'
  | 'perseverance'
  | 'exploration';

export interface AchievementDefinition {
  id: string;
  title: string;
  description: string;
  category: AchievementCategory;
  icon: string;
  condition: string;
  hidden: boolean;
}

export interface UserExperience {
  user_id: string;
  total_xp: number;
  current_level: number;
  streak_days: number;
  last_active_date: string | null;
  specialties_explored: string[];
}

export interface UserAchievement {
  user_id: string;
  achievement_id: string;
  unlocked_at: string;
}

export type ProgressStatus = 'locked' | 'available' | 'in_progress' | 'completed';

export interface UserNodeProgress {
  user_id: string;
  node_id: string;
  status: ProgressStatus;
  started_at: string | null;
  completed_at: string | null;
  score: number | null;
  time_spent_minutes: number | null;
}

export interface SpacedRepetitionState {
  ease_factor: number;
  interval_days: number;
  repetitions: number;
  next_review: string;
  mastery_level: number;
  last_quality: 0 | 1 | 2 | 3 | 4 | 5;
}

export interface UserSpacedRepetition {
  user_id: string;
  node_id: string;
  ease_factor: number;
  interval_days: number;
  repetitions: number;
  next_review: string | null;
  mastery_level: number;
  last_quality: number | null;
}

export interface XPEvent {
  source: XPSource;
  amount: number;
  description: string;
  timestamp: string;
  metadata?: Record<string, unknown>;
}
