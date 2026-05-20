'use client';

import type { ReviewQuestion } from '@/types/quiz';

interface QuizFeedbackProps {
  question: ReviewQuestion;
  selectedAnswer: string | null;
}

/**
 * 答對/答錯回饋 + 解析。screen reader 用 aria-live 朗讀結果。
 */
export function QuizFeedback({ question, selectedAnswer }: QuizFeedbackProps) {
  const isCorrect = selectedAnswer === question.correct_answer;
  const correctText = question.options?.[Number(question.correct_answer)] ?? question.correct_answer;

  return (
    <div aria-live="polite" aria-atomic="true">
      <div className="space-y-2">
        <p className="sr-only">
          {isCorrect ? '答對了！' : '答錯了。'}正確答案是：{correctText}
        </p>
        {question.explanation && (
          <div className="rounded-lg bg-blue-50 p-3">
            <p className="text-xs font-medium text-blue-700">解析</p>
            <p className="mt-1 text-sm text-blue-800">{question.explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
}
