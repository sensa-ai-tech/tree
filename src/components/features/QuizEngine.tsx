'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardBody } from '@/components/ui/Card';
import { cn } from '@/lib/utils/cn';
import type { QuizResult, ReviewQuestion } from '@/types/quiz';
import {
  QuizFeedback,
  QuizFillBlank,
  QuizOptions,
  QuizProgressHeader,
  QuizResults,
  useQuizState,
} from './quiz';

interface QuizEngineProps {
  questions: ReviewQuestion[];
  onComplete: (result: QuizResult) => void;
  className?: string;
}

const TRUE_FALSE_OPTIONS: readonly string[] = ['正確', '錯誤'];

export function QuizEngine({ questions, onComplete, className }: QuizEngineProps) {
  const {
    phase,
    currentIndex,
    currentQuestion,
    answers,
    selectedOption,
    fillBlankInput,
    setSelectedOption,
    setFillBlankInput,
    getSelectedAnswer,
    submitAnswer,
    goNext,
  } = useQuizState({ questions, onComplete });

  if (phase === 'empty') {
    return (
      <div className={cn('flex items-center justify-center rounded-xl border border-gray-200 bg-gray-50 p-8', className)}>
        <p className="text-sm text-gray-500">目前沒有可用的測驗題目</p>
      </div>
    );
  }

  if (phase === 'complete') {
    return <QuizResults answers={answers} totalQuestions={questions.length} className={className} />;
  }

  if (!currentQuestion) return null;

  const isReviewing = phase === 'reviewing';
  const optionsForRender = currentQuestion.question_type === 'true_false'
    ? [...TRUE_FALSE_OPTIONS]
    : (currentQuestion.options ?? []);

  return (
    <Card className={cn('mx-auto max-w-lg', className)} role="region" aria-label="測驗區域">
      <CardBody className="space-y-4">
        <QuizProgressHeader current={currentIndex + 1} total={questions.length} />

        <p id={`question-${currentQuestion.id}`} className="text-sm font-medium text-gray-900 leading-relaxed">
          {currentQuestion.question}
        </p>

        {currentQuestion.question_type === 'fill_blank' ? (
          <QuizFillBlank
            value={fillBlankInput}
            onChange={setFillBlankInput}
            onSubmit={submitAnswer}
            correctAnswer={currentQuestion.correct_answer}
            isReviewing={isReviewing}
          />
        ) : (
          <QuizOptions
            questionId={currentQuestion.id}
            options={optionsForRender}
            correctAnswer={currentQuestion.correct_answer}
            selectedOption={selectedOption}
            isReviewing={isReviewing}
            onSelect={setSelectedOption}
          />
        )}

        {isReviewing && (
          <QuizFeedback question={currentQuestion} selectedAnswer={selectedOption} />
        )}

        <div className="flex justify-end">
          {phase === 'answering' ? (
            <Button size="sm" onClick={submitAnswer} disabled={!getSelectedAnswer()}>
              確認答案
            </Button>
          ) : (
            <Button size="sm" onClick={goNext} icon={<ArrowRight className="h-4 w-4" />}>
              {currentIndex + 1 >= questions.length ? '查看結果' : '下一題'}
            </Button>
          )}
        </div>
      </CardBody>
    </Card>
  );
}
