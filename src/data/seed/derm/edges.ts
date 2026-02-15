import type { KnowledgeEdge } from '@/types/knowledge';

export const DERM_EDGES: KnowledgeEdge[] = [
  // L0 → L1: prerequisite
  { id: 'DERM-E-001', source_node_id: 'DERM-L0-001', target_node_id: 'DERM-L1-001', relation_type: 'prerequisite', weight: 1.0, description: '學科總覽為皮膚解剖的前置', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-002', source_node_id: 'DERM-L0-001', target_node_id: 'DERM-L1-002', relation_type: 'prerequisite', weight: 1.0, description: null, bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-003', source_node_id: 'DERM-L0-001', target_node_id: 'DERM-L1-003', relation_type: 'prerequisite', weight: 0.8, description: null, bidirectional: false, unlock_condition: null },

  // L1 → L2: builds_on
  { id: 'DERM-E-004', source_node_id: 'DERM-L1-002', target_node_id: 'DERM-L2-001', relation_type: 'builds_on', weight: 0.9, description: '皮膚免疫學是過敏機轉的基礎', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-005', source_node_id: 'DERM-L1-001', target_node_id: 'DERM-L2-002', relation_type: 'builds_on', weight: 0.8, description: null, bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-006', source_node_id: 'DERM-L1-002', target_node_id: 'DERM-L2-003', relation_type: 'builds_on', weight: 0.9, description: '免疫學是自體免疫的基礎', bidirectional: false, unlock_condition: null },

  // L2 → L3: clinical_apply
  { id: 'DERM-E-007', source_node_id: 'DERM-L2-001', target_node_id: 'DERM-L3-001', relation_type: 'clinical_apply', weight: 1.0, description: '過敏機轉導致 CAD', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-008', source_node_id: 'DERM-L2-001', target_node_id: 'DERM-L3-002', relation_type: 'clinical_apply', weight: 0.9, description: null, bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-009', source_node_id: 'DERM-L2-001', target_node_id: 'DERM-L3-003', relation_type: 'clinical_apply', weight: 0.9, description: null, bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-010', source_node_id: 'DERM-L2-002', target_node_id: 'DERM-L3-006', relation_type: 'clinical_apply', weight: 0.7, description: null, bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-011', source_node_id: 'DERM-L2-003', target_node_id: 'DERM-L3-010', relation_type: 'clinical_apply', weight: 1.0, description: '自體免疫導致天疱瘡', bidirectional: false, unlock_condition: null },

  // L3 → L4: clinical_apply
  { id: 'DERM-E-012', source_node_id: 'DERM-L3-004', target_node_id: 'DERM-L4-002', relation_type: 'clinical_apply', weight: 1.0, description: '蠕形蟎需皮膚刮搔確診', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-013', source_node_id: 'DERM-L3-005', target_node_id: 'DERM-L4-003', relation_type: 'clinical_apply', weight: 0.9, description: '膿皮症需皮膚細胞學', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-014', source_node_id: 'DERM-L3-007', target_node_id: 'DERM-L4-004', relation_type: 'clinical_apply', weight: 1.0, description: '外耳炎需耳鏡檢查', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-015', source_node_id: 'DERM-L3-001', target_node_id: 'DERM-L4-001', relation_type: 'clinical_apply', weight: 0.9, description: null, bidirectional: false, unlock_condition: null },

  // L3 → L5: clinical_apply
  { id: 'DERM-E-016', source_node_id: 'DERM-L3-001', target_node_id: 'DERM-L5-001', relation_type: 'clinical_apply', weight: 1.0, description: 'CAD 需過敏管理', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-017', source_node_id: 'DERM-L3-004', target_node_id: 'DERM-L5-002', relation_type: 'clinical_apply', weight: 1.0, description: '蠕形蟎需抗寄生蟲治療', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-018', source_node_id: 'DERM-L3-010', target_node_id: 'DERM-L5-003', relation_type: 'clinical_apply', weight: 1.0, description: null, bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-019', source_node_id: 'DERM-L3-007', target_node_id: 'DERM-L5-004', relation_type: 'clinical_apply', weight: 1.0, description: '外耳炎需耳科治療', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-020', source_node_id: 'DERM-L3-008', target_node_id: 'DERM-L5-005', relation_type: 'clinical_apply', weight: 1.0, description: '癬菌需抗黴菌治療', bidirectional: false, unlock_condition: null },

  // Differentials
  { id: 'DERM-E-021', source_node_id: 'DERM-L3-001', target_node_id: 'DERM-L3-002', relation_type: 'differential', weight: 0.9, description: 'CAD 與食物不良反應鑑別', bidirectional: true, unlock_condition: null },
  { id: 'DERM-E-022', source_node_id: 'DERM-L3-004', target_node_id: 'DERM-L3-009', relation_type: 'differential', weight: 0.8, description: '蠕形蟎與疥蟎鑑別', bidirectional: true, unlock_condition: null },
];
