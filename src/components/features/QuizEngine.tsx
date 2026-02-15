'use client';

import { useState, useCallback } from 'react';
import type { ReviewQuestion, QuizResult, AnswerRecord } from '@/types/quiz';
import { Button } from '@/components/ui/Button';
import { Card, CardBody } from '@/components/ui/Card';
import { Progress } from '@/components/ui/Progress';
import { cn } from '@/lib/utils/cn';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

interface QuizEngineProps {
  questions: ReviewQuestion[];
  onComplete: (result: QuizResult) => void;
  className?: string;
}

type QuizState = 'answering' | 'reviewing' | 'complete' | 'empty';

export function QuizEngine({ questions, onComplete, className }: QuizEngineProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [state, setState] = useState<QuizState>(questions.length === 0 ? 'empty' : 'answering');
  const [startTime] = useState(() => Date.now());
  const [questionStartTime, setQuestionStartTime] = useState(() => Date.now());

  const currentQuestion = questions[currentIndex] as ReviewQuestion | undefined;

  const handleSelectOption = useCallback((option: string): void => {
    if (state !== 'answering') return;
    setSelectedOption(option);
  }, [state]);

  const handleSubmitAnswer = useCallback((): void => {
    if (!selectedOption || !currentQuestion) return;

    const isCorrect = selectedOption === currentQuestion.correct_answer;
    const timeSpent = Math.round((Date.now() - questionStartTime) / 1000);

    const record: AnswerRecord = {
      question_id: currentQuestion.id,
      selected_answer: selectedOption,
      is_correct: isCorrect,
      time_spent_seconds: timeSpent,
    };

    setAnswers((prev) => [...prev, record]);
    setState('reviewing');
  }, [selectedOption, currentQuestion, questionStartTime]);

  const handleNext = useCallback((): void => {
    const nextIndex = currentIndex + 1;

    if (nextIndex >= questions.length) {
      setState('complete');

      const allAnswers = [...answers];
      // The last answer was already added in handleSubmitAnswer
      const correctCount = allAnswers.filter((a) => a.is_correct).length;
      const totalTime = Math.round((Date.now() - startTime) / 1000);

      const result: QuizResult = {
        session_id: `quiz-${Date.now()}`,
        node_id: questions[0]?.node_id ?? '',
        total_questions: questions.length,
        correct_count: correctCount,
        accuracy: questions.length > 0 ? correctCount / questions.length : 0,
        total_time_seconds: totalTime,
        answers: allAnswers,
        completed_at: new Date().toISOString(),
      };
      onComplete(result);
      return;
    }

    setCurrentIndex(nextIndex);
    setSelectedOption(null);
    setQuestionStartTime(Date.now());
    setState('answering');
  }, [currentIndex, questions, answers, startTime, onComplete]);

  // Empty state
  if (state === 'empty') {
    return (
      <div className={cn('flex items-center justify-center rounded-xl border border-gray-200 bg-gray-50 p-8', className)}>
        <p className="text-sm text-gray-500">目前沒有可用的測驗題目</p>
      </div>
    );
  }

  // Complete state
  if (state === 'complete') {
    const correctCount = answers.filter((a) => a.is_correct).length;
    const accuracy = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0;

    return (
      <Card className={cn('mx-auto max-w-lg', className)}>
        <CardBody className="space-y-4 text-center">
          <h3 className="text-lg font-semibold text-gray-900">測驗結束</h3>
          <div className="space-y-2">
            <p className="text-3xl font-bold text-indigo-600">{accuracy}%</p>
            <p className="text-sm text-gray-500">
              {correctCount} / {questions.length} 題正確
            </p>
          </div>
          <Progress value={accuracy} max={100} variant="mastery" showPercentage />
          <div className="space-y-1 text-left">
            {answers.map((answer, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                {answer.is_correct ? (
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                ) : (
                  <XCircle className="h-4 w-4 text-red-500" />
                )}
                <span className="text-gray-600">
                  第 {i + 1} 題 — {answer.time_spent_seconds}s
                </span>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    );
  }

  if (!currentQuestion) return null;

  const options = currentQuestion.options ?? [];
  const isReviewing = state === 'reviewing';

  return (
    <Card className={cn('mx-auto max-w-lg', className)}>
      <CardBody className="space-y-4">
        {/* Progress */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>第 {currentIndex + 1} / {questions.length} 題</span>
          <Progress value={currentIndex + 1} max={questions.length} size="sm" className="w-32" />
        </div>

        {/* Question */}
        <p className="text-sm font-medium text-gray-900 leading-relaxed">{currentQuestion.question}</p>

        {/* Options */}
        <div className="space-y-2">
          {options.map((option, i) => {
            const letter = String.fromCharCode(65 + i);
            const isSelected = selectedOption === option;
            const isCorrect = option === currentQuestion.correct_answer;

            let optionStyle = 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50';
            if (isReviewing && isCorrect) {
              optionStyle = 'border-green-400 bg-green-50';
            } else if (isReviewing && isSelected && !isCorrect) {
              optionStyle = 'border-red-400 bg-red-50';
            } else if (isSelected) {
              optionStyle = 'border-indigo-500 bg-indigo-50';
            }

            return (
              <button
                key={i}
                type="button"
                onClick={() => handleSelectOption(option)}
                disabled={isReviewing}
                className={cn(
                  'flex w-full items-start gap-3 rounded-lg border p-3 text-left text-sm transition-colors',
                  'disabled:cursor-default',
                  optionStyle
                )}
              >
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-medium text-gray-600">
                  {letter}
                </span>
                <span className="text-gray-700">{option}</span>
              </button>
            );
          })}
        </div>

        {/* Explanation (reviewing) */}
        {isReviewing && currentQuestion.explanation && (
          <div className="rounded-lg bg-blue-50 p-3">
            <p className="text-xs font-medium text-blue-700">解析</p>
            <p className="mt-1 text-sm text-blue-800">{currentQuestion.explanation}</p>
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-end">
          {state === 'answering' ? (
            <Button
              size="sm"
              onClick={handleSubmitAnswer}
              disabled={!selectedOption}
            >
              確認答案
            </Button>
          ) : (
            <Button size="sm" onClick={handleNext} icon={<ArrowRight className="h-4 w-4" />}>
              {currentIndex + 1 >= questions.length ? '查看結果' : '下一題'}
            </Button>
          )}
        </div>
      </CardBody>
    </Card>
  );
}
