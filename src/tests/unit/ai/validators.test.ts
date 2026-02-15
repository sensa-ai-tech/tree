import { describe, it, expect } from 'vitest';
import {
  skeletonOutputSchema,
  nodeContentSchema,
  diseaseDataSchema,
  edgeSchema,
  questionSchema,
  caseStepSchema,
  validate,
} from '@/lib/ai/parsers/validators';

describe('Skeleton Output Validation', () => {
  it('should validate a correct skeleton output', () => {
    const data = {
      specialty: 'CARD',
      total_nodes: 2,
      estimated_total_hours: 10,
      nodes: [
        {
          id: 'CARD_001',
          specialty: 'CARD',
          title: '心臟概論',
          title_en: 'Cardiology Overview',
          layer: 0,
          node_type: 'concept',
          difficulty: 1,
          estimated_minutes: 30,
          clinical_relevance: 3,
          exam_relevance: 2,
        },
      ],
      validation_report: {
        completeness_score: 0.8,
        issues_found: [],
        taiwan_specific_additions: ['心絲蟲'],
      },
    };
    const result = validate(skeletonOutputSchema, data);
    expect(result.success).toBe(true);
  });

  it('should reject skeleton with empty nodes', () => {
    const data = {
      specialty: 'CARD',
      total_nodes: 0,
      estimated_total_hours: 0,
      nodes: [],
      validation_report: {
        completeness_score: 0,
        issues_found: [],
        taiwan_specific_additions: [],
      },
    };
    const result = validate(skeletonOutputSchema, data);
    expect(result.success).toBe(false);
  });

  it('should reject invalid layer number', () => {
    const data = {
      specialty: 'CARD',
      total_nodes: 1,
      estimated_total_hours: 1,
      nodes: [
        {
          id: 'CARD_001',
          specialty: 'CARD',
          title: 'Test',
          layer: 6,
          node_type: 'concept',
          difficulty: 1,
          estimated_minutes: 30,
          clinical_relevance: 3,
          exam_relevance: 2,
        },
      ],
      validation_report: {
        completeness_score: 0.5,
        issues_found: [],
        taiwan_specific_additions: [],
      },
    };
    const result = validate(skeletonOutputSchema, data);
    expect(result.success).toBe(false);
  });
});

describe('Node Content Validation', () => {
  it('should validate correct node content', () => {
    const data = {
      summary: '這是一個關於心臟聽診的重要知識點',
      learning_objectives: ['了解聽診技術'],
      key_points: ['S1 S2 心音辨識'],
      body: '心臟聽診是獸醫臨床檢查的基礎技能之一。透過聽診器可以評估心臟功能的多項指標，包括心率、心律、心音強度以及是否存在異常雜音。正確的聽診技術對於早期發現心臟疾病至關重要。',
    };
    const result = validate(nodeContentSchema, data);
    expect(result.success).toBe(true);
  });

  it('should reject content with empty summary', () => {
    const data = {
      summary: '',
      learning_objectives: ['目標'],
      key_points: ['重點'],
      body: '內容'.repeat(30),
    };
    const result = validate(nodeContentSchema, data);
    expect(result.success).toBe(false);
  });
});

describe('Edge Validation', () => {
  it('should validate correct edge', () => {
    const data = {
      source_node_id: 'CARD_001',
      target_node_id: 'CARD_002',
      relation_type: 'prerequisite',
      weight: 0.8,
      description: '基礎到進階',
    };
    const result = validate(edgeSchema, data);
    expect(result.success).toBe(true);
  });

  it('should reject invalid relation type', () => {
    const data = {
      source_node_id: 'CARD_001',
      target_node_id: 'CARD_002',
      relation_type: 'invalid_type',
      weight: 0.5,
    };
    const result = validate(edgeSchema, data);
    expect(result.success).toBe(false);
  });
});

describe('Question Validation', () => {
  it('should validate correct question', () => {
    const data = {
      question_type: 'mcq',
      question: '下列哪一項是犬心臟最常見的瓣膜疾病？',
      options: ['二尖瓣退行性病變', '主動脈瓣狹窄', '肺動脈瓣閉鎖不全', '三尖瓣脫垂'],
      correct_answer: '二尖瓣退行性病變',
      explanation: 'MMVD 是犬最常見的心臟瓣膜疾病',
      difficulty: 3,
    };
    const result = validate(questionSchema, data);
    expect(result.success).toBe(true);
  });
});

describe('Case Step Validation', () => {
  it('should validate correct case step', () => {
    const data = {
      step_number: 1,
      step_type: 'history_collection',
      title: '病史蒐集',
      prompt: '一隻 10 歲的馬爾濟斯...',
      available_actions: ['詢問飲食', '詢問運動耐受度', '詢問呼吸狀況'],
      correct_actions: ['詢問運動耐受度', '詢問呼吸狀況'],
      feedback_correct: '正確！運動耐受度和呼吸是心臟病的關鍵資訊。',
      feedback_incorrect: '這些資訊雖然有用，但心臟病史應優先關注...',
      key_learning_points: ['心臟病史詢問要點'],
    };
    const result = validate(caseStepSchema, data);
    expect(result.success).toBe(true);
  });

  it('should reject step number > 7', () => {
    const data = {
      step_number: 8,
      step_type: 'history_collection',
      title: 'Test',
      prompt: 'Test prompt',
      available_actions: ['action'],
      correct_actions: ['action'],
      feedback_correct: 'Good',
      feedback_incorrect: 'Bad',
      key_learning_points: ['point'],
    };
    const result = validate(caseStepSchema, data);
    expect(result.success).toBe(false);
  });
});
