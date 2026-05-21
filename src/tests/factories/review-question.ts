import type { ReviewQuestion } from '@/types/quiz';

let counter = 0;

/**
 * 建立 MCQ ReviewQuestion，預設 4 個選項、correct_answer=options[1]、含 explanation。
 */
export function makeMCQ(overrides: Partial<ReviewQuestion> = {}): ReviewQuestion {
  counter += 1;
  return {
    id: `q-${counter}`,
    node_id: 'IM-L3-001',
    question_type: 'mcq',
    question: `第 ${counter} 題：貓 CKD 第幾期開始限磷？`,
    options: ['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4'],
    correct_answer: 'Stage 2',
    explanation: 'IRIS guideline 從 Stage 2 開始限磷',
    difficulty: 3,
    spaced_rep: true,
    tags: ['IRIS'],
    image_placeholder: null,
    ...overrides,
  };
}

/**
 * 建立 true_false ReviewQuestion，預設 correct_answer='正確'。
 */
export function makeTrueFalse(overrides: Partial<ReviewQuestion> = {}): ReviewQuestion {
  return makeMCQ({
    question_type: 'true_false',
    options: null,
    correct_answer: '正確',
    ...overrides,
  });
}

/**
 * 建立 fill_blank ReviewQuestion，預設答案是長字串方便驗 case-insensitive。
 */
export function makeFillBlank(overrides: Partial<ReviewQuestion> = {}): ReviewQuestion {
  return makeMCQ({
    question_type: 'fill_blank',
    options: null,
    correct_answer: 'Feline Panleukopenia Virus',
    explanation: null,
    ...overrides,
  });
}
