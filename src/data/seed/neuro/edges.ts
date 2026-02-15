import type { KnowledgeEdge } from '@/types/knowledge';

export const NEURO_EDGES: KnowledgeEdge[] = [
  // L0 → L1: prerequisite
  { id: 'NEURO-E-001', source_node_id: 'NEURO-L0-001', target_node_id: 'NEURO-L1-001', relation_type: 'prerequisite', weight: 1, description: '學科總覽為神經解剖的前置', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-002', source_node_id: 'NEURO-L0-001', target_node_id: 'NEURO-L1-002', relation_type: 'prerequisite', weight: 1, description: null, bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-003', source_node_id: 'NEURO-L0-001', target_node_id: 'NEURO-L1-003', relation_type: 'prerequisite', weight: 0.8, description: null, bidirectional: false, unlock_condition: null },

  // L1 → L2: builds_on
  { id: 'NEURO-E-004', source_node_id: 'NEURO-L1-002', target_node_id: 'NEURO-L2-001', relation_type: 'builds_on', weight: 0.9, description: '神經生理學是癲癇發作機轉的基礎', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-005', source_node_id: 'NEURO-L1-001', target_node_id: 'NEURO-L2-002', relation_type: 'builds_on', weight: 0.9, description: '神經解剖是脊髓壓迫機轉的基礎', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-006', source_node_id: 'NEURO-L1-002', target_node_id: 'NEURO-L2-003', relation_type: 'builds_on', weight: 0.8, description: '神經生理學是 NMJ 病理的基礎', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-007', source_node_id: 'NEURO-L2-002', target_node_id: 'NEURO-L2-004', relation_type: 'builds_on', weight: 0.9, description: '脊髓壓迫機轉是脊髓軟化的前置概念', bidirectional: false, unlock_condition: null },

  // L2 → L3: clinical_apply
  { id: 'NEURO-E-008', source_node_id: 'NEURO-L2-001', target_node_id: 'NEURO-L3-001', relation_type: 'clinical_apply', weight: 1, description: '癲癇發作機轉直接導致犬特發性癲癇', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-009', source_node_id: 'NEURO-L2-002', target_node_id: 'NEURO-L3-002', relation_type: 'clinical_apply', weight: 1, description: '脊髓壓迫機轉為 IVDD 的核心病理', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-010', source_node_id: 'NEURO-L2-004', target_node_id: 'NEURO-L3-002', relation_type: 'complication', weight: 0.7, description: '脊髓軟化是 IVDD 最嚴重的併發症', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-011', source_node_id: 'NEURO-L1-001', target_node_id: 'NEURO-L3-004', relation_type: 'builds_on', weight: 0.8, description: '前庭系統解剖為前庭疾病的基礎', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-012', source_node_id: 'NEURO-L2-003', target_node_id: 'NEURO-L3-005', relation_type: 'clinical_apply', weight: 0.8, description: 'NMJ 病理與多發性神經根炎相關', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-013', source_node_id: 'NEURO-L2-003', target_node_id: 'NEURO-L3-006', relation_type: 'clinical_apply', weight: 1, description: 'NMJ 病理直接導致重症肌無力', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-014', source_node_id: 'NEURO-L2-002', target_node_id: 'NEURO-L3-007', relation_type: 'clinical_apply', weight: 0.7, description: '脊髓病變機轉與退化性脊髓病變相關', bidirectional: false, unlock_condition: null },

  // L3 → L4: clinical_apply (疾病指向診斷)
  { id: 'NEURO-E-015', source_node_id: 'NEURO-L3-001', target_node_id: 'NEURO-L4-001', relation_type: 'clinical_apply', weight: 0.9, description: '癲癇診斷需神經學檢查', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-016', source_node_id: 'NEURO-L3-002', target_node_id: 'NEURO-L4-001', relation_type: 'clinical_apply', weight: 1, description: 'IVDD 診斷需神經學檢查定位', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-017', source_node_id: 'NEURO-L3-003', target_node_id: 'NEURO-L4-002', relation_type: 'clinical_apply', weight: 0.9, description: 'GME 診斷需 CSF 分析', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-018', source_node_id: 'NEURO-L3-002', target_node_id: 'NEURO-L4-003', relation_type: 'clinical_apply', weight: 1, description: 'IVDD 確診需 MRI/CT', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-019', source_node_id: 'NEURO-L4-001', target_node_id: 'NEURO-L4-004', relation_type: 'builds_on', weight: 1, description: '神經學檢查是神經定位診斷的基礎', bidirectional: false, unlock_condition: null },

  // L3 → L5: clinical_apply (疾病指向治療)
  { id: 'NEURO-E-020', source_node_id: 'NEURO-L3-001', target_node_id: 'NEURO-L5-001', relation_type: 'clinical_apply', weight: 1, description: '犬特發性癲癇需抗癲癇藥物治療', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-021', source_node_id: 'NEURO-L3-002', target_node_id: 'NEURO-L5-002', relation_type: 'clinical_apply', weight: 0.9, description: 'IVDD 重度病例需脊椎手術', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-022', source_node_id: 'NEURO-L3-002', target_node_id: 'NEURO-L5-003', relation_type: 'clinical_apply', weight: 0.8, description: 'IVDD 術後需復健治療', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-023', source_node_id: 'NEURO-L3-007', target_node_id: 'NEURO-L5-003', relation_type: 'clinical_apply', weight: 0.8, description: 'DM 管理以復健為主', bidirectional: false, unlock_condition: null },

  // L3 ↔ L3: differential (鑑別比較)
  { id: 'NEURO-E-024', source_node_id: 'NEURO-L3-002', target_node_id: 'NEURO-L3-007', relation_type: 'differential', weight: 0.8, description: 'IVDD 與 DM 需鑑別診斷（均可導致後肢無力）', bidirectional: true, unlock_condition: null },
  { id: 'NEURO-E-025', source_node_id: 'NEURO-L3-005', target_node_id: 'NEURO-L3-006', relation_type: 'differential', weight: 0.7, description: '多發性神經根炎與重症肌無力需鑑別（均導致下運動神經元無力）', bidirectional: true, unlock_condition: null },

  // L1 CSF → L4 CSF: same_system
  { id: 'NEURO-E-026', source_node_id: 'NEURO-L1-003', target_node_id: 'NEURO-L4-002', relation_type: 'same_system', weight: 0.8, description: 'CSF 生理與 CSF 分析同系統', bidirectional: false, unlock_condition: null },
];
