import type { LearningPath } from '@/types/knowledge';

export const ECC_PATHS: LearningPath[] = [
  {
    id: 'PATH-ECC-FOUNDATION',
    title: '急診加護基礎入門路徑',
    description: '從休克生理學到 CPR 操作，涵蓋急診加護醫學最核心的知識與技能。適合實習獸醫及一般臨床獸醫建立急診處置的系統性思維。',
    specialty: 'ECC',
    target_audience: '實習獸醫、一般臨床獸醫',
    estimated_hours: 10,
    path_nodes: [
      { node_id: 'ECC-L0-001', is_required: true, phase: '基礎概念', learning_note: '起點：了解急診加護醫學全貌' },
      { node_id: 'ECC-L1-001', is_required: true, phase: '基礎概念', learning_note: '休克的分類與血流動力學變化' },
      { node_id: 'ECC-L1-002', is_required: true, phase: '基礎概念', learning_note: '體液治療的生理基礎' },
      { node_id: 'ECC-L1-003', is_required: false, phase: '基礎概念', learning_note: '選修但建議閱讀，理解血氣判讀' },
      { node_id: 'ECC-L2-001', is_required: true, phase: '病理機轉', learning_note: 'SIRS/敗血症的辨識與處置思維' },
      { node_id: 'ECC-L4-001', is_required: true, phase: '臨床技能', learning_note: '核心技能：ABCDE 分診必須熟練' },
      { node_id: 'ECC-L3-001', is_required: true, phase: '臨床應用', learning_note: '急診常見且需即刻處置的疾病' },
      { node_id: 'ECC-L3-004', is_required: true, phase: '臨床應用', learning_note: '貓急診中最常見的危急狀況之一' },
      { node_id: 'ECC-L4-002', is_required: false, phase: '臨床技能', learning_note: '選修：POCUS 為急診加分技能' },
      { node_id: 'ECC-L5-001', is_required: true, phase: '治療技能', learning_note: '液體治療是急診處置的基石' },
      { node_id: 'ECC-L5-002', is_required: true, phase: '治療技能', learning_note: '路徑終點：CPR 操作能力' },
      { node_id: 'ECC-L5-004', is_required: false, phase: '治療技能', learning_note: '選修：急診止痛為重要輔助技能' },
    ],
    milestones: [
      {
        id: 'MS-ECC-01',
        title: '基礎過關',
        description: '完成急診加護基礎概念與休克生理學',
        required_nodes: ['ECC-L0-001', 'ECC-L1-001', 'ECC-L1-002'],
        checkpoint_type: 'quiz',
        pass_criteria: '測驗正確率 >= 70%',
      },
      {
        id: 'MS-ECC-02',
        title: '分診與急診疾病',
        description: '掌握 ABCDE 分診並熟悉常見急診疾病',
        required_nodes: ['ECC-L4-001', 'ECC-L3-001', 'ECC-L3-004'],
        checkpoint_type: 'quiz',
        pass_criteria: '測驗正確率 >= 80%',
      },
      {
        id: 'MS-ECC-03',
        title: '路徑完成',
        description: '完成所有必修節點並通過病例挑戰',
        required_nodes: ['ECC-L5-001', 'ECC-L5-002'],
        checkpoint_type: 'case',
        pass_criteria: '病例挑戰得分 >= 70%',
      },
    ],
    has_certificate: true,
    status: 'published',
  },
];
