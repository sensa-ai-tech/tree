/**
 * Image Registry — 臨床影像中央註冊表
 *
 * 提供 [圖片:description] 標記與 ImageAsset 的映射。
 * 當 Cloudinary 影像上傳後，在此註冊即可自動渲染。
 * 未註冊的描述仍顯示 ImagePlaceholder（graceful fallback）。
 */

import type { ImageAsset } from '@/types/image';

// ─── Central Image Asset Registry ───

export const IMAGE_REGISTRY: Map<string, ImageAsset> = new Map();

// ─── Description → ImageAsset ID Mapping ───
// 將 content 中的 [圖片:description] 映射至 IMAGE_REGISTRY 的 key
// 上傳影像後：1) 加入 IMAGE_REGISTRY  2) 加入此 map 的對應 entry

export const IMAGE_DESCRIPTION_MAP: Record<string, string> = {
  // ── CARDIO ──
  // '犬貓常見心臟病分佈圓餅圖': 'IMG-CARDIO-001',
  // 'MMVD 病理機制瀑布圖——從分子到器官': 'IMG-CARDIO-002',
  // ... 上傳影像後取消註解並填入 ID

  // ── IM ──
  // ── DERM ──
  // ── SURG ──
  // ── NEURO ──
  // ── ONCO ──
  // ── ECC ──
  // ── CPATH ──
};

/**
 * 查詢 [圖片:description] 對應的 ImageAsset
 * @returns ImageAsset if found, null if no image registered for this description
 */
export function getImageByDescription(description: string): ImageAsset | null {
  const assetId = IMAGE_DESCRIPTION_MAP[description];
  if (!assetId) return null;
  return IMAGE_REGISTRY.get(assetId) ?? null;
}
