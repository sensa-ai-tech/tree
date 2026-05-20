'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils/cn';

interface QuizOptionsProps {
  questionId: string;
  options: string[];
  correctAnswer: string;
  selectedOption: string | null;
  isReviewing: boolean;
  onSelect: (option: string) => void;
}

/**
 * 單選題選項。負責 keyboard navigation（Arrow/Enter/Space）與
 * 答題後的 correct/incorrect 視覺回饋。
 */
export function QuizOptions({
  questionId,
  options,
  correctAnswer,
  selectedOption,
  isReviewing,
  onSelect,
}: QuizOptionsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [focusedIndex, setFocusedIndex] = useState(0);

  useEffect(() => {
    setFocusedIndex(0);
  }, [questionId]);

  const handleSelect = useCallback((option: string): void => {
    if (isReviewing) return;
    onSelect(option);
  }, [isReviewing, onSelect]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent): void => {
    if (isReviewing) return;
    const focusOption = (next: number): void => {
      const buttons = containerRef.current?.querySelectorAll<HTMLButtonElement>('[role="radio"]');
      buttons?.[next]?.focus();
    };

    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        e.preventDefault();
        setFocusedIndex((prev) => {
          const next = (prev + 1) % options.length;
          focusOption(next);
          return next;
        });
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        e.preventDefault();
        setFocusedIndex((prev) => {
          const next = (prev - 1 + options.length) % options.length;
          focusOption(next);
          return next;
        });
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (options[focusedIndex]) {
          handleSelect(options[focusedIndex]);
        }
        break;
    }
  }, [isReviewing, options, focusedIndex, handleSelect]);

  return (
    <div
      ref={containerRef}
      role="radiogroup"
      aria-labelledby={`question-${questionId}`}
      className="space-y-2"
      onKeyDown={handleKeyDown}
    >
      {options.map((option, i) => {
        const letter = String.fromCharCode(65 + i);
        const isSelected = selectedOption === option;
        const isCorrect = option === correctAnswer;

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
            role="radio"
            aria-checked={isSelected}
            aria-label={`選項 ${letter}: ${option}`}
            tabIndex={i === focusedIndex ? 0 : -1}
            onClick={() => handleSelect(option)}
            disabled={isReviewing}
            className={cn(
              'flex w-full items-start gap-3 rounded-lg border p-3 text-left text-sm transition-colors',
              'disabled:cursor-default focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1',
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
  );
}
