'use client';

import { Progress } from '@/components/ui/Progress';

interface QuizProgressHeaderProps {
  current: number;
  total: number;
}

export function QuizProgressHeader({ current, total }: QuizProgressHeaderProps) {
  return (
    <div className="flex items-center justify-between text-xs text-gray-500">
      <span aria-live="polite">第 {current} / {total} 題</span>
      <Progress
        value={current}
        max={total}
        size="sm"
        className="w-32"
        aria-label={`進度：第 ${current} 題，共 ${total} 題`}
      />
    </div>
  );
}
