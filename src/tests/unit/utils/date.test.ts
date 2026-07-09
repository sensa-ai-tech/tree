import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { getLocalDayKey, APP_TIME_ZONE } from '@/lib/utils/date';

describe('getLocalDayKey (Asia/Taipei 日界)', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it('回傳 YYYY-MM-DD 格式', () => {
    vi.setSystemTime(new Date('2026-07-09T03:00:00Z'));
    expect(getLocalDayKey()).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it('台灣午夜前一刻（UTC 15:59）仍屬前一日', () => {
    // UTC 2026-07-09T15:59Z = Taipei 2026-07-09T23:59 → 同日
    vi.setSystemTime(new Date('2026-07-09T15:59:00Z'));
    expect(getLocalDayKey()).toBe('2026-07-09');
  });

  it('台灣午夜（UTC 16:00）跨入次日 — 這正是 UTC 日界的破口', () => {
    // UTC 2026-07-09T16:00Z 仍是 UTC 的 07-09，但 Taipei 已是 2026-07-10T00:00
    const instant = new Date('2026-07-09T16:00:00Z');
    vi.setSystemTime(instant);
    expect(getLocalDayKey()).toBe('2026-07-10');
    // 對照：舊的 UTC 日界會錯算成前一天
    expect(instant.toISOString().split('T')[0]).toBe('2026-07-09');
  });

  it('台灣凌晨 0-8 點的學習算「今天」而非 UTC 的前一天', () => {
    // Taipei 2026-07-10T02:00 = UTC 2026-07-09T18:00
    vi.setSystemTime(new Date('2026-07-09T18:00:00Z'));
    expect(getLocalDayKey()).toBe('2026-07-10');
  });

  it('可指定其他時區', () => {
    vi.setSystemTime(new Date('2026-07-09T16:00:00Z'));
    expect(getLocalDayKey(new Date('2026-07-09T16:00:00Z'), 'UTC')).toBe('2026-07-09');
  });

  it('APP_TIME_ZONE 為 Asia/Taipei', () => {
    expect(APP_TIME_ZONE).toBe('Asia/Taipei');
  });
});
