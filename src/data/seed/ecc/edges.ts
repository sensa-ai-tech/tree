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
];
