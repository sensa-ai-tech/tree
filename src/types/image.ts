/**
 * Clinical Image Type System
 *
 * 臨床影像型別系統 — 支援 Cloudinary CDN + CC 授權歸屬
 * 設計為與現有 [圖片:...] 標記系統向後相容
 */

// ─── License Types ───

export type ImageLicense =
  | 'CC-BY'
  | 'CC-BY-SA'
  | 'CC-BY-NC'
  | 'CC-BY-NC-SA'
  | 'CC0'
  | 'public_domain'
  | 'fair_use_education';

// ─── Image Categories ───

export type ClinicalImageCategory =
  | 'cytology'
  | 'histopathology'
  | 'radiograph'
  | 'ultrasound'
  | 'ecg'
  | 'gross_pathology'
  | 'clinical_photo'
  | 'surgical_photo'
  | 'diagram'
  | 'microscopy'
  | 'dermatology'
  | 'endoscopy';

// ─── Image Source (Attribution) ───

export interface ImageSource {
  provider: string;
  original_url: string;
  license: ImageLicense;
  author: string | null;
  attribution_text: string;
}

// ─── Image Asset ───

export interface ImageAsset {
  id: string;
  cloudinary_id: string;
  url: string;
  thumbnail_url: string;
  alt_text: string;
  alt_text_en: string;
  caption: string;
  category: ClinicalImageCategory;
  specialties: string[];
  node_ids: string[];
  source: ImageSource;
  species: ('canine' | 'feline' | 'both')[];
  width: number;
  height: number;
}
