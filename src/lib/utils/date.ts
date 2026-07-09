/**
 * 在地日界工具。
 *
 * 每日計數（todayReviewCount/todayNewCount）與連續天數（streak）等邏輯必須以
 * 使用者的「日曆日」為界。過去用 `new Date().toISOString().split('T')[0]` 取 UTC 日期，
 * 對台灣（UTC+8）使用者而言要到當地時間 08:00 才換日——凌晨 0-8 點的學習會被算進前一天，
 * 導致 streak 判定與「今日已複習」數字與直覺不符。改用 Asia/Taipei 的日曆日修正此問題。
 */

export const APP_TIME_ZONE = 'Asia/Taipei';

/**
 * 回傳指定時區（預設 Asia/Taipei）的日曆日 key，格式 `YYYY-MM-DD`。
 *
 * 以 `Intl.DateTimeFormat` 依時區換算，避免手動時區偏移的日光節約/整點誤差。
 * 預設參數為 `new Date()`，故 vitest `vi.useFakeTimers()` / `vi.setSystemTime()`
 * 可正常控制時鐘（呼叫當下才取現在時間）。
 */
export function getLocalDayKey(
  date: Date = new Date(),
  timeZone: string = APP_TIME_ZONE
): string {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);
  const year = parts.find((p) => p.type === 'year')?.value ?? '1970';
  const month = parts.find((p) => p.type === 'month')?.value ?? '01';
  const day = parts.find((p) => p.type === 'day')?.value ?? '01';
  return `${year}-${month}-${day}`;
}
