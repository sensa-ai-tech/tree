import type { DifficultyLevel } from '@/types/knowledge';
import type { XPSource } from '@/types/gamification';

interface XPCalculationParams {
  difficulty?: DifficultyLevel;
  streakDays?: number;
  timeSpentSeconds?: number;
  isFirstAttempt?: boolean;
  accuracy?: number;
}

const BASE_XP: Record<XPSource, number> = {
  complete_node: 100,
  pass_checkpoint: 200,
  daily_review: 30,
  case_challenge: 150,
  streak_bonus: 10,
  first_attempt_bonus: 50,
  speed_bonus: 15,
  exploration_bonus: 100,
};

const DIFFICULTY_MULTIPLIERS: Record<DifficultyLevel, number> = {
  1: 0.5,
  2: 0.75,
  3: 1.0,
  4: 1.5,
  5: 2.0,
};

export function calculateXP(
  source: XPSource,
  params: XPCalculationParams = {}
): number {
  const base = BASE_XP[source];

  switch (source) {
    case 'complete_node': {
      const multiplier = DIFFICULTY_MULTIPLIERS[params.difficulty ?? 3];
      return Math.round(base * multiplier);
    }
    case 'pass_checkpoint': {
      const multiplier = DIFFICULTY_MULTIPLIERS[params.difficulty ?? 3];
      const accuracyBonus = (params.accuracy ?? 0.8) >= 0.9 ? 1.5 : 1.0;
      return Math.round(base * multiplier * accuracyBonus);
    }
    case 'daily_review': {
      const count = Math.min(params.accuracy ?? 1, 1);
      return Math.round(base * (0.5 + count * 0.5));
    }
    case 'case_challenge': {
      const multiplier = DIFFICULTY_MULTIPLIERS[params.difficulty ?? 3];
      const accuracyBonus = (params.accuracy ?? 0.5) * 2;
      return Math.round(base * multiplier * Math.max(0.5, accuracyBonus));
    }
    case 'streak_bonus': {
      const days = params.streakDays ?? 1;
      return Math.min(250, base * days);
    }
    case 'first_attempt_bonus':
      return params.isFirstAttempt ? base : 0;
    case 'speed_bonus': {
      const time = params.timeSpentSeconds ?? 60;
      const expectedTime = 30;
      if (time <= expectedTime) return base * 2;
      if (time <= expectedTime * 2) return base;
      return 0;
    }
    case 'exploration_bonus':
      return base;
    default:
      return 0;
  }
}

export function calculateTotalSessionXP(events: Array<{ source: XPSource; params: XPCalculationParams }>): number {
  return events.reduce((total, event) => total + calculateXP(event.source, event.params), 0);
}
