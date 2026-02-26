import type { KnowledgeEdge } from '@/types/knowledge';

export const NEURO_EDGES: KnowledgeEdge[] = [
  // L0 → L1: prerequisite
  { id: 'NEURO-E-001', source_node_id: 'NEURO-L0-001', target_node_id: 'NEURO-L1-001', relation_type: 'prerequisite', weight: 1, description: '學科總覽為神經解剖的前置', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-002', source_node_id: 'NEURO-L0-001', target_node_id: 'NEURO-L1-002', relation_type: 'prerequisite', weight: 1, description: null, bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-003', source_node_id: 'NEURO-L0-001', target_node_id: 'NEURO-L1-003', relation_type: 'prerequisite', weight: 0.8, description: null, bidirectional: false, unlock_condition: null },

  // L1 → L2: builds_on
  { id: 'NEURO-E-004', source_node_id: 'NEURO-L1-002', target_node_id: 'NEURO-L2-001', relation_type: 'builds_on', weight: 0.9, description: '神經生理學是癲癇發作機轉的基礎', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-005', source_node_id: 'NEURO-L1-001', target_node_id: 'NEURO-L2-002', relation_type: 'builds_on', weight: 0.9, description: '神經解剖是脊髓壓迫機轉的基礎', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-006', source_node_id: 'NEURO-L1-002', target_node_id: 'NEURO-L2-003', relation_type: 'builds_on', weight: 0.8, description: '神經生理學是 NMJ 病理的基礎', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-007', source_node_id: 'NEURO-L2-002', target_node_id: 'NEURO-L2-004', relation_type: 'builds_on', weight: 0.9, description: '脊髓壓迫機轉是脊髓軟化的前置概念', bidirectional: false, unlock_condition: null },

  // L2 → L3: clinical_apply
  { id: 'NEURO-E-008', source_node_id: 'NEURO-L2-001', target_node_id: 'NEURO-L3-001', relation_type: 'clinical_apply', weight: 1, description: '癲癇發作機轉直接導致犬特發性癲癇', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-009', source_node_id: 'NEURO-L2-002', target_node_id: 'NEURO-L3-002', relation_type: 'clinical_apply', weight: 1, description: '脊髓壓迫機轉為 IVDD 的核心病理', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-010', source_node_id: 'NEURO-L2-004', target_node_id: 'NEURO-L3-002', relation_type: 'complication', weight: 0.7, description: '脊髓軟化是 IVDD 最嚴重的併發症', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-011', source_node_id: 'NEURO-L1-001', target_node_id: 'NEURO-L3-004', relation_type: 'builds_on', weight: 0.8, description: '前庭系統解剖為前庭疾病的基礎', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-012', source_node_id: 'NEURO-L2-003', target_node_id: 'NEURO-L3-005', relation_type: 'clinical_apply', weight: 0.8, description: 'NMJ 病理與多發性神經根炎相關', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-013', source_node_id: 'NEURO-L2-003', target_node_id: 'NEURO-L3-006', relation_type: 'clinical_apply', weight: 1, description: 'NMJ 病理直接導致重症肌無力', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-014', source_node_id: 'NEURO-L2-002', target_node_id: 'NEURO-L3-007', relation_type: 'clinical_apply', weight: 0.7, description: '脊髓病變機轉與退化性脊髓病變相關', bidirectional: false, unlock_condition: null },

  // L3 → L4: clinical_apply (疾病指向診斷)
  { id: 'NEURO-E-015', source_node_id: 'NEURO-L3-001', target_node_id: 'NEURO-L4-001', relation_type: 'clinical_apply', weight: 0.9, description: '癲癇診斷需神經學檢查', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-016', source_node_id: 'NEURO-L3-002', target_node_id: 'NEURO-L4-001', relation_type: 'clinical_apply', weight: 1, description: 'IVDD 診斷需神經學檢查定位', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-017', source_node_id: 'NEURO-L3-003', target_node_id: 'NEURO-L4-002', relation_type: 'clinical_apply', weight: 0.9, description: 'GME 診斷需 CSF 分析', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-018', source_node_id: 'NEURO-L3-002', target_node_id: 'NEURO-L4-003', relation_type: 'clinical_apply', weight: 1, description: 'IVDD 確診需 MRI/CT', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-019', source_node_id: 'NEURO-L4-001', target_node_id: 'NEURO-L4-004', relation_type: 'builds_on', weight: 1, description: '神經學檢查是神經定位診斷的基礎', bidirectional: false, unlock_condition: null },

  // L3 → L5: clinical_apply (疾病指向治療)
  { id: 'NEURO-E-020', source_node_id: 'NEURO-L3-001', target_node_id: 'NEURO-L5-001', relation_type: 'clinical_apply', weight: 1, description: '犬特發性癲癇需抗癲癇藥物治療', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-021', source_node_id: 'NEURO-L3-002', target_node_id: 'NEURO-L5-002', relation_type: 'clinical_apply', weight: 0.9, description: 'IVDD 重度病例需脊椎手術', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-022', source_node_id: 'NEURO-L3-002', target_node_id: 'NEURO-L5-003', relation_type: 'clinical_apply', weight: 0.8, description: 'IVDD 術後需復健治療', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-023', source_node_id: 'NEURO-L3-007', target_node_id: 'NEURO-L5-003', relation_type: 'clinical_apply', weight: 0.8, description: 'DM 管理以復健為主', bidirectional: false, unlock_condition: null },

  // L3 ↔ L3: differential (鑑別比較)
  { id: 'NEURO-E-024', source_node_id: 'NEURO-L3-002', target_node_id: 'NEURO-L3-007', relation_type: 'differential', weight: 0.8, description: 'IVDD 與 DM 需鑑別診斷（均可導致後肢無力）', bidirectional: true, unlock_condition: null },
  { id: 'NEURO-E-025', source_node_id: 'NEURO-L3-005', target_node_id: 'NEURO-L3-006', relation_type: 'differential', weight: 0.7, description: '多發性神經根炎與重症肌無力需鑑別（均導致下運動神經元無力）', bidirectional: true, unlock_condition: null },

  // L1 CSF → L4 CSF: same_system
  { id: 'NEURO-E-026', source_node_id: 'NEURO-L1-003', target_node_id: 'NEURO-L4-002', relation_type: 'same_system', weight: 0.8, description: 'CSF 生理與 CSF 分析同系統', bidirectional: false, unlock_condition: null },

  // --- Audit fix: missing L1/L2 → L3 prerequisite edges ---
  { id: 'NEURO-E-027', source_node_id: 'NEURO-L1-003', target_node_id: 'NEURO-L3-003', relation_type: 'prerequisite', weight: 0.8, description: 'CSF 生理為 GME（腦脊髓液蛋白升高）的基礎概念', bidirectional: false, unlock_condition: null },

  // --- Audit fix: missing L3 → L4 clinical_apply edges ---
  { id: 'NEURO-E-028', source_node_id: 'NEURO-L3-004', target_node_id: 'NEURO-L4-001', relation_type: 'clinical_apply', weight: 0.9, description: '前庭疾病需神經學檢查區分中樞 vs 周邊性', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-029', source_node_id: 'NEURO-L3-005', target_node_id: 'NEURO-L4-001', relation_type: 'clinical_apply', weight: 0.8, description: '多發性神經根炎需神經學檢查評估下運動神經元徵象', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-030', source_node_id: 'NEURO-L3-006', target_node_id: 'NEURO-L4-001', relation_type: 'clinical_apply', weight: 0.8, description: '重症肌無力需神經學檢查（Tensilon test）輔助診斷', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-031', source_node_id: 'NEURO-L3-007', target_node_id: 'NEURO-L4-001', relation_type: 'clinical_apply', weight: 0.8, description: '退化性脊髓病變需神經學檢查排除可治療病因', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-032', source_node_id: 'NEURO-L3-004', target_node_id: 'NEURO-L4-003', relation_type: 'clinical_apply', weight: 0.7, description: '中樞性前庭疾病需 MRI 排除結構性病變', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-033', source_node_id: 'NEURO-L3-003', target_node_id: 'NEURO-L4-003', relation_type: 'clinical_apply', weight: 0.9, description: 'GME 需 MRI 評估腦部病灶分布', bidirectional: false, unlock_condition: null },

  // ─── Phase 2B 擴展邊 ───
  // L1 → L2-005: builds_on（神經解剖 → 顱內壓升高機轉）
  { id: 'NEURO-E-034', source_node_id: 'NEURO-L1-001', target_node_id: 'NEURO-L2-005', relation_type: 'builds_on', weight: 0.9, description: '神經解剖（Monro-Kellie 假說）是 ICP 升高的基礎', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-035', source_node_id: 'NEURO-L1-003', target_node_id: 'NEURO-L2-005', relation_type: 'builds_on', weight: 0.8, description: 'CSF 動力學與 ICP 調節密切相關', bidirectional: false, unlock_condition: null },

  // L2-005 → L3 新節點: clinical_apply
  { id: 'NEURO-E-036', source_node_id: 'NEURO-L2-005', target_node_id: 'NEURO-L3-008', relation_type: 'clinical_apply', weight: 1, description: '顱內腫瘤導致 ICP 升高', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-037', source_node_id: 'NEURO-L2-005', target_node_id: 'NEURO-L3-012', relation_type: 'clinical_apply', weight: 0.9, description: '水腦症與 CSF 動力學異常及 ICP 升高相關', bidirectional: false, unlock_condition: null },

  // L2-002 → L3 新節點: clinical_apply（脊髓壓迫 → 脊髓相關疾病）
  { id: 'NEURO-E-038', source_node_id: 'NEURO-L2-002', target_node_id: 'NEURO-L3-009', relation_type: 'clinical_apply', weight: 0.9, description: '脊髓壓迫是 Wobbler 的核心病理', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-039', source_node_id: 'NEURO-L2-002', target_node_id: 'NEURO-L3-010', relation_type: 'clinical_apply', weight: 0.7, description: '脊髓缺血性損傷是 FCE 的核心機轉', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-040', source_node_id: 'NEURO-L2-002', target_node_id: 'NEURO-L3-013', relation_type: 'clinical_apply', weight: 0.8, description: '腰薦椎壓迫為 Cauda equina 的病理', bidirectional: false, unlock_condition: null },

  // L3 新節點 → L4: clinical_apply（診斷）
  { id: 'NEURO-E-041', source_node_id: 'NEURO-L3-008', target_node_id: 'NEURO-L4-003', relation_type: 'clinical_apply', weight: 1, description: '腦腫瘤確診需 MRI', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-042', source_node_id: 'NEURO-L3-008', target_node_id: 'NEURO-L4-001', relation_type: 'clinical_apply', weight: 0.8, description: '腦腫瘤神經學檢查可定位前腦/後腦', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-043', source_node_id: 'NEURO-L3-009', target_node_id: 'NEURO-L4-003', relation_type: 'clinical_apply', weight: 1, description: 'Wobbler 確診需 MRI 評估脊髓壓迫', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-044', source_node_id: 'NEURO-L3-010', target_node_id: 'NEURO-L4-003', relation_type: 'clinical_apply', weight: 0.9, description: 'FCE 以 MRI 排除其他脊髓疾病', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-045', source_node_id: 'NEURO-L3-011', target_node_id: 'NEURO-L4-003', relation_type: 'clinical_apply', weight: 0.8, description: '椎間盤炎需 MRI/X 光評估', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-046', source_node_id: 'NEURO-L3-012', target_node_id: 'NEURO-L4-003', relation_type: 'clinical_apply', weight: 0.9, description: '水腦症以 MRI/超音波確診', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-047', source_node_id: 'NEURO-L3-013', target_node_id: 'NEURO-L4-003', relation_type: 'clinical_apply', weight: 0.9, description: '腰薦椎疾病需 MRI 評估神經壓迫', bidirectional: false, unlock_condition: null },

  // L3 新節點 → L5: clinical_apply（治療）
  { id: 'NEURO-E-048', source_node_id: 'NEURO-L3-008', target_node_id: 'NEURO-L5-001', relation_type: 'clinical_apply', weight: 0.7, description: '腦腫瘤可繼發癲癇需抗癲癇藥物', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-049', source_node_id: 'NEURO-L3-009', target_node_id: 'NEURO-L5-002', relation_type: 'clinical_apply', weight: 0.8, description: 'Wobbler 嚴重病例需脊椎手術', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-050', source_node_id: 'NEURO-L3-010', target_node_id: 'NEURO-L5-003', relation_type: 'clinical_apply', weight: 0.9, description: 'FCE 以復健為主要治療', bidirectional: false, unlock_condition: null },
  { id: 'NEURO-E-051', source_node_id: 'NEURO-L3-013', target_node_id: 'NEURO-L5-002', relation_type: 'clinical_apply', weight: 0.8, description: '腰薦椎疾病可能需手術減壓', bidirectional: false, unlock_condition: null },

  // L3 新節點之間: differential（鑑別）
  { id: 'NEURO-E-052', source_node_id: 'NEURO-L3-008', target_node_id: 'NEURO-L3-003', relation_type: 'differential', weight: 0.8, description: '腦腫瘤 vs GME 需鑑別（均為前腦多灶病變）', bidirectional: true, unlock_condition: null },
  { id: 'NEURO-E-053', source_node_id: 'NEURO-L3-009', target_node_id: 'NEURO-L3-002', relation_type: 'differential', weight: 0.8, description: 'Wobbler vs IVDD 需鑑別（均導致頸脊髓壓迫）', bidirectional: true, unlock_condition: null },
  { id: 'NEURO-E-054', source_node_id: 'NEURO-L3-010', target_node_id: 'NEURO-L3-002', relation_type: 'differential', weight: 0.9, description: 'FCE vs IVDD Hansen Type III 需鑑別（急性脊髓疾病）', bidirectional: true, unlock_condition: null },
  { id: 'NEURO-E-055', source_node_id: 'NEURO-L3-011', target_node_id: 'NEURO-L3-002', relation_type: 'differential', weight: 0.7, description: '椎間盤炎 vs IVDD 需鑑別（均可導致脊痛）', bidirectional: true, unlock_condition: null },
];
