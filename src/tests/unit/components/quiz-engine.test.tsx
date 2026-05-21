import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { QuizEngine } from '@/components/features/QuizEngine';
import type { ReviewQuestion, QuizResult } from '@/types/quiz';
import { makeMCQ as makeMCQFactory, makeFillBlank as makeFillBlankFactory } from '@/tests/factories';

// 用 factory 加上題目特定 override，預設值來自 factory 確保 ReviewQuestion type 增欄位
// 時不必逐 test 更新
function makeMCQ(overrides: Partial<ReviewQuestion> = {}): ReviewQuestion {
  return makeMCQFactory({
    question: '貓 CKD 第幾期開始限磷？',
    options: ['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4'],
    correct_answer: 'Stage 2',
    explanation: 'IRIS guideline 從 Stage 2 開始限磷',
    tags: ['IRIS'],
    ...overrides,
  });
}

function makeFillBlank(overrides: Partial<ReviewQuestion> = {}): ReviewQuestion {
  return makeFillBlankFactory({
    question: 'FPV 全名是？',
    correct_answer: 'Feline Panleukopenia Virus',
    difficulty: 4,
    tags: ['FPV'],
    ...overrides,
  });
}

describe('QuizEngine', () => {
  it('renders empty state when no questions provided', () => {
    render(<QuizEngine questions={[]} onComplete={() => {}} />);
    expect(screen.getByText('目前沒有可用的測驗題目')).toBeInTheDocument();
  });

  it('renders question text and lettered options', () => {
    render(<QuizEngine questions={[makeMCQ()]} onComplete={() => {}} />);
    expect(screen.getByText('貓 CKD 第幾期開始限磷？')).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: '選項 A: Stage 1' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: '選項 B: Stage 2' })).toBeInTheDocument();
  });

  it('disables submit until option is selected', () => {
    render(<QuizEngine questions={[makeMCQ()]} onComplete={() => {}} />);
    const submit = screen.getByRole('button', { name: '確認答案' });
    expect(submit).toBeDisabled();
  });

  it('reveals correct answer and explanation after submission', async () => {
    const user = userEvent.setup();
    render(<QuizEngine questions={[makeMCQ()]} onComplete={() => {}} />);
    await user.click(screen.getByRole('radio', { name: '選項 B: Stage 2' }));
    await user.click(screen.getByRole('button', { name: '確認答案' }));
    expect(screen.getByText(/IRIS guideline/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /查看結果/ })).toBeInTheDocument();
  });

  it('completes with correct accuracy when all answered correctly', async () => {
    const user = userEvent.setup();
    const onComplete = vi.fn<(result: QuizResult) => void>();
    render(<QuizEngine questions={[makeMCQ()]} onComplete={onComplete} />);
    await user.click(screen.getByRole('radio', { name: '選項 B: Stage 2' }));
    await user.click(screen.getByRole('button', { name: '確認答案' }));
    await user.click(screen.getByRole('button', { name: /查看結果/ }));

    expect(onComplete).toHaveBeenCalledTimes(1);
    const result = onComplete.mock.calls[0]?.[0];
    expect(result?.correct_count).toBe(1);
    expect(result?.total_questions).toBe(1);
    expect(result?.accuracy).toBe(1);
    expect(result?.answers[0]?.is_correct).toBe(true);
  });

  it('marks incorrect answer and still allows progression', async () => {
    const user = userEvent.setup();
    const onComplete = vi.fn<(result: QuizResult) => void>();
    render(<QuizEngine questions={[makeMCQ()]} onComplete={onComplete} />);
    await user.click(screen.getByRole('radio', { name: '選項 A: Stage 1' }));
    await user.click(screen.getByRole('button', { name: '確認答案' }));
    await user.click(screen.getByRole('button', { name: /查看結果/ }));
    expect(onComplete.mock.calls[0]?.[0]?.correct_count).toBe(0);
  });

  it('accepts fill_blank answer case-insensitively', async () => {
    const user = userEvent.setup();
    const onComplete = vi.fn<(result: QuizResult) => void>();
    render(<QuizEngine questions={[makeFillBlank()]} onComplete={onComplete} />);

    const input = screen.getByLabelText('填寫答案');
    await user.type(input, 'feline panleukopenia virus');
    await user.click(screen.getByRole('button', { name: '確認答案' }));
    await user.click(screen.getByRole('button', { name: /查看結果/ }));

    expect(onComplete.mock.calls[0]?.[0]?.correct_count).toBe(1);
  });

  it('shows true/false binary options for true_false questions', () => {
    const tf: ReviewQuestion = makeMCQ({
      id: 'q3',
      question_type: 'true_false',
      options: null,
      correct_answer: '正確',
    });
    render(<QuizEngine questions={[tf]} onComplete={() => {}} />);
    expect(screen.getByRole('radio', { name: '選項 A: 正確' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: '選項 B: 錯誤' })).toBeInTheDocument();
  });

  it('keyboard navigation moves focus with arrow keys', async () => {
    const user = userEvent.setup();
    render(<QuizEngine questions={[makeMCQ()]} onComplete={() => {}} />);
    const radios = screen.getAllByRole('radio');
    radios[0]?.focus();
    expect(radios[0]).toHaveFocus();
    await user.keyboard('{ArrowDown}');
    expect(radios[1]).toHaveFocus();
    await user.keyboard('{ArrowUp}');
    expect(radios[0]).toHaveFocus();
  });

  it('progresses through multiple questions in order', async () => {
    const user = userEvent.setup();
    const onComplete = vi.fn<(result: QuizResult) => void>();
    const q1 = makeMCQ({ id: 'q1', question: '第一題' });
    const q2 = makeMCQ({ id: 'q2', question: '第二題', correct_answer: 'Stage 1' });
    render(<QuizEngine questions={[q1, q2]} onComplete={onComplete} />);

    expect(screen.getByText('第一題')).toBeInTheDocument();
    await user.click(screen.getByRole('radio', { name: '選項 B: Stage 2' }));
    await user.click(screen.getByRole('button', { name: '確認答案' }));
    await user.click(screen.getByRole('button', { name: /下一題/ }));

    expect(screen.getByText('第二題')).toBeInTheDocument();
    await user.click(screen.getByRole('radio', { name: '選項 A: Stage 1' }));
    await user.click(screen.getByRole('button', { name: '確認答案' }));
    await user.click(screen.getByRole('button', { name: /查看結果/ }));

    expect(onComplete.mock.calls[0]?.[0]?.correct_count).toBe(2);
  });
});
