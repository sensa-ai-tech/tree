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

  // ─── Phase 2F 擴展邊 ───
  // ONCO-L2-004（腫瘤微環境）
  { id: 'ONCO-E-051', source_node_id: 'ONCO-L1-002', target_node_id: 'ONCO-L2-004', relation_type: 'builds_on', weight: 0.9, description: '腫瘤免疫學是微環境的基礎', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-052', source_node_id: 'ONCO-L2-004', target_node_id: 'ONCO-L2-003', relation_type: 'same_system', weight: 0.7, description: '腫瘤微環境促進抗藥性', bidirectional: false, unlock_condition: null },

  // ONCO-L3-009（STS）
  { id: 'ONCO-E-053', source_node_id: 'ONCO-L2-001', target_node_id: 'ONCO-L3-009', relation_type: 'clinical_apply', weight: 0.8, description: 'STS 局部侵犯性高但轉移率相對低', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-054', source_node_id: 'ONCO-L3-009', target_node_id: 'ONCO-L4-001', relation_type: 'clinical_apply', weight: 0.9, description: 'STS 需 FNA 細胞學評估', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-055', source_node_id: 'ONCO-L3-009', target_node_id: 'ONCO-L5-002', relation_type: 'clinical_apply', weight: 1, description: 'STS 以廣切手術為首選', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-056', source_node_id: 'ONCO-L3-009', target_node_id: 'ONCO-L3-008', relation_type: 'differential', weight: 0.7, description: 'STS 與 FISS 同為皮下肉瘤鑑別', bidirectional: true, unlock_condition: null },

  // ONCO-L3-010（ASAC）
  { id: 'ONCO-E-057', source_node_id: 'ONCO-L2-002', target_node_id: 'ONCO-L3-010', relation_type: 'clinical_apply', weight: 0.9, description: 'ASAC 常伴高鈣血症（副腫瘤）', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-058', source_node_id: 'ONCO-L3-010', target_node_id: 'ONCO-L4-002', relation_type: 'clinical_apply', weight: 0.9, description: 'ASAC 需完整分期（淋巴結/胸腹腔）', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-059', source_node_id: 'ONCO-L3-010', target_node_id: 'ONCO-L5-002', relation_type: 'clinical_apply', weight: 1, description: 'ASAC 手術切除肛囊', bidirectional: false, unlock_condition: null },

  // ONCO-L3-011（鼻腔腫瘤）
  { id: 'ONCO-E-060', source_node_id: 'ONCO-L2-001', target_node_id: 'ONCO-L3-011', relation_type: 'clinical_apply', weight: 0.8, description: '鼻腔腫瘤局部侵犯性強', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-061', source_node_id: 'ONCO-L3-011', target_node_id: 'ONCO-L4-002', relation_type: 'clinical_apply', weight: 1, description: '鼻腔腫瘤需 CT 分期', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-062', source_node_id: 'ONCO-L3-011', target_node_id: 'ONCO-L5-004', relation_type: 'clinical_apply', weight: 1, description: '鼻腔腫瘤以放射治療為首選', bidirectional: false, unlock_condition: null },

  // ONCO-L3-012（組織球肉瘤）
  { id: 'ONCO-E-063', source_node_id: 'ONCO-L2-001', target_node_id: 'ONCO-L3-012', relation_type: 'clinical_apply', weight: 1, description: '組織球肉瘤高度侵犯與轉移', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-064', source_node_id: 'ONCO-L3-012', target_node_id: 'ONCO-L4-001', relation_type: 'clinical_apply', weight: 0.8, description: '組織球肉瘤需特殊免疫組化確診', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-065', source_node_id: 'ONCO-L3-012', target_node_id: 'ONCO-L5-001', relation_type: 'clinical_apply', weight: 0.8, description: '組織球肉瘤可嘗試 CCNU 化療', bidirectional: false, unlock_condition: null },

  // ONCO-L3-013（甲狀腺癌）
  { id: 'ONCO-E-066', source_node_id: 'ONCO-L1-001', target_node_id: 'ONCO-L3-013', relation_type: 'prerequisite', weight: 0.8, description: '腫瘤生物學是甲狀腺癌的基礎', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-067', source_node_id: 'ONCO-L3-013', target_node_id: 'ONCO-L4-001', relation_type: 'clinical_apply', weight: 0.8, description: '甲狀腺癌需 FNA 細胞學', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-068', source_node_id: 'ONCO-L3-013', target_node_id: 'ONCO-L5-002', relation_type: 'clinical_apply', weight: 0.9, description: '犬甲狀腺癌可手術切除', bidirectional: false, unlock_condition: null },

  // ─── 疾病間臨床關聯邊 ───
  // ASAC → 細胞學/組織學診斷: clinical_apply
  { id: 'ONCO-E-069', source_node_id: 'ONCO-L3-010', target_node_id: 'ONCO-L4-001', relation_type: 'clinical_apply', weight: 0.8, description: '肛囊腺癌需要細胞學/組織學診斷', bidirectional: false, unlock_condition: null },
  // 組織球肉瘤 → 分期檢查: clinical_apply
  { id: 'ONCO-E-070', source_node_id: 'ONCO-L3-012', target_node_id: 'ONCO-L4-002', relation_type: 'clinical_apply', weight: 0.8, description: '組織球肉瘤需要完整分期檢查評估預後', bidirectional: false, unlock_condition: null },
  // 鼻腔腫瘤 → 化療: clinical_apply
  { id: 'ONCO-E-071', source_node_id: 'ONCO-L3-011', target_node_id: 'ONCO-L5-001', relation_type: 'clinical_apply', weight: 0.6, description: '鼻腔腫瘤可考慮放療後輔助化療（carboplatin）', bidirectional: false, unlock_condition: null },

  // ─── ONCO-L3-014（SCC 鱗狀上皮細胞癌）───
  { id: 'ONCO-E-072', source_node_id: 'ONCO-L2-001', target_node_id: 'ONCO-L3-014', relation_type: 'prerequisite', weight: 0.9, description: '腫瘤轉移機轉為 SCC 局部侵犯與轉移特性的基礎', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-073', source_node_id: 'ONCO-L3-014', target_node_id: 'ONCO-L4-001', relation_type: 'clinical_apply', weight: 0.9, description: 'SCC 需細胞學/組織病理確診', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-074', source_node_id: 'ONCO-L3-014', target_node_id: 'ONCO-L5-002', relation_type: 'clinical_apply', weight: 1, description: 'SCC 以手術切除為主要治療（mandibulectomy/maxillectomy/截趾）', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-075', source_node_id: 'ONCO-L3-014', target_node_id: 'ONCO-L5-004', relation_type: 'clinical_apply', weight: 0.8, description: '貓鼻平面/耳尖 SCC 及犬口腔 SCC 可用放射治療', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-076', source_node_id: 'ONCO-L3-014', target_node_id: 'ONCO-L4-002', relation_type: 'clinical_apply', weight: 0.9, description: '口腔 SCC 需 CT 分期評估骨侵犯範圍', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-077', source_node_id: 'ONCO-L3-014', target_node_id: 'ONCO-L3-005', relation_type: 'differential', weight: 0.7, description: 'SCC 與口腔黑色素瘤為口腔腫塊的主要鑑別', bidirectional: true, unlock_condition: null },

  // ─── ONCO-L3-015（Insulinoma 胰島素瘤）───
  { id: 'ONCO-E-078', source_node_id: 'ONCO-L2-002', target_node_id: 'ONCO-L3-015', relation_type: 'prerequisite', weight: 1, description: '副腫瘤症候群（低血糖）為 insulinoma 的核心病理機轉', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-079', source_node_id: 'ONCO-L3-015', target_node_id: 'ONCO-L4-001', relation_type: 'clinical_apply', weight: 0.7, description: 'Insulinoma 需超音波引導 FNA 或術中組織病理確診', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-080', source_node_id: 'ONCO-L3-015', target_node_id: 'ONCO-L5-002', relation_type: 'clinical_apply', weight: 1, description: 'Insulinoma 以手術切除（胰臟部分切除）為首選治療', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-081', source_node_id: 'ONCO-L3-015', target_node_id: 'ONCO-L4-002', relation_type: 'clinical_apply', weight: 0.8, description: 'Insulinoma 需腹部超音波/CT 定位及分期', bidirectional: false, unlock_condition: null },

  // ─── Phase 3: 靶向治療與 TKI 相關邊 ───
  { id: 'ONCO-E-082', source_node_id: 'ONCO-L2-001', target_node_id: 'ONCO-L5-006', relation_type: 'builds_on', weight: 0.9, description: '腫瘤生物學（VEGFR/PDGFR/KIT 訊號通路）是靶向治療的理論基礎', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-083', source_node_id: 'ONCO-L3-002', target_node_id: 'ONCO-L5-006', relation_type: 'clinical_apply', weight: 1, description: 'MCT 為 TKI（Toceranib/Masitinib）的首要適應症，尤其 c-KIT 突變型', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-084', source_node_id: 'ONCO-L3-014', target_node_id: 'ONCO-L5-006', relation_type: 'clinical_apply', weight: 0.7, description: 'SCC 可嘗試 COX-2 抑制劑合併 TKI 的多靶點治療策略', bidirectional: false, unlock_condition: null },

  // ─── ONCO-L3-016（肝細胞癌 HCC）───
  { id: 'ONCO-E-085', source_node_id: 'ONCO-L2-001', target_node_id: 'ONCO-L3-016', relation_type: 'prerequisite', weight: 0.8, description: '肝細胞癌轉移機轉——massive 型轉移率低，diffuse 型高度侵犯', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-086', source_node_id: 'ONCO-L3-016', target_node_id: 'ONCO-L4-001', relation_type: 'clinical_apply', weight: 0.8, description: 'HCC 需 FNA 細胞學輔助診斷（但肝臟 FNA 有出血風險）', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-087', source_node_id: 'ONCO-L3-016', target_node_id: 'ONCO-L4-002', relation_type: 'clinical_apply', weight: 1, description: 'HCC 需腹部超音波及 CT 評估腫瘤型態與分期', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-088', source_node_id: 'ONCO-L3-016', target_node_id: 'ONCO-L5-002', relation_type: 'clinical_apply', weight: 1, description: 'Massive HCC 以肝葉切除為首選治療', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-089', source_node_id: 'ONCO-L3-016', target_node_id: 'ONCO-L5-006', relation_type: 'clinical_apply', weight: 0.6, description: 'Toceranib 2.5 mg/kg EOD 可作為 HCC 的緩和治療', bidirectional: false, unlock_condition: null },

  // ─── ONCO-L3-017（多發性骨髓瘤）───
  { id: 'ONCO-E-090', source_node_id: 'ONCO-L2-002', target_node_id: 'ONCO-L3-017', relation_type: 'prerequisite', weight: 1, description: '副腫瘤症候群（高鈣血症、高黏滯度症候群）為骨髓瘤核心表現', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-091', source_node_id: 'ONCO-L3-017', target_node_id: 'ONCO-L4-001', relation_type: 'clinical_apply', weight: 0.9, description: '骨髓瘤需骨髓穿刺細胞學確診（漿細胞 > 20%）', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-092', source_node_id: 'ONCO-L3-017', target_node_id: 'ONCO-L4-002', relation_type: 'clinical_apply', weight: 0.9, description: '骨髓瘤需全身骨骼 X 光及蛋白電泳分期', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-093', source_node_id: 'ONCO-L3-017', target_node_id: 'ONCO-L5-001', relation_type: 'clinical_apply', weight: 1, description: '骨髓瘤以 Melphalan + Prednisone 化療為首選', bidirectional: false, unlock_condition: null },
  { id: 'ONCO-E-094', source_node_id: 'ONCO-L3-017', target_node_id: 'ONCO-L3-001', relation_type: 'differential', weight: 0.7, description: '骨髓瘤與淋巴瘤為造血系統腫瘤的鑑別', bidirectional: true, unlock_condition: null },
];
