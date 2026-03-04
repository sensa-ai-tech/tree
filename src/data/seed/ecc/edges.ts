import type { KnowledgeEdge } from '@/types/knowledge';

export const ECC_EDGES: KnowledgeEdge[] = [
  // L0 → L1: prerequisite
  { id: 'ECC-E-001', source_node_id: 'ECC-L0-001', target_node_id: 'ECC-L1-001', relation_type: 'prerequisite', weight: 1, description: '學科總覽為休克生理學的前置', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-002', source_node_id: 'ECC-L0-001', target_node_id: 'ECC-L1-002', relation_type: 'prerequisite', weight: 1, description: null, bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-003', source_node_id: 'ECC-L0-001', target_node_id: 'ECC-L1-003', relation_type: 'prerequisite', weight: 0.8, description: null, bidirectional: false, unlock_condition: null },

  // L1 → L2: builds_on
  { id: 'ECC-E-004', source_node_id: 'ECC-L1-001', target_node_id: 'ECC-L2-001', relation_type: 'builds_on', weight: 0.9, description: '休克生理學是 SIRS/敗血症機轉的基礎', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-005', source_node_id: 'ECC-L1-002', target_node_id: 'ECC-L2-001', relation_type: 'builds_on', weight: 0.7, description: '體液平衡與敗血症液體復甦密切相關', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-006', source_node_id: 'ECC-L2-001', target_node_id: 'ECC-L2-002', relation_type: 'complication', weight: 0.9, description: 'SIRS/敗血症可進展為 MODS', bidirectional: false, unlock_condition: null },

  // L1/L2 → L3: clinical_apply
  { id: 'ECC-E-007', source_node_id: 'ECC-L1-001', target_node_id: 'ECC-L3-001', relation_type: 'clinical_apply', weight: 1, description: '過敏性休克屬於分布性休克', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-008', source_node_id: 'ECC-L1-002', target_node_id: 'ECC-L3-002', relation_type: 'clinical_apply', weight: 0.9, description: 'DKA 涉及嚴重電解質與體液失衡', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-009', source_node_id: 'ECC-L1-003', target_node_id: 'ECC-L3-002', relation_type: 'clinical_apply', weight: 1, description: 'DKA 的核心病理為代謝性酸中毒', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-010', source_node_id: 'ECC-L1-001', target_node_id: 'ECC-L3-003', relation_type: 'clinical_apply', weight: 0.8, description: '中暑可導致分布性休克與 DIC', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-011', source_node_id: 'ECC-L1-002', target_node_id: 'ECC-L3-004', relation_type: 'clinical_apply', weight: 1, description: '貓尿道阻塞導致嚴重高血鉀與代謝性酸中毒', bidirectional: false, unlock_condition: null },

  // L3 → L4: clinical_apply
  { id: 'ECC-E-012', source_node_id: 'ECC-L3-001', target_node_id: 'ECC-L4-001', relation_type: 'clinical_apply', weight: 0.9, description: '過敏性休克需 ABCDE 快速評估', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-013', source_node_id: 'ECC-L3-004', target_node_id: 'ECC-L4-002', relation_type: 'clinical_apply', weight: 0.8, description: 'AFAST 評估是否有膀胱擴張', bidirectional: false, unlock_condition: null },

  // L3 → L5: clinical_apply
  { id: 'ECC-E-014', source_node_id: 'ECC-L3-001', target_node_id: 'ECC-L5-001', relation_type: 'clinical_apply', weight: 1, description: '過敏性休克需積極液體復甦', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-015', source_node_id: 'ECC-L3-002', target_node_id: 'ECC-L5-001', relation_type: 'clinical_apply', weight: 0.9, description: 'DKA 治療需精確液體校正', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-016', source_node_id: 'ECC-L3-003', target_node_id: 'ECC-L5-001', relation_type: 'clinical_apply', weight: 0.8, description: '中暑需液體復甦支持', bidirectional: false, unlock_condition: null },

  // L4 → L5: builds_on
  { id: 'ECC-E-017', source_node_id: 'ECC-L4-001', target_node_id: 'ECC-L5-002', relation_type: 'builds_on', weight: 1, description: 'ABCDE 評估後判定心跳停止進入 CPR', bidirectional: false, unlock_condition: null },

  // cross-specialty edges
  { id: 'ECC-E-018', source_node_id: 'ECC-L1-001', target_node_id: 'CARDIO-L1-003', relation_type: 'cross_specialty', weight: 0.7, description: '休克生理學與心臟血流動力學互為基礎', bidirectional: true, unlock_condition: null },
  { id: 'ECC-E-019', source_node_id: 'ECC-L3-006', target_node_id: 'ECC-L5-004', relation_type: 'clinical_apply', weight: 0.8, description: '癲癇重積後需評估疼痛管理', bidirectional: false, unlock_condition: null },

  // same_system within L3
  { id: 'ECC-E-020', source_node_id: 'ECC-L3-003', target_node_id: 'ECC-L2-002', relation_type: 'complication', weight: 0.8, description: '中暑可進展為 MODS', bidirectional: false, unlock_condition: null },

  // 常見中毒各論 (ECC-L3-007) edges
  { id: 'ECC-E-021', source_node_id: 'ECC-L3-005', target_node_id: 'ECC-L3-007', relation_type: 'same_system', weight: 0.9, description: '一般毒物學為各論中毒的基礎', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-022', source_node_id: 'ECC-L3-007', target_node_id: 'ECC-L4-001', relation_type: 'clinical_apply', weight: 0.9, description: '中毒病例需 ABCDE 初步評估與穩定', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-023', source_node_id: 'ECC-L3-007', target_node_id: 'ECC-L5-001', relation_type: 'clinical_apply', weight: 0.8, description: '中毒治療常需液體療法支持排毒', bidirectional: false, unlock_condition: null },

  // 蛇咬傷與蟾蜍中毒 (ECC-L3-008) edges
  { id: 'ECC-E-024', source_node_id: 'ECC-L3-008', target_node_id: 'ECC-L4-001', relation_type: 'clinical_apply', weight: 1, description: '蛇咬傷需緊急分檢與評估', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-025', source_node_id: 'ECC-L3-008', target_node_id: 'ECC-L2-003', relation_type: 'complication', weight: 0.9, description: '蛇咬傷蛇毒可導致凝血功能障礙與 DIC', bidirectional: false, unlock_condition: null },

  // 凝血功能障礙與 DIC (ECC-L2-003) edges
  { id: 'ECC-E-026', source_node_id: 'ECC-L2-001', target_node_id: 'ECC-L2-003', relation_type: 'complication', weight: 0.9, description: 'SIRS/敗血症可繼發 DIC', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-027', source_node_id: 'ECC-L3-003', target_node_id: 'ECC-L2-003', relation_type: 'complication', weight: 0.8, description: '中暑可繼發凝血功能障礙與 DIC', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-028', source_node_id: 'ECC-L2-003', target_node_id: 'ECC-L5-003', relation_type: 'clinical_apply', weight: 0.9, description: 'DIC 可能需要輸血治療', bidirectional: false, unlock_condition: null },

  // 急診營養支持 (ECC-L5-005) edges
  { id: 'ECC-E-029', source_node_id: 'ECC-L2-002', target_node_id: 'ECC-L5-005', relation_type: 'clinical_apply', weight: 0.8, description: 'MODS 患者需早期營養支持', bidirectional: false, unlock_condition: null },

  // ─── 審查補齊：L3 節點缺失的 prerequisite/builds_on (L1/L2→L3) 與 clinical_apply (L3→L4) 邊 ───

  // ECC-L3-002 (DKA) — 缺 L3→L4
  { id: 'ECC-E-030', source_node_id: 'ECC-L3-002', target_node_id: 'ECC-L4-001', relation_type: 'clinical_apply', weight: 0.9, description: 'DKA 病例需 ABCDE 快速分診評估脫水與意識狀態', bidirectional: false, unlock_condition: null },

  // ECC-L3-003 (中暑) — 缺 L3→L4
  { id: 'ECC-E-031', source_node_id: 'ECC-L3-003', target_node_id: 'ECC-L4-001', relation_type: 'clinical_apply', weight: 0.9, description: '中暑病例需 ABCDE 分診評估循環與神經狀態', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-032', source_node_id: 'ECC-L3-003', target_node_id: 'ECC-L4-002', relation_type: 'clinical_apply', weight: 0.7, description: 'AFAST/TFAST 評估中暑是否併發腹腔積液或胸腔積液', bidirectional: false, unlock_condition: null },

  // ECC-L3-005 (中毒急診) — 缺 L1/L2→L3 與 L3→L4
  { id: 'ECC-E-033', source_node_id: 'ECC-L1-002', target_node_id: 'ECC-L3-005', relation_type: 'prerequisite', weight: 0.9, description: '中毒可導致嚴重體液與電解質失衡，需掌握基礎生理', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-034', source_node_id: 'ECC-L1-003', target_node_id: 'ECC-L3-005', relation_type: 'prerequisite', weight: 0.8, description: '中毒常引發代謝性酸中毒，需理解酸鹼平衡', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-035', source_node_id: 'ECC-L3-005', target_node_id: 'ECC-L4-001', relation_type: 'clinical_apply', weight: 1, description: '中毒急診需 ABCDE 快速分診穩定生命徵象', bidirectional: false, unlock_condition: null },

  // ECC-L3-006 (癲癇重積狀態) — 缺 L1/L2→L3 與 L3→L4
  { id: 'ECC-E-036', source_node_id: 'ECC-L1-001', target_node_id: 'ECC-L3-006', relation_type: 'prerequisite', weight: 0.8, description: '癲癇重積可導致腦缺氧與休克，需理解休克生理學', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-037', source_node_id: 'ECC-L2-001', target_node_id: 'ECC-L3-006', relation_type: 'builds_on', weight: 0.7, description: '持續癲癇可觸發全身性發炎反應(SIRS)', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-038', source_node_id: 'ECC-L3-006', target_node_id: 'ECC-L4-001', relation_type: 'clinical_apply', weight: 0.9, description: '癲癇重積需 ABCDE 評估呼吸道通暢與循環穩定', bidirectional: false, unlock_condition: null },

  // ECC-L3-007 (常見中毒各論) — 缺 L1/L2→L3
  { id: 'ECC-E-039', source_node_id: 'ECC-L1-002', target_node_id: 'ECC-L3-007', relation_type: 'prerequisite', weight: 0.8, description: '各類中毒影響體液電解質平衡（如木糖醇致低血糖、百合致腎衰竭）', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-040', source_node_id: 'ECC-L2-002', target_node_id: 'ECC-L3-007', relation_type: 'builds_on', weight: 0.7, description: '嚴重中毒可進展為多重器官功能障礙', bidirectional: false, unlock_condition: null },

  // ECC-L3-008 (蛇咬傷與蟾蜍中毒) — 缺 L1/L2→L3
  { id: 'ECC-E-041', source_node_id: 'ECC-L1-001', target_node_id: 'ECC-L3-008', relation_type: 'prerequisite', weight: 0.9, description: '蛇毒可導致分布性休克與低血壓，需理解休克生理學', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-042', source_node_id: 'ECC-L1-002', target_node_id: 'ECC-L3-008', relation_type: 'prerequisite', weight: 0.8, description: '蛇咬傷液體復甦需掌握體液與電解質平衡', bidirectional: false, unlock_condition: null },

  // ─── 補強：既有 L3 節點的額外臨床關聯邊 ───

  // ECC-L3-004 (貓尿道阻塞) — 補充酸鹼平衡 prerequisite 與 ABCDE 分診
  { id: 'ECC-E-043', source_node_id: 'ECC-L1-003', target_node_id: 'ECC-L3-004', relation_type: 'prerequisite', weight: 0.9, description: '貓尿道阻塞致高血鉀與代謝性酸中毒，需理解酸鹼平衡', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-044', source_node_id: 'ECC-L3-004', target_node_id: 'ECC-L4-001', relation_type: 'clinical_apply', weight: 0.9, description: '貓尿道阻塞需 ABCDE 評估心律與循環狀態（高血鉀致心律不整）', bidirectional: false, unlock_condition: null },

  // ─── Phase 2D 擴展邊 ───
  // ECC-L2-004（創傷與出血病生理）
  { id: 'ECC-E-045', source_node_id: 'ECC-L1-001', target_node_id: 'ECC-L2-004', relation_type: 'builds_on', weight: 0.9, description: '休克生理學是創傷出血機轉的基礎', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-046', source_node_id: 'ECC-L2-003', target_node_id: 'ECC-L2-004', relation_type: 'same_system', weight: 0.8, description: '凝血障礙與創傷出血互為因果（創傷性凝血病變）', bidirectional: true, unlock_condition: null },

  // ECC-L3-009（腹腔出血）
  { id: 'ECC-E-047', source_node_id: 'ECC-L2-004', target_node_id: 'ECC-L3-009', relation_type: 'clinical_apply', weight: 1, description: '創傷出血機轉直接導致腹腔出血', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-048', source_node_id: 'ECC-L3-009', target_node_id: 'ECC-L4-002', relation_type: 'clinical_apply', weight: 1, description: 'AFAST 是腹腔出血的首要診斷工具', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-049', source_node_id: 'ECC-L3-009', target_node_id: 'ECC-L5-001', relation_type: 'clinical_apply', weight: 1, description: '腹腔出血需積極液體復甦', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-050', source_node_id: 'ECC-L3-009', target_node_id: 'ECC-L5-003', relation_type: 'clinical_apply', weight: 0.9, description: '嚴重腹腔出血常需輸血治療', bidirectional: false, unlock_condition: null },

  // ECC-L3-010（氣胸）
  { id: 'ECC-E-051', source_node_id: 'ECC-L2-004', target_node_id: 'ECC-L3-010', relation_type: 'clinical_apply', weight: 0.8, description: '創傷是氣胸最常見原因', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-052', source_node_id: 'ECC-L3-010', target_node_id: 'ECC-L4-001', relation_type: 'clinical_apply', weight: 1, description: '氣胸需 ABCDE 評估呼吸狀態', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-053', source_node_id: 'ECC-L3-010', target_node_id: 'ECC-L4-002', relation_type: 'clinical_apply', weight: 0.9, description: 'TFAST 快速偵測氣胸（滑行徵消失）', bidirectional: false, unlock_condition: null },

  // ECC-L3-011（敗血症臨床處置）
  { id: 'ECC-E-054', source_node_id: 'ECC-L2-001', target_node_id: 'ECC-L3-011', relation_type: 'clinical_apply', weight: 1, description: 'SIRS/敗血症機轉是臨床處置的理論基礎', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-055', source_node_id: 'ECC-L3-011', target_node_id: 'ECC-L4-001', relation_type: 'clinical_apply', weight: 0.9, description: '敗血症需 ABCDE 快速評估', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-056', source_node_id: 'ECC-L3-011', target_node_id: 'ECC-L5-001', relation_type: 'clinical_apply', weight: 1, description: '敗血症液體復甦是核心治療', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-057', source_node_id: 'ECC-L3-011', target_node_id: 'ECC-L2-002', relation_type: 'complication', weight: 0.9, description: '敗血症可進展為 MODS', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-058', source_node_id: 'ECC-L3-011', target_node_id: 'ECC-L2-003', relation_type: 'complication', weight: 0.8, description: '敗血症可繼發 DIC', bidirectional: false, unlock_condition: null },

  // ECC-L3-012（多發性創傷）
  { id: 'ECC-E-059', source_node_id: 'ECC-L2-004', target_node_id: 'ECC-L3-012', relation_type: 'clinical_apply', weight: 1, description: '創傷病生理直接應用於多發創傷', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-060', source_node_id: 'ECC-L3-012', target_node_id: 'ECC-L4-001', relation_type: 'clinical_apply', weight: 1, description: '多發創傷需 ABCDE 系統性評估', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-061', source_node_id: 'ECC-L3-012', target_node_id: 'ECC-L4-002', relation_type: 'clinical_apply', weight: 0.9, description: 'AFAST/TFAST 評估創傷後體腔出血', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-062', source_node_id: 'ECC-L3-012', target_node_id: 'ECC-L5-001', relation_type: 'clinical_apply', weight: 1, description: '多發創傷需積極液體復甦', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-063', source_node_id: 'ECC-L3-012', target_node_id: 'ECC-L5-004', relation_type: 'clinical_apply', weight: 0.9, description: '多發創傷需多模式止痛', bidirectional: false, unlock_condition: null },

  // ECC-L3-013（急性呼吸窘迫）
  { id: 'ECC-E-064', source_node_id: 'ECC-L1-001', target_node_id: 'ECC-L3-013', relation_type: 'prerequisite', weight: 0.8, description: '呼吸窘迫可導致休克', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-065', source_node_id: 'ECC-L3-013', target_node_id: 'ECC-L4-001', relation_type: 'clinical_apply', weight: 1, description: '呼吸窘迫需 ABCDE 優先評估呼吸道', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-066', source_node_id: 'ECC-L3-013', target_node_id: 'ECC-L4-002', relation_type: 'clinical_apply', weight: 0.8, description: 'TFAST 鑑別心因性與非心因性呼吸窘迫', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-067', source_node_id: 'ECC-L3-013', target_node_id: 'ECC-L5-006', relation_type: 'clinical_apply', weight: 1, description: '嚴重呼吸窘迫可能需機械通氣', bidirectional: false, unlock_condition: null },

  // ECC-L5-006（機械通氣與氧氣治療）
  { id: 'ECC-E-068', source_node_id: 'ECC-L3-010', target_node_id: 'ECC-L5-006', relation_type: 'clinical_apply', weight: 0.8, description: '張力性氣胸引流後可能需正壓通氣', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-069', source_node_id: 'ECC-L3-011', target_node_id: 'ECC-L5-006', relation_type: 'clinical_apply', weight: 0.8, description: '敗血症合併 ARDS 需機械通氣', bidirectional: false, unlock_condition: null },

  // 跨層連結
  { id: 'ECC-E-070', source_node_id: 'ECC-L3-009', target_node_id: 'ECC-L3-012', relation_type: 'same_system', weight: 0.8, description: '腹腔出血常為多發創傷的一部分', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-071', source_node_id: 'ECC-L3-010', target_node_id: 'ECC-L3-012', relation_type: 'same_system', weight: 0.8, description: '氣胸常為多發創傷的一部分', bidirectional: false, unlock_condition: null },

  // ─── Phase 3: 急性腹部相關邊 ───
  { id: 'ECC-E-072', source_node_id: 'ECC-L2-001', target_node_id: 'ECC-L3-014', relation_type: 'prerequisite', weight: 0.9, description: 'SIRS/敗血症機轉是理解敗血性腹膜炎的前置知識', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-073', source_node_id: 'ECC-L3-014', target_node_id: 'ECC-L4-001', relation_type: 'clinical_apply', weight: 1, description: '急性腹部需 ABCDE 快速分診評估循環與腹部觸診', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-074', source_node_id: 'ECC-L3-014', target_node_id: 'ECC-L4-002', relation_type: 'clinical_apply', weight: 1, description: 'AFAST 是急性腹部首要影像評估工具（偵測腹腔積液）', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-075', source_node_id: 'ECC-L3-014', target_node_id: 'ECC-L5-001', relation_type: 'clinical_apply', weight: 0.9, description: '急性腹部需積極靜脈輸液穩定循環', bidirectional: false, unlock_condition: null },

  // ─── Phase 3: 審計缺失邊補齊 ───
  { id: 'ECC-E-076', source_node_id: 'ECC-L4-001', target_node_id: 'ECC-L4-002', relation_type: 'builds_on', weight: 0.8, description: 'ABCDE 分診後以 AFAST/TFAST 進行快速影像評估（ABCDE builds to POCUS）', bidirectional: false, unlock_condition: null },

  // ─── ECC-L3-015（低血糖急診）───
  { id: 'ECC-E-077', source_node_id: 'ECC-L1-002', target_node_id: 'ECC-L3-015', relation_type: 'prerequisite', weight: 0.9, description: '低血糖涉及體液電解質與代謝平衡', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-078', source_node_id: 'ECC-L3-015', target_node_id: 'ECC-L4-001', relation_type: 'clinical_apply', weight: 0.9, description: '低血糖急診需 ABCDE 評估神經狀態', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-079', source_node_id: 'ECC-L3-015', target_node_id: 'ECC-L5-001', relation_type: 'clinical_apply', weight: 0.9, description: '低血糖急診需 dextrose 靜脈輸液', bidirectional: false, unlock_condition: null },

  // ─── ECC-L3-016（艾迪森危象）───
  { id: 'ECC-E-080', source_node_id: 'ECC-L1-001', target_node_id: 'ECC-L3-016', relation_type: 'prerequisite', weight: 1, description: '艾迪森危象可導致低血容性休克', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-081', source_node_id: 'ECC-L1-002', target_node_id: 'ECC-L3-016', relation_type: 'prerequisite', weight: 1, description: '艾迪森危象核心病理為嚴重電解質失衡（低鈉高鉀）', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-082', source_node_id: 'ECC-L3-016', target_node_id: 'ECC-L4-001', relation_type: 'clinical_apply', weight: 1, description: '艾迪森危象需 ABCDE 評估循環與心律', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-083', source_node_id: 'ECC-L3-016', target_node_id: 'ECC-L5-001', relation_type: 'clinical_apply', weight: 1, description: '艾迪森危象需積極等張晶體液復甦', bidirectional: false, unlock_condition: null },

  // ─── ECC-L3-017（輸血反應）───
  { id: 'ECC-E-084', source_node_id: 'ECC-L2-003', target_node_id: 'ECC-L3-017', relation_type: 'prerequisite', weight: 0.8, description: '凝血功能障礙和 DIC 與輸血反應相關', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-085', source_node_id: 'ECC-L3-017', target_node_id: 'ECC-L5-003', relation_type: 'clinical_apply', weight: 1, description: '輸血反應是輸血醫學的核心併發症', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-086', source_node_id: 'ECC-L3-017', target_node_id: 'ECC-L4-001', relation_type: 'clinical_apply', weight: 0.9, description: '輸血反應需 ABCDE 評估呼吸與循環', bidirectional: false, unlock_condition: null },
  { id: 'ECC-E-087', source_node_id: 'ECC-L3-017', target_node_id: 'ECC-L5-001', relation_type: 'clinical_apply', weight: 0.8, description: '急性溶血性輸血反應需積極液體治療維持腎灌流', bidirectional: false, unlock_condition: null },

  // 疾病間關聯
  { id: 'ECC-E-088', source_node_id: 'ECC-L3-015', target_node_id: 'ECC-L3-016', relation_type: 'differential', weight: 0.6, description: '低血糖可為 Addison 危象的臨床表現之一', bidirectional: false, unlock_condition: null },

  // ─── 補齊缺失 prerequisite 邊：確保每個 L3 節點至少有 1 條 L1/L2 prerequisite ───

  // ECC-L3-001（過敏性休克）← L1-001（休克生理學）
  { id: 'ECC-E-089', source_node_id: 'ECC-L1-001', target_node_id: 'ECC-L3-001', relation_type: 'prerequisite', weight: 3, description: '過敏性休克屬於分布性休克，需先理解休克生理學（血管擴張、有效循環血量下降機轉）', bidirectional: false, unlock_condition: null },

  // ECC-L3-002（DKA）← L1-003（酸鹼平衡）
  { id: 'ECC-E-090', source_node_id: 'ECC-L1-003', target_node_id: 'ECC-L3-002', relation_type: 'prerequisite', weight: 3, description: 'DKA 核心病理為酮體堆積致代謝性酸中毒，需先掌握酸鹼平衡（Henderson-Hasselbalch、代償機制）', bidirectional: false, unlock_condition: null },

  // ECC-L3-003（中暑）← L1-001（休克生理學）
  { id: 'ECC-E-091', source_node_id: 'ECC-L1-001', target_node_id: 'ECC-L3-003', relation_type: 'prerequisite', weight: 3, description: '中暑可導致分布性休克與血流動力學衰竭，需先理解休克生理學（熱致血管擴張、有效循環血量重分配）', bidirectional: false, unlock_condition: null },

  // ECC-L3-009（腹腔出血）← L2-004（創傷與出血病生理）
  { id: 'ECC-E-092', source_node_id: 'ECC-L2-004', target_node_id: 'ECC-L3-009', relation_type: 'prerequisite', weight: 3, description: '腹腔出血的評估與處置需理解創傷出血機轉（失血性休克分級、凝血病變三角）', bidirectional: false, unlock_condition: null },

  // ECC-L3-010（氣胸）← L1-001（休克生理學）
  { id: 'ECC-E-093', source_node_id: 'ECC-L1-001', target_node_id: 'ECC-L3-010', relation_type: 'prerequisite', weight: 3, description: '張力性氣胸可導致阻塞性休克（縱膈腔移位、靜脈回流受阻），需先理解休克生理學', bidirectional: false, unlock_condition: null },

  // ECC-L3-011（敗血症臨床處置）← L2-001（SIRS/敗血症機轉）
  { id: 'ECC-E-094', source_node_id: 'ECC-L2-001', target_node_id: 'ECC-L3-011', relation_type: 'prerequisite', weight: 3, description: '敗血症臨床處置需先理解 SIRS/敗血症級聯反應機轉（細胞激素風暴、血管通透性增加、組織灌流不足）', bidirectional: false, unlock_condition: null },

  // ECC-L3-012（多發性創傷）← L2-004（創傷與出血病生理）
  { id: 'ECC-E-095', source_node_id: 'ECC-L2-004', target_node_id: 'ECC-L3-012', relation_type: 'prerequisite', weight: 3, description: '多發性創傷處置需理解創傷出血病生理（致死三角：低體溫/酸中毒/凝血病變、損傷控制復甦）', bidirectional: false, unlock_condition: null },
];
