import { describe, it, expect } from 'vitest';
import { buildSkeletonPrompt, buildSkeletonValidationPrompt, buildBatchSkeletonPrompt } from '@/lib/ai/prompts/skeleton';
import { buildConceptContentPrompt } from '@/lib/ai/prompts/content-concept';
import { buildDiseaseContentPrompt } from '@/lib/ai/prompts/content-disease';
import { buildQuestionsPrompt } from '@/lib/ai/prompts/questions';
import { buildCasePrompt } from '@/lib/ai/prompts/cases';
import type { SkeletonInput, KnowledgeNode } from '@/types/knowledge';

const mockSkeletonInput: SkeletonInput = {
  specialty_name: '心臟科',
  specialty_name_en: 'Cardiology',
  specialty_abbr: 'CARD',
};

const mockNode: KnowledgeNode = {
  id: 'CARD_001',
  specialty: 'CARD',
  title: '心臟聽診',
  title_en: 'Cardiac Auscultation',
  layer: 4,
  node_type: 'diagnostic',
  difficulty: 3,
  estimated_minutes: 30,
  clinical_relevance: 5,
  exam_relevance: 4,
  status: 'published',
  version: 1,
  tags: ['心臟', '聽診'],
  encyclopedia_link: null,
  cross_specialty_notes: null,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
};

describe('Skeleton Prompts', () => {
  it('should build skeleton prompt with correct specialty info', () => {
    const prompt = buildSkeletonPrompt(mockSkeletonInput);
    expect(prompt).toContain('心臟科');
    expect(prompt).toContain('Cardiology');
    expect(prompt).toContain('CARD');
    expect(prompt).toContain('Layer 0');
    expect(prompt).toContain('Layer 5');
  });

  it('should include JSON format requirements', () => {
    const prompt = buildSkeletonPrompt(mockSkeletonInput);
    expect(prompt).toContain('"specialty"');
    expect(prompt).toContain('"nodes"');
    expect(prompt).toContain('"validation_report"');
  });

  it('should build validation prompt with skeleton JSON', () => {
    const skeletonJson = '{"specialty": "CARD"}';
    const prompt = buildSkeletonValidationPrompt(skeletonJson, '心臟科');
    expect(prompt).toContain('心臟科');
    expect(prompt).toContain(skeletonJson);
    expect(prompt).toContain('completeness_score');
  });

  it('should build batch skeleton prompt for multiple specialties', () => {
    const specialties: SkeletonInput[] = [
      mockSkeletonInput,
      { specialty_name: '皮膚科', specialty_name_en: 'Dermatology', specialty_abbr: 'DERM' },
    ];
    const prompt = buildBatchSkeletonPrompt(specialties);
    expect(prompt).toContain('心臟科');
    expect(prompt).toContain('皮膚科');
    expect(prompt).toContain('CARD');
    expect(prompt).toContain('DERM');
  });
});

describe('Content Prompts', () => {
  it('should build concept content prompt', () => {
    const conceptNode: KnowledgeNode = { ...mockNode, node_type: 'concept', layer: 1 };
    const prompt = buildConceptContentPrompt(conceptNode, ['解剖學基礎']);
    expect(prompt).toContain('心臟聽診');
    expect(prompt).toContain('summary');
    expect(prompt).toContain('learning_objectives');
  });

  it('should build disease content prompt', () => {
    const diseaseNode: KnowledgeNode = { ...mockNode, node_type: 'disease', layer: 3 };
    const prompt = buildDiseaseContentPrompt(diseaseNode, []);
    expect(prompt).toContain('心臟聽診');
    expect(prompt).toContain('signalment');
    expect(prompt).toContain('pathogenesis');
  });
});

describe('Question Prompts', () => {
  it('should build questions prompt with correct counts', () => {
    const prompt = buildQuestionsPrompt(mockNode, '心臟聽診基礎概念', ['S1 S2 心音', '雜音分級']);
    expect(prompt).toContain('心臟聽診');
    expect(prompt).toContain('mcq');
    expect(prompt).toContain('true_false');
  });
});

describe('Case Prompts', () => {
  it('should build case prompt with 7 steps', () => {
    const diseaseNode: KnowledgeNode = { ...mockNode, node_type: 'disease', layer: 3 };
    const prompt = buildCasePrompt([diseaseNode], 'CARD', 3, 'canine');
    expect(prompt).toContain('心臟聽診');
    expect(prompt).toContain('history_collection');
    expect(prompt).toContain('case_summary');
  });
});
