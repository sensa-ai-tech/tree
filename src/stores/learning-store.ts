'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { UserNodeProgress, ProgressStatus } from '@/types/gamification';

const getTodayKey = (): string => new Date().toISOString().split('T')[0];

interface LearningState {
  progress: Map<string, UserNodeProgress>;
  todayReviewCount: number;
  todayNewCount: number;
  lastActiveDate: string | null;
  isLoading: boolean;

  setProgress: (nodeId: string, progress: UserNodeProgress) => void;
  getProgress: (nodeId: string) => UserNodeProgress | undefined;
  getStatus: (nodeId: string) => ProgressStatus;
  completeNode: (nodeId: string, score: number, timeMinutes: number) => void;
  startNode: (nodeId: string) => void;
  unlockNode: (nodeId: string) => void;
  incrementReviewCount: () => void;
  incrementNewCount: () => void;
  setLoading: (loading: boolean) => void;
  getCompletedCount: () => number;
  getInProgressCount: () => number;
  resetStore: () => void;
}

export const useLearningStore = create<LearningState>()(
  persist(
    (set, get) => ({
      progress: new Map(),
      todayReviewCount: 0,
      todayNewCount: 0,
      lastActiveDate: null,
      isLoading: false,

      setProgress: (nodeId, progress) =>
        set((state) => {
          const newMap = new Map(state.progress);
          newMap.set(nodeId, progress);
          return { progress: newMap };
        }),

      getProgress: (nodeId) => get().progress.get(nodeId),

      getStatus: (nodeId) => get().progress.get(nodeId)?.status ?? 'locked',

      completeNode: (nodeId, score, timeMinutes) =>
        set((state) => {
          const newMap = new Map(state.progress);
          const existing = newMap.get(nodeId);
          newMap.set(nodeId, {
            user_id: existing?.user_id ?? '',
            node_id: nodeId,
            status: 'completed',
            started_at: existing?.started_at ?? new Date().toISOString(),
            completed_at: new Date().toISOString(),
            score,
            time_spent_minutes: timeMinutes,
          });
          return { progress: newMap };
        }),

      startNode: (nodeId) =>
        set((state) => {
          const newMap = new Map(state.progress);
          const existing = newMap.get(nodeId);
          newMap.set(nodeId, {
            user_id: existing?.user_id ?? '',
            node_id: nodeId,
            status: 'in_progress',
            started_at: new Date().toISOString(),
            completed_at: null,
            score: null,
            time_spent_minutes: null,
          });
          return { progress: newMap };
        }),

      unlockNode: (nodeId) =>
        set((state) => {
          const newMap = new Map(state.progress);
          if (!newMap.has(nodeId)) {
            newMap.set(nodeId, {
              user_id: '',
              node_id: nodeId,
              status: 'available',
              started_at: null,
              completed_at: null,
              score: null,
              time_spent_minutes: null,
            });
          }
          return { progress: newMap };
        }),

      incrementReviewCount: () =>
        set((state) => {
          const today = getTodayKey();
          const isNewDay = state.lastActiveDate !== today;
          return {
            todayReviewCount: (isNewDay ? 0 : state.todayReviewCount) + 1,
            todayNewCount: isNewDay ? 0 : state.todayNewCount,
            lastActiveDate: today,
          };
        }),
      incrementNewCount: () =>
        set((state) => {
          const today = getTodayKey();
          const isNewDay = state.lastActiveDate !== today;
          return {
            todayNewCount: (isNewDay ? 0 : state.todayNewCount) + 1,
            todayReviewCount: isNewDay ? 0 : state.todayReviewCount,
            lastActiveDate: today,
          };
        }),
      setLoading: (isLoading) => set({ isLoading }),

      getCompletedCount: () => {
        let count = 0;
        for (const p of get().progress.values()) {
          if (p.status === 'completed') count++;
        }
        return count;
      },

      getInProgressCount: () => {
        let count = 0;
        for (const p of get().progress.values()) {
          if (p.status === 'in_progress') count++;
        }
        return count;
      },

      resetStore: () =>
        set({
          progress: new Map(),
          todayReviewCount: 0,
          todayNewCount: 0,
          lastActiveDate: null,
          isLoading: false,
        }),
    }),
    {
      name: 'vet-learning-storage',
      storage: createJSONStorage(() => localStorage, {
        replacer: (_key, value) => {
          if (value instanceof Map) {
            return { __type: 'Map', entries: Array.from(value.entries()) };
          }
          return value;
        },
        reviver: (_key, value) => {
          if (value && typeof value === 'object' && (value as Record<string, unknown>).__type === 'Map') {
            return new Map((value as { entries: [string, UserNodeProgress][] }).entries);
          }
          return value;
        },
      }),
      partialize: (state) => ({
        progress: state.progress,
        todayReviewCount: state.todayReviewCount,
        todayNewCount: state.todayNewCount,
        lastActiveDate: state.lastActiveDate,
      }),
      onRehydrateStorage: () => (state) => {
        if (!state) return;
        const today = getTodayKey();
        if (state.lastActiveDate !== today) {
          state.todayReviewCount = 0;
          state.todayNewCount = 0;
        }
      },
    }
  )
);
