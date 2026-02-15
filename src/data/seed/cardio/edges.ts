import type { KnowledgeEdge } from '@/types/knowledge';

export const CARDIO_EDGES: KnowledgeEdge[] = [
  // L0 → L1: prerequisite
  { id: 'CARDIO-E-001', source_node_id: 'CARDIO-L0-001', target_node_id: 'CARDIO-L1-001', relation_type: 'prerequisite', weight: 1, description: '學科總覽為解剖學的前置', bidirectional: false, unlock_condition: null },
  { id: 'CARDIO-E-002', source_node_id: 'CARDIO-L0-001', target_node_id: 'CARDIO-L1-002', relation_type: 'prerequisite', weight: 1, description: null, bidirectional: false, unlock_condition: null },
  { id: 'CARDIO-E-003', source_node_id: 'CARDIO-L0-001', target_node_id: 'CARDIO-L1-003', relation_type: 'prerequisite', weight: 0.8, description: null, bidirectional: false, unlock_condition: null },

  // L1 → L2: builds_on
  { id: 'CARDIO-E-004', source_node_id: 'CARDIO-L1-001', target_node_id: 'CARDIO-L2-001', relation_type: 'builds_on', weight: 0.9, description: '心臟解剖是瓣膜退化的基礎', bidirectional: false, unlock_condition: null },
  { id: 'CARDIO-E-005', source_node_id: 'CARDIO-L1-003', target_node_id: 'CARDIO-L2-002', relation_type: 'builds_on', weight: 0.8, description: null, bidirectional: false, unlock_condition: null },
  { id: 'CARDIO-E-006', source_node_id: 'CARDIO-L1-002', target_node_id: 'CARDIO-L2-003', relation_type: 'builds_on', weight: 0.9, description: '電生理學是心律不整的基礎', bidirectional: false, unlock_condition: null },

  // L2 → L3: clinical_apply
  { id: 'CARDIO-E-007', source_node_id: 'CARDIO-L2-001', target_node_id: 'CARDIO-L3-001', relation_type: 'clinical_apply', weight: 1, description: '瓣膜退化機轉直接導致 MMVD', bidirectional: false, unlock_condition: null },
  { id: 'CARDIO-E-008', source_node_id: 'CARDIO-L2-002', target_node_id: 'CARDIO-L3-002', relation_type: 'clinical_apply', weight: 0.9, description: null, bidirectional: false, unlock_condition: null },
  { id: 'CARDIO-E-009', source_node_id: 'CARDIO-L2-002', target_node_id: 'CARDIO-L3-003', relation_type: 'clinical_apply', weight: 0.8, description: null, bidirectional: false, unlock_condition: null },

  // L3 → L4: clinical_apply
  { id: 'CARDIO-E-010', source_node_id: 'CARDIO-L3-001', target_node_id: 'CARDIO-L4-001', relation_type: 'clinical_apply', weight: 0.9, description: 'MMVD 的聽診評估', bidirectional: false, unlock_condition: null },
  { id: 'CARDIO-E-011', source_node_id: 'CARDIO-L3-001', target_node_id: 'CARDIO-L4-002', relation_type: 'clinical_apply', weight: 1, description: 'MMVD 需心超確診', bidirectional: false, unlock_condition: null },

  // L3 DCM ↔ HCM: differential
  { id: 'CARDIO-E-012', source_node_id: 'CARDIO-L3-002', target_node_id: 'CARDIO-L3-003', relation_type: 'differential', weight: 0.8, description: 'DCM 與 HCM 需鑑別診斷', bidirectional: true, unlock_condition: null },

  // L4 ECG → L2 心律不整
  { id: 'CARDIO-E-013', source_node_id: 'CARDIO-L4-003', target_node_id: 'CARDIO-L2-003', relation_type: 'clinical_apply', weight: 0.7, description: 'ECG 為心律不整的主要診斷工具', bidirectional: false, unlock_condition: null },

  // L3 → L5: clinical_apply
  { id: 'CARDIO-E-014', source_node_id: 'CARDIO-L3-001', target_node_id: 'CARDIO-L5-001', relation_type: 'clinical_apply', weight: 1, description: 'MMVD 進展至 CHF 需要治療', bidirectional: false, unlock_condition: null },

  // 心絲蟲 → X 光
  { id: 'CARDIO-E-015', source_node_id: 'CARDIO-L3-004', target_node_id: 'CARDIO-L4-004', relation_type: 'clinical_apply', weight: 0.8, description: '心絲蟲需 X 光評估肺動脈變化', bidirectional: false, unlock_condition: null },
];
