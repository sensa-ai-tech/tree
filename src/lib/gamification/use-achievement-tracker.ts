'use client';

import { useEffect } from 'react';
import { useLearningStore } from '@/stores/learning-store';
import { useGamificationStore } from '@/stores/gamification-store';
import { checkNewAchievements } from '@/lib/gamification/achievements';
import { getLocalDayKey } from '@/lib/utils/date';

/**
 * Auto-checks achievements and updates streak on learning state changes.
 * Mount once in dashboard layout.
 */
export function useAchievementTracker(): void {
  const completedCount = useLearningStore((s) => s.getCompletedCount());
  const todayReviewCount = useLearningStore((s) => s.todayReviewCount);
  const experience = useGamificationStore((s) => s.experience);
  const achievements = useGamificationStore((s) => s.achievements);
  const unlockAchievement = useGamificationStore((s) => s.unlockAchievement);
  const updateStreak = useGamificationStore((s) => s.updateStreak);

  // Auto-check achievements when learning state changes
  useEffect(() => {
    const alreadyUnlocked = achievements.map((a) => a.achievement_id);

    const newAchievements = checkNewAchievements(
      {
        completedNodes: completedCount,
        completedPaths: 0,
        completedCases: 0,
        streakDays: experience.streak_days,
        specialtiesExplored: experience.specialties_explored.length,
        caseAccuracy: 0,
        allMasteryAbove80: false,
        reviewStreak: todayReviewCount,
      },
      alreadyUnlocked
    );

    for (const id of newAchievements) {
      unlockAchievement(id);
    }
  }, [completedCount, todayReviewCount, experience.streak_days, experience.specialties_explored.length, achievements, unlockAchievement]);

  // Auto-update streak on any learning activity
  useEffect(() => {
    if (completedCount === 0 && todayReviewCount === 0) return;

    const today = getLocalDayKey();
    const lastActive = experience.last_active_date;

    if (lastActive === today) return; // Already updated today

    if (lastActive) {
      const lastDate = new Date(lastActive);
      const todayDate = new Date(today);
      const diffDays = Math.round((todayDate.getTime() - lastDate.getTime()) / 86400000);

      if (diffDays === 1) {
        // Consecutive day
        updateStreak(experience.streak_days + 1);
      } else if (diffDays > 1) {
        // Streak broken
        updateStreak(1);
      }
    } else {
      // First activity ever
      updateStreak(1);
    }
  }, [completedCount, todayReviewCount, experience.last_active_date, experience.streak_days, updateStreak]);
}
