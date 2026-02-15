import type { UserNodeProgress } from '@/types/gamification';

const userId = 'demo-student-001';

/**
 * 預設學習進度：
 * - 5 completed (L0-001, L1-001, L1-002, L1-003, L2-001)
 * - 2 in_progress (L3-001, L4-001)
 * - 5 available (L2-002, L2-003, L3-004, L4-003, L4-004)
 * - 6 locked (L3-002, L3-003, L4-002, L5-001, L5-002, L5-003)
 */
export const SEED_PROGRESS: UserNodeProgress[] = [
  // completed — 5
  {
    user_id: userId,
    node_id: 'CARDIO-L0-001',
    status: 'completed',
    started_at: '2026-02-08T09:00:00Z',
    completed_at: '2026-02-08T09:15:00Z',
    score: 100,
    time_spent_minutes: 15,
  },
  {
    user_id: userId,
    node_id: 'CARDIO-L1-001',
    status: 'completed',
    started_at: '2026-02-09T10:00:00Z',
    completed_at: '2026-02-09T10:22:00Z',
    score: 90,
    time_spent_minutes: 22,
  },
  {
    user_id: userId,
    node_id: 'CARDIO-L1-002',
    status: 'completed',
    started_at: '2026-02-10T11:00:00Z',
    completed_at: '2026-02-10T11:30:00Z',
    score: 85,
    time_spent_minutes: 30,
  },
  {
    user_id: userId,
    node_id: 'CARDIO-L1-003',
    status: 'completed',
    started_at: '2026-02-11T09:00:00Z',
    completed_at: '2026-02-11T09:25:00Z',
    score: 80,
    time_spent_minutes: 25,
  },
  {
    user_id: userId,
    node_id: 'CARDIO-L2-001',
    status: 'completed',
    started_at: '2026-02-12T14:00:00Z',
    completed_at: '2026-02-12T14:20:00Z',
    score: 88,
    time_spent_minutes: 20,
  },

  // in_progress — 2
  {
    user_id: userId,
    node_id: 'CARDIO-L3-001',
    status: 'in_progress',
    started_at: '2026-02-14T10:00:00Z',
    completed_at: null,
    score: null,
    time_spent_minutes: null,
  },
  {
    user_id: userId,
    node_id: 'CARDIO-L4-001',
    status: 'in_progress',
    started_at: '2026-02-14T11:00:00Z',
    completed_at: null,
    score: null,
    time_spent_minutes: null,
  },

  // available — 5
  {
    user_id: userId,
    node_id: 'CARDIO-L2-002',
    status: 'available',
    started_at: null,
    completed_at: null,
    score: null,
    time_spent_minutes: null,
  },
  {
    user_id: userId,
    node_id: 'CARDIO-L2-003',
    status: 'available',
    started_at: null,
    completed_at: null,
    score: null,
    time_spent_minutes: null,
  },
  {
    user_id: userId,
    node_id: 'CARDIO-L3-004',
    status: 'available',
    started_at: null,
    completed_at: null,
    score: null,
    time_spent_minutes: null,
  },
  {
    user_id: userId,
    node_id: 'CARDIO-L4-003',
    status: 'available',
    started_at: null,
    completed_at: null,
    score: null,
    time_spent_minutes: null,
  },
  {
    user_id: userId,
    node_id: 'CARDIO-L4-004',
    status: 'available',
    started_at: null,
    completed_at: null,
    score: null,
    time_spent_minutes: null,
  },

  // locked — 6 (不需要在此宣告，因為 store 預設為 locked)
];
