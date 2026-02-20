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

  // --- Audit fix: missing L1/L2 → L3 prerequisite edges ---
  { id: 'ONCO-E-028', source_node_id: 'ONCO-L1-001', target_node_id: 'ONCO-L3-002', relation_type: 'prerequisite', weight: 0.9, description: '腫瘤生物學為 MCT 細胞增殖/分級的基礎', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-029', source_node_id: 'ONCO-L2-001', target_node_id: 'ONCO-L3-005', relation_type: 'clinical_apply', weight: 0.9, description: '口腔黑色素瘤具高度局部侵襲與轉移特性', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-030', source_node_id: 'ONCO-L1-001', target_node_id: 'ONCO-L3-006', relation_type: 'prerequisite', weight: 0.8, description: '腫瘤生物學為乳腺腫瘤良惡性分類的基礎', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-031', source_node_id: 'ONCO-L2-001', target_node_id: 'ONCO-L3-007', relation_type: 'clinical_apply', weight: 0.8, description: 'TCC 具局部侵犯與遠端轉移特性', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-032', source_node_id: 'ONCO-L1-002', target_node_id: 'ONCO-L3-008', relation_type: 'prerequisite', weight: 0.8, description: '腫瘤免疫學與 FISS 免疫介導致瘤機轉相關', bidirectional: false, unlock_condition: null },

  // --- Audit fix: missing L3 → L4 clinical_apply edges ---
  { id: 'ONCO-E-033', source_node_id: 'ONCO-L3-003', target_node_id: 'ONCO-L4-001', relation_type: 'clinical_apply', weight: 0.8, description: '骨肉瘤可藉 FNA 細胞學初步診斷', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-034', source_node_id: 'ONCO-L3-003', target_node_id: 'ONCO-L4-002', relation_type: 'clinical_apply', weight: 1, description: '骨肉瘤需胸腔 X 光等分期檢查排除肺轉移', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-035', source_node_id: 'ONCO-L3-004', target_node_id: 'ONCO-L4-001', relation_type: 'clinical_apply', weight: 0.8, description: '血管肉瘤可藉腹腔液細胞學輔助診斷', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-036', source_node_id: 'ONCO-L3-004', target_node_id: 'ONCO-L4-002', relation_type: 'clinical_apply', weight: 0.9, description: '血管肉瘤需腹部超音波及胸腔 X 光分期', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-037', source_node_id: 'ONCO-L3-005', target_node_id: 'ONCO-L4-001', relation_type: 'clinical_apply', weight: 0.9, description: '口腔黑色素瘤需 FNA 細胞學確認色素細胞', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-038', source_node_id: 'ONCO-L3-005', target_node_id: 'ONCO-L4-003', relation_type: 'clinical_apply', weight: 0.9, description: '口腔黑色素瘤使用 WHO TNM 分期', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-039', source_node_id: 'ONCO-L3-006', target_node_id: 'ONCO-L4-001', relation_type: 'clinical_apply', weight: 0.9, description: '乳腺腫瘤需 FNA 細胞學區分良惡性', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-040', source_node_id: 'ONCO-L3-006', target_node_id: 'ONCO-L4-002', relation_type: 'clinical_apply', weight: 0.9, description: '乳腺腫瘤需胸腔 X 光及淋巴結評估分期', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-041', source_node_id: 'ONCO-L3-007', target_node_id: 'ONCO-L4-001', relation_type: 'clinical_apply', weight: 0.8, description: 'TCC 可藉尿液沉渣細胞學輔助診斷', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-042', source_node_id: 'ONCO-L3-007', target_node_id: 'ONCO-L4-002', relation_type: 'clinical_apply', weight: 0.9, description: 'TCC 需腹部超音波及 X 光進行分期', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-043', source_node_id: 'ONCO-L3-008', target_node_id: 'ONCO-L4-001', relation_type: 'clinical_apply', weight: 0.9, description: 'FISS 需 FNA 細胞學初步評估腫瘤類型', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-044', source_node_id: 'ONCO-L3-008', target_node_id: 'ONCO-L4-002', relation_type: 'clinical_apply', weight: 0.8, description: 'FISS 需 CT/影像評估腫瘤邊界及轉移', bidirectional: false, unlock_condition: null },

  // --- Audit fix: additional missing L3 → L5 treatment edges ---
  { id: 'ONCO-E-045', source_node_id: 'ONCO-L3-003', target_node_id: 'ONCO-L5-001', relation_type: 'clinical_apply', weight: 0.8, description: '骨肉瘤截肢後需輔助化療（carboplatin/doxorubicin）', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-046', source_node_id: 'ONCO-L3-004', target_node_id: 'ONCO-L5-001', relation_type: 'clinical_apply', weight: 0.7, description: '血管肉瘤脾切後以 doxorubicin 化療為主', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-047', source_node_id: 'ONCO-L3-006', target_node_id: 'ONCO-L5-002', relation_type: 'clinical_apply', weight: 0.9, description: '乳腺腫瘤以外科切除為首選治療', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-048', source_node_id: 'ONCO-L3-008', target_node_id: 'ONCO-L5-002', relation_type: 'clinical_apply', weight: 0.9, description: 'FISS 需廣切手術（≥3 cm 邊界）', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-049', source_node_id: 'ONCO-L3-007', target_node_id: 'ONCO-L5-005', relation_type: 'clinical_apply', weight: 0.8, description: 'TCC 常用 piroxicam ± 節拍式化療', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-050', source_node_id: 'ONCO-L3-008', target_node_id: 'ONCO-L5-004', relation_type: 'clinical_apply', weight: 0.7, description: 'FISS 不完全切除後可考慮放射治療', bidirectional: false, unlock_condition: null },
];
