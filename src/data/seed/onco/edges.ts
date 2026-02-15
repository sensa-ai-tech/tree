import type { KnowledgeEdge } from '@/types/knowledge';

export const ONCO_EDGES: KnowledgeEdge[] = [
  // L0 → L1: prerequisite
  { id: 'ONCO-E-001', source_node_id: 'ONCO-L0-001', target_node_id: 'ONCO-L1-001', relation_type: 'prerequisite', weight: 1, description: '學科總覽為腫瘤生物學的前置', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-002', source_node_id: 'ONCO-L0-001', target_node_id: 'ONCO-L1-002', relation_type: 'prerequisite', weight: 1, description: null, bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-003', source_node_id: 'ONCO-L0-001', target_node_id: 'ONCO-L1-003', relation_type: 'prerequisite', weight: 0.8, description: null, bidirectional: false, unlock_condition: null },

  // L1 → L2: builds_on
  { id: 'ONCO-E-004', source_node_id: 'ONCO-L1-001', target_node_id: 'ONCO-L2-001', relation_type: 'builds_on', weight: 0.9, description: '腫瘤生物學是轉移機轉的基礎', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-005', source_node_id: 'ONCO-L1-002', target_node_id: 'ONCO-L2-002', relation_type: 'builds_on', weight: 0.8, description: '免疫學與副腫瘤症候群相關', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-006', source_node_id: 'ONCO-L1-001', target_node_id: 'ONCO-L2-003', relation_type: 'builds_on', weight: 0.7, description: '腫瘤生物學是抗藥機轉的基礎', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-007', source_node_id: 'ONCO-L1-003', target_node_id: 'ONCO-L2-003', relation_type: 'builds_on', weight: 0.8, description: '遺傳學與抗藥性突變相關', bidirectional: false, unlock_condition: null },

  // L2 → L3: clinical_apply
  { id: 'ONCO-E-008', source_node_id: 'ONCO-L2-001', target_node_id: 'ONCO-L3-001', relation_type: 'clinical_apply', weight: 0.9, description: '淋巴瘤的轉移與分期息息相關', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-009', source_node_id: 'ONCO-L2-001', target_node_id: 'ONCO-L3-003', relation_type: 'clinical_apply', weight: 1, description: '骨肉瘤高度轉移特性', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-010', source_node_id: 'ONCO-L2-001', target_node_id: 'ONCO-L3-004', relation_type: 'clinical_apply', weight: 1, description: '血管肉瘤早期血行轉移', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-011', source_node_id: 'ONCO-L2-002', target_node_id: 'ONCO-L3-001', relation_type: 'clinical_apply', weight: 0.7, description: '淋巴瘤可伴隨高血鈣等副腫瘤症候群', bidirectional: false, unlock_condition: null },

  // L3 differentials
  { id: 'ONCO-E-012', source_node_id: 'ONCO-L3-001', target_node_id: 'ONCO-L3-002', relation_type: 'differential', weight: 0.8, description: '淋巴瘤 vs MCT：皮膚/淋巴結腫塊鑑別', bidirectional: true, unlock_condition: null },
  { id: 'ONCO-E-013', source_node_id: 'ONCO-L3-003', target_node_id: 'ONCO-L3-005', relation_type: 'differential', weight: 0.6, description: '骨肉瘤 vs 口腔黑色素瘤：口腔/骨骼病變鑑別', bidirectional: true, unlock_condition: null },

  // L3 same_system
  { id: 'ONCO-E-014', source_node_id: 'ONCO-L3-004', target_node_id: 'ONCO-L3-003', relation_type: 'same_system', weight: 0.5, description: '兩者均好發於大型犬品種', bidirectional: true, unlock_condition: null },
  { id: 'ONCO-E-015', source_node_id: 'ONCO-L3-006', target_node_id: 'ONCO-L3-008', relation_type: 'same_system', weight: 0.4, description: '乳腺腫瘤與 FISS 均為軟組織腫瘤', bidirectional: true, unlock_condition: null },

  // L3 → L4: clinical_apply (diseases → diagnostics)
  { id: 'ONCO-E-016', source_node_id: 'ONCO-L3-001', target_node_id: 'ONCO-L4-001', relation_type: 'clinical_apply', weight: 1, description: '淋巴瘤首選 FNA 細胞學確診', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-017', source_node_id: 'ONCO-L3-002', target_node_id: 'ONCO-L4-001', relation_type: 'clinical_apply', weight: 1, description: 'MCT FNA 可見嗜鹼性顆粒', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-018', source_node_id: 'ONCO-L3-001', target_node_id: 'ONCO-L4-002', relation_type: 'clinical_apply', weight: 0.9, description: '淋巴瘤需完整分期檢查', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-019', source_node_id: 'ONCO-L3-001', target_node_id: 'ONCO-L4-003', relation_type: 'clinical_apply', weight: 0.9, description: '淋巴瘤使用 WHO TNM 分期', bidirectional: false, unlock_condition: null },

  // L4 internal: builds_on
  { id: 'ONCO-E-020', source_node_id: 'ONCO-L4-001', target_node_id: 'ONCO-L4-002', relation_type: 'builds_on', weight: 0.7, description: '細胞學為分期檢查的一部分', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-021', source_node_id: 'ONCO-L4-002', target_node_id: 'ONCO-L4-003', relation_type: 'builds_on', weight: 0.9, description: '分期檢查結果對應 TNM 系統', bidirectional: false, unlock_condition: null },

  // L3 → L5: clinical_apply (diseases → treatments)
  { id: 'ONCO-E-022', source_node_id: 'ONCO-L3-001', target_node_id: 'ONCO-L5-001', relation_type: 'clinical_apply', weight: 1, description: '淋巴瘤以化療為主要治療', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-023', source_node_id: 'ONCO-L3-002', target_node_id: 'ONCO-L5-002', relation_type: 'clinical_apply', weight: 0.9, description: 'MCT 以手術切除為首選治療', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-024', source_node_id: 'ONCO-L3-003', target_node_id: 'ONCO-L5-003', relation_type: 'clinical_apply', weight: 0.9, description: '骨肉瘤疼痛管理至關重要', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-025', source_node_id: 'ONCO-L3-005', target_node_id: 'ONCO-L5-004', relation_type: 'clinical_apply', weight: 0.8, description: '口腔黑色素瘤可考慮放射治療', bidirectional: false, unlock_condition: null },

  // L5 internal: drug_related
  { id: 'ONCO-E-026', source_node_id: 'ONCO-L5-001', target_node_id: 'ONCO-L5-005', relation_type: 'drug_related', weight: 0.8, description: '節拍式化療為傳統化療的替代方案', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-027', source_node_id: 'ONCO-L2-003', target_node_id: 'ONCO-L5-005', relation_type: 'clinical_apply', weight: 0.7, description: '抗藥機轉促使考慮節拍式化療', bidirectional: false, unlock_condition: null },
];
