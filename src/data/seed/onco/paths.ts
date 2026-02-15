import type { LearningPath } from '@/types/knowledge';

export const ONCO_PATHS: LearningPath[] = [
  {
    id: 'PATH-ONCO-FOUNDATION',
    title: '腫瘤科基礎入門路徑',
    description: '從腫瘤生物學基礎到犬淋巴瘤的診斷與化療，涵蓋腫瘤科最核心的知識體系。適合實習獸醫及一般臨床獸醫建立腫瘤科基礎能力。',
    specialty: 'ONCO',
    target_audience: '實習獸醫、一般臨床獸醫',
    estimated_hours: 10,
    path_nodes: [
      { node_id: 'ONCO-L0-001', is_required: true, phase: '基礎概念', learning_note: '起點：了解腫瘤科全貌' },
      { node_id: 'ONCO-L1-001', is_required: true, phase: '基礎概念', learning_note: '腫瘤細胞的基本特性' },
      { node_id: 'ONCO-L1-002', is_required: false, phase: '基礎概念', learning_note: '選修：免疫系統與腫瘤的交互作用' },
      { node_id: 'ONCO-L1-003', is_required: false, phase: '基礎概念', learning_note: '選修：腫瘤遺傳學基礎' },
      { node_id: 'ONCO-L2-001', is_required: true, phase: '病理機轉', learning_note: '了解轉移是制定治療計畫的關鍵' },
      { node_id: 'ONCO-L2-002', is_required: false, phase: '病理機轉', learning_note: '選修但建議閱讀：高血鈣等臨床重要議題' },
      { node_id: 'ONCO-L3-001', is_required: true, phase: '臨床疾病', learning_note: '核心疾病節點：最常見的犬血液腫瘤' },
      { node_id: 'ONCO-L3-002', is_required: true, phase: '臨床疾病', learning_note: '最常見的犬皮膚腫瘤' },
      { node_id: 'ONCO-L4-001', is_required: true, phase: '診斷技術', learning_note: '腫瘤診斷的第一線工具' },
      { node_id: 'ONCO-L4-003', is_required: true, phase: '診斷技術', learning_note: 'TNM 分期是治療決策的基礎' },
      { node_id: 'ONCO-L5-001', is_required: true, phase: '治療管理', learning_note: '路徑終點：掌握化療基礎原則' },
      { node_id: 'ONCO-L5-002', is_required: false, phase: '治療管理', learning_note: '選修：腫瘤外科手術原則' },
    ],
    milestones: [
      {
        id: 'MS-ONCO-01',
        title: '基礎過關',
        description: '完成腫瘤科基礎概念與腫瘤生物學',
        required_nodes: ['ONCO-L0-001', 'ONCO-L1-001'],
        checkpoint_type: 'quiz',
        pass_criteria: '測驗正確率 >= 70%',
      },
      {
        id: 'MS-ONCO-02',
        title: '疾病與診斷',
        description: '完成淋巴瘤、MCT 與腫瘤細胞學節點',
        required_nodes: ['ONCO-L3-001', 'ONCO-L3-002', 'ONCO-L4-001'],
        checkpoint_type: 'quiz',
        pass_criteria: '測驗正確率 >= 80%',
      },
      {
        id: 'MS-ONCO-03',
        title: '路徑完成',
        description: '完成所有必修節點並通過最終病例挑戰',
        required_nodes: ['ONCO-L5-001'],
        checkpoint_type: 'case',
        pass_criteria: '病例挑戰得分 >= 70%',
      },
    ],
    has_certificate: true,
    status: 'published',
  },
];
