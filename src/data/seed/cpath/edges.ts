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
];
