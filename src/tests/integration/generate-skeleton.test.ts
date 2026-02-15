import { describe, it, expect, vi } from 'vitest';
import { buildSkeletonPrompt } from '@/lib/ai/prompts/skeleton';
import { safeParseJson } from '@/lib/ai/parsers/json-parser';
import { validate, skeletonOutputSchema } from '@/lib/ai/parsers/validators';
import type { SkeletonInput } from '@/types/knowledge';

describe('Skeleton Generation Pipeline', () => {
  const input: SkeletonInput = {
    specialty_name: '心臟科',
    specialty_name_en: 'Cardiology',
    specialty_abbr: 'CARD',
  };

  it('should generate a valid prompt', () => {
    const prompt = buildSkeletonPrompt(input);
    expect(typeof prompt).toBe('string');
    expect(prompt.length).toBeGreaterThan(100);
  });

  it('should parse mock skeleton response', () => {
    const mockResponse = JSON.stringify({
      specialty: 'CARD',
      total_nodes: 2,
      estimated_total_hours: 5,
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
          tags: ['基礎'],
        },
        {
          id: 'CARD_002',
          specialty: 'CARD',
          title: '心臟解剖',
          title_en: 'Cardiac Anatomy',
          layer: 1,
          node_type: 'concept',
          difficulty: 2,
          estimated_minutes: 45,
          clinical_relevance: 4,
          exam_relevance: 4,
          tags: ['解剖'],
        },
      ],
      validation_report: {
        completeness_score: 0.7,
        issues_found: ['缺少 Layer 5 治療節點'],
        taiwan_specific_additions: ['心絲蟲相關節點'],
      },
    });

    const parsed = safeParseJson(mockResponse);
    const result = validate(skeletonOutputSchema, parsed);
    expect(result.success).toBe(true);
  });

  it('should handle markdown-wrapped response', () => {
    const mockResponse = '```json\n' + JSON.stringify({
      specialty: 'CARD',
      total_nodes: 1,
      estimated_total_hours: 1,
      nodes: [{
        id: 'CARD_001',
        specialty: 'CARD',
        title: 'Test',
        layer: 0,
        node_type: 'concept',
        difficulty: 1,
        estimated_minutes: 15,
        clinical_relevance: 1,
        exam_relevance: 1,
      }],
      validation_report: {
        completeness_score: 0.5,
        issues_found: [],
        taiwan_specific_additions: [],
      },
    }) + '\n```';

    const parsed = safeParseJson(mockResponse);
    const result = validate(skeletonOutputSchema, parsed);
    expect(result.success).toBe(true);
  });

  it('should reject invalid skeleton data', () => {
    const invalid = { specialty: '', nodes: [] };
    const result = validate(skeletonOutputSchema, invalid);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.errors.length).toBeGreaterThan(0);
    }
  });
});
