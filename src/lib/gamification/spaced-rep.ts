import type { SpacedRepetitionState } from '@/types/gamification';

type Quality = 0 | 1 | 2 | 3 | 4 | 5;

/**
 * SM-2 改良演算法
 * quality: 0=完全忘記, 1=嚴重錯誤, 2=有印象但答錯, 3=勉強答對, 4=正確但需思考, 5=秒答
 */
export function calculateNextReview(
  quality: Quality,
  currentState: SpacedRepetitionState
): SpacedRepetitionState {
  let { ease_factor, interval_days, repetitions, mastery_level } = currentState;

  if (quality < 3) {
    // 失敗：重置間隔
    repetitions = 0;
    interval_days = 1;
  } else {
    // 成功：延長間隔
    if (repetitions === 0) {
      interval_days = 1;
    } else if (repetitions === 1) {
      interval_days = 6;
    } else {
      interval_days = Math.round(interval_days * ease_factor);
    }
    repetitions += 1;
  }

  // 更新 ease_factor（不低於 1.3）
  ease_factor = Math.max(
    1.3,
    ease_factor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  );

  // 更新 mastery_level
  mastery_level = calculateMastery(quality, mastery_level, repetitions);

  const next_review = new Date();
  next_review.setDate(next_review.getDate() + interval_days);

  return {
    ease_factor: Math.round(ease_factor * 100) / 100,
    interval_days,
    repetitions,
    next_review: next_review.toISOString(),
    mastery_level: Math.min(100, Math.max(0, mastery_level)),
    last_quality: quality,
  };
}

function calculateMastery(
  quality: Quality,
  currentMastery: number,
  repetitions: number
): number {
  // 根據回答品質調整熟練度
  const qualityImpact: Record<Quality, number> = {
    0: -20,
    1: -10,
    2: -5,
    3: 2,
    4: 5,
    5: 10,
  };

  let mastery = currentMastery + qualityImpact[quality];

  // 重複次數加成（最多 +5）
  mastery += Math.min(5, repetitions * 0.5);

  return Math.round(mastery);
}

/**
 * 建立初始複習狀態
 */
export function createInitialState(): SpacedRepetitionState {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  return {
    ease_factor: 2.5,
    interval_days: 1,
    repetitions: 0,
    next_review: tomorrow.toISOString(),
    mastery_level: 0,
    last_quality: 3,
  };
}

/**
 * 判斷是否到期需要複習
 */
export function isDueForReview(state: SpacedRepetitionState): boolean {
  return new Date(state.next_review) <= new Date();
}

/**
 * 計算今日待複習數量
 */
export function getDueCount(
  states: SpacedRepetitionState[],
  maxReviews: number = 20
): number {
  const dueCount = states.filter(isDueForReview).length;
  return Math.min(dueCount, maxReviews);
}
