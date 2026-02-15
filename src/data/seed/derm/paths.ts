import type { LearningPath } from '@/types/knowledge';

export const DERM_PATHS: LearningPath[] = [
  {
    id: 'PATH-DERM-ALLERGY',
    title: '皮膚過敏學基礎路徑',
    description: '從皮膚基礎科學到過敏性皮膚病的診斷與治療，涵蓋 CAD、AFR、FAD 等最常見的過敏性皮膚病及其多模式管理。適合實習獸醫及一般執業獸醫。',
    specialty: 'DERM',
    target_audience: '實習獸醫、一般執業獸醫',
    estimated_hours: 8,
    path_nodes: [
      { node_id: 'DERM-L0-001', is_required: true, phase: '基礎概念', learning_note: '起點：了解皮膚科全貌' },
      { node_id: 'DERM-L1-001', is_required: true, phase: '基礎概念', learning_note: null },
      { node_id: 'DERM-L1-002', is_required: true, phase: '基礎概念', learning_note: '皮膚免疫學是理解過敏機轉的基礎' },
      { node_id: 'DERM-L2-001', is_required: true, phase: '病理機轉', learning_note: '過敏反應的核心機轉' },
      { node_id: 'DERM-L3-001', is_required: true, phase: '臨床應用', learning_note: '核心疾病節點：犬異位性皮膚炎' },
      { node_id: 'DERM-L3-002', is_required: true, phase: '臨床應用', learning_note: 'CAD 最重要的鑑別診斷' },
      { node_id: 'DERM-L3-003', is_required: true, phase: '臨床應用', learning_note: '台灣高盛行率的過敏性皮膚病' },
      { node_id: 'DERM-L4-001', is_required: true, phase: '臨床應用', learning_note: null },
      { node_id: 'DERM-L4-002', is_required: false, phase: '臨床應用', learning_note: '選修但建議閱讀' },
      { node_id: 'DERM-L5-001', is_required: true, phase: '臨床應用', learning_note: '路徑終點：掌握過敏性皮膚病的多模式管理' },
    ],
    milestones: [
      {
        id: 'MS-DERM-01',
        title: '基礎過關',
        description: '完成皮膚科基礎概念與免疫學基礎',
        required_nodes: ['DERM-L0-001', 'DERM-L1-001', 'DERM-L1-002'],
        checkpoint_type: 'quiz',
        pass_criteria: '測驗正確率 >= 70%',
      },
      {
        id: 'MS-DERM-02',
        title: '過敏疾病與診斷',
        description: '完成 CAD、AFR、FAD 三大過敏性皮膚病節點',
        required_nodes: ['DERM-L3-001', 'DERM-L3-002', 'DERM-L3-003'],
        checkpoint_type: 'quiz',
        pass_criteria: '測驗正確率 >= 80%',
      },
      {
        id: 'MS-DERM-03',
        title: '路徑完成',
        description: '完成所有必修節點並通過最終病例挑戰',
        required_nodes: ['DERM-L5-001'],
        checkpoint_type: 'case',
        pass_criteria: '病例挑戰得分 >= 70%',
      },
    ],
    has_certificate: true,
    status: 'published',
  },
];
