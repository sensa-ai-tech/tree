import { createEmptyCard, fsrs, generatorParameters, Rating, type Card, type Grade } from 'ts-fsrs';
import type { SpacedRepetitionState, FSRSRating } from '@/types/gamification';

const f = fsrs(generatorParameters({ enable_fuzz: true }));

/**
 * ts-fsrs Card ↔ SpacedRepetitionState 序列化轉換
 */
function cardToState(card: Card, mastery: number, rating: FSRSRating): SpacedRepetitionState {
  return {
    due: card.due.toISOString(),
    stability: Math.round(card.stability * 100) / 100,
    difficulty: Math.round(card.difficulty * 100) / 100,
    elapsed_days: card.elapsed_days,
    scheduled_days: card.scheduled_days,
    reps: card.reps,
    lapses: card.lapses,
    state: card.state as 0 | 1 | 2 | 3,
    last_review: card.last_review ? card.last_review.toISOString() : null,
    mastery_level: Math.min(100, Math.max(0, Math.round(mastery))),
    last_rating: rating,
  };
}

function stateToCard(state: SpacedRepetitionState): Card {
  return {
    due: new Date(state.due),
    stability: state.stability,
    difficulty: state.difficulty,
    elapsed_days: state.elapsed_days,
    scheduled_days: state.scheduled_days,
    reps: state.reps,
    lapses: state.lapses,
    state: state.state,
    last_review: state.last_review ? new Date(state.last_review) : undefined,
  } as Card;
}

/**
 * 計算下一次複習排程（ts-fsrs FSRS 演算法）
 * rating: 1=Again, 2=Hard, 3=Good, 4=Easy
 */
export function calculateNextReview(
  rating: FSRSRating,
  currentState: SpacedRepetitionState
): SpacedRepetitionState {
  const card = stateToCard(currentState);
  const now = new Date();
  const scheduling = f.repeat(card, now);
  const result = scheduling[rating as Grade];
  const mastery = calculateMastery(rating, currentState.mastery_level, result.card.reps);

  return cardToState(result.card, mastery, rating);
}

function calculateMastery(
  rating: FSRSRating,
  currentMastery: number,
  reps: number
): number {
  const ratingImpact: Record<FSRSRating, number> = {
    1: -15, // Again
    2: -3,  // Hard
    3: 5,   // Good
    4: 10,  // Easy
  };

  let mastery = currentMastery + ratingImpact[rating];
  mastery += Math.min(5, reps * 0.5);
  return Math.round(mastery);
}

/**
 * 建立初始複習狀態
 */
export function createInitialState(): SpacedRepetitionState {
  const card = createEmptyCard();
  return cardToState(card, 0, 3);
}

/**
 * 判斷是否到期需要複習
 */
export function isDueForReview(state: SpacedRepetitionState): boolean {
  return new Date(state.due) <= new Date();
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

/**
 * 預覽各評分對應的下次複習間隔（天數），用於 UI 顯示
 */
export function previewIntervals(
  currentState: SpacedRepetitionState
): Record<FSRSRating, number> {
  const card = stateToCard(currentState);
  const now = new Date();
  const scheduling = f.repeat(card, now);

  return {
    1: scheduling[Rating.Again].card.scheduled_days,
    2: scheduling[Rating.Hard].card.scheduled_days,
    3: scheduling[Rating.Good].card.scheduled_days,
    4: scheduling[Rating.Easy].card.scheduled_days,
  };
}
