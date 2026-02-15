import { cn } from '@/lib/utils/cn';

interface ProgressProps {
  value: number;
  max?: number;
  label?: string;
  showPercentage?: boolean;
  variant?: 'default' | 'xp' | 'mastery';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Progress({
  value,
  max = 100,
  label,
  showPercentage = false,
  variant = 'default',
  size = 'md',
  className,
}: ProgressProps) {
  const percentage = max > 0 ? Math.min(100, Math.round((value / max) * 100)) : 0;

  const barColors = {
    default: 'bg-indigo-500',
    xp: 'bg-gradient-to-r from-amber-400 to-yellow-500',
    mastery: percentage >= 80 ? 'bg-green-500' : percentage >= 50 ? 'bg-yellow-500' : 'bg-red-400',
  };

  const heights = { sm: 'h-1.5', md: 'h-2.5', lg: 'h-4' };

  return (
    <div className={cn('w-full', className)}>
      {(label || showPercentage) && (
        <div className="flex justify-between items-center mb-1">
          {label && <span className="text-sm text-gray-600">{label}</span>}
          {showPercentage && <span className="text-sm font-medium text-gray-700">{percentage}%</span>}
        </div>
      )}
      <div className={cn('w-full rounded-full bg-gray-200 overflow-hidden', heights[size])}>
        <div
          className={cn('rounded-full transition-all duration-500 ease-out', heights[size], barColors[variant])}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
    </div>
  );
}
