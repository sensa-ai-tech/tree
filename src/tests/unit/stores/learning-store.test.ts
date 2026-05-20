import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { useLearningStore } from '@/stores/learning-store';
import type { UserNodeProgress } from '@/types/gamification';

function getState() {
  return useLearningStore.getState();
}

function resetStore() {
  useLearningStore.setState({
    progress: new Map(),
    todayReviewCount: 0,
    todayNewCount: 0,
    isLoading: false,
  });
  localStorage.clear();
}

function makeProgress(nodeId: string, overrides: Partial<UserNodeProgress> = {}): UserNodeProgress {
  return {
    user_id: 'u1',
    node_id: nodeId,
    status: 'completed',
    started_at: '2026-05-19T10:00:00Z',
    completed_at: '2026-05-19T10:15:00Z',
    score: 90,
    time_spent_minutes: 15,
    ...overrides,
  };
}

describe('learning-store: progress getters', () => {
  beforeEach(resetStore);
  afterEach(resetStore);

  it('returns undefined for unknown node', () => {
    expect(getState().getProgress('UNKNOWN')).toBeUndefined();
  });

  it('returns "locked" status for unknown node', () => {
    expect(getState().getStatus('UNKNOWN')).toBe('locked');
  });

  it('returns set progress for known node', () => {
    const p = makeProgress('IM-L3-001');
    getState().setProgress('IM-L3-001', p);
    expect(getState().getProgress('IM-L3-001')).toEqual(p);
    expect(getState().getStatus('IM-L3-001')).toBe('completed');
  });
});

describe('learning-store: node lifecycle', () => {
  beforeEach(resetStore);
  afterEach(resetStore);

  it('unlockNode creates entry with status=available', () => {
    getState().unlockNode('IM-L3-001');
    expect(getState().getStatus('IM-L3-001')).toBe('available');
    const p = getState().getProgress('IM-L3-001');
    expect(p?.started_at).toBeNull();
    expect(p?.completed_at).toBeNull();
  });

  it('unlockNode is idempotent — does NOT overwrite existing entry', () => {
    getState().startNode('IM-L3-001');
    const before = getState().getProgress('IM-L3-001');
    getState().unlockNode('IM-L3-001');
    const after = getState().getProgress('IM-L3-001');
    expect(after?.status).toBe(before?.status); // 仍是 in_progress
  });

  it('startNode marks in_progress and sets started_at', () => {
    getState().startNode('IM-L3-002');
    const p = getState().getProgress('IM-L3-002');
    expect(p?.status).toBe('in_progress');
    expect(p?.started_at).toBeTruthy();
    expect(p?.completed_at).toBeNull();
  });

  it('completeNode preserves started_at from prior startNode', () => {
    getState().startNode('IM-L3-003');
    const started = getState().getProgress('IM-L3-003')?.started_at;
    getState().completeNode('IM-L3-003', 85, 20);
    const p = getState().getProgress('IM-L3-003');
    expect(p?.status).toBe('completed');
    expect(p?.started_at).toBe(started);
    expect(p?.score).toBe(85);
    expect(p?.time_spent_minutes).toBe(20);
    expect(p?.completed_at).toBeTruthy();
  });

  it('completeNode without prior start still works (synthesizes started_at)', () => {
    getState().completeNode('IM-L3-004', 70, 30);
    const p = getState().getProgress('IM-L3-004');
    expect(p?.status).toBe('completed');
    expect(p?.started_at).toBeTruthy(); // 自動填當下時間
    expect(p?.completed_at).toBeTruthy();
  });
});

