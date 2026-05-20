import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  formatMinutes,
  formatDate,
  formatDateTime,
  formatNumber,
  formatPercentage,
  formatXP,
  formatStreak,
  formatRelativeTime,
} from '@/lib/utils/format';

describe('formatMinutes', () => {
  it('shows minutes when under 60', () => {
    expect(formatMinutes(30)).toBe('30 分鐘');
    expect(formatMinutes(59)).toBe('59 分鐘');
  });

  it('shows hour-only when minutes divide evenly', () => {
    expect(formatMinutes(60)).toBe('1 小時');
    expect(formatMinutes(120)).toBe('2 小時');
  });

  it('shows hour + minutes when there are leftover minutes', () => {
    expect(formatMinutes(75)).toBe('1 小時 15 分鐘');
    expect(formatMinutes(245)).toBe('4 小時 5 分鐘');
  });

  it('handles 0 as edge case', () => {
    expect(formatMinutes(0)).toBe('0 分鐘');
  });
});

describe('formatDate', () => {
  it('formats ISO date string to zh-TW', () => {
    const result = formatDate('2026-05-20T00:00:00Z');
    // 結果格式依 Intl 實作會是 "2026/05/20" 之類，這裡只驗 contains 年月日數字
    expect(result).toMatch(/2026/);
    expect(result).toMatch(/05/);
  });
});

describe('formatDateTime', () => {
  it('formats ISO date to zh-TW with time', () => {
    const result = formatDateTime('2026-05-20T15:30:00Z');
    expect(result).toMatch(/2026/);
    // 含小時 + 冒號（時間部分）
    expect(result).toMatch(/\d{2}:\d{2}|\d{2}：\d{2}|\d{1,2}:\d{2}/);
  });
});

describe('formatNumber', () => {
  it('adds thousand separators', () => {
    expect(formatNumber(1000)).toBe('1,000');
    expect(formatNumber(1234567)).toBe('1,234,567');
  });

  it('handles small numbers unchanged', () => {
    expect(formatNumber(42)).toBe('42');
    expect(formatNumber(0)).toBe('0');
  });
});

describe('formatPercentage', () => {
  it('returns 0% when total is 0', () => {
    expect(formatPercentage(5, 0)).toBe('0%');
  });

  it('rounds to integer', () => {
    expect(formatPercentage(1, 3)).toBe('33%');
    expect(formatPercentage(2, 3)).toBe('67%');
  });

  it('handles 100% exactly', () => {
    expect(formatPercentage(10, 10)).toBe('100%');
  });

  it('handles 0/n', () => {
    expect(formatPercentage(0, 5)).toBe('0%');
  });
});

describe('formatXP', () => {
  it('shows raw value with separators under 10k', () => {
    expect(formatXP(500)).toBe('500');
    expect(formatXP(9999)).toBe('9,999');
  });

  it('shows compact k notation at 10k and above', () => {
    expect(formatXP(10000)).toBe('10.0k');
    expect(formatXP(12500)).toBe('12.5k');
    expect(formatXP(100000)).toBe('100.0k');
  });
});

describe('formatStreak', () => {
  it('shows "尚未開始" for 0 days', () => {
    expect(formatStreak(0)).toBe('尚未開始');
  });

  it('shows "1 天" without space when streak is 1', () => {
    expect(formatStreak(1)).toBe('1 天');
  });

  it('shows "N 天" for multi-day streaks', () => {
    expect(formatStreak(7)).toBe('7 天');
    expect(formatStreak(365)).toBe('365 天');
  });
});

describe('formatRelativeTime', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-05-20T12:00:00Z'));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('returns 剛剛 for less than 1 minute ago', () => {
    expect(formatRelativeTime('2026-05-20T11:59:30Z')).toBe('剛剛');
  });

  it('returns N 分鐘前 for under 1 hour', () => {
    expect(formatRelativeTime('2026-05-20T11:45:00Z')).toBe('15 分鐘前');
  });

  it('returns N 小時前 for under 24 hours', () => {
    expect(formatRelativeTime('2026-05-20T05:00:00Z')).toBe('7 小時前');
  });

  it('returns N 天前 for under 7 days', () => {
    expect(formatRelativeTime('2026-05-17T12:00:00Z')).toBe('3 天前');
  });

  it('returns absolute date for >= 7 days', () => {
    const result = formatRelativeTime('2026-05-01T12:00:00Z');
    expect(result).toMatch(/2026/); // 應回到 formatDate 格式
    expect(result).not.toMatch(/天前/);
  });
});
