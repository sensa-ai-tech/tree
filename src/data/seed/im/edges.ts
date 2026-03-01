import type { KnowledgeEdge } from '@/types/knowledge';

export const IM_EDGES: KnowledgeEdge[] = [
  // L0 → L1: prerequisite
  { id: 'IM-E-001', source_node_id: 'IM-L0-001', target_node_id: 'IM-L1-001', relation_type: 'prerequisite', weight: 1.0, description: '內科總覽為腎臟生理基礎的前置', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-002', source_node_id: 'IM-L0-001', target_node_id: 'IM-L1-002', relation_type: 'prerequisite', weight: 1.0, description: null, bidirectional: false, unlock_condition: null },
  { id: 'IM-E-003', source_node_id: 'IM-L0-001', target_node_id: 'IM-L1-003', relation_type: 'prerequisite', weight: 0.8, description: null, bidirectional: false, unlock_condition: null },
  { id: 'IM-E-004', source_node_id: 'IM-L0-001', target_node_id: 'IM-L1-004', relation_type: 'prerequisite', weight: 0.8, description: null, bidirectional: false, unlock_condition: null },

  // L1 → L2: builds_on
  { id: 'IM-E-005', source_node_id: 'IM-L1-001', target_node_id: 'IM-L2-001', relation_type: 'builds_on', weight: 0.9, description: '腎臟生理是腎損傷機轉的基礎', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-006', source_node_id: 'IM-L1-004', target_node_id: 'IM-L2-002', relation_type: 'builds_on', weight: 0.9, description: '內分泌生理是失調機轉的基礎', bidirectional: false, unlock_condition: null },
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
  { id: 'IM-E-035', source_node_id: 'IM-L1-001', target_node_id: 'IM-L2-005', relation_type: 'builds_on', weight: 0.9, description: '腎臟生理（酸鹼調節）是酸鹼平衡障礙的基礎', bidirectional: false, unlock_condition: null },

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

  // ─── 審計修復：L3 缺少 prerequisite 邊 + L3→L4 clinical_apply ───
  // IM-L3-016 (鉤端螺旋體病) 需要 L1/L2 prerequisite
  { id: 'IM-E-063', source_node_id: 'IM-L2-003', target_node_id: 'IM-L3-016', relation_type: 'prerequisite', weight: 0.8, description: '發炎與免疫調節是理解鉤端螺旋體感染免疫病理的前置知識', bidirectional: false, unlock_condition: null },
  // IM-L3-017 (貓傳染性腹膜炎 FIP) 需要 L1/L2 prerequisite
  { id: 'IM-E-064', source_node_id: 'IM-L2-003', target_node_id: 'IM-L3-017', relation_type: 'prerequisite', weight: 0.8, description: '發炎與免疫調節是理解 FIP 免疫介導性血管炎的前置知識', bidirectional: false, unlock_condition: null },
  // IM-L3-018 (貓下泌尿道疾病 FLUTD) 需要 L1/L2 prerequisite
  { id: 'IM-E-065', source_node_id: 'IM-L1-001', target_node_id: 'IM-L3-018', relation_type: 'prerequisite', weight: 0.8, description: '腎臟生理與尿液形成是理解 FLUTD 的前置知識', bidirectional: false, unlock_condition: null },
  // IM-L3-015 (IMT) 缺少 L3→L4 clinical_apply
  { id: 'IM-E-066', source_node_id: 'IM-L3-015', target_node_id: 'IM-L4-003', relation_type: 'clinical_apply', weight: 0.7, description: 'IMT 需腹腔超音波評估脾腫大與內出血', bidirectional: false, unlock_condition: null },

  // ─── 疾病間臨床關聯邊 ───
  // 糖尿病 → CKD: complication（糖尿病腎病變）
  { id: 'IM-E-067', source_node_id: 'IM-L3-006', target_node_id: 'IM-L3-004', relation_type: 'complication', weight: 0.8, description: '糖尿病腎病變：糖尿病是慢性腎病的重要危險因子', bidirectional: false, unlock_condition: null },
  // 糖尿病 ↔ 胰臟炎: complication
  { id: 'IM-E-068', source_node_id: 'IM-L3-006', target_node_id: 'IM-L3-008', relation_type: 'complication', weight: 0.7, description: '胰臟炎與糖尿病相互關聯：胰臟炎可觸發糖尿病', bidirectional: true, unlock_condition: null },
  // 糖尿病 → 肝脂肪變性: complication
  { id: 'IM-E-069', source_node_id: 'IM-L3-006', target_node_id: 'IM-L3-009', relation_type: 'complication', weight: 0.6, description: '控制不佳的糖尿病可導致肝臟脂肪變性', bidirectional: false, unlock_condition: null },
  // 壁蝨傳染病 → IMT: complication
  { id: 'IM-E-070', source_node_id: 'IM-L3-010', target_node_id: 'IM-L3-015', relation_type: 'complication', weight: 0.7, description: '壁蝨傳染病（艾利希體/焦蟲）可觸發免疫介導血小板減少症', bidirectional: false, unlock_condition: null },
  // FLUTD ↔ CKD: complication
  { id: 'IM-E-071', source_node_id: 'IM-L3-018', target_node_id: 'IM-L3-004', relation_type: 'complication', weight: 0.7, description: 'FLUTD 梗阻性腎後腎病可導致慢性腎病', bidirectional: true, unlock_condition: null },
  // 糖尿病 → 內分泌藥物治療: clinical_apply
  { id: 'IM-E-072', source_node_id: 'IM-L3-006', target_node_id: 'IM-L5-002', relation_type: 'clinical_apply', weight: 1.0, description: '糖尿病需要內分泌藥物治療（胰島素）', bidirectional: false, unlock_condition: null },
  // 犬甲低 → 內分泌藥物治療: clinical_apply
  { id: 'IM-E-073', source_node_id: 'IM-L3-002', target_node_id: 'IM-L5-002', relation_type: 'clinical_apply', weight: 1.0, description: '犬甲狀腺機能低下需要內分泌藥物治療（levothyroxine）', bidirectional: false, unlock_condition: null },
  // 貓甲亢 → 內分泌藥物治療: clinical_apply
  { id: 'IM-E-074', source_node_id: 'IM-L3-003', target_node_id: 'IM-L5-002', relation_type: 'clinical_apply', weight: 1.0, description: '貓甲狀腺機能亢進需要內分泌藥物治療（methimazole）', bidirectional: false, unlock_condition: null },
  // 胰臟炎 → 消化系統治療: clinical_apply
  { id: 'IM-E-075', source_node_id: 'IM-L3-008', target_node_id: 'IM-L5-004', relation_type: 'clinical_apply', weight: 0.8, description: '胰臟炎需要消化系統疾病治療（支持療法、止吐、止痛）', bidirectional: false, unlock_condition: null },
  // 肝脂肪變性 → 消化系統治療: clinical_apply
  { id: 'IM-E-076', source_node_id: 'IM-L3-009', target_node_id: 'IM-L5-004', relation_type: 'clinical_apply', weight: 0.9, description: '貓肝臟脂肪變性需要消化系統疾病治療（營養支持、食管管灌食）', bidirectional: false, unlock_condition: null },
  // 酸鹼平衡障礙 → 糖尿病: clinical_apply
  { id: 'IM-E-077', source_node_id: 'IM-L2-005', target_node_id: 'IM-L3-006', relation_type: 'clinical_apply', weight: 0.8, description: '酸鹼平衡障礙是糖尿病酮酸血症的核心病理機轉', bidirectional: false, unlock_condition: null },
  // 酸鹼平衡障礙 → CKD: clinical_apply（IRIS Stage 3-4 代謝性酸中毒需碳酸氫鈉補充）
  { id: 'IM-E-078', source_node_id: 'IM-L2-005', target_node_id: 'IM-L3-004', relation_type: 'clinical_apply', weight: 0.7, description: '慢性腎病 IRIS Stage 3-4 常伴代謝性酸中毒，需血氣監測與碳酸氫鈉補充', bidirectional: false, unlock_condition: null },
  // 酸鹼平衡障礙 → AKI: clinical_apply（急性腎損傷常致嚴重代謝性酸中毒）
  { id: 'IM-E-079', source_node_id: 'IM-L2-005', target_node_id: 'IM-L3-013', relation_type: 'clinical_apply', weight: 0.8, description: 'AKI 導致嚴重代謝性酸中毒，血液氣體分析為必要監測工具', bidirectional: false, unlock_condition: null },

  // ─── 呼吸/感染擴展邊 ───
  // L0 → L1: prerequisite（呼吸系統生理需內科總覽前置）
  { id: 'IM-E-080', source_node_id: 'IM-L0-001', target_node_id: 'IM-L1-005', relation_type: 'prerequisite', weight: 0.8, description: '內科總覽為呼吸系統生理的前置知識', bidirectional: false, unlock_condition: null },
  // L1 → L2: builds_on（呼吸生理 → 氣道發炎與重塑）
  { id: 'IM-E-081', source_node_id: 'IM-L1-005', target_node_id: 'IM-L2-007', relation_type: 'builds_on', weight: 0.9, description: '呼吸系統生理是氣道發炎與重塑病理機轉的基礎', bidirectional: false, unlock_condition: null },
  // L2 → L3: clinical_apply（氣道發炎 → 貓哮喘）
  { id: 'IM-E-082', source_node_id: 'IM-L2-007', target_node_id: 'IM-L3-020', relation_type: 'clinical_apply', weight: 1.0, description: '氣道發炎與重塑機轉是貓哮喘的核心病理', bidirectional: false, unlock_condition: null },
  // L2 → L3: clinical_apply（氣道發炎 → 細菌性肺炎）
  { id: 'IM-E-083', source_node_id: 'IM-L2-007', target_node_id: 'IM-L3-021', relation_type: 'clinical_apply', weight: 0.8, description: '氣道發炎機轉與細菌性肺炎的氣道防禦失能相關', bidirectional: false, unlock_condition: null },
  // L3 → L4: clinical_apply（貓哮喘 → 腹腔超音波/影像）
  { id: 'IM-E-084', source_node_id: 'IM-L3-020', target_node_id: 'IM-L4-003', relation_type: 'clinical_apply', weight: 0.7, description: '貓哮喘需胸腔 X 光/超音波評估肺實質與氣道', bidirectional: false, unlock_condition: null },
  // L3 → L4: clinical_apply（細菌性肺炎 → 影像評估）
  { id: 'IM-E-085', source_node_id: 'IM-L3-021', target_node_id: 'IM-L4-003', relation_type: 'clinical_apply', weight: 0.8, description: '細菌性肺炎需胸腔 X 光評估浸潤範圍與治療反應', bidirectional: false, unlock_condition: null },
  // L2 → L3: prerequisite（免疫調節 → FeLV/FIV）
  { id: 'IM-E-086', source_node_id: 'IM-L2-003', target_node_id: 'IM-L3-022', relation_type: 'prerequisite', weight: 0.8, description: '發炎與免疫調節是理解 FeLV/FIV 免疫抑制與腫瘤發生的前置知識', bidirectional: false, unlock_condition: null },
  // L2 → L3: prerequisite（免疫/發炎 → CPV）
  { id: 'IM-E-087', source_node_id: 'IM-L2-003', target_node_id: 'IM-L3-023', relation_type: 'prerequisite', weight: 0.8, description: '發炎與免疫調節是理解 CPV 腸道免疫破壞與敗血症的前置知識', bidirectional: false, unlock_condition: null },
  // L3 → L5: clinical_apply（FeLV/FIV → 免疫抑制治療）
  { id: 'IM-E-088', source_node_id: 'IM-L3-022', target_node_id: 'IM-L5-003', relation_type: 'clinical_apply', weight: 0.7, description: 'FeLV/FIV 繼發 IMHA 時需免疫抑制治療', bidirectional: false, unlock_condition: null },
  // L3 → L5: clinical_apply（CPV → 消化系統治療）
  { id: 'IM-E-089', source_node_id: 'IM-L3-023', target_node_id: 'IM-L5-004', relation_type: 'clinical_apply', weight: 0.9, description: 'CPV 腸炎需消化系統支持治療（輸液、止吐、營養）', bidirectional: false, unlock_condition: null },
  // L3 ↔ L3: differential（貓哮喘 vs 肺炎）
  { id: 'IM-E-090', source_node_id: 'IM-L3-020', target_node_id: 'IM-L3-021', relation_type: 'differential', weight: 0.8, description: '貓哮喘與細菌性肺炎需鑑別：氣管沖洗液細胞學為關鍵', bidirectional: true, unlock_condition: null },
  // L3 → L4: clinical_apply（FeLV/FIV → 腹腔超音波）
  { id: 'IM-E-091', source_node_id: 'IM-L3-022', target_node_id: 'IM-L4-003', relation_type: 'clinical_apply', weight: 0.8, description: 'FeLV/FIV 需腹腔超音波評估腸系膜淋巴結腫大與臟器浸潤', bidirectional: false, unlock_condition: null },
  // L3 → L4: clinical_apply（CPV → 腹腔超音波）
  { id: 'IM-E-092', source_node_id: 'IM-L3-023', target_node_id: 'IM-L4-003', relation_type: 'clinical_apply', weight: 0.7, description: 'CPV 需腹腔超音波評估腸壁增厚、腸蠕動減少及腸套疊', bidirectional: false, unlock_condition: null },

  // ─── GI/Hepatobiliary 擴展邊 ───
  // EPI (IM-L3-024) edges
  { id: 'IM-E-093', source_node_id: 'IM-L2-004', target_node_id: 'IM-L3-024', relation_type: 'clinical_apply', weight: 0.9, description: '肝膽/胰臟病理機轉與 EPI 的腺泡萎縮相關', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-094', source_node_id: 'IM-L1-003', target_node_id: 'IM-L3-024', relation_type: 'prerequisite', weight: 0.8, description: '消化系統生理（胰臟外分泌功能）是理解 EPI 的前置知識', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-095', source_node_id: 'IM-L3-024', target_node_id: 'IM-L4-003', relation_type: 'clinical_apply', weight: 0.7, description: 'EPI 需腹腔超音波評估胰臟萎縮', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-096', source_node_id: 'IM-L3-024', target_node_id: 'IM-L5-004', relation_type: 'clinical_apply', weight: 1.0, description: 'EPI 需消化系統治療（胰酶補充、飲食調整、Cobalamin 補充）', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-097', source_node_id: 'IM-L3-008', target_node_id: 'IM-L3-024', relation_type: 'differential', weight: 0.8, description: '慢性胰臟炎可繼發 EPI；兩者需鑑別', bidirectional: true, unlock_condition: null },
  { id: 'IM-E-098', source_node_id: 'IM-L3-007', target_node_id: 'IM-L3-024', relation_type: 'differential', weight: 0.7, description: '慢性腸病（CE/IBD）與 EPI 皆致慢性腹瀉需鑑別', bidirectional: true, unlock_condition: null },

  // Gallbladder Mucocele (IM-L3-025) edges
  { id: 'IM-E-099', source_node_id: 'IM-L2-004', target_node_id: 'IM-L3-025', relation_type: 'clinical_apply', weight: 1.0, description: '肝膽病理機轉是膽囊黏液囊腫形成的基礎', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-100', source_node_id: 'IM-L3-025', target_node_id: 'IM-L4-003', relation_type: 'clinical_apply', weight: 1.0, description: '膽囊黏液囊腫需腹腔超音波（kiwi fruit sign）確診', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-101', source_node_id: 'IM-L3-001', target_node_id: 'IM-L3-025', relation_type: 'complication', weight: 0.7, description: 'Cushing 高脂血症為膽囊黏液囊腫危險因子', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-102', source_node_id: 'IM-L3-002', target_node_id: 'IM-L3-025', relation_type: 'complication', weight: 0.7, description: '甲低合併高脂血症為膽囊黏液囊腫危險因子', bidirectional: false, unlock_condition: null },

  // Canine Chronic Hepatitis (IM-L3-026) edges
  { id: 'IM-E-103', source_node_id: 'IM-L2-004', target_node_id: 'IM-L3-026', relation_type: 'clinical_apply', weight: 1.0, description: '肝膽病理機轉是犬慢性肝炎的核心病理基礎', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-104', source_node_id: 'IM-L2-003', target_node_id: 'IM-L3-026', relation_type: 'clinical_apply', weight: 0.8, description: '免疫介導發炎機轉與免疫介導型慢性肝炎相關', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-105', source_node_id: 'IM-L3-026', target_node_id: 'IM-L4-003', relation_type: 'clinical_apply', weight: 0.9, description: '犬慢性肝炎需腹腔超音波評估肝臟與引導肝切片', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-106', source_node_id: 'IM-L3-026', target_node_id: 'IM-L5-003', relation_type: 'clinical_apply', weight: 0.9, description: '免疫介導型慢性肝炎需免疫抑制治療（prednisolone + azathioprine）', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-107', source_node_id: 'IM-L3-009', target_node_id: 'IM-L3-026', relation_type: 'differential', weight: 0.7, description: '貓肝臟脂肪變性與犬慢性肝炎需鑑別（不同物種好發之肝病）', bidirectional: true, unlock_condition: null },

  // Megaesophagus (IM-L3-027) edges
  { id: 'IM-E-108', source_node_id: 'IM-L1-003', target_node_id: 'IM-L3-027', relation_type: 'prerequisite', weight: 0.8, description: '消化系統生理（食道運動功能）是理解巨食道症的前置知識', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-109', source_node_id: 'IM-L3-027', target_node_id: 'IM-L4-004', relation_type: 'clinical_apply', weight: 0.9, description: '巨食道症需消化系統影像（胸腔 X 光/鋇劑造影/螢光透視）確診', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-110', source_node_id: 'IM-L3-027', target_node_id: 'IM-L3-021', relation_type: 'complication', weight: 0.9, description: '巨食道症常併發吸入性肺炎（逆流誤吸）', bidirectional: false, unlock_condition: null },
  { id: 'IM-E-111', source_node_id: 'IM-L3-027', target_node_id: 'IM-L5-004', relation_type: 'clinical_apply', weight: 0.8, description: '巨食道症需消化系統治療（姿勢進食、飲食調整、止吐）', bidirectional: false, unlock_condition: null },
];
