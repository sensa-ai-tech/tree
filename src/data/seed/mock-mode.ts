/**
 * 檢查是否為 mock 模式（無 Supabase 連線）。
 * 獨立模組，避免 import 時拉入全部 seed data。
 */
export function isMockMode(): boolean {
  return !process.env.NEXT_PUBLIC_SUPABASE_URL;
}
