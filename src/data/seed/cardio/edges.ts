import type { KnowledgeEdge } from '@/types/knowledge';

export const CARDIO_EDGES: KnowledgeEdge[] = [
  // L0 → L1: prerequisite
  { id: 'CARDIO-E-001', source_node_id: 'CARDIO-L0-001', target_node_id: 'CARDIO-L1-001', relation_type: 'prerequisite', weight: 1, description: '學科總覽為解剖學的前置', bidirectional: false, unlock_condition: null },
  { id: 'CARDIO-E-002', source_node_id: 'CARDIO-L0-001', target_node_id: 'CARDIO-L1-002', relation_type: 'prerequisite', weight: 1, description: null, bidirectional: false, unlock_condition: null },
  { id: 'CARDIO-E-003', source_node_id: 'CARDIO-L0-001', target_node_id: 'CARDIO-L1-003', relation_type: 'prerequisite', weight: 0.8, description: null, bidirectional: false, unlock_condition: null },

  // L1 → L2: builds_on
  { id: 'CARDIO-E-004', source_node_id: 'CARDIO-L1-001', target_node_id: 'CARDIO-L2-001', relation_type: 'builds_on', weight: 0.9, description: '心臟解剖是瓣膜退化的基礎', bidirectional: false, unlock_condition: null },
  { id: 'CARDIO-E-005', source_node_id: 'CARDIO-L1-003', target_node_id: 'CARDIO-L2-002', relation_type: 'builds_on', weight: 0.8, description: null, bidirectional: false, unlock_condition: null },
  { id: 'CARDIO-E-006', source_node_id: 'CARDIO-L1-002', target_node_id: 'CARDIO-L2-003', relation_type: 'builds_on', weight: 0.9, description: '電生理學是心律不整的基礎', bidirectional: false, unlock_condition: null },

  // L2 → L3: clinical_apply
  { id: 'CARDIO-E-007', source_node_id: 'CARDIO-L2-001', target_node_id: 'CARDIO-L3-001', relation_type: 'clinical_apply', weight: 1, description: '瓣膜退化機轉直接導致 MMVD', bidirectional: false, unlock_condition: null },
  { id: 'CARDIO-E-008', source_node_id: 'CARDIO-L2-002', target_node_id: 'CARDIO-L3-002', relation_type: 'clinical_apply', weight: 0.9, description: null, bidirectional: false, unlock_condition: null },
  { id: 'CARDIO-E-009', source_node_id: 'CARDIO-L2-002', target_node_id: 'CARDIO-L3-003', relation_type: 'clinical_apply', weight: 0.8, description: null, bidirectional: false, unlock_condition: null },

  // L3 → L4: clinical_apply
  { id: 'CARDIO-E-010', source_node_id: 'CARDIO-L3-001', target_node_id: 'CARDIO-L4-001', relation_type: 'clinical_apply', weight: 0.9, description: 'MMVD 的聽診評估', bidirectional: false, unlock_condition: null },
  { id: 'CARDIO-E-011', source_node_id: 'CARDIO-L3-001', target_node_id: 'CARDIO-L4-002', relation_type: 'clinical_apply', weight: 1, description: 'MMVD 需心超確診', bidirectional: false, unlock_condition: null },

  // L3 DCM ↔ HCM: differential
  { id: 'CARDIO-E-012', source_node_id: 'CARDIO-L3-002', target_node_id: 'CARDIO-L3-003', relation_type: 'differential', weight: 0.8, description: 'DCM 與 HCM 需鑑別診斷', bidirectional: true, unlock_condition: null },

  // L4 ECG → L2 心律不整
  { id: 'CARDIO-E-013', source_node_id: 'CARDIO-L4-003', target_node_id: 'CARDIO-L2-003', relation_type: 'clinical_apply', weight: 0.7, description: 'ECG 為心律不整的主要診斷工具', bidirectional: false, unlock_condition: null },

  // L3 → L5: clinical_apply
  { id: 'CARDIO-E-014', source_node_id: 'CARDIO-L3-001', target_node_id: 'CARDIO-L5-001', relation_type: 'clinical_apply', weight: 1, description: 'MMVD 進展至 CHF 需要治療', bidirectional: false, unlock_condition: null },

  // 心絲蟲 → X 光
  { id: 'CARDIO-E-015', source_node_id: 'CARDIO-L3-005', target_node_id: 'CARDIO-L4-004', relation_type: 'clinical_apply', weight: 0.8, description: '心絲蟲需 X 光評估肺動脈變化', bidirectional: false, unlock_condition: null },

  // 補充 prerequisite 邊（L1 → L3）
  { id: 'CARDIO-E-016', source_node_id: 'CARDIO-L1-001', target_node_id: 'CARDIO-L3-004', relation_type: 'prerequisite', weight: 0.8, description: '心臟解剖是理解心包膜積液的前置知識', bidirectional: false, unlock_condition: null },
  { id: 'CARDIO-E-017', source_node_id: 'CARDIO-L1-003', target_node_id: 'CARDIO-L3-005', relation_type: 'prerequisite', weight: 0.8, description: '心絲蟲影響血流動力學', bidirectional: false, unlock_condition: null },

  // 補充 clinical_apply 邊（L3 → L4）
  { id: 'CARDIO-E-018', source_node_id: 'CARDIO-L3-002', target_node_id: 'CARDIO-L4-002', relation_type: 'clinical_apply', weight: 0.9, description: 'DCM 需心超確診（FS、LVIDDN）', bidirectional: false, unlock_condition: null },
  { id: 'CARDIO-E-019', source_node_id: 'CARDIO-L3-003', target_node_id: 'CARDIO-L4-002', relation_type: 'clinical_apply', weight: 0.9, description: 'HCM 需心超確診（LVPWd、IVSd）', bidirectional: false, unlock_condition: null },
  { id: 'CARDIO-E-020', source_node_id: 'CARDIO-L3-005', target_node_id: 'CARDIO-L4-001', relation_type: 'clinical_apply', weight: 0.8, description: '心絲蟲聽診可聞肺動脈區分裂 S2', bidirectional: false, unlock_condition: null },

  // 補充 clinical_apply 邊（L2 → L5, L3 → L5）
  { id: 'CARDIO-E-021', source_node_id: 'CARDIO-L2-003', target_node_id: 'CARDIO-L5-002', relation_type: 'clinical_apply', weight: 0.9, description: '心律不整機轉是抗心律不整藥物的理論基礎', bidirectional: false, unlock_condition: null },
  { id: 'CARDIO-E-022', source_node_id: 'CARDIO-L3-004', target_node_id: 'CARDIO-L5-003', relation_type: 'clinical_apply', weight: 0.9, description: '心包膜積液需心包膜穿刺術治療', bidirectional: false, unlock_condition: null },

  // ─── Phase 2A 擴展邊 ───
  // L2-004 → L3-006: clinical_apply（先天心病機轉 → 先天心病）
  { id: 'CARDIO-E-023', source_node_id: 'CARDIO-L2-004', target_node_id: 'CARDIO-L3-006', relation_type: 'clinical_apply', weight: 1, description: '先天性心臟發育異常機轉直接導致 PDA/PS/SAS', bidirectional: false, unlock_condition: null },
  // L1-001 → L2-004: builds_on（心臟解剖 → 先天心病機轉）
  { id: 'CARDIO-E-024', source_node_id: 'CARDIO-L1-001', target_node_id: 'CARDIO-L2-004', relation_type: 'builds_on', weight: 0.9, description: '心臟解剖是先天心病機轉的基礎', bidirectional: false, unlock_condition: null },

  // L2-003 → L3-007: clinical_apply（心律不整機轉 → 心律不整各論）
  { id: 'CARDIO-E-025', source_node_id: 'CARDIO-L2-003', target_node_id: 'CARDIO-L3-007', relation_type: 'clinical_apply', weight: 1, description: '心律不整機轉是臨床心律不整的理論基礎', bidirectional: false, unlock_condition: null },
  // L3-007 → L5-002: clinical_apply（心律不整 → 抗心律不整藥物）
  { id: 'CARDIO-E-026', source_node_id: 'CARDIO-L3-007', target_node_id: 'CARDIO-L5-002', relation_type: 'clinical_apply', weight: 1, description: '心律不整需抗心律不整藥物治療', bidirectional: false, unlock_condition: null },
  // L3-007 → L4-003: clinical_apply（心律不整 → ECG）
  { id: 'CARDIO-E-027', source_node_id: 'CARDIO-L3-007', target_node_id: 'CARDIO-L4-003', relation_type: 'clinical_apply', weight: 1, description: '心律不整以 ECG 為主要診斷工具', bidirectional: false, unlock_condition: null },

  // L3-006 → L4-002: clinical_apply（先天心病 → 心臟超音波）
  { id: 'CARDIO-E-028', source_node_id: 'CARDIO-L3-006', target_node_id: 'CARDIO-L4-002', relation_type: 'clinical_apply', weight: 0.9, description: '先天心病需心超確診與評估嚴重度', bidirectional: false, unlock_condition: null },
  // L3-006 → L4-001: clinical_apply（先天心病 → 聽診）
  { id: 'CARDIO-E-029', source_node_id: 'CARDIO-L3-006', target_node_id: 'CARDIO-L4-001', relation_type: 'clinical_apply', weight: 0.9, description: 'PDA/PS/SAS 各有特徵性雜音', bidirectional: false, unlock_condition: null },

  // L3-008 → L4-002: clinical_apply（心內膜炎 → 心超）
  { id: 'CARDIO-E-030', source_node_id: 'CARDIO-L3-008', target_node_id: 'CARDIO-L4-002', relation_type: 'clinical_apply', weight: 0.9, description: '心超觀察贅生物（vegetation）是心內膜炎關鍵', bidirectional: false, unlock_condition: null },

  // L3-009 → L4-002: clinical_apply（肺高壓 → 心超）
  { id: 'CARDIO-E-031', source_node_id: 'CARDIO-L3-009', target_node_id: 'CARDIO-L4-002', relation_type: 'clinical_apply', weight: 0.9, description: '心超評估三尖瓣逆流速度估算肺動脈壓', bidirectional: false, unlock_condition: null },
  // L3-009 → L4-004: clinical_apply（肺高壓 → 胸 X 光）
  { id: 'CARDIO-E-032', source_node_id: 'CARDIO-L3-009', target_node_id: 'CARDIO-L4-004', relation_type: 'clinical_apply', weight: 0.8, description: '胸 X 光評估肺動脈擴大與右心擴大', bidirectional: false, unlock_condition: null },
  // L3-005 → L3-009: complication（心絲蟲 → 肺高壓）
  { id: 'CARDIO-E-033', source_node_id: 'CARDIO-L3-005', target_node_id: 'CARDIO-L3-009', relation_type: 'complication', weight: 0.9, description: '心絲蟲是犬肺高壓最常見原因', bidirectional: false, unlock_condition: null },

  // L3-003 → L3-010: complication（HCM → ATE）
  { id: 'CARDIO-E-034', source_node_id: 'CARDIO-L3-003', target_node_id: 'CARDIO-L3-010', relation_type: 'complication', weight: 1, description: 'HCM 是貓 ATE 最常見基礎心臟病', bidirectional: false, unlock_condition: null },
  // L3-010 → L4-002: clinical_apply（ATE → 心超）
  { id: 'CARDIO-E-035', source_node_id: 'CARDIO-L3-010', target_node_id: 'CARDIO-L4-002', relation_type: 'clinical_apply', weight: 0.8, description: 'ATE 需心超評估基礎心臟病', bidirectional: false, unlock_condition: null },

  // L3 新節點 → L5-001: clinical_apply（新疾病 → CHF 治療）
  { id: 'CARDIO-E-036', source_node_id: 'CARDIO-L3-006', target_node_id: 'CARDIO-L5-001', relation_type: 'clinical_apply', weight: 0.7, description: '先天心病可進展至 CHF', bidirectional: false, unlock_condition: null },
  { id: 'CARDIO-E-037', source_node_id: 'CARDIO-L3-009', target_node_id: 'CARDIO-L5-001', relation_type: 'clinical_apply', weight: 0.8, description: '肺高壓可導致右心衰竭', bidirectional: false, unlock_condition: null },

  // L3 → L5-004: clinical_apply（各疾病 → 分期與長期管理）
  { id: 'CARDIO-E-038', source_node_id: 'CARDIO-L3-001', target_node_id: 'CARDIO-L5-004', relation_type: 'clinical_apply', weight: 1, description: 'MMVD ACVIM 分期是長期管理基礎', bidirectional: false, unlock_condition: null },
  { id: 'CARDIO-E-039', source_node_id: 'CARDIO-L3-002', target_node_id: 'CARDIO-L5-004', relation_type: 'clinical_apply', weight: 0.9, description: 'DCM 需長期追蹤與藥物調整', bidirectional: false, unlock_condition: null },
  { id: 'CARDIO-E-040', source_node_id: 'CARDIO-L3-003', target_node_id: 'CARDIO-L5-004', relation_type: 'clinical_apply', weight: 0.9, description: 'HCM 需長期監控與抗血栓預防', bidirectional: false, unlock_condition: null },

  // ─── 審計修復：L3 缺少 prerequisite 邊 ───
  // CARDIO-L3-008 (感染性心內膜炎) 需要 L1/L2 prerequisite
  { id: 'CARDIO-E-041', source_node_id: 'CARDIO-L1-001', target_node_id: 'CARDIO-L3-008', relation_type: 'prerequisite', weight: 0.8, description: '心臟瓣膜解剖是理解感染性心內膜炎的前置知識', bidirectional: false, unlock_condition: null },
  // CARDIO-L3-009 (肺動脈高壓) 需要 L1/L2 prerequisite
  { id: 'CARDIO-E-042', source_node_id: 'CARDIO-L1-003', target_node_id: 'CARDIO-L3-009', relation_type: 'prerequisite', weight: 0.8, description: '血流動力學是理解肺動脈高壓的前置知識', bidirectional: false, unlock_condition: null },
  // CARDIO-L3-010 (貓 ATE) 需要 L1/L2 prerequisite
  { id: 'CARDIO-E-043', source_node_id: 'CARDIO-L1-003', target_node_id: 'CARDIO-L3-010', relation_type: 'prerequisite', weight: 0.8, description: '血流動力學是理解動脈血栓栓塞的前置知識', bidirectional: false, unlock_condition: null },

  // ─── 疾病間臨床關聯邊 ───
  // DCM → 心律不整: complication
  { id: 'CARDIO-E-044', source_node_id: 'CARDIO-L3-002', target_node_id: 'CARDIO-L3-007', relation_type: 'complication', weight: 0.9, description: '擴張型心肌病常併發心房顫動等心律不整', bidirectional: false, unlock_condition: null },
  // HCM → 心律不整: complication
  { id: 'CARDIO-E-045', source_node_id: 'CARDIO-L3-003', target_node_id: 'CARDIO-L3-007', relation_type: 'complication', weight: 0.7, description: '肥厚型心肌病可誘發心室性心律不整', bidirectional: false, unlock_condition: null },
  // MMVD → 心內膜炎: complication
  { id: 'CARDIO-E-046', source_node_id: 'CARDIO-L3-001', target_node_id: 'CARDIO-L3-008', relation_type: 'complication', weight: 0.6, description: '退化瓣膜是感染性心內膜炎的危險因子', bidirectional: false, unlock_condition: null },
  // 心絲蟲 → 心律不整: complication
  { id: 'CARDIO-E-047', source_node_id: 'CARDIO-L3-005', target_node_id: 'CARDIO-L3-007', relation_type: 'complication', weight: 0.7, description: '心絲蟲感染可導致繼發性心律不整', bidirectional: false, unlock_condition: null },
  // 肺動脈高壓 → 心律不整: complication
  { id: 'CARDIO-E-048', source_node_id: 'CARDIO-L3-009', target_node_id: 'CARDIO-L3-007', relation_type: 'complication', weight: 0.8, description: '慢性肺動脈高壓導致右心衰竭與心律不整', bidirectional: false, unlock_condition: null },
  // DCM → CHF 治療: clinical_apply
  { id: 'CARDIO-E-049', source_node_id: 'CARDIO-L3-002', target_node_id: 'CARDIO-L5-001', relation_type: 'clinical_apply', weight: 0.9, description: '擴張型心肌病最終需要心衰竭治療', bidirectional: false, unlock_condition: null },

  // ─── Phase 3: 審計缺失邊補齊 ───
  { id: 'CARDIO-E-050', source_node_id: 'CARDIO-L3-004', target_node_id: 'CARDIO-L4-002', relation_type: 'clinical_apply', weight: 1, description: '心包膜積液需心臟超音波確診（偵測積液量、心包填塞徵象）並引導心包穿刺術', bidirectional: false, unlock_condition: null },

  // ─── Medium/Low fixes: 鑑別與併發邊補齊 ───
  // 心律不整 ↔ MMVD: differential（老年犬暈厥需鑑別心律不整性 vs 瓣膜性心衰竭）
  { id: 'CARDIO-E-051', source_node_id: 'CARDIO-L3-007', target_node_id: 'CARDIO-L3-001', relation_type: 'differential', weight: 0.7, description: '老年犬暈厥需鑑別心律不整與瓣膜性心衰竭——兩者均可導致暈厥但機轉與處置不同', bidirectional: true, unlock_condition: null },
  // 肺高壓 ← 心絲蟲: complication（心絲蟲導致肺高壓——已有 CARDIO-E-033 但此處加上反向說明）
  { id: 'CARDIO-E-052', source_node_id: 'CARDIO-L3-009', target_node_id: 'CARDIO-L3-005', relation_type: 'complication', weight: 0.8, description: '肺高壓患犬需排查心絲蟲感染作為根本原因', bidirectional: false, unlock_condition: null },

  // ─── 補齊 L3 prerequisite 邊（每個 L3 疾病至少 1 條 prerequisite 連至 L1/L2）───
  // CARDIO-L3-001 (MMVD) ← L2-001 (瓣膜退化機轉)
  { id: 'CARDIO-E-053', source_node_id: 'CARDIO-L2-001', target_node_id: 'CARDIO-L3-001', relation_type: 'prerequisite', weight: 3, description: '瓣膜退化機轉是理解 MMVD 黏液瘤性退化的必要前置知識', bidirectional: false, unlock_condition: null },
  // CARDIO-L3-002 (DCM) ← L2-002 (心肌重塑機轉)
  { id: 'CARDIO-E-054', source_node_id: 'CARDIO-L2-002', target_node_id: 'CARDIO-L3-002', relation_type: 'prerequisite', weight: 3, description: '心肌重塑機轉是理解擴張型心肌病心室擴大與收縮功能下降的前置知識', bidirectional: false, unlock_condition: null },
  // CARDIO-L3-003 (HCM) ← L1-003 (心臟血流動力學)
  { id: 'CARDIO-E-055', source_node_id: 'CARDIO-L1-003', target_node_id: 'CARDIO-L3-003', relation_type: 'prerequisite', weight: 3, description: '心臟血流動力學是理解 HCM 舒張功能障礙與流出道阻塞的前置知識', bidirectional: false, unlock_condition: null },
  // CARDIO-L3-006 (先天性心臟病) ← L1-001 (心臟解剖學)
  { id: 'CARDIO-E-056', source_node_id: 'CARDIO-L1-001', target_node_id: 'CARDIO-L3-006', relation_type: 'prerequisite', weight: 3, description: '心臟解剖學是理解先天性心臟病（PDA/PS/SAS）結構異常的前置知識', bidirectional: false, unlock_condition: null },
  // CARDIO-L3-007 (心律不整各論) ← L1-002 (心臟電生理學)
  { id: 'CARDIO-E-057', source_node_id: 'CARDIO-L1-002', target_node_id: 'CARDIO-L3-007', relation_type: 'prerequisite', weight: 3, description: '心臟電生理學是理解臨床心律不整（SVT/VT/AF/SSS）的前置知識', bidirectional: false, unlock_condition: null },
];
