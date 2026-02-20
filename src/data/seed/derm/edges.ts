import type { KnowledgeEdge } from '@/types/knowledge';

export const DERM_EDGES: KnowledgeEdge[] = [
  // L0 → L1: prerequisite
  { id: 'DERM-E-001', source_node_id: 'DERM-L0-001', target_node_id: 'DERM-L1-001', relation_type: 'prerequisite', weight: 1.0, description: '學科總覽為皮膚解剖的前置', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-002', source_node_id: 'DERM-L0-001', target_node_id: 'DERM-L1-002', relation_type: 'prerequisite', weight: 1.0, description: null, bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-003', source_node_id: 'DERM-L0-001', target_node_id: 'DERM-L1-003', relation_type: 'prerequisite', weight: 0.8, description: null, bidirectional: false, unlock_condition: null },

  // L1 → L2: builds_on
  { id: 'DERM-E-004', source_node_id: 'DERM-L1-002', target_node_id: 'DERM-L2-001', relation_type: 'builds_on', weight: 0.9, description: '皮膚免疫學是過敏機轉的基礎', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-005', source_node_id: 'DERM-L1-001', target_node_id: 'DERM-L2-002', relation_type: 'builds_on', weight: 0.8, description: null, bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-006', source_node_id: 'DERM-L1-002', target_node_id: 'DERM-L2-003', relation_type: 'builds_on', weight: 0.9, description: '免疫學是自體免疫的基礎', bidirectional: false, unlock_condition: null },

  // L2 → L3: clinical_apply
  { id: 'DERM-E-007', source_node_id: 'DERM-L2-001', target_node_id: 'DERM-L3-001', relation_type: 'clinical_apply', weight: 1.0, description: '過敏機轉導致 CAD', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-008', source_node_id: 'DERM-L2-001', target_node_id: 'DERM-L3-002', relation_type: 'clinical_apply', weight: 0.9, description: null, bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-009', source_node_id: 'DERM-L2-001', target_node_id: 'DERM-L3-003', relation_type: 'clinical_apply', weight: 0.9, description: null, bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-010', source_node_id: 'DERM-L2-002', target_node_id: 'DERM-L3-006', relation_type: 'clinical_apply', weight: 0.7, description: null, bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-011', source_node_id: 'DERM-L2-003', target_node_id: 'DERM-L3-010', relation_type: 'clinical_apply', weight: 1.0, description: '自體免疫導致天疱瘡', bidirectional: false, unlock_condition: null },

  // L3 → L4: clinical_apply
  { id: 'DERM-E-012', source_node_id: 'DERM-L3-004', target_node_id: 'DERM-L4-002', relation_type: 'clinical_apply', weight: 1.0, description: '蠕形蟎需皮膚刮搔確診', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-013', source_node_id: 'DERM-L3-005', target_node_id: 'DERM-L4-003', relation_type: 'clinical_apply', weight: 0.9, description: '膿皮症需皮膚細胞學', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-014', source_node_id: 'DERM-L3-007', target_node_id: 'DERM-L4-004', relation_type: 'clinical_apply', weight: 1.0, description: '外耳炎需耳鏡檢查', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-015', source_node_id: 'DERM-L3-001', target_node_id: 'DERM-L4-001', relation_type: 'clinical_apply', weight: 0.9, description: null, bidirectional: false, unlock_condition: null },

  // L3 → L5: clinical_apply
  { id: 'DERM-E-016', source_node_id: 'DERM-L3-001', target_node_id: 'DERM-L5-001', relation_type: 'clinical_apply', weight: 1.0, description: 'CAD 需過敏管理', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-017', source_node_id: 'DERM-L3-004', target_node_id: 'DERM-L5-002', relation_type: 'clinical_apply', weight: 1.0, description: '蠕形蟎需抗寄生蟲治療', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-018', source_node_id: 'DERM-L3-010', target_node_id: 'DERM-L5-003', relation_type: 'clinical_apply', weight: 1.0, description: null, bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-019', source_node_id: 'DERM-L3-007', target_node_id: 'DERM-L5-004', relation_type: 'clinical_apply', weight: 1.0, description: '外耳炎需耳科治療', bidirectional: false, unlock_condition: null },
  { id: 'DERM-E-020', source_node_id: 'DERM-L3-008', target_node_id: 'DERM-L5-005', relation_type: 'clinical_apply', weight: 1.0, description: '癬菌需抗黴菌治療', bidirectional: false, unlock_condition: null },

  // Differentials
  { id: 'DERM-E-021', source_node_id: 'DERM-L3-001', target_node_id: 'DERM-L3-002', relation_type: 'differential', weight: 0.9, description: 'CAD 與食物不良反應鑑別', bidirectional: true, unlock_condition: null },
  { id: 'DERM-E-022', source_node_id: 'DERM-L3-004', target_node_id: 'DERM-L3-009', relation_type: 'differential', weight: 0.8, description: '蠕形蟎與疥蟎鑑別', bidirectional: true, unlock_condition: null },

  // ─── 審計補齊：缺失的 L1/L2→L3 prerequisite 邊 ───

  // DERM-L3-004 (蠕形蟎) 缺少 L1/L2→L3
  { id: 'DERM-E-023', source_node_id: 'DERM-L1-001', target_node_id: 'DERM-L3-004', relation_type: 'prerequisite', weight: 0.8, description: '皮膚解剖是理解蠕形蟎寄生部位的基礎', bidirectional: false, unlock_condition: null },

  // DERM-L3-005 (膿皮症) 缺少 L1/L2→L3
  { id: 'DERM-E-024', source_node_id: 'DERM-L1-001', target_node_id: 'DERM-L3-005', relation_type: 'prerequisite', weight: 0.8, description: '皮膚解剖是理解膿皮症分層（表層/深層）的基礎', bidirectional: false, unlock_condition: null },

  // DERM-L3-007 (外耳炎) 缺少 L1/L2→L3
  { id: 'DERM-E-025', source_node_id: 'DERM-L1-001', target_node_id: 'DERM-L3-007', relation_type: 'prerequisite', weight: 0.8, description: '皮膚解剖（耳道上皮結構）是理解外耳炎的基礎', bidirectional: false, unlock_condition: null },

  // DERM-L3-008 (皮膚癬菌症) 缺少 L1/L2→L3
  { id: 'DERM-E-026', source_node_id: 'DERM-L1-003', target_node_id: 'DERM-L3-008', relation_type: 'prerequisite', weight: 0.8, description: '毛髮生長週期是理解癬菌侵犯毛幹的基礎', bidirectional: false, unlock_condition: null },

  // DERM-L3-009 (疥蟎) 缺少 L1/L2→L3
  { id: 'DERM-E-027', source_node_id: 'DERM-L1-001', target_node_id: 'DERM-L3-009', relation_type: 'prerequisite', weight: 0.8, description: '皮膚解剖是理解疥蟎穿掘隧道的基礎', bidirectional: false, unlock_condition: null },

  // ─── 審計補齊：缺失的 L3→L4 clinical_apply 邊 ───

  // DERM-L3-002 (食物不良反應) 缺少 L3→L4
  { id: 'DERM-E-028', source_node_id: 'DERM-L3-002', target_node_id: 'DERM-L4-001', relation_type: 'clinical_apply', weight: 0.9, description: '食物不良反應需詳細病史（排除飲食試驗）與皮膚檢查', bidirectional: false, unlock_condition: null },

  // DERM-L3-003 (FAD) 缺少 L3→L4
  { id: 'DERM-E-029', source_node_id: 'DERM-L3-003', target_node_id: 'DERM-L4-001', relation_type: 'clinical_apply', weight: 0.9, description: 'FAD 需病史與典型皮膚分布檢查確診', bidirectional: false, unlock_condition: null },

  // DERM-L3-006 (馬拉色菌) 缺少 L3→L4
  { id: 'DERM-E-030', source_node_id: 'DERM-L3-006', target_node_id: 'DERM-L4-003', relation_type: 'clinical_apply', weight: 1.0, description: '馬拉色菌皮膚炎需皮膚細胞學（花生狀酵母菌）確診', bidirectional: false, unlock_condition: null },

  // DERM-L3-008 (癬菌症) 缺少 L3→L4
  { id: 'DERM-E-031', source_node_id: 'DERM-L3-008', target_node_id: 'DERM-L4-002', relation_type: 'clinical_apply', weight: 1.0, description: '癬菌症需毛髮檢查（Wood\'s lamp/DTM/PCR）確診', bidirectional: false, unlock_condition: null },

  // DERM-L3-009 (疥蟎) 缺少 L3→L4
  { id: 'DERM-E-032', source_node_id: 'DERM-L3-009', target_node_id: 'DERM-L4-002', relation_type: 'clinical_apply', weight: 1.0, description: '疥蟎需多處皮膚刮搔檢查', bidirectional: false, unlock_condition: null },

  // DERM-L3-010 (天疱瘡) 缺少 L3→L4
  { id: 'DERM-E-033', source_node_id: 'DERM-L3-010', target_node_id: 'DERM-L4-003', relation_type: 'clinical_apply', weight: 1.0, description: '天疱瘡需皮膚細胞學（棘層鬆解細胞）與組織病理確診', bidirectional: false, unlock_condition: null },
];
