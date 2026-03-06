import type { LearningPath } from '@/types/knowledge';

/**
 * Cross-Specialty Learning Paths
 *
 * 跨科整合學習路徑 — 模擬臨床上多科協作的真實情境。
 * 這些路徑跨越 2+ 個專科，引導學習者從症狀出發進行鑑別診斷。
 *
 * 最後更新：2026-03-05
 */
export const CROSS_SPECIALTY_PATHS: LearningPath[] = [
  // ─── PU/PD 多飲多尿鑑別診斷路徑 ───
  {
    id: 'PATH-CROSS-PUPD',
    title: '多飲多尿（PU/PD）鑑別診斷路徑',
    description: '從主訴「喝水量增加、尿量增加」出發，系統性排除內分泌、腎臟、肝臟、醫源性等多種原因。涵蓋 IM、CPATH、ECC 跨科知識。',
    specialty: 'IM',
    target_audience: '一般臨床獸醫、住院獸醫',
    estimated_hours: 12,
    path_nodes: [
      { node_id: 'IM-L0-001', is_required: true, phase: '基礎回顧', learning_note: '起點：內科學全景概覽' },
      { node_id: 'CPATH-L4-002', is_required: true, phase: '實驗室基礎', learning_note: '生化全套判讀——PU/PD 初篩關鍵' },
      { node_id: 'CPATH-L4-009', is_required: true, phase: '實驗室基礎', learning_note: '尿液分析——尿比重是 PU/PD 最重要指標' },
      { node_id: 'IM-L2-004', is_required: true, phase: '病理機轉', learning_note: '內分泌病理機轉——ADH/aldosterone/cortisol 軸' },
      { node_id: 'IM-L3-007', is_required: true, phase: '鑑別診斷：內分泌', learning_note: '腎上腺皮質機能亢進（Cushing\'s）——最常見 PU/PD 原因之一' },
      { node_id: 'IM-L3-008', is_required: true, phase: '鑑別診斷：內分泌', learning_note: '糖尿病——滲透性利尿' },
      { node_id: 'IM-L3-009', is_required: true, phase: phase_label('鑑別診斷：內分泌'), learning_note: '甲狀腺功能亢進（貓）——代謝率增加導致 PU/PD' },
      { node_id: 'IM-L3-003', is_required: true, phase: '鑑別診斷：腎臟', learning_note: '慢性腎臟病——腎臟濃縮能力喪失' },
      { node_id: 'IM-L3-004', is_required: true, phase: '鑑別診斷：腎臟', learning_note: '急性腎損傷——多尿期' },
      { node_id: 'IM-L3-013', is_required: false, phase: '鑑別診斷：肝臟', learning_note: '選修：肝病與尿素循環——低 BUN 伴 PU/PD' },
      { node_id: 'CPATH-L4-010', is_required: false, phase: '進階檢查', learning_note: '選修：內分泌功能檢查（LDDS/HDDS/ACTH stimulation）' },
    ],
    milestones: [
      {
        id: 'MS-CROSS-PUPD-01',
        title: '實驗室篩檢能力',
        description: '掌握 PU/PD 初始 workup：CBC、生化、尿液分析判讀',
        required_nodes: ['CPATH-L4-002', 'CPATH-L4-009'],
        checkpoint_type: 'quiz',
        pass_criteria: '測驗正確率 >= 75%',
      },
      {
        id: 'MS-CROSS-PUPD-02',
        title: '內分泌鑑別',
        description: '完成 Cushing\'s、糖尿病、甲亢三大內分泌 PU/PD 原因學習',
        required_nodes: ['IM-L3-007', 'IM-L3-008', 'IM-L3-009'],
        checkpoint_type: 'quiz',
        pass_criteria: '測驗正確率 >= 80%',
      },
      {
        id: 'MS-CROSS-PUPD-03',
        title: 'PU/PD 鑑別診斷完成',
        description: '完成腎臟原因學習並通過 PU/PD 整合鑑別診斷病例',
        required_nodes: ['IM-L3-003', 'IM-L3-004'],
        checkpoint_type: 'case',
        pass_criteria: '病例挑戰得分 >= 70%',
      },
    ],
    has_certificate: true,
    status: 'published',
  },

  // ─── 免疫介導性疾病跨科路徑 ───
  {
    id: 'PATH-CROSS-IMMUNE',
    title: '免疫介導性疾病跨科診療路徑',
    description: '免疫系統異常可影響血液、皮膚、神經、關節等多個系統。此路徑整合 IM、DERM、NEURO、CPATH 的免疫介導性疾病知識。',
    specialty: 'IM',
    target_audience: '住院獸醫、專科進修',
    estimated_hours: 14,
    path_nodes: [
      { node_id: 'CPATH-L1-003', is_required: true, phase: '免疫學基礎', learning_note: '起點：免疫學核心概念（自體免疫機轉）' },
      { node_id: 'IM-L2-001', is_required: true, phase: '病理機轉', learning_note: '內科免疫病理機轉' },
      { node_id: 'IM-L3-005', is_required: true, phase: '血液系統', learning_note: 'IMHA — 免疫介導溶血性貧血' },
      { node_id: 'IM-L3-006', is_required: true, phase: '血液系統', learning_note: 'IMT — 免疫介導血小板減少症' },
      { node_id: 'CPATH-L4-001', is_required: true, phase: '實驗室檢查', learning_note: 'CBC 判讀：球形紅血球、自凝、reticulocyte count' },
      { node_id: 'CPATH-L4-004', is_required: true, phase: '實驗室檢查', learning_note: '凝血功能檢查與 DIC 排除' },
      { node_id: 'DERM-L3-010', is_required: false, phase: '皮膚系統', learning_note: '選修：天皰瘡 — 自體免疫皮膚疾病' },
      { node_id: 'NEURO-L3-007', is_required: false, phase: '神經系統', learning_note: '選修：MUO/GME — 免疫介導腦膜腦炎' },
      { node_id: 'IM-L3-012', is_required: false, phase: '關節系統', learning_note: '選修：免疫介導多關節炎（IMPA）' },
    ],
    milestones: [
      {
        id: 'MS-CROSS-IMMUNE-01',
        title: '免疫學基礎',
        description: '掌握自體免疫疾病的免疫學與病理機轉',
        required_nodes: ['CPATH-L1-003', 'IM-L2-001'],
        checkpoint_type: 'quiz',
        pass_criteria: '測驗正確率 >= 70%',
      },
      {
        id: 'MS-CROSS-IMMUNE-02',
        title: '血液系統 IMD',
        description: '完成 IMHA 與 IMT 學習及相關實驗室判讀',
        required_nodes: ['IM-L3-005', 'IM-L3-006', 'CPATH-L4-001', 'CPATH-L4-004'],
        checkpoint_type: 'quiz',
        pass_criteria: '測驗正確率 >= 80%',
      },
      {
        id: 'MS-CROSS-IMMUNE-03',
        title: '跨科免疫疾病整合',
        description: '完成至少一個選修皮膚/神經/關節免疫疾病並通過整合病例',
        required_nodes: ['IM-L3-005', 'IM-L3-006'],
        checkpoint_type: 'case',
        pass_criteria: '病例挑戰得分 >= 75%',
      },
    ],
    has_certificate: true,
    status: 'published',
  },

  // ─── 急診分診決策路徑 ───
  {
    id: 'PATH-CROSS-TRIAGE',
    title: '急診分診與初步穩定跨科路徑',
    description: '從急診分診（triage）出發，學習 ABCDE 評估、休克辨識、基礎實驗室判讀、以及常見急症的初步穩定處理。涵蓋 ECC、IM、SURG、CPATH。',
    specialty: 'ECC',
    target_audience: '實習獸醫、一般臨床獸醫',
    estimated_hours: 10,
    path_nodes: [
      { node_id: 'ECC-L0-001', is_required: true, phase: '急診總覽', learning_note: '起點：急診加護醫學全景' },
      { node_id: 'ECC-L1-001', is_required: true, phase: '基礎概念', learning_note: '急診分診原則與 ABCDE 評估' },
      { node_id: 'ECC-L3-001', is_required: true, phase: '核心急症', learning_note: '心肺復甦（CPR）流程' },
      { node_id: 'ECC-L3-002', is_required: true, phase: '核心急症', learning_note: '休克的辨識與處理' },
      { node_id: 'CPATH-L4-005', is_required: true, phase: '急診實驗室', learning_note: '血氣分析——急診最重要的即時檢驗' },
      { node_id: 'CPATH-L4-001', is_required: true, phase: '急診實驗室', learning_note: '急診 CBC 快速判讀' },
      { node_id: 'ECC-L3-003', is_required: true, phase: '中毒急診', learning_note: '中毒急診處理流程' },
      { node_id: 'ECC-L3-005', is_required: true, phase: '創傷', learning_note: '創傷急診初步處理' },
      { node_id: 'SURG-L3-001', is_required: false, phase: '外科急症', learning_note: '選修：軟組織外科急症' },
      { node_id: 'ECC-L4-001', is_required: false, phase: '進階監測', learning_note: '選修：加護病房監測技術' },
    ],
    milestones: [
      {
        id: 'MS-CROSS-TRIAGE-01',
        title: '分診基礎',
        description: '完成急診分診原則與 CPR 流程',
        required_nodes: ['ECC-L1-001', 'ECC-L3-001'],
        checkpoint_type: 'quiz',
        pass_criteria: '測驗正確率 >= 80%',
      },
      {
        id: 'MS-CROSS-TRIAGE-02',
        title: '休克與急診檢驗',
        description: '掌握休克辨識與急診實驗室快速判讀',
        required_nodes: ['ECC-L3-002', 'CPATH-L4-005', 'CPATH-L4-001'],
        checkpoint_type: 'quiz',
        pass_criteria: '測驗正確率 >= 80%',
      },
      {
        id: 'MS-CROSS-TRIAGE-03',
        title: '急診初步穩定',
        description: '完成中毒與創傷急診處理，通過急診分診整合病例',
        required_nodes: ['ECC-L3-003', 'ECC-L3-005'],
        checkpoint_type: 'case',
        pass_criteria: '病例挑戰得分 >= 70%',
      },
    ],
    has_certificate: true,
    status: 'published',
  },

  // ─── 腫瘤分期與病理診斷跨科路徑 ───
  {
    id: 'PATH-CROSS-ONCO-STAGING',
    title: '腫瘤分期與病理診斷跨科路徑',
    description: '整合腫瘤科與臨床病理，從腫塊發現到組織學確診、分期、預後評估的完整流程。涵蓋 ONCO、CPATH、SURG。',
    specialty: 'ONCO',
    target_audience: '一般臨床獸醫、住院獸醫',
    estimated_hours: 10,
    path_nodes: [
      { node_id: 'ONCO-L0-001', is_required: true, phase: '腫瘤科總覽', learning_note: '起點：腫瘤科學全景' },
      { node_id: 'ONCO-L1-001', is_required: true, phase: '基礎概念', learning_note: '腫瘤生物學基礎' },
      { node_id: 'CPATH-L4-003', is_required: true, phase: '細胞學', learning_note: '細胞學判讀——腫塊初步評估的第一步' },
      { node_id: 'CPATH-L4-011', is_required: true, phase: '進階病理', learning_note: '淋巴結與腫瘤細胞學——分期必備' },
      { node_id: 'ONCO-L4-001', is_required: true, phase: '影像診斷', learning_note: '腫瘤影像學（三視 X-ray、腹部超音波、CT）' },
      { node_id: 'ONCO-L3-001', is_required: true, phase: '常見腫瘤', learning_note: '淋巴瘤——最常見的造血系統腫瘤' },
      { node_id: 'ONCO-L3-002', is_required: true, phase: '常見腫瘤', learning_note: '肥大細胞瘤——犬最常見皮膚腫瘤' },
      { node_id: 'SURG-L3-003', is_required: false, phase: '外科銜接', learning_note: '選修：腫瘤外科原則（切除邊界）' },
    ],
    milestones: [
      {
        id: 'MS-CROSS-ONCO-01',
        title: '腫瘤基礎與細胞學',
        description: '掌握腫瘤生物學與 FNA 細胞學判讀',
        required_nodes: ['ONCO-L1-001', 'CPATH-L4-003'],
        checkpoint_type: 'quiz',
        pass_criteria: '測驗正確率 >= 70%',
      },
      {
        id: 'MS-CROSS-ONCO-02',
        title: '分期能力',
        description: '完成淋巴結細胞學與影像分期',
        required_nodes: ['CPATH-L4-011', 'ONCO-L4-001'],
        checkpoint_type: 'quiz',
        pass_criteria: '測驗正確率 >= 80%',
      },
      {
        id: 'MS-CROSS-ONCO-03',
        title: '整合診療',
        description: '完成淋巴瘤與 MCT 學習，通過腫瘤分期整合病例',
        required_nodes: ['ONCO-L3-001', 'ONCO-L3-002'],
        checkpoint_type: 'case',
        pass_criteria: '病例挑戰得分 >= 75%',
      },
    ],
    has_certificate: true,
    status: 'published',
  },
];

// Helper to avoid lint warning in template literal
function phase_label(label: string): string {
  return label;
}
