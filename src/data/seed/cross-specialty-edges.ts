import type { KnowledgeEdge } from '@/types/knowledge';

/**
 * 跨專科邊關聯
 *
 * 由 10 位獸醫學教授審查後定義的跨專科知識連結。
 * ID 格式：CROSS-{來源專科}-{目標專科}-{序號}
 */
export const CROSS_SPECIALTY_EDGES: KnowledgeEdge[] = [
  // ─── CARDIO ↔ IM（心腎症候群、共病） ───
  {
    id: 'CROSS-CARDIO-IM-001',
    source_node_id: 'CARDIO-L3-001', // MMVD
    target_node_id: 'IM-L3-004',     // CKD
    relation_type: 'complication',
    weight: 0.9,
    description: '心腎症候群：MMVD 治療（利尿劑、ACEI）可加速腎功能惡化',
    bidirectional: true,
    unlock_condition: null,
  },
  {
    id: 'CROSS-CARDIO-IM-002',
    source_node_id: 'CARDIO-L5-001', // CHF 治療
    target_node_id: 'IM-L5-001',     // CKD 管理
    relation_type: 'drug_related',
    weight: 0.8,
    description: 'ACEI/利尿劑同時影響心臟與腎臟，需平衡用藥',
    bidirectional: true,
    unlock_condition: null,
  },
  {
    id: 'CROSS-CARDIO-IM-003',
    source_node_id: 'IM-L3-003',     // 貓甲亢
    target_node_id: 'CARDIO-L3-003', // HCM
    relation_type: 'cross_specialty',
    weight: 0.9,
    description: '貓甲亢可導致繼發性心肌肥厚，治療甲亢後可能改善',
    bidirectional: false,
    unlock_condition: null,
  },
  {
    id: 'CROSS-CARDIO-IM-004',
    source_node_id: 'CARDIO-L2-003', // 心律不整機轉
    target_node_id: 'IM-L3-005',     // IMHA
    relation_type: 'complication',
    weight: 0.7,
    description: 'IMHA 可繼發心律不整（血液動力學不穩定）',
    bidirectional: false,
    unlock_condition: null,
  },

  // ─── IM ↔ ECC（急性併發症） ───
  {
    id: 'CROSS-IM-ECC-001',
    source_node_id: 'IM-L3-006',     // 糖尿病
    target_node_id: 'ECC-L3-002',    // DKA
    relation_type: 'complication',
    weight: 1.0,
    description: '未控制糖尿病可進展為糖尿病酮酸血症（DKA）',
    bidirectional: false,
    unlock_condition: null,
  },
  {
    id: 'CROSS-IM-ECC-002',
    source_node_id: 'IM-L3-005',     // IMHA
    target_node_id: 'ECC-L5-003',    // 輸血醫學
    relation_type: 'clinical_apply',
    weight: 0.8,
    description: 'IMHA 嚴重貧血可能需要緊急輸血',
    bidirectional: false,
    unlock_condition: null,
  },

  // ─── IM ↔ DERM（內科共病的皮膚表現） ───
  {
    id: 'CROSS-IM-DERM-001',
    source_node_id: 'IM-L3-001',     // Cushing's
    target_node_id: 'DERM-L3-005',   // 膿皮症
    relation_type: 'complication',
    weight: 0.8,
    description: 'Cushing 免疫抑制導致復發性膿皮症',
    bidirectional: false,
    unlock_condition: null,
  },
  {
    id: 'CROSS-IM-DERM-002',
    source_node_id: 'IM-L3-001',     // Cushing's
    target_node_id: 'DERM-L3-004',   // 蠕形蟎
    relation_type: 'complication',
    weight: 0.8,
    description: 'Cushing 免疫抑制導致成年犬蠕形蟎症復發',
    bidirectional: false,
    unlock_condition: null,
  },
  {
    id: 'CROSS-IM-DERM-003',
    source_node_id: 'IM-L3-002',     // 甲低
    target_node_id: 'DERM-L3-005',   // 膿皮症
    relation_type: 'cross_specialty',
    weight: 0.7,
    description: '甲低犬常有皮膚變化（脫毛、膿皮症、角質異常）',
    bidirectional: false,
    unlock_condition: null,
  },
  {
    id: 'CROSS-IM-DERM-004',
    source_node_id: 'IM-L5-003',     // 免疫抑制治療
    target_node_id: 'DERM-L5-003',   // 皮膚科免疫調節
    relation_type: 'drug_related',
    weight: 0.9,
    description: '共用藥物：prednisolone、cyclosporine、mycophenolate',
    bidirectional: true,
    unlock_condition: null,
  },

  // ─── NEURO ↔ CARDIO（鑑別診斷） ───
  {
    id: 'CROSS-NEURO-CARDIO-001',
    source_node_id: 'NEURO-L3-001',  // 癲癇
    target_node_id: 'CARDIO-L2-003', // 心律不整
    relation_type: 'differential',
    weight: 0.8,
    description: '暈厥 vs 癲癇：心因性暈厥需與癲癇鑑別',
    bidirectional: true,
    unlock_condition: null,
  },

  // ─── NEURO ↔ ECC（急性處置） ───
  {
    id: 'CROSS-NEURO-ECC-001',
    source_node_id: 'ECC-L3-006',    // 癲癇重積
    target_node_id: 'NEURO-L5-001',  // 抗癲癇藥
    relation_type: 'clinical_apply',
    weight: 1.0,
    description: '癲癇重積狀態需急診抗癲癇藥物處置',
    bidirectional: false,
    unlock_condition: null,
  },
  {
    id: 'CROSS-NEURO-ECC-002',
    source_node_id: 'ECC-L3-006',    // 癲癇重積
    target_node_id: 'NEURO-L3-001',  // 癲癇
    relation_type: 'complication',
    weight: 0.9,
    description: '癲癇重積是癲癇的急性嚴重併發症',
    bidirectional: false,
    unlock_condition: null,
  },

  // ─── NEURO ↔ SURG（脊椎手術） ───
  {
    id: 'CROSS-NEURO-SURG-001',
    source_node_id: 'NEURO-L3-002',  // IVDD
    target_node_id: 'SURG-L3-005',   // IVDD (外科)
    relation_type: 'same_system',
    weight: 1.0,
    description: 'IVDD 神經學評估與外科治療的連結',
    bidirectional: true,
    unlock_condition: null,
  },

  // ─── ONCO ↔ SURG（腫瘤手術） ───
  {
    id: 'CROSS-ONCO-SURG-001',
    source_node_id: 'ONCO-L3-002',   // MCT
    target_node_id: 'SURG-L5-001',   // 軟組織手術
    relation_type: 'clinical_apply',
    weight: 0.9,
    description: 'MCT 需外科切除（2-3 cm 切緣）',
    bidirectional: false,
    unlock_condition: null,
  },
  {
    id: 'CROSS-ONCO-SURG-002',
    source_node_id: 'ONCO-L3-004',   // HSA
    target_node_id: 'SURG-L3-002',   // 脾臟腫瘤
    relation_type: 'same_system',
    weight: 1.0,
    description: '脾臟 HSA 需脾臟切除術',
    bidirectional: true,
    unlock_condition: null,
  },
  {
    id: 'CROSS-ONCO-SURG-003',
    source_node_id: 'ONCO-L3-006',   // 乳腺腫瘤
    target_node_id: 'SURG-L5-001',   // 軟組織手術
    relation_type: 'clinical_apply',
    weight: 0.9,
    description: '乳腺腫瘤需乳腺切除手術',
    bidirectional: false,
    unlock_condition: null,
  },
  {
    id: 'CROSS-ONCO-SURG-004',
    source_node_id: 'ONCO-L3-003',   // OSA
    target_node_id: 'SURG-L5-002',   // 骨科手術
    relation_type: 'clinical_apply',
    weight: 0.8,
    description: '骨肉瘤可能需要截肢手術',
    bidirectional: false,
    unlock_condition: null,
  },

  // ─── ECC ↔ CARDIO（休克與心臟） ───
  {
    id: 'CROSS-ECC-CARDIO-001',
    source_node_id: 'ECC-L1-001',    // 休克
    target_node_id: 'CARDIO-L2-003', // 心律不整
    relation_type: 'cross_specialty',
    weight: 0.8,
    description: '休克可導致繼發性心律不整',
    bidirectional: false,
    unlock_condition: null,
  },
  {
    id: 'CROSS-ECC-CARDIO-002',
    source_node_id: 'ECC-L5-002',    // CPR
    target_node_id: 'CARDIO-L4-003', // ECG
    relation_type: 'clinical_apply',
    weight: 0.9,
    description: 'CPR 中需要心律監測（ECG）判斷可電擊心律',
    bidirectional: false,
    unlock_condition: null,
  },

  // ─── ECC ↔ SURG（急診手術） ───
  {
    id: 'CROSS-ECC-SURG-001',
    source_node_id: 'ECC-L4-001',    // 急診分診
    target_node_id: 'SURG-L3-001',   // GDV
    relation_type: 'clinical_apply',
    weight: 0.9,
    description: 'GDV 為急診分診中最需立即處理的外科急症',
    bidirectional: false,
    unlock_condition: null,
  },
  {
    id: 'CROSS-ECC-SURG-002',
    source_node_id: 'ECC-L4-001',    // 急診分診
    target_node_id: 'SURG-L3-009',   // 子宮蓄膿
    relation_type: 'clinical_apply',
    weight: 0.8,
    description: '子宮蓄膿（尤其閉鎖型）為急診外科常見病例',
    bidirectional: false,
    unlock_condition: null,
  },

  // ─── CPATH 共用 prerequisite ───
  {
    id: 'CROSS-CPATH-IM-001',
    source_node_id: 'CPATH-L4-001',  // CBC
    target_node_id: 'IM-L3-005',     // IMHA
    relation_type: 'prerequisite',
    weight: 1.0,
    description: '需會判讀 CBC 才能評估 IMHA（球形紅血球、再生性貧血）',
    bidirectional: false,
    unlock_condition: null,
  },
  {
    id: 'CROSS-CPATH-IM-002',
    source_node_id: 'CPATH-L4-002',  // 生化
    target_node_id: 'IM-L3-004',     // CKD
    relation_type: 'prerequisite',
    weight: 1.0,
    description: '需會判讀血清生化（BUN/Cre）才能評估 CKD 分期',
    bidirectional: false,
    unlock_condition: null,
  },
  {
    id: 'CROSS-CPATH-IM-003',
    source_node_id: 'CPATH-L4-001',  // CBC
    target_node_id: 'IM-L3-010',     // Ehrlichia/Babesia
    relation_type: 'prerequisite',
    weight: 0.9,
    description: '壁蝨媒介疾病以 CBC 異常（血小板減少、貧血）為主要發現',
    bidirectional: false,
    unlock_condition: null,
  },
  {
    id: 'CROSS-CPATH-ONCO-001',
    source_node_id: 'CPATH-L4-003',  // 細胞學
    target_node_id: 'ONCO-L4-001',   // 腫瘤細胞學
    relation_type: 'prerequisite',
    weight: 1.0,
    description: '細胞學基本原則是腫瘤細胞學的前置技能',
    bidirectional: false,
    unlock_condition: null,
  },
  {
    id: 'CROSS-CPATH-ECC-001',
    source_node_id: 'CPATH-L4-005',  // 血氣分析
    target_node_id: 'ECC-L1-003',    // 酸鹼平衡
    relation_type: 'prerequisite',
    weight: 1.0,
    description: '需會判讀血液氣體分析才能評估酸鹼異常',
    bidirectional: false,
    unlock_condition: null,
  },
  {
    id: 'CROSS-CPATH-ECC-002',
    source_node_id: 'CPATH-L4-004',  // 凝血功能
    target_node_id: 'ECC-L2-001',    // SIRS/敗血症
    relation_type: 'prerequisite',
    weight: 0.8,
    description: '凝血功能檢查對評估 DIC/敗血症至關重要',
    bidirectional: false,
    unlock_condition: null,
  },
  {
    id: 'CROSS-CPATH-DERM-001',
    source_node_id: 'CPATH-L4-003',  // 細胞學
    target_node_id: 'DERM-L4-003',   // 皮膚細胞學
    relation_type: 'prerequisite',
    weight: 0.9,
    description: '細胞學基本原則是皮膚細胞學的前置技能',
    bidirectional: false,
    unlock_condition: null,
  },
  {
    id: 'CROSS-CPATH-SURG-001',
    source_node_id: 'CPATH-L4-002',  // 生化
    target_node_id: 'SURG-L3-009',   // 子宮蓄膿
    relation_type: 'prerequisite',
    weight: 0.7,
    description: '子宮蓄膿術前需評估生化（腎功能、肝功能、白蛋白）',
    bidirectional: false,
    unlock_condition: null,
  },

  // ─── 共用藥物跨科邊 ───
  {
    id: 'CROSS-DRUG-PRED-001',
    source_node_id: 'IM-L5-003',     // 免疫抑制治療
    target_node_id: 'NEURO-L3-003',  // GME
    relation_type: 'drug_related',
    weight: 0.8,
    description: 'Prednisolone/免疫抑制劑用於 GME 治療',
    bidirectional: false,
    unlock_condition: null,
  },
  {
    id: 'CROSS-DRUG-PRED-002',
    source_node_id: 'IM-L5-003',     // 免疫抑制治療
    target_node_id: 'ONCO-L5-001',   // 化療
    relation_type: 'drug_related',
    weight: 0.7,
    description: 'Prednisone 為淋巴瘤 CHOP 方案的組成藥物',
    bidirectional: false,
    unlock_condition: null,
  },
  {
    id: 'CROSS-DRUG-GAB-001',
    source_node_id: 'NEURO-L5-001',  // 抗癲癇藥
    target_node_id: 'ECC-L5-004',    // 急診止痛
    relation_type: 'drug_related',
    weight: 0.7,
    description: 'Gabapentin 跨科使用：抗癲癇 + 神經痛止痛',
    bidirectional: true,
    unlock_condition: null,
  },
  {
    id: 'CROSS-DRUG-GAB-002',
    source_node_id: 'NEURO-L5-001',  // 抗癲癇藥
    target_node_id: 'ONCO-L5-003',   // 腫瘤疼痛管理
    relation_type: 'drug_related',
    weight: 0.7,
    description: 'Gabapentin 用於腫瘤性神經痛管理',
    bidirectional: false,
    unlock_condition: null,
  },
];
