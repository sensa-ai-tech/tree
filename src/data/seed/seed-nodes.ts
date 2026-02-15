import type { KnowledgeNode } from '@/types/knowledge';

const now = '2026-02-15T00:00:00Z';

export const SEED_NODES: KnowledgeNode[] = [
  // Layer 0: 學科總覽
  { id: 'CARDIO-L0-001', specialty: 'CARDIO', title: '心臟科總覽', title_en: 'Cardiology Overview', layer: 0, node_type: 'concept', difficulty: 1, estimated_minutes: 15, clinical_relevance: 3, exam_relevance: 3, status: 'published', version: 1, tags: ['總覽', '心臟'], encyclopedia_link: null, cross_specialty_notes: null, created_at: now, updated_at: now },

  // Layer 1: 基礎科學
  { id: 'CARDIO-L1-001', specialty: 'CARDIO', title: '心臟解剖學', title_en: 'Cardiac Anatomy', layer: 1, node_type: 'concept', difficulty: 2, estimated_minutes: 20, clinical_relevance: 4, exam_relevance: 4, status: 'published', version: 1, tags: ['解剖', '心臟'], encyclopedia_link: null, cross_specialty_notes: null, created_at: now, updated_at: now },
  { id: 'CARDIO-L1-002', specialty: 'CARDIO', title: '心臟電生理學', title_en: 'Cardiac Electrophysiology', layer: 1, node_type: 'concept', difficulty: 2, estimated_minutes: 25, clinical_relevance: 4, exam_relevance: 5, status: 'published', version: 1, tags: ['電生理', '心臟'], encyclopedia_link: null, cross_specialty_notes: null, created_at: now, updated_at: now },
  { id: 'CARDIO-L1-003', specialty: 'CARDIO', title: '心臟血流動力學', title_en: 'Cardiac Hemodynamics', layer: 1, node_type: 'mechanism', difficulty: 3, estimated_minutes: 20, clinical_relevance: 4, exam_relevance: 3, status: 'published', version: 1, tags: ['血流動力學', '生理'], encyclopedia_link: null, cross_specialty_notes: null, created_at: now, updated_at: now },

  // Layer 2: 病理機轉
  { id: 'CARDIO-L2-001', specialty: 'CARDIO', title: '瓣膜退化機轉', title_en: 'Valvular Degeneration Pathogenesis', layer: 2, node_type: 'mechanism', difficulty: 3, estimated_minutes: 20, clinical_relevance: 5, exam_relevance: 4, status: 'published', version: 1, tags: ['瓣膜', '病理'], encyclopedia_link: null, cross_specialty_notes: null, created_at: now, updated_at: now },
  { id: 'CARDIO-L2-002', specialty: 'CARDIO', title: '心肌重塑機轉', title_en: 'Myocardial Remodeling', layer: 2, node_type: 'mechanism', difficulty: 3, estimated_minutes: 25, clinical_relevance: 4, exam_relevance: 3, status: 'published', version: 1, tags: ['心肌', '重塑'], encyclopedia_link: null, cross_specialty_notes: null, created_at: now, updated_at: now },
  { id: 'CARDIO-L2-003', specialty: 'CARDIO', title: '心律不整機轉', title_en: 'Arrhythmia Pathogenesis', layer: 2, node_type: 'mechanism', difficulty: 4, estimated_minutes: 25, clinical_relevance: 5, exam_relevance: 4, status: 'published', version: 1, tags: ['心律不整', '電生理'], encyclopedia_link: null, cross_specialty_notes: null, created_at: now, updated_at: now },

  // Layer 3: 臨床疾病
  { id: 'CARDIO-L3-001', specialty: 'CARDIO', title: '二尖瓣黏液瘤性退化 (MMVD)', title_en: 'Myxomatous Mitral Valve Disease', layer: 3, node_type: 'disease', difficulty: 3, estimated_minutes: 30, clinical_relevance: 5, exam_relevance: 5, status: 'published', version: 1, tags: ['MMVD', '瓣膜', '犬'], encyclopedia_link: null, cross_specialty_notes: null, created_at: now, updated_at: now },
  { id: 'CARDIO-L3-002', specialty: 'CARDIO', title: '擴張型心肌病 (DCM)', title_en: 'Dilated Cardiomyopathy', layer: 3, node_type: 'disease', difficulty: 4, estimated_minutes: 30, clinical_relevance: 5, exam_relevance: 4, status: 'published', version: 1, tags: ['DCM', '心肌病', '犬'], encyclopedia_link: null, cross_specialty_notes: null, created_at: now, updated_at: now },
  { id: 'CARDIO-L3-003', specialty: 'CARDIO', title: '肥厚型心肌病 (HCM)', title_en: 'Hypertrophic Cardiomyopathy', layer: 3, node_type: 'disease', difficulty: 4, estimated_minutes: 30, clinical_relevance: 5, exam_relevance: 4, status: 'published', version: 1, tags: ['HCM', '心肌病', '貓'], encyclopedia_link: null, cross_specialty_notes: null, created_at: now, updated_at: now },
  { id: 'CARDIO-L3-004', specialty: 'CARDIO', title: '心絲蟲症', title_en: 'Heartworm Disease', layer: 3, node_type: 'disease', difficulty: 3, estimated_minutes: 25, clinical_relevance: 5, exam_relevance: 5, status: 'published', version: 1, tags: ['心絲蟲', '寄生蟲', '台灣'], encyclopedia_link: null, cross_specialty_notes: '與內科、影像科相關', created_at: now, updated_at: now },

  // Layer 4: 診斷方法
  { id: 'CARDIO-L4-001', specialty: 'CARDIO', title: '心臟聽診', title_en: 'Cardiac Auscultation', layer: 4, node_type: 'diagnostic', difficulty: 2, estimated_minutes: 20, clinical_relevance: 5, exam_relevance: 5, status: 'published', version: 1, tags: ['聽診', '理學檢查'], encyclopedia_link: null, cross_specialty_notes: null, created_at: now, updated_at: now },
  { id: 'CARDIO-L4-002', specialty: 'CARDIO', title: '心臟超音波基礎', title_en: 'Basic Echocardiography', layer: 4, node_type: 'diagnostic', difficulty: 4, estimated_minutes: 35, clinical_relevance: 5, exam_relevance: 4, status: 'published', version: 1, tags: ['超音波', '影像'], encyclopedia_link: null, cross_specialty_notes: null, created_at: now, updated_at: now },
  { id: 'CARDIO-L4-003', specialty: 'CARDIO', title: '心電圖判讀', title_en: 'ECG Interpretation', layer: 4, node_type: 'diagnostic', difficulty: 3, estimated_minutes: 30, clinical_relevance: 5, exam_relevance: 5, status: 'published', version: 1, tags: ['ECG', '電生理'], encyclopedia_link: null, cross_specialty_notes: null, created_at: now, updated_at: now },
  { id: 'CARDIO-L4-004', specialty: 'CARDIO', title: '胸腔 X 光判讀', title_en: 'Thoracic Radiograph Interpretation', layer: 4, node_type: 'diagnostic', difficulty: 3, estimated_minutes: 25, clinical_relevance: 5, exam_relevance: 4, status: 'published', version: 1, tags: ['X光', '影像'], encyclopedia_link: null, cross_specialty_notes: null, created_at: now, updated_at: now },

  // Layer 5: 治療與管理
  { id: 'CARDIO-L5-001', specialty: 'CARDIO', title: '心臟衰竭治療', title_en: 'Heart Failure Treatment', layer: 5, node_type: 'therapeutic', difficulty: 4, estimated_minutes: 30, clinical_relevance: 5, exam_relevance: 5, status: 'published', version: 1, tags: ['CHF', '治療', '藥物'], encyclopedia_link: null, cross_specialty_notes: null, created_at: now, updated_at: now },
  { id: 'CARDIO-L5-002', specialty: 'CARDIO', title: '抗心律不整藥物', title_en: 'Antiarrhythmic Drugs', layer: 5, node_type: 'therapeutic', difficulty: 4, estimated_minutes: 25, clinical_relevance: 4, exam_relevance: 4, status: 'published', version: 1, tags: ['藥物', '心律不整'], encyclopedia_link: null, cross_specialty_notes: null, created_at: now, updated_at: now },
  { id: 'CARDIO-L5-003', specialty: 'CARDIO', title: '心包膜穿刺術', title_en: 'Pericardiocentesis', layer: 5, node_type: 'procedure', difficulty: 5, estimated_minutes: 20, clinical_relevance: 4, exam_relevance: 3, status: 'published', version: 1, tags: ['手術', '急診'], encyclopedia_link: null, cross_specialty_notes: null, created_at: now, updated_at: now },
];
