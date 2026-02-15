import { describe, it, expect } from 'vitest';
import { buildConceptContentPrompt } from '@/lib/ai/prompts/content-concept';
import { buildDiseaseContentPrompt } from '@/lib/ai/prompts/content-disease';
import { safeParseJson } from '@/lib/ai/parsers/json-parser';
import { validate, nodeContentSchema, diseaseDataSchema } from '@/lib/ai/parsers/validators';
import type { KnowledgeNode } from '@/types/knowledge';

const mockNode: KnowledgeNode = {
  id: 'CARD_001',
  specialty: 'CARD',
  title: '二尖瓣退行性病變',
  title_en: 'Myxomatous Mitral Valve Disease',
  layer: 3,
  node_type: 'disease',
  difficulty: 3,
  estimated_minutes: 45,
  clinical_relevance: 5,
  exam_relevance: 5,
  status: 'published',
  version: 1,
  tags: ['心臟', '瓣膜'],
  encyclopedia_link: null,
  cross_specialty_notes: null,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
};

describe('Content Generation Pipeline', () => {
  it('should generate concept content prompt', () => {
    const conceptNode = { ...mockNode, node_type: 'concept' as const, layer: 1 as const };
    const prompt = buildConceptContentPrompt(conceptNode, []);
    expect(prompt).toContain('二尖瓣退行性病變');
    expect(prompt.length).toBeGreaterThan(50);
  });

  it('should generate disease content prompt with 14 blocks', () => {
    const prompt = buildDiseaseContentPrompt(mockNode, []);
    expect(prompt).toContain('signalment');
    expect(prompt).toContain('pathogenesis');
    expect(prompt).toContain('treatment_protocol');
  });

  it('should validate mock concept content', () => {
    const mockContent = {
      summary: '二尖瓣退行性病變是犬最常見的後天性心臟病，好發於小型老年犬',
      learning_objectives: [
        '了解 MMVD 的病因與分期',
        '掌握臨床診斷與分級標準',
      ],
      key_points: [
        '好發小型犬（騎士查理王、馬爾濟斯）',
        'ACVIM 分期 A-D',
      ],
      body: '二尖瓣退行性病變（Myxomatous Mitral Valve Disease, MMVD）是犬最常見的後天性心臟病。該疾病的特徵是二尖瓣葉的黏液樣變性，導致瓣膜增厚和脫垂。',
      clinical_pearl: '胸腔 X 光中 VHS > 10.5 提示心臟擴大',
      common_mistakes: ['將功能性雜音誤判為病理性'],
    };
    const result = validate(nodeContentSchema, mockContent);
    expect(result.success).toBe(true);
  });

  it('should validate mock disease data', () => {
    const mockDisease = {
      signalment: '好發於小型犬，年齡 > 8 歲',
      etiology: '瓣膜黏液樣變性',
      pathogenesis: '瓣膜變性 → 閉鎖不全 → 左心房擴大 → 肺水腫',
      clinical_signs: [
        { sign: '心雜音', category: 'primary' as const, description: '左側收縮期雜音' },
      ],
      differential_diagnosis: [
        { condition: 'DCM', key_differentiator: '好發大型犬，心肌收縮力下降' },
      ],
      diagnostic_workup: '心臟超音波 + 胸腔 X 光',
      treatment_protocol: 'ACVIM B2 以上開始 Pimobendan',
      prognosis: '早期預後良好，C 期以上需積極治療',
      monitoring: '每 6 個月追蹤心超',
      owner_communication: '解釋疾病分期與用藥重要性',
    };
    const result = validate(diseaseDataSchema, mockDisease);
    expect(result.success).toBe(true);
  });
});
