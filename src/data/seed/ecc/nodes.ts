import type { KnowledgeNode } from '@/types/knowledge';

const now = '2026-02-15T00:00:00Z';

export const ECC_NODES: KnowledgeNode[] = [
  // Layer 0: 學科總覽
  { id: 'ECC-L0-001', specialty: 'ECC', title: '急診加護總覽', title_en: 'Emergency & Critical Care Overview', layer: 0, node_type: 'concept', difficulty: 1, estimated_minutes: 15, clinical_relevance: 3, exam_relevance: 3, status: 'published', version: 1, tags: ['總覽', '急診'], encyclopedia_link: null, cross_specialty_notes: null, created_at: now, updated_at: now },

  // Layer 1: 基礎科學
  { id: 'ECC-L1-001', specialty: 'ECC', title: '休克生理學', title_en: 'Shock Physiology', layer: 1, node_type: 'concept', difficulty: 3, estimated_minutes: 25, clinical_relevance: 5, exam_relevance: 5, status: 'published', version: 1, tags: ['休克', '生理'], encyclopedia_link: null, cross_specialty_notes: '與 CARDIO 血流動力學相關', created_at: now, updated_at: now },
  { id: 'ECC-L1-002', specialty: 'ECC', title: '體液與電解質平衡', title_en: 'Fluid & Electrolyte Balance', layer: 1, node_type: 'concept', difficulty: 2, estimated_minutes: 25, clinical_relevance: 5, exam_relevance: 5, status: 'published', version: 1, tags: ['體液', '電解質'], encyclopedia_link: null, cross_specialty_notes: null, created_at: now, updated_at: now },
  { id: 'ECC-L1-003', specialty: 'ECC', title: '酸鹼平衡', title_en: 'Acid-Base Balance', layer: 1, node_type: 'concept', difficulty: 3, estimated_minutes: 25, clinical_relevance: 5, exam_relevance: 4, status: 'published', version: 1, tags: ['酸鹼', '血氣'], encyclopedia_link: null, cross_specialty_notes: '與 CPATH 血氣分析相關', created_at: now, updated_at: now },

  // Layer 2: 病理機轉
  { id: 'ECC-L2-001', specialty: 'ECC', title: 'SIRS/敗血症機轉', title_en: 'SIRS & Sepsis Pathophysiology', layer: 2, node_type: 'mechanism', difficulty: 4, estimated_minutes: 25, clinical_relevance: 5, exam_relevance: 4, status: 'published', version: 1, tags: ['SIRS', '敗血症'], encyclopedia_link: null, cross_specialty_notes: null, created_at: now, updated_at: now },
  { id: 'ECC-L2-002', specialty: 'ECC', title: '多重器官功能障礙', title_en: 'Multiple Organ Dysfunction Syndrome', layer: 2, node_type: 'mechanism', difficulty: 4, estimated_minutes: 25, clinical_relevance: 4, exam_relevance: 3, status: 'published', version: 1, tags: ['MODS', '重症'], encyclopedia_link: null, cross_specialty_notes: null, created_at: now, updated_at: now },

  // Layer 3: 臨床疾病各論
  { id: 'ECC-L3-001', specialty: 'ECC', title: '過敏性休克', title_en: 'Anaphylaxis', layer: 3, node_type: 'disease', difficulty: 3, estimated_minutes: 25, clinical_relevance: 5, exam_relevance: 5, status: 'published', version: 1, tags: ['過敏', '休克', '犬貓'], encyclopedia_link: null, cross_specialty_notes: null, created_at: now, updated_at: now },
  { id: 'ECC-L3-002', specialty: 'ECC', title: '糖尿病酮酸血症(DKA)', title_en: 'Diabetic Ketoacidosis', layer: 3, node_type: 'disease', difficulty: 4, estimated_minutes: 30, clinical_relevance: 5, exam_relevance: 4, status: 'published', version: 1, tags: ['DKA', '糖尿病', '犬貓'], encyclopedia_link: null, cross_specialty_notes: '與 IM 糖尿病相關', created_at: now, updated_at: now },
  { id: 'ECC-L3-003', specialty: 'ECC', title: '中暑', title_en: 'Heat Stroke', layer: 3, node_type: 'disease', difficulty: 3, estimated_minutes: 25, clinical_relevance: 5, exam_relevance: 4, status: 'published', version: 1, tags: ['中暑', '犬', '台灣'], encyclopedia_link: null, cross_specialty_notes: null, created_at: now, updated_at: now },
  { id: 'ECC-L3-004', specialty: 'ECC', title: '貓尿道阻塞', title_en: 'Feline Urethral Obstruction', layer: 3, node_type: 'disease', difficulty: 3, estimated_minutes: 30, clinical_relevance: 5, exam_relevance: 5, status: 'published', version: 1, tags: ['尿道阻塞', '貓'], encyclopedia_link: null, cross_specialty_notes: null, created_at: now, updated_at: now },
  { id: 'ECC-L3-005', specialty: 'ECC', title: '中毒急診', title_en: 'Toxicological Emergencies', layer: 3, node_type: 'disease', difficulty: 3, estimated_minutes: 30, clinical_relevance: 5, exam_relevance: 4, status: 'published', version: 1, tags: ['中毒', '急診', '犬貓'], encyclopedia_link: null, cross_specialty_notes: null, created_at: now, updated_at: now },
  { id: 'ECC-L3-006', specialty: 'ECC', title: '癲癇重積狀態', title_en: 'Status Epilepticus', layer: 3, node_type: 'disease', difficulty: 4, estimated_minutes: 25, clinical_relevance: 5, exam_relevance: 4, status: 'published', version: 1, tags: ['癲癇重積', '急診', '犬貓'], encyclopedia_link: null, cross_specialty_notes: '與 NEURO 癲癇相關', created_at: now, updated_at: now },

  // Layer 4: 診斷方法
  { id: 'ECC-L4-001', specialty: 'ECC', title: '急診分診(ABCDE)', title_en: 'Emergency Triage (ABCDE)', layer: 4, node_type: 'diagnostic', difficulty: 3, estimated_minutes: 25, clinical_relevance: 5, exam_relevance: 5, status: 'published', version: 1, tags: ['分診', 'ABCDE'], encyclopedia_link: null, cross_specialty_notes: null, created_at: now, updated_at: now },
  { id: 'ECC-L4-002', specialty: 'ECC', title: '急診超音波(AFAST/TFAST)', title_en: 'Point-of-Care Ultrasound', layer: 4, node_type: 'diagnostic', difficulty: 4, estimated_minutes: 30, clinical_relevance: 5, exam_relevance: 4, status: 'published', version: 1, tags: ['POCUS', 'AFAST', 'TFAST'], encyclopedia_link: null, cross_specialty_notes: null, created_at: now, updated_at: now },

  // Layer 5: 治療與管理
  { id: 'ECC-L5-001', specialty: 'ECC', title: '靜脈液體治療', title_en: 'IV Fluid Therapy', layer: 5, node_type: 'therapeutic', difficulty: 3, estimated_minutes: 30, clinical_relevance: 5, exam_relevance: 5, status: 'published', version: 1, tags: ['輸液', '液體'], encyclopedia_link: null, cross_specialty_notes: null, created_at: now, updated_at: now },
  { id: 'ECC-L5-002', specialty: 'ECC', title: '心肺復甦(RECOVER)', title_en: 'Cardiopulmonary Resuscitation', layer: 5, node_type: 'procedure', difficulty: 4, estimated_minutes: 30, clinical_relevance: 5, exam_relevance: 5, status: 'published', version: 1, tags: ['CPR', 'RECOVER'], encyclopedia_link: null, cross_specialty_notes: null, created_at: now, updated_at: now },
  { id: 'ECC-L5-003', specialty: 'ECC', title: '輸血醫學', title_en: 'Transfusion Medicine', layer: 5, node_type: 'therapeutic', difficulty: 4, estimated_minutes: 25, clinical_relevance: 5, exam_relevance: 4, status: 'published', version: 1, tags: ['輸血', '血品'], encyclopedia_link: null, cross_specialty_notes: null, created_at: now, updated_at: now },
  { id: 'ECC-L5-004', specialty: 'ECC', title: '急診止痛策略', title_en: 'Emergency Analgesia', layer: 5, node_type: 'therapeutic', difficulty: 3, estimated_minutes: 25, clinical_relevance: 5, exam_relevance: 4, status: 'published', version: 1, tags: ['止痛', '急診'], encyclopedia_link: null, cross_specialty_notes: null, created_at: now, updated_at: now },
];
