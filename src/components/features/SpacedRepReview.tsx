'use client';

import { useState, useMemo } from 'react';
import { Card, CardBody } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils/cn';
import { Eye } from 'lucide-react';
import type { FSRSRating, SpacedRepetitionState } from '@/types/gamification';
import { previewIntervals } from '@/lib/gamification/spaced-rep';

interface SpacedRepReviewProps {
  nodeId: string;
  question: string;
  answer?: string;
  currentState?: SpacedRepetitionState;
  onRate: (rating: FSRSRating) => void;
  className?: string;
}

type CardSide = 'question' | 'answer';

function formatInterval(days: number): string {
  if (days < 1) return '<1 天';
  if (days < 30) return `${days} 天`;
  if (days < 365) return `${Math.round(days / 30)} 個月`;
  return `${(days / 365).toFixed(1)} 年`;
}

const RATING_BUTTONS: Array<{ value: FSRSRating; label: string; sublabel: string; color: string }> = [
  { value: 1, label: '忘記', sublabel: 'Again', color: 'bg-red-500 hover:bg-red-600' },
  { value: 2, label: '困難', sublabel: 'Hard', color: 'bg-orange-500 hover:bg-orange-600' },
  { value: 3, label: '良好', sublabel: 'Good', color: 'bg-green-500 hover:bg-green-600' },
  { value: 4, label: '簡單', sublabel: 'Easy', color: 'bg-emerald-600 hover:bg-emerald-700' },
];

export function SpacedRepReview({
  nodeId,
  question,
  answer,
  currentState,
  onRate,
  className,
}: SpacedRepReviewProps) {
  const [side, setSide] = useState<CardSide>('question');

  const intervals = useMemo(() => {
    if (!currentState) return null;
    return previewIntervals(currentState);
  }, [currentState]);

  function handleFlip(): void {
    setSide('answer');
  }

  function handleRate(rating: FSRSRating): void {
    onRate(rating);
    setSide('question');
  }

  if (!question) {
    return (
      <div className={cn('flex items-center justify-center rounded-xl border border-gray-200 bg-gray-50 p-8', className)}>
        <p className="text-sm text-gray-500">無複習題目</p>
      </div>
    );
  }

  return (
    <Card className={cn('mx-auto max-w-md', className)}>
      <CardBody className="space-y-4">
        <div className="text-center">
          <p className="text-xs text-gray-400">節點 ID: {nodeId}</p>
        </div>

        {/* Card face */}
        <div className="min-h-[120px] flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 p-6">
          {side === 'question' ? (
            <p className="text-center text-sm font-medium text-gray-900">{question}</p>
          ) : (
            <p className="text-center text-sm text-gray-700">{answer ?? '（答案未提供）'}</p>
          )}
        </div>

        {/* Actions */}
        {side === 'question' ? (
          <div className="flex justify-center">
            <Button size="sm" variant="secondary" onClick={handleFlip} icon={<Eye className="h-4 w-4" />}>
              顯示答案
            </Button>
          </div>
        ) : (
          <div className="space-y-2">
            <p className="text-center text-xs text-gray-500">你記得多好？</p>
            <div className="grid grid-cols-4 gap-2">
              {RATING_BUTTONS.map((btn) => (
                <button
                  key={btn.value}
                  type="button"
                  onClick={() => handleRate(btn.value)}
                  className={cn(
                    'rounded-lg px-2 py-2 text-xs font-medium text-white transition-colors',
                    btn.color
                  )}
                >
                  <span className="block text-sm font-bold">{btn.label}</span>
                  <span className="block text-[10px] opacity-80">{btn.sublabel}</span>
                  {intervals && (
                    <span className="mt-1 block text-[10px] opacity-70">
                      {formatInterval(intervals[btn.value])}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </CardBody>
    </Card>
  );
}
