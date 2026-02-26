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

  // ─── Phase 3 DDx 強化：專家審查後新增跨科邊 (20 條) ───

  // DERM ↔ NEURO（慢性外耳炎 → 前庭症候群）
  {
    id: 'CROSS-DERM-NEURO-001',
    source_node_id: 'DERM-L3-007',   // 外耳炎
    target_node_id: 'NEURO-L3-004',  // 前庭症候群
    relation_type: 'complication',
    weight: 0.8,
    description: '慢性外耳炎可進展為中耳炎/內耳炎，導致周邊前庭症候群',
    bidirectional: false,
    unlock_condition: null,
  },

  // ONCO ↔ CARDIO（HSA → 心包積液）
  {
    id: 'CROSS-ONCO-CARDIO-001',
    source_node_id: 'ONCO-L3-004',   // HSA
    target_node_id: 'CARDIO-L3-004', // 心包積液
    relation_type: 'complication',
    weight: 0.9,
    description: '右心耳 HSA 為犬心包積液最常見的腫瘤性病因（~60%）',
    bidirectional: true,
    unlock_condition: null,
  },

  // ONCO ↔ ECC（HSA 血腹 → 急診穩定）
  {
    id: 'CROSS-ONCO-ECC-001',
    source_node_id: 'ONCO-L3-004',   // HSA
    target_node_id: 'ECC-L1-001',    // 休克
    relation_type: 'clinical_apply',
    weight: 0.9,
    description: 'HSA 腹腔破裂導致急性血腹，需急診休克復甦',
    bidirectional: false,
    unlock_condition: null,
  },

  // IM ↔ ECC（Addison 危象 → 急診處置）
  {
    id: 'CROSS-IM-ECC-003',
    source_node_id: 'IM-L3-011',     // Addison's
    target_node_id: 'ECC-L1-001',    // 休克
    relation_type: 'complication',
    weight: 0.9,
    description: 'Addison 危象表現為低血容量性休克（低鈉高鉀），需急診輸液與糖皮質素',
    bidirectional: false,
    unlock_condition: null,
  },

  // IM ↔ ONCO（IMHA 繼發於淋巴瘤/HSA）
  {
    id: 'CROSS-IM-ONCO-001',
    source_node_id: 'IM-L3-005',     // IMHA
    target_node_id: 'ONCO-L3-001',   // 淋巴瘤
    relation_type: 'complication',
    weight: 0.7,
    description: '淋巴瘤/HSA 可觸發繼發性 IMHA，需排查腫瘤病因',
    bidirectional: true,
    unlock_condition: null,
  },

  // NEURO ↔ ONCO（focal MUO vs 腦瘤）
  {
    id: 'CROSS-NEURO-ONCO-001',
    source_node_id: 'NEURO-L3-003',  // GME/MUO
    target_node_id: 'ONCO-L2-001',   // 腫瘤生物學
    relation_type: 'differential',
    weight: 0.8,
    description: '局灶型 MUO 在 MRI 上可模擬腦腫瘤，需 CSF 與進階影像鑑別',
    bidirectional: true,
    unlock_condition: null,
  },

  // NEURO ↔ IM（甲低神經病 → 前庭/顏面神經）
  {
    id: 'CROSS-NEURO-IM-001',
    source_node_id: 'NEURO-L3-004',  // 前庭症候群
    target_node_id: 'IM-L3-002',     // 甲低
    relation_type: 'differential',
    weight: 0.7,
    description: '甲低可導致前庭神經炎/顏面神經麻痺，需列入周邊前庭 DDx',
    bidirectional: true,
    unlock_condition: null,
  },

  // NEURO ↔ IM（MG → 巨食道）
  {
    id: 'CROSS-NEURO-IM-002',
    source_node_id: 'NEURO-L3-006',  // MG
    target_node_id: 'IM-L3-007',     // CE/IBD (GI tract)
    relation_type: 'complication',
    weight: 0.8,
    description: 'MG 局灶型常導致巨食道症，吸入性肺炎為主要死因',
    bidirectional: false,
    unlock_condition: null,
  },

  // SURG ↔ ECC（GDV 術後心律不整）
  {
    id: 'CROSS-SURG-CARDIO-001',
    source_node_id: 'SURG-L3-001',   // GDV
    target_node_id: 'CARDIO-L2-003', // 心律不整
    relation_type: 'complication',
    weight: 0.9,
    description: 'GDV 術後 24-72 小時常發生心室早期收縮（VPCs），需 Lidocaine 處置',
    bidirectional: false,
    unlock_condition: null,
  },

  // SURG ↔ ECC（子宮蓄膿 → 敗血症）
  {
    id: 'CROSS-SURG-ECC-003',
    source_node_id: 'SURG-L3-009',   // 子宮蓄膿
    target_node_id: 'ECC-L2-001',    // SIRS/敗血症
    relation_type: 'complication',
    weight: 0.9,
    description: '閉鎖型子宮蓄膿可導致敗血症/SIRS，E. coli 內毒素損傷腎臟',
    bidirectional: false,
    unlock_condition: null,
  },

  // ONCO ↔ SURG（OSA → 病理性骨折）
  {
    id: 'CROSS-ONCO-SURG-005',
    source_node_id: 'ONCO-L3-003',   // OSA
    target_node_id: 'SURG-L3-007',   // 骨折
    relation_type: 'differential',
    weight: 0.8,
    description: '骨肉瘤可導致病理性骨折，成年大型犬長骨骨折需排除腫瘤',
    bidirectional: true,
    unlock_condition: null,
  },

  // ONCO ↔ CPATH（淋巴瘤 → 流式細胞術免疫分型）
  {
    id: 'CROSS-ONCO-CPATH-002',
    source_node_id: 'ONCO-L3-001',   // 淋巴瘤
    target_node_id: 'CPATH-L4-003',  // 細胞學
    relation_type: 'clinical_apply',
    weight: 0.9,
    description: '淋巴瘤需流式細胞術或 IHC 進行 B/T cell 免疫分型以決定化療方案',
    bidirectional: false,
    unlock_condition: null,
  },

  // IM ↔ CPATH（壁蝨病 → CBC 血小板減少）
  {
    id: 'CROSS-IM-CPATH-001',
    source_node_id: 'IM-L3-010',     // Ehrlichia/Babesia
    target_node_id: 'CPATH-L4-001',  // CBC
    relation_type: 'clinical_apply',
    weight: 0.8,
    description: '壁蝨媒介疾病常以 CBC 異常首先被發現（血小板減少、全血球減少）',
    bidirectional: true,
    unlock_condition: null,
  },

  // IM ↔ IM (Cushing → DM co-morbidity) — internal IM cross-disease edge
  {
    id: 'CROSS-IM-IM-001',
    source_node_id: 'IM-L3-001',     // Cushing's
    target_node_id: 'IM-L3-006',     // DM
    relation_type: 'complication',
    weight: 0.8,
    description: 'Cushing 胰島素拮抗導致繼發性糖尿病（~10% 共病率），需同時監控兩病',
    bidirectional: true,
    unlock_condition: null,
  },

  // IM ↔ IM (Pancreatitis → DM trigger)
  {
    id: 'CROSS-IM-IM-002',
    source_node_id: 'IM-L3-008',     // 胰臟炎
    target_node_id: 'IM-L3-006',     // DM
    relation_type: 'complication',
    weight: 0.8,
    description: '慢性胰臟炎破壞胰島β細胞可導致糖尿病，犬尤其常見',
    bidirectional: false,
    unlock_condition: null,
  },

  // CARDIO ↔ IM（心絲蟲 → 腎絲球病）
  {
    id: 'CROSS-CARDIO-IM-005',
    source_node_id: 'CARDIO-L3-005', // 心絲蟲
    target_node_id: 'IM-L3-004',     // CKD
    relation_type: 'complication',
    weight: 0.7,
    description: '心絲蟲免疫複合物可導致腎絲球腎炎，進展為蛋白尿與 CKD',
    bidirectional: false,
    unlock_condition: null,
  },

  // ECC ↔ IM（熱射病 → DIC）
  {
    id: 'CROSS-ECC-IM-001',
    source_node_id: 'ECC-L3-003',    // 熱射病
    target_node_id: 'ECC-L2-001',    // SIRS/DIC
    relation_type: 'complication',
    weight: 0.9,
    description: '重度熱射病常繼發 DIC，死亡率顯著上升',
    bidirectional: false,
    unlock_condition: null,
  },

  // DERM ↔ CPATH（皮膚膿皮症 → 細胞學判讀）
  {
    id: 'CROSS-DERM-CPATH-002',
    source_node_id: 'DERM-L3-005',   // 膿皮症
    target_node_id: 'CPATH-L4-012',  // 皮膚細胞學與刮搔判讀
    relation_type: 'clinical_apply',
    weight: 0.9,
    description: '膿皮症每次回診須做皮膚細胞學評估感染菌種與治療反應',
    bidirectional: false,
    unlock_condition: null,
  },

  // SURG ↔ ONCO（脾臟腫瘤 FNA 爭議）
  {
    id: 'CROSS-SURG-CPATH-002',
    source_node_id: 'SURG-L3-002',   // 脾臟腫瘤
    target_node_id: 'CPATH-L4-003',  // 細胞學
    relation_type: 'clinical_apply',
    weight: 0.7,
    description: '脾臟腫塊術前 FNA 細胞學可協助區分良性與惡性，但存在假陰性風險',
    bidirectional: false,
    unlock_condition: null,
  },

  // IM ↔ ECC（PLE → 血栓風險）
  {
    id: 'CROSS-IM-ECC-004',
    source_node_id: 'IM-L3-012',     // PLE
    target_node_id: 'ECC-L2-003',    // 凝血病變
    relation_type: 'complication',
    weight: 0.8,
    description: 'PLE 低白蛋白致 AT-III 流失，血栓栓塞風險顯著增加（肺栓塞/門脈血栓）',
    bidirectional: false,
    unlock_condition: null,
  },

  // ─── Phase 3 擴展：Phase 2 新增節點跨科邊 (25 條) ───

  // CARDIO 新節點跨科邊
  {
    id: 'CROSS-CARDIO-ECC-003',
    source_node_id: 'CARDIO-L3-010', // ATE
    target_node_id: 'ECC-L1-001',    // 休克
    relation_type: 'complication',
    weight: 1.0,
    description: '貓 ATE 為急性缺血性急診，需急診休克復甦與止痛',
    bidirectional: false,
    unlock_condition: null,
  },
  {
    id: 'CROSS-CARDIO-SURG-001',
    source_node_id: 'CARDIO-L3-006', // 先天心病（PDA/PS/SAS）
    target_node_id: 'SURG-L5-001',   // 軟組織手術
    relation_type: 'clinical_apply',
    weight: 0.9,
    description: 'PDA 結紮/閉鎖術與 PS 球囊擴張為先天心病的外科治療選項',
    bidirectional: false,
    unlock_condition: null,
  },
  {
    id: 'CROSS-CARDIO-ECC-004',
    source_node_id: 'CARDIO-L3-009', // 肺高壓
    target_node_id: 'ECC-L3-013',    // 急性呼吸窘迫
    relation_type: 'complication',
    weight: 0.8,
    description: '嚴重肺高壓可導致急性右心衰竭與呼吸窘迫',
    bidirectional: false,
    unlock_condition: null,
  },

  // NEURO 新節點跨科邊
  {
    id: 'CROSS-NEURO-ONCO-002',
    source_node_id: 'NEURO-L3-008',  // 顱內腫瘤
    target_node_id: 'ONCO-L4-002',   // 腫瘤分期檢查
    relation_type: 'clinical_apply',
    weight: 0.9,
    description: '腦腫瘤需完整腫瘤分期（胸腹影像）排除轉移性來源',
    bidirectional: false,
    unlock_condition: null,
  },
  {
    id: 'CROSS-NEURO-SURG-002',
    source_node_id: 'NEURO-L3-009',  // Wobbler
    target_node_id: 'SURG-L5-002',   // 骨科手術
    relation_type: 'clinical_apply',
    weight: 0.9,
    description: 'Wobbler 內科治療無效時可考慮腹側減壓/固定手術',
    bidirectional: false,
    unlock_condition: null,
  },
  {
    id: 'CROSS-NEURO-SURG-003',
    source_node_id: 'NEURO-L3-013',  // Cauda equina
    target_node_id: 'SURG-L5-002',   // 骨科手術
    relation_type: 'clinical_apply',
    weight: 0.8,
    description: '腰薦椎疾病（DLSS）嚴重神經壓迫需手術減壓',
    bidirectional: false,
    unlock_condition: null,
  },
  {
    id: 'CROSS-NEURO-ECC-003',
    source_node_id: 'NEURO-L2-005',  // 顱內壓升高
    target_node_id: 'ECC-L5-001',    // 靜脈液體治療
    relation_type: 'clinical_apply',
    weight: 0.8,
    description: '顱內壓升高需急診高張食鹽水/Mannitol 降壓治療',
    bidirectional: false,
    unlock_condition: null,
  },

  // IM 新節點跨科邊
  {
    id: 'CROSS-IM-ECC-005',
    source_node_id: 'IM-L3-013',     // AKI
    target_node_id: 'ECC-L5-001',    // 靜脈液體治療
    relation_type: 'clinical_apply',
    weight: 1.0,
    description: 'AKI 首要治療為積極靜脈輸液以恢復腎灌流',
    bidirectional: false,
    unlock_condition: null,
  },
  {
    id: 'CROSS-IM-ECC-006',
    source_node_id: 'IM-L3-018',     // FLUTD
    target_node_id: 'ECC-L3-004',    // 貓尿道阻塞
    relation_type: 'complication',
    weight: 1.0,
    description: 'FLUTD 結晶/栓子可導致貓尿道阻塞急診',
    bidirectional: false,
    unlock_condition: null,
  },
  {
    id: 'CROSS-IM-ECC-007',
    source_node_id: 'IM-L3-016',     // Leptospirosis
    target_node_id: 'ECC-L3-011',    // 敗血症
    relation_type: 'complication',
    weight: 0.8,
    description: '嚴重鉤端螺旋體可導致敗血症/SIRS 與多重器官衰竭',
    bidirectional: false,
    unlock_condition: null,
  },
  {
    id: 'CROSS-IM-CPATH-002',
    source_node_id: 'IM-L3-013',     // AKI
    target_node_id: 'CPATH-L4-014',  // 尿液分析
    relation_type: 'clinical_apply',
    weight: 1.0,
    description: 'AKI 診斷與監控需尿液分析（比重、尿沉渣、UPC）',
    bidirectional: false,
    unlock_condition: null,
  },
  {
    id: 'CROSS-IM-CPATH-003',
    source_node_id: 'IM-L3-017',     // FIP
    target_node_id: 'CPATH-L4-015',  // 體腔滲出液分析
    relation_type: 'clinical_apply',
    weight: 1.0,
    description: 'FIP 滲出型需體腔液分析（Rivalta test、高蛋白、A:G ratio）',
    bidirectional: false,
    unlock_condition: null,
  },
  {
    id: 'CROSS-IM-CPATH-004',
    source_node_id: 'IM-L3-014',     // PLN
    target_node_id: 'CPATH-L4-014',  // 尿液分析
    relation_type: 'clinical_apply',
    weight: 1.0,
    description: 'PLN 以 UPC ratio > 2.0 為診斷核心，需連續尿液監控',
    bidirectional: false,
    unlock_condition: null,
  },
  {
    id: 'CROSS-IM-ECC-008',
    source_node_id: 'IM-L3-015',     // IMT
    target_node_id: 'ECC-L5-003',    // 輸血醫學
    relation_type: 'clinical_apply',
    weight: 0.8,
    description: '嚴重 IMT（血小板 < 10,000/μL）伴活動性出血可能需血小板輸注',
    bidirectional: false,
    unlock_condition: null,
  },

  // ECC 新節點跨科邊
  {
    id: 'CROSS-ECC-ONCO-002',
    source_node_id: 'ECC-L3-009',    // 腹腔出血
    target_node_id: 'ONCO-L3-004',   // HSA
    relation_type: 'differential',
    weight: 0.9,
    description: '犬非外傷性血腹首要排除脾臟 HSA（占非外傷性血腹 ~50%）',
    bidirectional: true,
    unlock_condition: null,
  },
  {
    id: 'CROSS-ECC-CARDIO-003',
    source_node_id: 'ECC-L3-013',    // 急性呼吸窘迫
    target_node_id: 'CARDIO-L5-001', // CHF 治療
    relation_type: 'differential',
    weight: 0.9,
    description: '急性呼吸窘迫需鑑別心因性肺水腫 vs 非心因性原因',
    bidirectional: true,
    unlock_condition: null,
  },
  {
    id: 'CROSS-ECC-SURG-003',
    source_node_id: 'ECC-L3-012',    // 多發性創傷
    target_node_id: 'SURG-L3-007',   // 骨折
    relation_type: 'clinical_apply',
    weight: 0.9,
    description: '多發性創傷常伴隨骨折，穩定後需骨科手術修復',
    bidirectional: false,
    unlock_condition: null,
  },
  {
    id: 'CROSS-ECC-CPATH-002',
    source_node_id: 'ECC-L3-011',    // 敗血症
    target_node_id: 'CPATH-L4-004',  // 凝血功能
    relation_type: 'clinical_apply',
    weight: 0.9,
    description: '敗血症需監控凝血功能（PT/aPTT/D-dimer）評估 DIC 風險',
    bidirectional: false,
    unlock_condition: null,
  },

  // SURG 新節點跨科邊
  {
    id: 'CROSS-SURG-ECC-004',
    source_node_id: 'SURG-L3-010',   // BOAS
    target_node_id: 'ECC-L3-013',    // 急性呼吸窘迫
    relation_type: 'complication',
    weight: 0.9,
    description: 'BOAS 急性惡化（高溫/興奮）可導致上呼吸道阻塞急診',
    bidirectional: false,
    unlock_condition: null,
  },
  {
    id: 'CROSS-SURG-ECC-005',
    source_node_id: 'SURG-L3-013',   // 膈疝
    target_node_id: 'ECC-L3-013',    // 急性呼吸窘迫
    relation_type: 'complication',
    weight: 0.9,
    description: '外傷性膈疝導致腹腔臟器進入胸腔，造成急性呼吸窘迫',
    bidirectional: false,
    unlock_condition: null,
  },
  {
    id: 'CROSS-SURG-DERM-001',
    source_node_id: 'SURG-L3-014',   // TECA-LBO
    target_node_id: 'DERM-L3-007',   // 外耳炎
    relation_type: 'clinical_apply',
    weight: 0.9,
    description: '終末期慢性外耳炎（纖維化/鈣化）內科無效時需 TECA-LBO',
    bidirectional: true,
    unlock_condition: null,
  },
  {
    id: 'CROSS-SURG-CPATH-003',
    source_node_id: 'SURG-L3-011',   // PSS
    target_node_id: 'CPATH-L4-002',  // 生化
    relation_type: 'clinical_apply',
    weight: 0.9,
    description: 'PSS 以膽汁酸耐受試驗（空腹 + 餐後）為關鍵篩檢指標',
    bidirectional: false,
    unlock_condition: null,
  },

  // ONCO 新節點跨科邊
  {
    id: 'CROSS-ONCO-SURG-006',
    source_node_id: 'ONCO-L3-009',   // STS
    target_node_id: 'SURG-L5-001',   // 軟組織手術
    relation_type: 'clinical_apply',
    weight: 1.0,
    description: 'STS 需寬切緣手術（≥3 cm 側方 + 1 筋膜面深層），首次手術品質決定預後',
    bidirectional: false,
    unlock_condition: null,
  },
  {
    id: 'CROSS-ONCO-IM-002',
    source_node_id: 'ONCO-L3-013',   // 甲狀腺癌
    target_node_id: 'IM-L3-003',     // 甲狀腺疾病（貓甲亢）
    relation_type: 'differential',
    weight: 0.8,
    description: '貓甲狀腺腫塊需鑑別良性腺瘤（>97%）vs 甲狀腺癌（<3%）',
    bidirectional: true,
    unlock_condition: null,
  },

  // DERM 新節點跨科邊
  {
    id: 'CROSS-DERM-ONCO-001',
    source_node_id: 'DERM-L3-013',   // CTCL
    target_node_id: 'ONCO-L3-001',   // 淋巴瘤
    relation_type: 'same_system',
    weight: 0.9,
    description: '皮膚淋巴瘤（CTCL）為淋巴瘤的皮膚表現型，治療原則交叉',
    bidirectional: true,
    unlock_condition: null,
  },
];
