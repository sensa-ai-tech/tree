import type { UserExperience } from '@/types/gamification';
import { getLevelInfo } from '@/lib/gamification/level-system';
import { Progress } from '@/components/ui/Progress';
import { cn } from '@/lib/utils/cn';
import { Star } from 'lucide-react';

interface XPProgressBarProps {
  experience: UserExperience;
  className?: string;
}

export function XPProgressBar({ experience, className }: XPProgressBarProps) {
  const info = getLevelInfo(experience.total_xp);
  const xpInLevel = experience.total_xp - info.xpForCurrentLevel;
  const xpNeeded = info.xpForNextLevel - info.xpForCurrentLevel;

  return (
    <div className={cn('space-y-1', className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Star className="h-4 w-4 text-amber-500" />
          <span className="text-sm font-semibold text-gray-900">Lv.{info.level}</span>
          <span className="text-xs text-gray-500">{info.tierLabel}</span>
        </div>
        <span className="text-xs text-gray-400">
          {xpInLevel} / {xpNeeded} XP
        </span>
      </div>
      <Progress
        value={info.progressToNext * 100}
        max={100}
        variant="xp"
        size="sm"
      />
      <div className="flex items-center justify-between text-xs text-gray-400">
        <span>總計 {experience.total_xp} XP</span>
        <span>連續 {experience.streak_days} 天</span>
      </div>
    </div>
  );
}
