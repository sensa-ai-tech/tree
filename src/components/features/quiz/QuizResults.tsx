'use client';

import { CheckCircle2, XCircle } from 'lucide-react';
import { Card, CardBody } from '@/components/ui/Card';
import { Progress } from '@/components/ui/Progress';
import { cn } from '@/lib/utils/cn';
import type { AnswerRecord } from '@/types/quiz';

interface QuizResultsProps {
  answers: AnswerRecord[];
  totalQuestions: number;
  className?: string;
}

export function QuizResults({ answers, totalQuestions, className }: QuizResultsProps) {
  const correctCount = answers.filter((a) => a.is_correct).length;
  const accuracy = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  return (
    <Card className={cn('mx-auto max-w-lg', className)}>
      <CardBody className="space-y-4 text-center">
        <h3 className="text-lg font-semibold text-gray-900">測驗結束</h3>
        <div className="space-y-2">
          <p className="text-3xl font-bold text-indigo-600">{accuracy}%</p>
          <p className="text-sm text-gray-500">
            {correctCount} / {totalQuestions} 題正確
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
                第 {i + 1} 題，{answer.time_spent_seconds}s
              </span>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
