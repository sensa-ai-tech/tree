import type { KnowledgeEdge } from '@/types/knowledge';

export const IM_EDGES: KnowledgeEdge[] = [
  // L0 → L1: prerequisite
  { id: 'IM-E-001', source_node_id: 'IM-L0-001', target_node_id: 'IM-L1-001', relation_type: 'prerequisite', weight: 1.0, description: '內科總覽為內分泌基礎的前置', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-002', source_node_id: 'IM-L0-001', target_node_id: 'IM-L1-002', relation_type: 'prerequisite', weight: 1.0, description: null, bidirectional: false, unlock_condition: null },
  { id: 'IM-E-003', source_node_id: 'IM-L0-001', target_node_id: 'IM-L1-003', relation_type: 'prerequisite', weight: 0.8, description: null, bidirectional: false, unlock_condition: null },
  { id: 'IM-E-004', source_node_id: 'IM-L0-001', target_node_id: 'IM-L1-004', relation_type: 'prerequisite', weight: 0.8, description: null, bidirectional: false, unlock_condition: null },

  // L1 → L2: builds_on
  { id: 'IM-E-005', source_node_id: 'IM-L1-002', target_node_id: 'IM-L2-001', relation_type: 'builds_on', weight: 0.9, description: '腎臟生理是腎損傷機轉的基礎', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-006', source_node_id: 'IM-L1-001', target_node_id: 'IM-L2-002', relation_type: 'builds_on', weight: 0.9, description: '內分泌生理是失調機轉的基礎', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-007', source_node_id: 'IM-L1-003', target_node_id: 'IM-L2-004', relation_type: 'builds_on', weight: 0.8, description: '消化生理是肝膽病理的基礎', bidirectional: false, unlock_condition: null },

  // L2 → L3: clinical_apply
  { id: 'IM-E-008', source_node_id: 'IM-L2-002', target_node_id: 'IM-L3-001', relation_type: 'clinical_apply', weight: 1.0, description: '內分泌失調機轉導致 Cushing', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-009', source_node_id: 'IM-L2-002', target_node_id: 'IM-L3-002', relation_type: 'clinical_apply', weight: 0.9, description: null, bidirectional: false, unlock_condition: null },
  { id: 'IM-E-010', source_node_id: 'IM-L2-002', target_node_id: 'IM-L3-003', relation_type: 'clinical_apply', weight: 0.9, description: null, bidirectional: false, unlock_condition: null },
  { id: 'IM-E-011', source_node_id: 'IM-L2-001', target_node_id: 'IM-L3-004', relation_type: 'clinical_apply', weight: 1.0, description: '腎損傷機轉導致 CKD', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-012', source_node_id: 'IM-L2-003', target_node_id: 'IM-L3-005', relation_type: 'clinical_apply', weight: 1.0, description: '免疫調節失調導致 IMHA', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-013', source_node_id: 'IM-L2-002', target_node_id: 'IM-L3-006', relation_type: 'clinical_apply', weight: 0.9, description: null, bidirectional: false, unlock_condition: null },
  { id: 'IM-E-014', source_node_id: 'IM-L2-003', target_node_id: 'IM-L3-007', relation_type: 'clinical_apply', weight: 0.8, description: '發炎機轉與 IBD/CE 相關', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-015', source_node_id: 'IM-L2-004', target_node_id: 'IM-L3-008', relation_type: 'clinical_apply', weight: 0.8, description: null, bidirectional: false, unlock_condition: null },
  { id: 'IM-E-016', source_node_id: 'IM-L2-004', target_node_id: 'IM-L3-009', relation_type: 'clinical_apply', weight: 0.9, description: '肝膽病理導致脂肪肝', bidirectional: false, unlock_condition: null },

  // L3 → L4: clinical_apply
  { id: 'IM-E-017', source_node_id: 'IM-L3-001', target_node_id: 'IM-L4-001', relation_type: 'clinical_apply', weight: 1.0, description: 'Cushing 需內分泌檢驗確診', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-018', source_node_id: 'IM-L3-004', target_node_id: 'IM-L4-002', relation_type: 'clinical_apply', weight: 1.0, description: 'CKD 需尿液分析評估', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-019', source_node_id: 'IM-L3-008', target_node_id: 'IM-L4-003', relation_type: 'clinical_apply', weight: 0.9, description: '胰臟炎需腹腔超音波', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-020', source_node_id: 'IM-L3-007', target_node_id: 'IM-L4-004', relation_type: 'clinical_apply', weight: 0.9, description: 'IBD 需內視鏡與切片', bidirectional: false, unlock_condition: null },

  // L3 → L5: clinical_apply
  { id: 'IM-E-021', source_node_id: 'IM-L3-004', target_node_id: 'IM-L5-001', relation_type: 'clinical_apply', weight: 1.0, description: 'CKD 需長期管理', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-022', source_node_id: 'IM-L3-001', target_node_id: 'IM-L5-002', relation_type: 'clinical_apply', weight: 1.0, description: 'Cushing 需藥物治療', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-023', source_node_id: 'IM-L3-005', target_node_id: 'IM-L5-003', relation_type: 'clinical_apply', weight: 1.0, description: 'IMHA 需免疫抑制治療', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-024', source_node_id: 'IM-L3-007', target_node_id: 'IM-L5-004', relation_type: 'clinical_apply', weight: 0.9, description: 'IBD 需飲食與藥物治療', bidirectional: false, unlock_condition: null },

  // L3 differentials
  { id: 'IM-E-025', source_node_id: 'IM-L3-003', target_node_id: 'IM-L3-004', relation_type: 'differential', weight: 0.7, description: '貓甲亢與 CKD 常共病', bidirectional: true, unlock_condition: null },
  { id: 'IM-E-026', source_node_id: 'IM-L3-008', target_node_id: 'IM-L3-009', relation_type: 'differential', weight: 0.8, description: '胰臟炎與肝脂肪變性需鑑別', bidirectional: true, unlock_condition: null },

  // L3 complications
  { id: 'IM-E-027', source_node_id: 'IM-L3-010', target_node_id: 'IM-L3-005', relation_type: 'complication', weight: 0.8, description: '壁蝨感染可繼發 IMHA', bidirectional: false, unlock_condition: null },
];
