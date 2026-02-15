import type { KnowledgeNode } from '@/types/knowledge';

const now = '2026-02-15T00:00:00Z';

export const CPATH_NODES: KnowledgeNode[] = [
  // Layer 1: 基礎科學
  { id: 'CPATH-L1-001', specialty: 'CPATH', title: '血液學基礎', title_en: 'Hematology Basics', layer: 1, node_type: 'concept', difficulty: 2, estimated_minutes: 20, clinical_relevance: 4, exam_relevance: 4, status: 'published', version: 1, tags: ['血液學', '基礎'], encyclopedia_link: null, cross_specialty_notes: 'ALL specialties - shared prerequisite module', created_at: now, updated_at: now },
  { id: 'CPATH-L1-002', specialty: 'CPATH', title: '臨床化學基礎', title_en: 'Clinical Chemistry Basics', layer: 1, node_type: 'concept', difficulty: 2, estimated_minutes: 20, clinical_relevance: 4, exam_relevance: 4, status: 'published', version: 1, tags: ['生化', '基礎'], encyclopedia_link: null, cross_specialty_notes: 'ALL specialties - shared prerequisite module', created_at: now, updated_at: now },

  // Layer 4: 診斷方法
  { id: 'CPATH-L4-001', specialty: 'CPATH', title: '全血球計數判讀', title_en: 'CBC Interpretation', layer: 4, node_type: 'diagnostic', difficulty: 3, estimated_minutes: 25, clinical_relevance: 5, exam_relevance: 5, status: 'published', version: 1, tags: ['CBC', '血液學'], encyclopedia_link: null, cross_specialty_notes: 'ALL specialties - shared prerequisite module', created_at: now, updated_at: now },
  { id: 'CPATH-L4-002', specialty: 'CPATH', title: '血清生化判讀', title_en: 'Serum Biochemistry Interpretation', layer: 4, node_type: 'diagnostic', difficulty: 3, estimated_minutes: 25, clinical_relevance: 5, exam_relevance: 5, status: 'published', version: 1, tags: ['生化', '判讀'], encyclopedia_link: null, cross_specialty_notes: 'ALL specialties - shared prerequisite module', created_at: now, updated_at: now },
  { id: 'CPATH-L4-003', specialty: 'CPATH', title: '細胞學基本原則', title_en: 'Basic Cytology Principles', layer: 4, node_type: 'diagnostic', difficulty: 3, estimated_minutes: 25, clinical_relevance: 4, exam_relevance: 4, status: 'published', version: 1, tags: ['細胞學', '基礎'], encyclopedia_link: null, cross_specialty_notes: 'ALL specialties - shared prerequisite module', created_at: now, updated_at: now },
  { id: 'CPATH-L4-004', specialty: 'CPATH', title: '凝血功能檢查', title_en: 'Coagulation Testing', layer: 4, node_type: 'diagnostic', difficulty: 3, estimated_minutes: 25, clinical_relevance: 4, exam_relevance: 3, status: 'published', version: 1, tags: ['凝血', '檢查'], encyclopedia_link: null, cross_specialty_notes: 'ALL specialties - shared prerequisite module', created_at: now, updated_at: now },
  { id: 'CPATH-L4-005', specialty: 'CPATH', title: '血液氣體分析', title_en: 'Blood Gas Analysis', layer: 4, node_type: 'diagnostic', difficulty: 4, estimated_minutes: 30, clinical_relevance: 5, exam_relevance: 4, status: 'published', version: 1, tags: ['血氣', '酸鹼'], encyclopedia_link: null, cross_specialty_notes: 'ALL specialties - shared prerequisite module', created_at: now, updated_at: now },
  { id: 'CPATH-L4-006', specialty: 'CPATH', title: '體液分析', title_en: 'Body Fluid Analysis', layer: 4, node_type: 'diagnostic', difficulty: 4, estimated_minutes: 30, clinical_relevance: 4, exam_relevance: 3, status: 'published', version: 1, tags: ['體液', 'CSF', '胸水', '腹水'], encyclopedia_link: null, cross_specialty_notes: 'ALL specialties - shared prerequisite module', created_at: now, updated_at: now },
];
