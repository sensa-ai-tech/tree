import type { KnowledgeEdge } from '@/types/knowledge';

export const CPATH_EDGES: KnowledgeEdge[] = [
  // L1 → L1: same_system（血液學 ↔ 臨床化學互為基礎）
  { id: 'CPATH-E-001', source_node_id: 'CPATH-L1-001', target_node_id: 'CPATH-L1-002', relation_type: 'same_system', weight: 0.7, description: '血液學與臨床化學為臨床病理兩大支柱', bidirectional: true, unlock_condition: null },

  // L1-001 → L4: prerequisite（血液學基礎 → 血液學相關診斷）
  { id: 'CPATH-E-002', source_node_id: 'CPATH-L1-001', target_node_id: 'CPATH-L4-001', relation_type: 'prerequisite', weight: 1, description: '血液學基礎是 CBC 判讀的前置', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-003', source_node_id: 'CPATH-L1-001', target_node_id: 'CPATH-L4-004', relation_type: 'prerequisite', weight: 0.9, description: '血液學基礎是凝血功能檢查的前置', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-004', source_node_id: 'CPATH-L1-001', target_node_id: 'CPATH-L4-007', relation_type: 'prerequisite', weight: 0.9, description: '血液學基礎是骨髓判讀的前置', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-005', source_node_id: 'CPATH-L1-001', target_node_id: 'CPATH-L4-008', relation_type: 'prerequisite', weight: 0.8, description: '血液學基礎是血型交叉試驗的前置', bidirectional: false, unlock_condition: null },

  // L1-002 → L4: prerequisite（臨床化學基礎 → 生化相關診斷）
  { id: 'CPATH-E-006', source_node_id: 'CPATH-L1-002', target_node_id: 'CPATH-L4-002', relation_type: 'prerequisite', weight: 1, description: '臨床化學基礎是血清生化判讀的前置', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-007', source_node_id: 'CPATH-L1-002', target_node_id: 'CPATH-L4-005', relation_type: 'prerequisite', weight: 0.9, description: '臨床化學基礎是血氣分析的前置', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-008', source_node_id: 'CPATH-L1-002', target_node_id: 'CPATH-L4-010', relation_type: 'prerequisite', weight: 0.8, description: '臨床化學基礎是內分泌檢測判讀的前置', bidirectional: false, unlock_condition: null },

  // L2-001 → L4: builds_on（分析前誤差與品質控管影響所有 L4 診斷節點）
  { id: 'CPATH-E-009', source_node_id: 'CPATH-L2-001', target_node_id: 'CPATH-L4-001', relation_type: 'builds_on', weight: 0.8, description: '品管直接影響 CBC 結果可靠度', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-010', source_node_id: 'CPATH-L2-001', target_node_id: 'CPATH-L4-002', relation_type: 'builds_on', weight: 0.8, description: '品管直接影響生化結果可靠度', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-011', source_node_id: 'CPATH-L2-001', target_node_id: 'CPATH-L4-004', relation_type: 'builds_on', weight: 0.7, description: '凝血檢查對樣本品質特別敏感', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-012', source_node_id: 'CPATH-L2-001', target_node_id: 'CPATH-L4-005', relation_type: 'builds_on', weight: 0.7, description: '血氣分析需嚴格的分析前品管', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-013', source_node_id: 'CPATH-L2-001', target_node_id: 'CPATH-L4-009', relation_type: 'builds_on', weight: 0.7, description: '尿液分析的時效性與保存方式影響結果', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-014', source_node_id: 'CPATH-L2-001', target_node_id: 'CPATH-L4-010', relation_type: 'builds_on', weight: 0.7, description: '內分泌檢測需注意採樣時機與保存', bidirectional: false, unlock_condition: null },

  // L4 → L4: same_system（細胞學基本原則 → 淋巴結細胞學 / 皮膚細胞學）
  { id: 'CPATH-E-015', source_node_id: 'CPATH-L4-003', target_node_id: 'CPATH-L4-011', relation_type: 'same_system', weight: 0.9, description: '細胞學基本原則是淋巴結細胞學的基礎', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-016', source_node_id: 'CPATH-L4-003', target_node_id: 'CPATH-L4-012', relation_type: 'same_system', weight: 0.9, description: '細胞學基本原則是皮膚細胞學的基礎', bidirectional: false, unlock_condition: null },

  // L4-001 → L4-008: prerequisite（需先了解 CBC 才能進行血型交叉）
  { id: 'CPATH-E-017', source_node_id: 'CPATH-L4-001', target_node_id: 'CPATH-L4-008', relation_type: 'prerequisite', weight: 0.8, description: '血型交叉前需先完成 CBC 評估', bidirectional: false, unlock_condition: null },

  // L4-003 → L4-013: same_system（細胞學在感染診斷中的角色）
  { id: 'CPATH-E-018', source_node_id: 'CPATH-L4-003', target_node_id: 'CPATH-L4-013', relation_type: 'same_system', weight: 0.7, description: '細胞學可輔助感染性病原的形態學辨識', bidirectional: false, unlock_condition: null },

  // L1-002 → L4-006: prerequisite（臨床化學基礎 → 體液分析）
  { id: 'CPATH-E-019', source_node_id: 'CPATH-L1-002', target_node_id: 'CPATH-L4-006', relation_type: 'prerequisite', weight: 0.9, description: '臨床化學基礎是體液分析判讀的前置', bidirectional: false, unlock_condition: null },

  // L2-001 → L4-006: builds_on（分析前誤差與品質控管影響體液分析）
  { id: 'CPATH-E-020', source_node_id: 'CPATH-L2-001', target_node_id: 'CPATH-L4-006', relation_type: 'builds_on', weight: 0.7, description: '體液分析需注意採集與保存的分析前品管', bidirectional: false, unlock_condition: null },

  // ─── Phase 1 擴展邊 ───
  // L0-001 → L1: prerequisite（總覽 → 基礎科學）
  { id: 'CPATH-E-021', source_node_id: 'CPATH-L0-001', target_node_id: 'CPATH-L1-001', relation_type: 'prerequisite', weight: 0.8, description: '臨床病理總覽引導至血液學基礎', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-022', source_node_id: 'CPATH-L0-001', target_node_id: 'CPATH-L1-002', relation_type: 'prerequisite', weight: 0.8, description: '臨床病理總覽引導至臨床化學基礎', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-023', source_node_id: 'CPATH-L0-001', target_node_id: 'CPATH-L1-003', relation_type: 'prerequisite', weight: 0.7, description: '臨床病理總覽引導至免疫學基礎', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-024', source_node_id: 'CPATH-L0-001', target_node_id: 'CPATH-L1-004', relation_type: 'prerequisite', weight: 0.7, description: '臨床病理總覽引導至微生物學基礎', bidirectional: false, unlock_condition: null },

  // L1-003 → L4: prerequisite（免疫學基礎 → 相關診斷）
  { id: 'CPATH-E-025', source_node_id: 'CPATH-L1-003', target_node_id: 'CPATH-L4-008', relation_type: 'prerequisite', weight: 0.8, description: '免疫學基礎是血型交叉試驗的理論基礎', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-026', source_node_id: 'CPATH-L1-003', target_node_id: 'CPATH-L4-013', relation_type: 'prerequisite', weight: 0.8, description: '免疫學基礎是感染性疾病血清學檢測的前置', bidirectional: false, unlock_condition: null },

  // L1-004 → L4-013: prerequisite（微生物學 → 感染性疾病診斷）
  { id: 'CPATH-E-027', source_node_id: 'CPATH-L1-004', target_node_id: 'CPATH-L4-013', relation_type: 'prerequisite', weight: 0.9, description: '微生物學基礎是感染性疾病實驗室診斷的前置', bidirectional: false, unlock_condition: null },

  // L2-002 → L4: builds_on（分析方法學 → 所有 L4 診斷方法）
  { id: 'CPATH-E-028', source_node_id: 'CPATH-L2-002', target_node_id: 'CPATH-L4-001', relation_type: 'builds_on', weight: 0.7, description: '理解阻抗法/光學法才能正確判讀 CBC', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-029', source_node_id: 'CPATH-L2-002', target_node_id: 'CPATH-L4-002', relation_type: 'builds_on', weight: 0.7, description: '理解光度法/乾式化學才能正確判讀生化', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-030', source_node_id: 'CPATH-L2-002', target_node_id: 'CPATH-L4-014', relation_type: 'builds_on', weight: 0.9, description: '分析方法學是理解 POCT 限制的關鍵', bidirectional: false, unlock_condition: null },

  // L4-014 → L5-001: builds_on（POCT 判讀 → 整合判讀）
  { id: 'CPATH-E-031', source_node_id: 'CPATH-L4-014', target_node_id: 'CPATH-L5-001', relation_type: 'builds_on', weight: 0.7, description: 'POCT 結果需整合至完整判讀', bidirectional: false, unlock_condition: null },

  // 所有 L4 → L5-001: builds_on（各診斷方法 → 整合判讀）
  { id: 'CPATH-E-032', source_node_id: 'CPATH-L4-001', target_node_id: 'CPATH-L5-001', relation_type: 'builds_on', weight: 0.9, description: 'CBC 是整合判讀的基本元素', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-033', source_node_id: 'CPATH-L4-002', target_node_id: 'CPATH-L5-001', relation_type: 'builds_on', weight: 0.9, description: '生化是整合判讀的基本元素', bidirectional: false, unlock_condition: null },

  // L1-003 ↔ L1-004: same_system（免疫 ↔ 微生物互為基礎）
  { id: 'CPATH-E-034', source_node_id: 'CPATH-L1-003', target_node_id: 'CPATH-L1-004', relation_type: 'same_system', weight: 0.7, description: '免疫反應與微生物感染密切相關', bidirectional: true, unlock_condition: null },
];
