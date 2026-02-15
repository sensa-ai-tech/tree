'use client';

import { useMemo } from 'react';
import { Trophy } from 'lucide-react';
import { Card, CardBody, CardHeader } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { useGamificationStore } from '@/stores/gamification-store';
import { ACHIEVEMENTS, getAchievementsByCategory } from '@/lib/gamification/achievements';
import type { AchievementCategory, AchievementDefinition } from '@/types/gamification';

const CATEGORY_LABELS: Record<AchievementCategory, string> = {
  learning_progress: '學習進度',
  knowledge_mastery: '知識精熟',
  diagnostic_skill: '診斷技能',
  case_challenge: '病例挑戰',
  perseverance: '毅力',
  exploration: '探索',
};

const CATEGORIES: AchievementCategory[] = [
  'learning_progress',
  'knowledge_mastery',
  'diagnostic_skill',
  'case_challenge',
  'perseverance',
  'exploration',
];

function AchievementBadge({
  achievement,
  isUnlocked,
}: {
  achievement: AchievementDefinition;
  isUnlocked: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center gap-2 rounded-xl border p-4 text-center transition-all ${
        isUnlocked
          ? 'border-amber-200 bg-amber-50 shadow-sm'
          : 'border-gray-200 bg-gray-50 opacity-50'
      }`}
    >
      <span className="text-3xl" role="img" aria-label={achievement.title}>
        {achievement.icon}
      </span>
      <h3 className="text-sm font-semibold text-gray-900">{achievement.title}</h3>
      <p className="text-xs text-gray-500">{achievement.description}</p>
      {isUnlocked ? (
        <Badge className="bg-amber-100 text-amber-700">已解鎖</Badge>
      ) : achievement.hidden ? (
        <Badge variant="outline">隱藏成就</Badge>
      ) : (
        <Badge variant="outline">未解鎖</Badge>
      )}
    </div>
  );
}

export default function AchievementsPage() {
  const { achievements } = useGamificationStore();

  const unlockedIds = useMemo(
    () => new Set(achievements.map((a) => a.achievement_id)),
    [achievements]
  );

  const totalAchievements = ACHIEVEMENTS.filter((a) => !a.hidden).length;
  const unlockedCount = achievements.length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Trophy className="h-6 w-6 text-amber-500" />
          <h1 className="text-2xl font-bold text-gray-900">成就</h1>
        </div>
        <Badge className="bg-amber-100 text-amber-700">
          {unlockedCount} / {totalAchievements} 已解鎖
        </Badge>
      </div>

      {CATEGORIES.map((category) => {
        const categoryAchievements = getAchievementsByCategory(category);
        if (categoryAchievements.length === 0) return null;

        return (
          <Card key={category}>
            <CardHeader>
              <h2 className="text-lg font-semibold text-gray-900">
                {CATEGORY_LABELS[category]}
              </h2>
            </CardHeader>
            <CardBody>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {categoryAchievements.map((achievement) => (
                  <AchievementBadge
                    key={achievement.id}
                    achievement={achievement}
                    isUnlocked={unlockedIds.has(achievement.id)}
                  />
                ))}
              </div>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}
