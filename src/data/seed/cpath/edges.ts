import type { KnowledgeEdge } from '@/types/knowledge';

export const CPATH_EDGES: KnowledgeEdge[] = [
  // ═══════════════════════════════════════════
  // L0 → L1: prerequisite（總覽 → 基礎科學）4 edges
  // ═══════════════════════════════════════════
  { id: 'CPATH-E-001', source_node_id: 'CPATH-L0-001', target_node_id: 'CPATH-L1-001', relation_type: 'prerequisite', weight: 1, description: '臨床病理總覽是血液學基礎的前置', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-002', source_node_id: 'CPATH-L0-001', target_node_id: 'CPATH-L1-002', relation_type: 'prerequisite', weight: 1, description: '臨床病理總覽是臨床化學基礎的前置', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-003', source_node_id: 'CPATH-L0-001', target_node_id: 'CPATH-L1-003', relation_type: 'prerequisite', weight: 0.8, description: '臨床病理總覽是免疫學基礎的前置', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-004', source_node_id: 'CPATH-L0-001', target_node_id: 'CPATH-L1-004', relation_type: 'prerequisite', weight: 0.8, description: '臨床病理總覽是微生物學基礎的前置', bidirectional: false, unlock_condition: null },

  // ═══════════════════════════════════════════
  // L1 → L2: builds_on（基礎科學 → 病理機轉）4 edges
  // ═══════════════════════════════════════════
  { id: 'CPATH-E-005', source_node_id: 'CPATH-L1-001', target_node_id: 'CPATH-L2-001', relation_type: 'builds_on', weight: 0.9, description: '血液學標本品質直接影響CBC結果', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-006', source_node_id: 'CPATH-L1-002', target_node_id: 'CPATH-L2-001', relation_type: 'builds_on', weight: 0.9, description: '生化標本溶血、脂血影響判讀', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-007', source_node_id: 'CPATH-L1-003', target_node_id: 'CPATH-L2-002', relation_type: 'builds_on', weight: 0.8, description: '免疫學原理是多數檢測方法學基礎', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-008', source_node_id: 'CPATH-L1-004', target_node_id: 'CPATH-L2-002', relation_type: 'builds_on', weight: 0.8, description: '微生物培養/PCR需儀器方法學知識', bidirectional: false, unlock_condition: null },

  // ═══════════════════════════════════════════
  // L1 → L4: prerequisite（基礎科學 → 診斷方法）14 edges
  // ═══════════════════════════════════════════
  { id: 'CPATH-E-009', source_node_id: 'CPATH-L1-001', target_node_id: 'CPATH-L4-001', relation_type: 'prerequisite', weight: 1, description: '血液學基礎是CBC判讀前提', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-010', source_node_id: 'CPATH-L1-002', target_node_id: 'CPATH-L4-002', relation_type: 'prerequisite', weight: 1, description: '臨床化學基礎是生化判讀前提', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-011', source_node_id: 'CPATH-L1-003', target_node_id: 'CPATH-L4-003', relation_type: 'prerequisite', weight: 0.8, description: '免疫學基礎輔助細胞學判讀', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-012', source_node_id: 'CPATH-L1-001', target_node_id: 'CPATH-L4-004', relation_type: 'prerequisite', weight: 0.9, description: '凝血功能需血液學基礎', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-013', source_node_id: 'CPATH-L1-002', target_node_id: 'CPATH-L4-005', relation_type: 'prerequisite', weight: 0.9, description: '血液氣體分析需化學基礎', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-014', source_node_id: 'CPATH-L1-001', target_node_id: 'CPATH-L4-006', relation_type: 'prerequisite', weight: 0.8, description: '體液分析需血液學基礎', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-015', source_node_id: 'CPATH-L1-001', target_node_id: 'CPATH-L4-007', relation_type: 'prerequisite', weight: 1, description: '骨髓判讀需血液學基礎', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-016', source_node_id: 'CPATH-L1-001', target_node_id: 'CPATH-L4-008', relation_type: 'prerequisite', weight: 0.9, description: '血液分型需血液學基礎', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-017', source_node_id: 'CPATH-L1-002', target_node_id: 'CPATH-L4-009', relation_type: 'prerequisite', weight: 0.9, description: '尿液分析需化學基礎', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-018', source_node_id: 'CPATH-L1-002', target_node_id: 'CPATH-L4-010', relation_type: 'prerequisite', weight: 0.9, description: '內分泌檢測需化學基礎', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-019', source_node_id: 'CPATH-L1-003', target_node_id: 'CPATH-L4-011', relation_type: 'prerequisite', weight: 0.8, description: '腫瘤細胞學需免疫學輔助判讀', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-020', source_node_id: 'CPATH-L1-003', target_node_id: 'CPATH-L4-012', relation_type: 'prerequisite', weight: 0.8, description: '皮膚細胞學需免疫學基礎', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-021', source_node_id: 'CPATH-L1-004', target_node_id: 'CPATH-L4-013', relation_type: 'prerequisite', weight: 1, description: '感染性疾病診斷需微生物學基礎', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-022', source_node_id: 'CPATH-L1-002', target_node_id: 'CPATH-L4-014', relation_type: 'prerequisite', weight: 0.8, description: 'POCT即時檢驗需化學基礎理解限制', bidirectional: false, unlock_condition: null },

  // ═══════════════════════════════════════════
  // L2 → L4: clinical_apply（品質控管/方法學 → 診斷方法）6 edges
  // ═══════════════════════════════════════════
  { id: 'CPATH-E-023', source_node_id: 'CPATH-L2-001', target_node_id: 'CPATH-L4-001', relation_type: 'clinical_apply', weight: 0.9, description: '品質控管直接影響CBC結果可靠度', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-024', source_node_id: 'CPATH-L2-001', target_node_id: 'CPATH-L4-002', relation_type: 'clinical_apply', weight: 0.9, description: '分析前誤差是生化判讀最大陷阱', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-025', source_node_id: 'CPATH-L2-002', target_node_id: 'CPATH-L4-010', relation_type: 'clinical_apply', weight: 0.8, description: '儀器方法學影響內分泌檢測準確度', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-026', source_node_id: 'CPATH-L2-002', target_node_id: 'CPATH-L4-013', relation_type: 'clinical_apply', weight: 0.8, description: '方法學影響感染檢測敏感度與特異度', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-027', source_node_id: 'CPATH-L2-001', target_node_id: 'CPATH-L4-005', relation_type: 'clinical_apply', weight: 0.9, description: '血氣分析前誤差(氣泡/延遲)影響巨大', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-028', source_node_id: 'CPATH-L2-001', target_node_id: 'CPATH-L4-009', relation_type: 'clinical_apply', weight: 0.8, description: '尿液標本品質直接影響結果', bidirectional: false, unlock_condition: null },

  // ═══════════════════════════════════════════
  // L4 → L4: builds_on（診斷方法漸進複雜度）4 edges
  // ═══════════════════════════════════════════
  { id: 'CPATH-E-029', source_node_id: 'CPATH-L4-001', target_node_id: 'CPATH-L4-007', relation_type: 'builds_on', weight: 1, description: 'CBC是骨髓判讀的前置技能', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-030', source_node_id: 'CPATH-L4-001', target_node_id: 'CPATH-L4-008', relation_type: 'builds_on', weight: 0.8, description: 'CBC是血液分型的基礎', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-031', source_node_id: 'CPATH-L4-003', target_node_id: 'CPATH-L4-011', relation_type: 'builds_on', weight: 0.9, description: '基本細胞學是腫瘤細胞學的進階', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-032', source_node_id: 'CPATH-L4-003', target_node_id: 'CPATH-L4-012', relation_type: 'builds_on', weight: 0.9, description: '基本細胞學是皮膚細胞學的進階', bidirectional: false, unlock_condition: null },

  // ═══════════════════════════════════════════
  // L4 → L5: clinical_apply（診斷方法 → 整合判讀）3 edges
  // ═══════════════════════════════════════════
  { id: 'CPATH-E-033', source_node_id: 'CPATH-L4-001', target_node_id: 'CPATH-L5-001', relation_type: 'clinical_apply', weight: 0.8, description: 'CBC結果需要整合判讀', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-034', source_node_id: 'CPATH-L4-002', target_node_id: 'CPATH-L5-001', relation_type: 'clinical_apply', weight: 0.8, description: '生化結果需要整合判讀', bidirectional: false, unlock_condition: null },
  { id: 'CPATH-E-035', source_node_id: 'CPATH-L4-003', target_node_id: 'CPATH-L5-001', relation_type: 'clinical_apply', weight: 0.8, description: '細胞學結果需要整合判讀', bidirectional: false, unlock_condition: null },

  // ═══════════════════════════════════════════
  // Differential edges（鑑別/互補判讀）2 edges
  // ═══════════════════════════════════════════
  { id: 'CPATH-E-036', source_node_id: 'CPATH-L4-001', target_node_id: 'CPATH-L4-004', relation_type: 'differential', weight: 0.7, description: 'CBC血小板與凝血功能互補判讀', bidirectional: true, unlock_condition: null },
  { id: 'CPATH-E-037', source_node_id: 'CPATH-L4-005', target_node_id: 'CPATH-L4-002', relation_type: 'differential', weight: 0.8, description: '血氣與生化互補判讀酸鹼平衡', bidirectional: true, unlock_condition: null },
];
