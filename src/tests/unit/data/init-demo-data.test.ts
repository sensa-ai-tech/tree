import { beforeEach, afterEach, describe, expect, it } from 'vitest';
import { initializeDemoData } from '@/data/seed';
import { useAuthStore } from '@/stores/auth-store';
import { useLearningStore } from '@/stores/learning-store';
import { useGamificationStore } from '@/stores/gamification-store';
import { DEMO_STUDENT } from '@/data/seed/demo-users';

/**
 * 回歸守衛（co-dev U2 / 新手 UX #4-core）：demo 學習進度與 XP 只能注入給 demo 學生。
 * 過去 initializeDemoData 只檢查 progress.size / total_xp，導致真人用自己 email 登入後
 * 仍被灌上 demo 的 5 完成節點 + 930 XP，全新帳號一進首頁就看到「已完成 5 / 歡迎回到」。
 */

function resetAll() {
  useAuthStore.setState({ user: null });
  useLearningStore.getState().resetStore();
  useGamificationStore.getState().resetStore();
  localStorage.clear();
}

describe('initializeDemoData — demo 進度只注入 demo 學生', () => {
  beforeEach(resetAll);
  afterEach(resetAll);

  it('真人（非 demo id）登入後不注入 demo 進度/XP（乾淨起步）', () => {
    useAuthStore.getState().setUser({ id: 'real-user-1', email: 'real@vet.tw', role: 'user' });

    initializeDemoData();

    expect(useLearningStore.getState().progress.size).toBe(0);
    expect(useLearningStore.getState().getCompletedCount()).toBe(0);
    expect(useGamificationStore.getState().experience.total_xp).toBe(0);
    // 內容（節點）仍應載入——那是內容非個人資料
    expect(useAuthStore.getState().user?.id).toBe('real-user-1');
  });

  it('未登入時自動成為 demo 學生並注入 demo 進度/XP（展示帳號）', () => {
    initializeDemoData();

    expect(useAuthStore.getState().user?.id).toBe(DEMO_STUDENT.id);
    expect(useLearningStore.getState().progress.size).toBeGreaterThan(0);
    expect(useGamificationStore.getState().experience.total_xp).toBeGreaterThan(0);
  });
});