describe('learning-store: count selectors', () => {
  beforeEach(resetStore);
  afterEach(resetStore);

  it('getCompletedCount counts only completed status', () => {
    getState().completeNode('A', 90, 10);
    getState().completeNode('B', 80, 10);
    getState().startNode('C');
    getState().unlockNode('D');
    expect(getState().getCompletedCount()).toBe(2);
  });

  it('getInProgressCount counts only in_progress status', () => {
    getState().startNode('A');
    getState().startNode('B');
    getState().completeNode('C', 90, 10);
    expect(getState().getInProgressCount()).toBe(2);
  });

  it('returns 0 for empty store', () => {
    expect(getState().getCompletedCount()).toBe(0);
    expect(getState().getInProgressCount()).toBe(0);
  });
});

describe('learning-store: daily counters', () => {
  beforeEach(resetStore);
  afterEach(resetStore);

  it('incrementReviewCount adds one', () => {
    getState().incrementReviewCount();
    getState().incrementReviewCount();
    expect(getState().todayReviewCount).toBe(2);
  });

  it('incrementNewCount adds one independently', () => {
    getState().incrementNewCount();
    expect(getState().todayNewCount).toBe(1);
    expect(getState().todayReviewCount).toBe(0);
  });
});

describe('learning-store: loading + reset', () => {
  beforeEach(resetStore);
  afterEach(resetStore);

  it('setLoading flips flag', () => {
    getState().setLoading(true);
    expect(getState().isLoading).toBe(true);
    getState().setLoading(false);
    expect(getState().isLoading).toBe(false);
  });

  it('resetStore clears progress + counters', () => {
    getState().completeNode('A', 90, 10);
    getState().incrementReviewCount();
    getState().setLoading(true);
    getState().resetStore();
    expect(getState().progress.size).toBe(0);
    expect(getState().todayReviewCount).toBe(0);
    expect(getState().todayNewCount).toBe(0);
    expect(getState().isLoading).toBe(false);
  });
});

describe('learning-store: Map serialization (persist + replacer/reviver)', () => {
  beforeEach(resetStore);
  afterEach(resetStore);

  it('serializes Map to __type marker in localStorage', () => {
    getState().completeNode('IM-L3-100', 95, 12);
    const stored = localStorage.getItem('vet-learning-storage');
    expect(stored).toBeTruthy();
    const parsed = JSON.parse(stored!);
    // 應該看到 { __type: 'Map', entries: [...] } 結構
    expect(parsed.state.progress).toHaveProperty('__type', 'Map');
    expect(Array.isArray(parsed.state.progress.entries)).toBe(true);
    expect(parsed.state.progress.entries[0]?.[0]).toBe('IM-L3-100');
  });

  it('round-trips Map through serialize/deserialize correctly', () => {
    // 寫入
    getState().completeNode('NODE-A', 80, 15);
    getState().startNode('NODE-B');
    const stored = localStorage.getItem('vet-learning-storage');
    expect(stored).toBeTruthy();

    // 模擬 rehydrate：把 localStorage 內容用 reviver 還原
    const parsed = JSON.parse(stored!, (_key, value) => {
      if (value && typeof value === 'object' && value.__type === 'Map') {
        return new Map(value.entries);
      }
      return value;
    });
    expect(parsed.state.progress).toBeInstanceOf(Map);
    const map = parsed.state.progress as Map<string, UserNodeProgress>;
    expect(map.size).toBe(2);
    expect(map.get('NODE-A')?.status).toBe('completed');
    expect(map.get('NODE-B')?.status).toBe('in_progress');
  });

  it('persists todayReviewCount and todayNewCount', () => {
    getState().incrementReviewCount();
    getState().incrementNewCount();
    getState().incrementNewCount();

    const stored = localStorage.getItem('vet-learning-storage');
    const parsed = JSON.parse(stored!);
    expect(parsed.state.todayReviewCount).toBe(1);
    expect(parsed.state.todayNewCount).toBe(2);
  });

  it('does NOT persist isLoading (transient)', () => {
    getState().setLoading(true);
    const stored = localStorage.getItem('vet-learning-storage');
    if (stored) {
      const parsed = JSON.parse(stored);
      expect(parsed.state.isLoading).toBeUndefined();
    }
  });
});
