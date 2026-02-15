'use client';

import { useState } from 'react';
import { Card, CardBody } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils/cn';
import { RotateCcw, Eye } from 'lucide-react';

interface SpacedRepReviewProps {
  nodeId: string;
  question: string;
  answer?: string;
  onRate: (quality: 0 | 1 | 2 | 3 | 4 | 5) => void;
  className?: string;
}

type CardSide = 'question' | 'answer';

const RATING_LABELS: Array<{ value: 0 | 1 | 2 | 3 | 4 | 5; label: string; color: string }> = [
  { value: 0, label: '完全忘記', color: 'bg-red-600 hover:bg-red-700' },
  { value: 1, label: '幾乎忘記', color: 'bg-red-400 hover:bg-red-500' },
  { value: 2, label: '很困難', color: 'bg-orange-500 hover:bg-orange-600' },
  { value: 3, label: '有點困難', color: 'bg-yellow-500 hover:bg-yellow-600' },
  { value: 4, label: '還好', color: 'bg-green-500 hover:bg-green-600' },
  { value: 5, label: '非常簡單', color: 'bg-green-600 hover:bg-green-700' },
];

export function SpacedRepReview({
  nodeId,
  question,
  answer,
  onRate,
  className,
}: SpacedRepReviewProps) {
  const [side, setSide] = useState<CardSide>('question');

  function handleFlip(): void {
    setSide('answer');
  }

  function handleRate(quality: 0 | 1 | 2 | 3 | 4 | 5): void {
    onRate(quality);
    setSide('question');
  }

  // Empty state
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
            <div className="grid grid-cols-3 gap-2">
              {RATING_LABELS.map((rating) => (
                <button
                  key={rating.value}
                  type="button"
                  onClick={() => handleRate(rating.value)}
                  className={cn(
                    'rounded-lg px-2 py-2 text-xs font-medium text-white transition-colors',
                    rating.color
                  )}
                >
                  <span className="block text-lg">{rating.value}</span>
                  <span className="block">{rating.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </CardBody>
    </Card>
  );
}
