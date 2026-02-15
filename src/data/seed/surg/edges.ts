import type { KnowledgeEdge } from '@/types/knowledge';

export const SURG_EDGES: KnowledgeEdge[] = [
  // L0 → L1: prerequisite (4 edges)
  { id: 'SURG-E-001', source_node_id: 'SURG-L0-001', target_node_id: 'SURG-L1-001', relation_type: 'prerequisite', weight: 1, description: '外科總覽為手術解剖學的前置', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-002', source_node_id: 'SURG-L0-001', target_node_id: 'SURG-L1-002', relation_type: 'prerequisite', weight: 1, description: null, bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-003', source_node_id: 'SURG-L0-001', target_node_id: 'SURG-L1-003', relation_type: 'prerequisite', weight: 1, description: null, bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-004', source_node_id: 'SURG-L0-001', target_node_id: 'SURG-L1-004', relation_type: 'prerequisite', weight: 0.9, description: null, bidirectional: false, unlock_condition: null },

  // L1 → L2: builds_on (4 edges)
  { id: 'SURG-E-005', source_node_id: 'SURG-L1-001', target_node_id: 'SURG-L2-001', relation_type: 'builds_on', weight: 0.9, description: '手術解剖學是腹腔臟器病理的基礎', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-006', source_node_id: 'SURG-L1-001', target_node_id: 'SURG-L2-002', relation_type: 'builds_on', weight: 0.9, description: '手術解剖學是骨關節病理的基礎', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-007', source_node_id: 'SURG-L1-002', target_node_id: 'SURG-L2-003', relation_type: 'builds_on', weight: 0.8, description: '傷口癒合生理是骨折癒合機轉的基礎', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-008', source_node_id: 'SURG-L1-004', target_node_id: 'SURG-L2-001', relation_type: 'builds_on', weight: 0.7, description: '外科原則（無菌、止血）延伸至腹腔手術', bidirectional: false, unlock_condition: null },

  // L2 → L3: clinical_apply (8 edges)
  { id: 'SURG-E-009', source_node_id: 'SURG-L2-001', target_node_id: 'SURG-L3-001', relation_type: 'clinical_apply', weight: 1, description: '腹腔臟器病理直接應用於 GDV', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-010', source_node_id: 'SURG-L2-001', target_node_id: 'SURG-L3-002', relation_type: 'clinical_apply', weight: 0.8, description: null, bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-011', source_node_id: 'SURG-L2-001', target_node_id: 'SURG-L3-003', relation_type: 'clinical_apply', weight: 0.9, description: '腹腔病理應用於腸道異物', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-012', source_node_id: 'SURG-L2-001', target_node_id: 'SURG-L3-009', relation_type: 'clinical_apply', weight: 0.8, description: '腹腔病理應用於子宮蓄膿', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-013', source_node_id: 'SURG-L2-002', target_node_id: 'SURG-L3-004', relation_type: 'clinical_apply', weight: 1, description: '骨關節病理直接應用於 CCLD', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-014', source_node_id: 'SURG-L2-002', target_node_id: 'SURG-L3-008', relation_type: 'clinical_apply', weight: 0.9, description: '骨關節病理應用於膝蓋骨脫位', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-015', source_node_id: 'SURG-L2-003', target_node_id: 'SURG-L3-007', relation_type: 'clinical_apply', weight: 1, description: '骨折癒合機轉指導骨折穩定策略', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-016', source_node_id: 'SURG-L2-001', target_node_id: 'SURG-L3-006', relation_type: 'clinical_apply', weight: 0.7, description: null, bidirectional: false, unlock_condition: null },

  // L3 → L4: clinical_apply (4 edges)
  { id: 'SURG-E-017', source_node_id: 'SURG-L3-001', target_node_id: 'SURG-L4-001', relation_type: 'clinical_apply', weight: 1, description: 'GDV 需術前影像（X 光）確診', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-018', source_node_id: 'SURG-L3-001', target_node_id: 'SURG-L4-002', relation_type: 'clinical_apply', weight: 0.9, description: 'GDV 術中需即時決策（胃壁壞死評估）', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-019', source_node_id: 'SURG-L3-004', target_node_id: 'SURG-L4-003', relation_type: 'clinical_apply', weight: 1, description: 'CCLD 需骨科影像評估', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-020', source_node_id: 'SURG-L3-007', target_node_id: 'SURG-L4-003', relation_type: 'clinical_apply', weight: 0.9, description: '骨折穩定需影像判讀指導固定方式', bidirectional: false, unlock_condition: null },

  // L3 → L5: clinical_apply (3 edges)
  { id: 'SURG-E-021', source_node_id: 'SURG-L3-001', target_node_id: 'SURG-L5-001', relation_type: 'clinical_apply', weight: 1, description: 'GDV 的手術治療（derotation + gastropexy）', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-022', source_node_id: 'SURG-L3-004', target_node_id: 'SURG-L5-002', relation_type: 'clinical_apply', weight: 1, description: 'CCLD 的骨科手術治療（TPLO/TTA）', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-023', source_node_id: 'SURG-L3-009', target_node_id: 'SURG-L5-001', relation_type: 'clinical_apply', weight: 0.9, description: '子宮蓄膿的手術治療（OHE）', bidirectional: false, unlock_condition: null },

  // L5 → L5: same_system (術後照護與抗菌)
  { id: 'SURG-E-024', source_node_id: 'SURG-L5-001', target_node_id: 'SURG-L5-003', relation_type: 'same_system', weight: 0.8, description: '軟組織手術後需要術後照護', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-025', source_node_id: 'SURG-L5-001', target_node_id: 'SURG-L5-004', relation_type: 'drug_related', weight: 0.7, description: '軟組織手術需圍手術期抗菌策略', bidirectional: false, unlock_condition: null },

  // Differentials
  { id: 'SURG-E-026', source_node_id: 'SURG-L3-001', target_node_id: 'SURG-L3-003', relation_type: 'differential', weight: 0.8, description: 'GDV 與腸道異物同為急性腹痛鑑別診斷', bidirectional: true, unlock_condition: null },
  { id: 'SURG-E-027', source_node_id: 'SURG-L3-004', target_node_id: 'SURG-L3-008', relation_type: 'differential', weight: 0.7, description: 'CCLD 與膝蓋骨脫位同為後肢跛行鑑別', bidirectional: true, unlock_condition: null },

  // Cross-specialty hint
  { id: 'SURG-E-028', source_node_id: 'SURG-L3-005', target_node_id: 'SURG-L4-003', relation_type: 'clinical_apply', weight: 0.8, description: 'IVDD 需脊椎影像判讀（MRI 為金標準）', bidirectional: false, unlock_condition: null },
];
