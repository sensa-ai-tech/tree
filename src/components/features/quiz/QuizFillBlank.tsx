'use client';

import { cn } from '@/lib/utils/cn';

interface QuizFillBlankProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  correctAnswer: string;
  isReviewing: boolean;
}

export function QuizFillBlank({
  value,
  onChange,
  onSubmit,
  correctAnswer,
  isReviewing,
}: QuizFillBlankProps) {
  const isCorrect = value.trim().toLowerCase() === correctAnswer.trim().toLowerCase();

  return (
    <div className="space-y-2">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && value.trim() && !isReviewing) onSubmit();
        }}
        disabled={isReviewing}
        placeholder="請輸入答案..."
        className={cn(
          'w-full rounded-lg border px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500',
          isReviewing && isCorrect
            ? 'border-green-400 bg-green-50'
            : isReviewing
              ? 'border-red-400 bg-red-50'
              : 'border-gray-200'
        )}
        aria-label="填寫答案"
      />
      {isReviewing && (
        <p className="text-sm text-gray-600">
          正確答案：<strong className="text-green-700">{correctAnswer}</strong>
        </p>
      )}
    </div>
  );
}
