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

  // --- Audit fix: missing L1/L2 → L3 prerequisite edges ---
  { id: 'SURG-E-029', source_node_id: 'SURG-L2-002', target_node_id: 'SURG-L3-005', relation_type: 'prerequisite', weight: 0.8, description: '骨關節病理為椎間盤疾病(IVDD)的病理基礎', bidirectional: false, unlock_condition: null },

  // --- Audit fix: missing L3 → L4 clinical_apply edges ---
  { id: 'SURG-E-030', source_node_id: 'SURG-L3-002', target_node_id: 'SURG-L4-001', relation_type: 'clinical_apply', weight: 0.9, description: '脾臟腫瘤需術前超音波/X 光影像評估', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-031', source_node_id: 'SURG-L3-003', target_node_id: 'SURG-L4-001', relation_type: 'clinical_apply', weight: 1, description: '腸道異物需腹部 X 光/超音波確診', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-032', source_node_id: 'SURG-L3-006', target_node_id: 'SURG-L4-001', relation_type: 'clinical_apply', weight: 0.7, description: '會陰疝氣需影像評估膀胱/前列腺位移', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-033', source_node_id: 'SURG-L3-008', target_node_id: 'SURG-L4-003', relation_type: 'clinical_apply', weight: 0.9, description: '膝蓋骨脫位需骨科 X 光確認分級', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-034', source_node_id: 'SURG-L3-009', target_node_id: 'SURG-L4-001', relation_type: 'clinical_apply', weight: 0.9, description: '子宮蓄膿需超音波確認子宮積液', bidirectional: false, unlock_condition: null },

  // ─── Phase 2E 擴展邊 ───
  // SURG-L2-004（微創手術原理）
  { id: 'SURG-E-035', source_node_id: 'SURG-L1-004', target_node_id: 'SURG-L2-004', relation_type: 'builds_on', weight: 0.9, description: '外科原則是微創手術的基礎', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-036', source_node_id: 'SURG-L1-001', target_node_id: 'SURG-L2-004', relation_type: 'builds_on', weight: 0.8, description: '手術解剖是腹腔鏡定位的基礎', bidirectional: false, unlock_condition: null },

  // SURG-L3-010（BOAS）
  { id: 'SURG-E-037', source_node_id: 'SURG-L1-001', target_node_id: 'SURG-L3-010', relation_type: 'prerequisite', weight: 0.9, description: '上呼吸道解剖是 BOAS 的基礎', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-038', source_node_id: 'SURG-L3-010', target_node_id: 'SURG-L4-001', relation_type: 'clinical_apply', weight: 0.8, description: 'BOAS 需術前影像（X光/CT）評估', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-039', source_node_id: 'SURG-L3-010', target_node_id: 'SURG-L5-001', relation_type: 'clinical_apply', weight: 1, description: 'BOAS 手術治療（鼻翼/軟顎/喉囊切除）', bidirectional: false, unlock_condition: null },

  // SURG-L3-011（PSS）
  { id: 'SURG-E-040', source_node_id: 'SURG-L2-001', target_node_id: 'SURG-L3-011', relation_type: 'clinical_apply', weight: 0.9, description: '腹腔臟器病理應用於門脈分流', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-041', source_node_id: 'SURG-L3-011', target_node_id: 'SURG-L4-001', relation_type: 'clinical_apply', weight: 1, description: 'PSS 需超音波/CT 血管攝影確診', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-042', source_node_id: 'SURG-L3-011', target_node_id: 'SURG-L5-001', relation_type: 'clinical_apply', weight: 1, description: 'PSS 手術結紮或 ameroid constrictor 放置', bidirectional: false, unlock_condition: null },

  // SURG-L3-012（喉麻痺）
  { id: 'SURG-E-043', source_node_id: 'SURG-L1-001', target_node_id: 'SURG-L3-012', relation_type: 'prerequisite', weight: 0.9, description: '喉部解剖是喉麻痺的基礎', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-044', source_node_id: 'SURG-L3-012', target_node_id: 'SURG-L4-001', relation_type: 'clinical_apply', weight: 0.8, description: '喉麻痺需喉鏡檢查確診', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-045', source_node_id: 'SURG-L3-012', target_node_id: 'SURG-L5-001', relation_type: 'clinical_apply', weight: 1, description: '喉麻痺手術（arytenoid lateralization/tie-back）', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-046', source_node_id: 'SURG-L3-010', target_node_id: 'SURG-L3-012', relation_type: 'differential', weight: 0.7, description: 'BOAS 與喉麻痺為上呼吸道阻塞鑑別', bidirectional: true, unlock_condition: null },

  // SURG-L3-013（膈疝）
  { id: 'SURG-E-047', source_node_id: 'SURG-L1-001', target_node_id: 'SURG-L3-013', relation_type: 'prerequisite', weight: 0.9, description: '胸腹腔解剖是膈疝的基礎', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-048', source_node_id: 'SURG-L3-013', target_node_id: 'SURG-L4-001', relation_type: 'clinical_apply', weight: 1, description: '膈疝需胸腔 X 光/超音波確診', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-049', source_node_id: 'SURG-L3-013', target_node_id: 'SURG-L5-001', relation_type: 'clinical_apply', weight: 1, description: '膈疝修復手術', bidirectional: false, unlock_condition: null },

  // SURG-L3-014（TECA-LBO）
  { id: 'SURG-E-050', source_node_id: 'SURG-L1-001', target_node_id: 'SURG-L3-014', relation_type: 'prerequisite', weight: 0.9, description: '耳道解剖是 TECA 的基礎', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-051', source_node_id: 'SURG-L3-014', target_node_id: 'SURG-L4-001', relation_type: 'clinical_apply', weight: 0.8, description: 'TECA 需術前 CT/X 光評估鼓泡', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-052', source_node_id: 'SURG-L3-014', target_node_id: 'SURG-L5-001', relation_type: 'clinical_apply', weight: 1, description: 'TECA-LBO 為慢性耳道疾病終末手術', bidirectional: false, unlock_condition: null },

  // SURG-L3-015（腸切除吻合術）
  { id: 'SURG-E-053', source_node_id: 'SURG-L2-001', target_node_id: 'SURG-L3-015', relation_type: 'clinical_apply', weight: 0.9, description: '腹腔臟器病理應用於腸切除', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-054', source_node_id: 'SURG-L3-003', target_node_id: 'SURG-L3-015', relation_type: 'same_system', weight: 0.9, description: '腸道異物可能需腸切除吻合', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-055', source_node_id: 'SURG-L3-015', target_node_id: 'SURG-L4-002', relation_type: 'clinical_apply', weight: 1, description: '腸切除術中需即時決策（壞死範圍/血流評估）', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-056', source_node_id: 'SURG-L3-015', target_node_id: 'SURG-L5-003', relation_type: 'clinical_apply', weight: 0.9, description: '腸切除術後照護（禁食/逐步恢復飲食）', bidirectional: false, unlock_condition: null },

  // ─── 第二輪審計：藥理學/麻醉學視角補齊 ───

  // 骨科手術需圍術期抗生素預防（一代頭孢黴素為首選）
  { id: 'SURG-E-057', source_node_id: 'SURG-L3-004', target_node_id: 'SURG-L5-004', relation_type: 'clinical_apply', weight: 0.8, description: 'CCLD 修復（TPLO/TTA）需圍術期預防性抗生素（cefazolin 術前 30 分鐘）', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-058', source_node_id: 'SURG-L3-007', target_node_id: 'SURG-L5-004', relation_type: 'clinical_apply', weight: 0.8, description: '骨折內固定術需圍術期預防性抗生素，開放性骨折需延長抗生素療程', bidirectional: false, unlock_condition: null },

  // BOAS 為高風險麻醉病例，需特別注意氣道管理
  { id: 'SURG-E-059', source_node_id: 'SURG-L3-010', target_node_id: 'SURG-L1-003', relation_type: 'prerequisite', weight: 0.9, description: 'BOAS 為高風險麻醉病例：術前需預氧合、避免過度鎮靜、備妥緊急氣切設備', bidirectional: false, unlock_condition: null },

  // ─── 結構邊修正：L3 → L5 治療邊補齊 ───
  { id: 'SURG-E-060', source_node_id: 'SURG-L3-002', target_node_id: 'SURG-L5-001', relation_type: 'clinical_apply', weight: 0.9, description: '脾臟腫瘤的主要治療為脾臟切除術（splenectomy）', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-061', source_node_id: 'SURG-L3-006', target_node_id: 'SURG-L5-001', relation_type: 'clinical_apply', weight: 0.8, description: '會陰疝氣需手術修補，選擇內閉鎖肌轉位或合成補片修復', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-062', source_node_id: 'SURG-L3-007', target_node_id: 'SURG-L5-002', relation_type: 'clinical_apply', weight: 0.9, description: '骨折穩定需骨科手術，包括骨板、髓內釘、外固定等方法', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-063', source_node_id: 'SURG-L3-008', target_node_id: 'SURG-L5-002', relation_type: 'clinical_apply', weight: 0.9, description: '膝蓋骨脫位 Grade III-IV 需手術矯正，含滑車溝加深與脛骨粗隆移位', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-064', source_node_id: 'SURG-L3-005', target_node_id: 'SURG-L5-002', relation_type: 'clinical_apply', weight: 0.9, description: 'IVDD Grade III-V 需手術減壓（hemilaminectomy/ventral slot）', bidirectional: false, unlock_condition: null },

  // ─── Phase 3: SURG-L3-016 (泌尿外科) / SURG-L3-017 (乳腺腫瘤) / SURG-L3-018 (FHO) ───

  // 泌尿外科
  { id: 'SURG-E-065', source_node_id: 'SURG-L2-001', target_node_id: 'SURG-L3-016', relation_type: 'prerequisite', weight: 0.9, description: '腹腔臟器病理（泌尿系統）是泌尿外科的基礎', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-066', source_node_id: 'SURG-L3-016', target_node_id: 'SURG-L5-001', relation_type: 'clinical_apply', weight: 1.0, description: '膀胱切開術（cystotomy）與尿道造口術為軟組織手術', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-067', source_node_id: 'SURG-L3-016', target_node_id: 'SURG-L4-001', relation_type: 'clinical_apply', weight: 1.0, description: '泌尿結石手術需術前影像（X光+超音波）定位結石', bidirectional: false, unlock_condition: null },

  // 乳腺腫瘤
  { id: 'SURG-E-068', source_node_id: 'SURG-L2-001', target_node_id: 'SURG-L3-017', relation_type: 'prerequisite', weight: 0.8, description: '腹腔臟器病理與荷爾蒙影響為乳腺腫瘤的基礎', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-069', source_node_id: 'SURG-L3-017', target_node_id: 'SURG-L5-001', relation_type: 'clinical_apply', weight: 1.0, description: '乳腺切除術為軟組織手術', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-070', source_node_id: 'SURG-L3-017', target_node_id: 'SURG-L4-001', relation_type: 'clinical_apply', weight: 0.9, description: '乳腺腫瘤需術前胸腔 X光/腹部超音波分期', bidirectional: false, unlock_condition: null },

  // FHO
  { id: 'SURG-E-071', source_node_id: 'SURG-L2-002', target_node_id: 'SURG-L3-018', relation_type: 'prerequisite', weight: 1.0, description: '骨關節病理是 FHO 適應症評估的基礎', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-072', source_node_id: 'SURG-L3-018', target_node_id: 'SURG-L5-002', relation_type: 'clinical_apply', weight: 1.0, description: 'FHO 為骨科手術', bidirectional: false, unlock_condition: null },
  { id: 'SURG-E-073', source_node_id: 'SURG-L3-018', target_node_id: 'SURG-L5-003', relation_type: 'clinical_apply', weight: 0.9, description: 'FHO 術後需積極復健計畫', bidirectional: false, unlock_condition: null },
  // L3 → L4: clinical_apply（FHO → 骨科影像）
  { id: 'SURG-E-074', source_node_id: 'SURG-L3-018', target_node_id: 'SURG-L4-003', relation_type: 'clinical_apply', weight: 1.0, description: 'FHO 術前需骨科 X 光評估髖關節、Legg-Calve-Perthes 分期與術後追蹤', bidirectional: false, unlock_condition: null },
];
