'use client';

import { create } from 'zustand';
import type { UserExperience, XPEvent, UserAchievement } from '@/types/gamification';
import { getLevelInfo } from '@/lib/gamification/level-system';

interface GamificationState {
  experience: UserExperience;
  achievements: UserAchievement[];
  recentXPEvents: XPEvent[];
  showLevelUpModal: boolean;

  addXP: (event: XPEvent) => void;
  unlockAchievement: (achievementId: string) => void;
  updateStreak: (days: number) => void;
  addSpecialty: (specialty: string) => void;
  setShowLevelUpModal: (show: boolean) => void;
  setExperience: (exp: UserExperience) => void;
  setAchievements: (achievements: UserAchievement[]) => void;
}

const defaultExperience: UserExperience = {
  user_id: '',
  total_xp: 0,
  current_level: 1,
  streak_days: 0,
  last_active_date: null,
  specialties_explored: [],
};

export const useGamificationStore = create<GamificationState>((set, get) => ({
  experience: defaultExperience,
  achievements: [],
  recentXPEvents: [],
  showLevelUpModal: false,

  addXP: (event) =>
    set((state) => {
      const newXP = state.experience.total_xp + event.amount;
      const oldLevel = state.experience.current_level;
      const levelInfo = getLevelInfo(newXP);
      const leveledUp = levelInfo.level > oldLevel;

      return {
        experience: {
          ...state.experience,
          total_xp: newXP,
          current_level: levelInfo.level,
        },
        recentXPEvents: [event, ...state.recentXPEvents].slice(0, 20),
        showLevelUpModal: leveledUp,
      };
    }),

  unlockAchievement: (achievementId) =>
    set((state) => {
      if (state.achievements.some((a) => a.achievement_id === achievementId)) {
        return state;
      }
      return {
        achievements: [
          ...state.achievements,
          {
            user_id: state.experience.user_id,
            achievement_id: achievementId,
            unlocked_at: new Date().toISOString(),
          },
        ],
      };
    }),

  updateStreak: (days) =>
    set((state) => ({
      experience: {
        ...state.experience,
        streak_days: days,
        last_active_date: new Date().toISOString().split('T')[0],
      },
    })),

  addSpecialty: (specialty) =>
    set((state) => {
      const current = state.experience.specialties_explored;
      if (current.includes(specialty)) return state;
      return {
        experience: {
          ...state.experience,
          specialties_explored: [...current, specialty],
        },
      };
    }),

  setShowLevelUpModal: (show) => set({ showLevelUpModal: show }),
  setExperience: (experience) => set({ experience }),
  setAchievements: (achievements) => set({ achievements }),
}));
