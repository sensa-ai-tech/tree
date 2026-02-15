import type { AchievementDefinition } from '@/types/gamification';
import { cn } from '@/lib/utils/cn';
import { Lock, Award } from 'lucide-react';

interface AchievementBadgeProps {
  achievement: AchievementDefinition;
  isUnlocked: boolean;
  unlockedAt?: string;
  className?: string;
}

export function AchievementBadge({
  achievement,
  isUnlocked,
  unlockedAt,
  className,
}: AchievementBadgeProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 rounded-lg border p-3 transition-colors',
        isUnlocked
          ? 'border-amber-200 bg-amber-50'
          : 'border-gray-200 bg-gray-50 opacity-60',
        className
      )}
    >
      <div
        className={cn(
          'flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full',
          isUnlocked ? 'bg-amber-100 text-amber-600' : 'bg-gray-200 text-gray-400'
        )}
      >
        {isUnlocked ? <Award className="h-5 w-5" /> : <Lock className="h-5 w-5" />}
      </div>
      <div className="min-w-0 flex-1">
        <p className={cn('text-sm font-medium truncate', isUnlocked ? 'text-gray-900' : 'text-gray-500')}>
          {achievement.title}
        </p>
        <p className="text-xs text-gray-400 truncate">{achievement.description}</p>
        {isUnlocked && unlockedAt && (
          <p className="mt-0.5 text-xs text-amber-600">
            {new Date(unlockedAt).toLocaleDateString('zh-TW')}
          </p>
        )}
      </div>
    </div>
  );
}
