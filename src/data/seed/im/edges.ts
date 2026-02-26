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

  // Addison's (IM-L3-011) edges
  { id: 'IM-E-028', source_node_id: 'IM-L2-002', target_node_id: 'IM-L3-011', relation_type: 'clinical_apply', weight: 0.9, description: '內分泌失調機轉導致 Addison\'s', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-029', source_node_id: 'IM-L3-011', target_node_id: 'IM-L4-001', relation_type: 'clinical_apply', weight: 1.0, description: 'Addison\'s 需內分泌檢驗（ACTH 刺激試驗）確診', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-030', source_node_id: 'IM-L3-011', target_node_id: 'IM-L5-002', relation_type: 'clinical_apply', weight: 1.0, description: 'Addison\'s 需礦物皮質素與糖皮質素替代治療', bidirectional: false, unlock_condition: null },

  // PLE (IM-L3-012) edges
  { id: 'IM-E-031', source_node_id: 'IM-L2-003', target_node_id: 'IM-L3-012', relation_type: 'clinical_apply', weight: 0.9, description: '免疫/發炎機轉導致蛋白質流失性腸病', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-032', source_node_id: 'IM-L3-012', target_node_id: 'IM-L4-004', relation_type: 'clinical_apply', weight: 1.0, description: 'PLE 需消化道影像與內視鏡切片診斷', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-033', source_node_id: 'IM-L3-012', target_node_id: 'IM-L5-004', relation_type: 'clinical_apply', weight: 0.9, description: 'PLE 需飲食調整與免疫抑制治療', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-034', source_node_id: 'IM-L3-007', target_node_id: 'IM-L3-012', relation_type: 'differential', weight: 0.8, description: 'IBD 與 PLE 需鑑別（嚴重 IBD 可繼發 PLE）', bidirectional: true, unlock_condition: null },

  // 酸鹼平衡障礙 (IM-L2-005) edges
  { id: 'IM-E-035', source_node_id: 'IM-L1-004', target_node_id: 'IM-L2-005', relation_type: 'builds_on', weight: 0.9, description: '呼吸生理是酸鹼平衡障礙的基礎', bidirectional: false, unlock_condition: null },

  // Cushing's vs Addison's differential
  { id: 'IM-E-036', source_node_id: 'IM-L3-001', target_node_id: 'IM-L3-011', relation_type: 'differential', weight: 0.8, description: 'Cushing\'s 與 Addison\'s 為腎上腺功能亢進/低下需鑑別', bidirectional: true, unlock_condition: null },

  // ─── 審計補齊：缺失邊 ───

  // IM-L3-010 缺少 prerequisite/builds_on 從 L1/L2
  { id: 'IM-E-037', source_node_id: 'IM-L2-003', target_node_id: 'IM-L3-010', relation_type: 'clinical_apply', weight: 0.9, description: '免疫/發炎機轉與壁蝨媒介疾病的免疫病理相關', bidirectional: false, unlock_condition: null },

  // IM-L3-002 缺少 L3→L4 clinical_apply
  { id: 'IM-E-038', source_node_id: 'IM-L3-002', target_node_id: 'IM-L4-001', relation_type: 'clinical_apply', weight: 1.0, description: '犬甲低需內分泌檢驗（T4/TSH）確診', bidirectional: false, unlock_condition: null },

  // IM-L3-003 缺少 L3→L4 clinical_apply
  { id: 'IM-E-039', source_node_id: 'IM-L3-003', target_node_id: 'IM-L4-001', relation_type: 'clinical_apply', weight: 1.0, description: '貓甲亢需內分泌檢驗（T4）確診', bidirectional: false, unlock_condition: null },

  // IM-L3-006 缺少 L3→L4 clinical_apply
  { id: 'IM-E-040', source_node_id: 'IM-L3-006', target_node_id: 'IM-L4-001', relation_type: 'clinical_apply', weight: 1.0, description: '糖尿病需內分泌檢驗（血糖/果糖胺）確診與監測', bidirectional: false, unlock_condition: null },

  // IM-L3-009 缺少 L3→L4 clinical_apply
  { id: 'IM-E-041', source_node_id: 'IM-L3-009', target_node_id: 'IM-L4-003', relation_type: 'clinical_apply', weight: 0.9, description: '貓肝臟脂肪變性需腹腔超音波評估肝臟', bidirectional: false, unlock_condition: null },

  // ─── Phase 2C 擴展邊 ───
  // L2-006 → L3: clinical_apply（免疫介導機轉 → 免疫疾病）
  { id: 'IM-E-042', source_node_id: 'IM-L2-006', target_node_id: 'IM-L3-005', relation_type: 'clinical_apply', weight: 1, description: '免疫介導機轉是 IMHA 的核心病理', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-043', source_node_id: 'IM-L2-006', target_node_id: 'IM-L3-015', relation_type: 'clinical_apply', weight: 1, description: '免疫介導機轉是 IMT 的核心病理', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-044', source_node_id: 'IM-L2-006', target_node_id: 'IM-L3-014', relation_type: 'clinical_apply', weight: 0.8, description: '免疫複合物沉積可導致 PLN', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-045', source_node_id: 'IM-L2-003', target_node_id: 'IM-L2-006', relation_type: 'builds_on', weight: 0.9, description: '發炎與免疫調節是免疫介導疾病機轉的基礎', bidirectional: false, unlock_condition: null },

  // L2-001 → L3-013: clinical_apply（腎損傷 → AKI）
  { id: 'IM-E-046', source_node_id: 'IM-L2-001', target_node_id: 'IM-L3-013', relation_type: 'clinical_apply', weight: 1, description: '腎損傷機轉直接導致 AKI', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-047', source_node_id: 'IM-L2-001', target_node_id: 'IM-L3-014', relation_type: 'clinical_apply', weight: 0.8, description: '腎損傷機轉包含 PLN 的腎絲球病變', bidirectional: false, unlock_condition: null },

  // L3 新節點 → L4: clinical_apply
  { id: 'IM-E-048', source_node_id: 'IM-L3-013', target_node_id: 'IM-L4-002', relation_type: 'clinical_apply', weight: 1, description: 'AKI 需尿液分析與腎功能評估', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-049', source_node_id: 'IM-L3-014', target_node_id: 'IM-L4-002', relation_type: 'clinical_apply', weight: 1, description: 'PLN 需 UPC 定量蛋白尿', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-050', source_node_id: 'IM-L3-016', target_node_id: 'IM-L4-002', relation_type: 'clinical_apply', weight: 0.8, description: 'Leptospirosis 需腎功能與尿液評估', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-051', source_node_id: 'IM-L3-017', target_node_id: 'IM-L4-003', relation_type: 'clinical_apply', weight: 0.9, description: 'FIP 需腹腔超音波評估腹水', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-052', source_node_id: 'IM-L3-018', target_node_id: 'IM-L4-002', relation_type: 'clinical_apply', weight: 0.9, description: 'FLUTD 需尿液分析評估', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-053', source_node_id: 'IM-L3-019', target_node_id: 'IM-L4-003', relation_type: 'clinical_apply', weight: 0.9, description: '膽管炎需腹腔超音波評估肝膽', bidirectional: false, unlock_condition: null },

  // L3 新節點 → L5: clinical_apply
  { id: 'IM-E-054', source_node_id: 'IM-L3-013', target_node_id: 'IM-L5-001', relation_type: 'clinical_apply', weight: 0.8, description: 'AKI 可進展至 CKD 需長期管理', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-055', source_node_id: 'IM-L3-014', target_node_id: 'IM-L5-001', relation_type: 'clinical_apply', weight: 0.9, description: 'PLN 管理屬 CKD 管理範疇', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-056', source_node_id: 'IM-L3-015', target_node_id: 'IM-L5-003', relation_type: 'clinical_apply', weight: 1, description: 'IMT 需免疫抑制治療', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-057', source_node_id: 'IM-L3-019', target_node_id: 'IM-L5-004', relation_type: 'clinical_apply', weight: 0.8, description: '膽管炎治療含抗生素與利膽藥', bidirectional: false, unlock_condition: null },

  // L3 新節點之間: differential
  { id: 'IM-E-058', source_node_id: 'IM-L3-013', target_node_id: 'IM-L3-004', relation_type: 'differential', weight: 0.9, description: 'AKI vs CKD 急性 vs 慢性腎病鑑別', bidirectional: true, unlock_condition: null },
  { id: 'IM-E-059', source_node_id: 'IM-L3-005', target_node_id: 'IM-L3-015', relation_type: 'complication', weight: 0.8, description: 'IMHA 與 IMT 可合併（Evans syndrome）', bidirectional: true, unlock_condition: null },
  { id: 'IM-E-060', source_node_id: 'IM-L3-016', target_node_id: 'IM-L3-013', relation_type: 'complication', weight: 0.9, description: 'Leptospirosis 常導致 AKI', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-061', source_node_id: 'IM-L3-019', target_node_id: 'IM-L3-008', relation_type: 'complication', weight: 0.8, description: '膽管炎常合併胰臟炎（三合症）', bidirectional: true, unlock_condition: null },

  // L2-004 → L3-019: clinical_apply（肝膽病理 → 膽管炎）
  { id: 'IM-E-062', source_node_id: 'IM-L2-004', target_node_id: 'IM-L3-019', relation_type: 'clinical_apply', weight: 0.9, description: '肝膽病理機轉是膽管炎的基礎', bidirectional: false, unlock_condition: null },
];
