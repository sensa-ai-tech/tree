import type { LearningPath } from '@/types/knowledge';

export const SURG_PATHS: LearningPath[] = [
  {
    id: 'PATH-SURG-SOFT-TISSUE',
    title: '軟組織外科入門路徑',
    description: '從外科基礎原則到軟組織手術實務，涵蓋 GDV、腸道異物、子宮蓄膿等核心急診外科知識。適合實習獸醫及一般臨床獸醫師。',
    specialty: 'SURG',
    target_audience: '實習獸醫、一般臨床獸醫師',
    estimated_hours: 10,
    path_nodes: [
      { node_id: 'SURG-L0-001', is_required: true, phase: '基礎概念', learning_note: '起點：了解外科學全貌與六層架構' },
      { node_id: 'SURG-L1-001', is_required: true, phase: '基礎概念', learning_note: '手術解剖學是所有外科操作的根基' },
      { node_id: 'SURG-L1-004', is_required: true, phase: '基礎概念', learning_note: '無菌技術、止血與組織處理原則' },
      { node_id: 'SURG-L1-003', is_required: false, phase: '基礎概念', learning_note: '選修但強烈建議——麻醉安全是手術成功的前提' },
      { node_id: 'SURG-L2-001', is_required: true, phase: '病理機轉', learning_note: '理解腹腔臟器的外科病理' },
      { node_id: 'SURG-L3-001', is_required: true, phase: '臨床疾病', learning_note: '核心疾病：GDV 急診外科' },
      { node_id: 'SURG-L3-003', is_required: true, phase: '臨床疾病', learning_note: '核心疾病：腸道異物' },
      { node_id: 'SURG-L3-009', is_required: true, phase: '臨床疾病', learning_note: '核心疾病：子宮蓄膿' },
      { node_id: 'SURG-L4-001', is_required: true, phase: '診斷與治療', learning_note: '術前影像評估能力' },
      { node_id: 'SURG-L5-001', is_required: true, phase: '診斷與治療', learning_note: '路徑終點：掌握軟組織手術實務' },
    ],
    milestones: [
      {
        id: 'MS-SURG-01',
        title: '外科基礎過關',
        description: '完成外科基礎概念三節點，掌握手術解剖、外科原則與腹腔病理',
        required_nodes: ['SURG-L0-001', 'SURG-L1-001', 'SURG-L1-004'],
        checkpoint_type: 'quiz',
        pass_criteria: '測驗正確率 >= 70%',
      },
      {
        id: 'MS-SURG-02',
        title: '急診外科疾病',
        description: '完成 GDV、腸道異物與子宮蓄膿三大急診外科疾病',
        required_nodes: ['SURG-L3-001', 'SURG-L3-003', 'SURG-L3-009'],
        checkpoint_type: 'quiz',
        pass_criteria: '測驗正確率 >= 80%',
      },
      {
        id: 'MS-SURG-03',
        title: '路徑完成',
        description: '完成所有必修節點並通過 GDV 病例挑戰',
        required_nodes: ['SURG-L5-001'],
        checkpoint_type: 'case',
        pass_criteria: '病例挑戰得分 >= 70%',
      },
    ],
    has_certificate: true,
    status: 'published',
  },
];
