'use client';

import { create } from 'zustand';
import type { UserNodeProgress, ProgressStatus } from '@/types/gamification';

interface LearningState {
  progress: Map<string, UserNodeProgress>;
  todayReviewCount: number;
  todayNewCount: number;
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
}

export const useLearningStore = create<LearningState>((set, get) => ({
  progress: new Map(),
  todayReviewCount: 0,
  todayNewCount: 0,
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
    set((state) => ({ todayReviewCount: state.todayReviewCount + 1 })),
  incrementNewCount: () =>
    set((state) => ({ todayNewCount: state.todayNewCount + 1 })),
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
}));
