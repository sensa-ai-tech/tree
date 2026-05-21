import { describe, expect, it } from 'vitest';
import { buildEdgesPrompt, buildCrossSpecialtyEdgesPrompt } from '@/lib/ai/prompts/edges';
import { buildPathsPrompt } from '@/lib/ai/prompts/paths';
import {
  buildContentReviewPrompt,
  buildQuestionReviewPrompt,
} from '@/lib/ai/prompts/review';
import { buildVisualsPrompt, buildMermaidPrompt } from '@/lib/ai/prompts/visuals';
import {
  buildSkeletonValidationPrompt,
  buildBatchSkeletonPrompt,
} from '@/lib/ai/prompts/skeleton';
import type { KnowledgeNode, KnowledgeEdge, SkeletonInput } from '@/types/knowledge';

function makeNode(id: string, overrides: Partial<KnowledgeNode> = {}): KnowledgeNode {
  return {
    id,
    specialty: 'CARD',
    title: '心臟測試節點',
    title_en: 'Cardiac Test Node',
    layer: 3,
    node_type: 'disease',
    difficulty: 3,
    estimated_minutes: 45,
    clinical_relevance: 4,
    exam_relevance: 4,
    status: 'published',
    version: 1,
    tags: ['test'],
    encyclopedia_link: null,
    cross_specialty_notes: null,
    created_at: '2026-01-01',
    updated_at: '2026-01-01',
    ...overrides,
  };
}

describe('buildEdgesPrompt', () => {
  it('embeds specialty abbreviation in prompt', () => {
    const prompt = buildEdgesPrompt([makeNode('CARD_001')], 'CARD');
    expect(prompt).toContain('CARD');
  });

  it('lists each node id + title + layer + type', () => {
    const prompt = buildEdgesPrompt(
      [makeNode('CARD_001', { title: 'MMVD', layer: 3, node_type: 'disease' })],
      'CARD'
    );
    expect(prompt).toContain('CARD_001');
    expect(prompt).toContain('MMVD');
    expect(prompt).toContain('L3');
    expect(prompt).toContain('disease');
  });

  it('lists all 8 relation types', () => {
    const prompt = buildEdgesPrompt([makeNode('A')], 'CARD');
    for (const t of [
      'prerequisite',
      'builds_on',
      'cross_specialty',
      'differential',
      'clinical_apply',
      'complication',
      'same_system',
      'drug_related',
    ]) {
      expect(prompt).toContain(t);
    }
  });

  it('includes JSON output schema with statistics', () => {
    const prompt = buildEdgesPrompt([makeNode('A')], 'CARD');
    expect(prompt).toContain('edges');
    expect(prompt).toContain('source_node_id');
    expect(prompt).toContain('orphan_nodes');
    expect(prompt).toContain('statistics');
  });

  it('produces a prompt > 200 chars for non-trivial input', () => {
    const prompt = buildEdgesPrompt([makeNode('A')], 'CARD');
    expect(prompt.length).toBeGreaterThan(200);
  });
});

describe('buildCrossSpecialtyEdgesPrompt', () => {
  it('lists both source and target node groups with specialty markers', () => {
    const prompt = buildCrossSpecialtyEdgesPrompt(
      [makeNode('IM_001', { specialty: 'IM' })],
      [makeNode('CARD_001', { specialty: 'CARD' })]
    );
    expect(prompt).toContain('IM_001');
    expect(prompt).toContain('CARD_001');
    expect(prompt).toContain('IM');
    expect(prompt).toContain('CARD');
  });

  it('lists cross_specialty allowed relation types', () => {
    const prompt = buildCrossSpecialtyEdgesPrompt(
      [makeNode('A')],
      [makeNode('B')]
    );
    expect(prompt).toContain('cross_specialty');
    expect(prompt).toContain('differential');
    expect(prompt).toContain('complication');
    expect(prompt).toContain('drug_related');
  });
});

describe('buildPathsPrompt', () => {
  const edges: KnowledgeEdge[] = [
    {
      id: 'edge-1',
      source_node_id: 'A',
      target_node_id: 'B',
      relation_type: 'prerequisite',
      weight: 1,
      description: null,
      bidirectional: false,
      unlock_condition: null,
    },
  ];

  it('embeds specialty name and edge count', () => {
    const prompt = buildPathsPrompt([makeNode('A')], edges, '心臟科');
    expect(prompt).toContain('心臟科');
    expect(prompt).toMatch(/邊數量[：:]\s*1/);
  });

  it('describes all 3 path types (新手/臨床/專科)', () => {
    const prompt = buildPathsPrompt([makeNode('A')], [], 'CARD');
    expect(prompt).toContain('新手入門');
    expect(prompt).toContain('臨床快速上手');
    expect(prompt).toContain('專科深造');
  });

  it('lists node with id + title + layer + difficulty + estimated_minutes', () => {
    const prompt = buildPathsPrompt(
      [makeNode('CARD_001', { title: '心衰竭', layer: 3, difficulty: 4, estimated_minutes: 60 })],
      [],
      'CARD'
    );
    expect(prompt).toContain('CARD_001');
    expect(prompt).toContain('心衰竭');
    expect(prompt).toContain('L3');
    expect(prompt).toContain('難度4');
    expect(prompt).toContain('60min');
  });

  it('includes milestones in output schema', () => {
    const prompt = buildPathsPrompt([makeNode('A')], [], 'CARD');
    expect(prompt).toContain('milestones');
    expect(prompt).toContain('checkpoint_type');
    expect(prompt).toContain('pass_criteria');
  });
});

describe('buildContentReviewPrompt', () => {
  it('embeds node title and content JSON', () => {
    const prompt = buildContentReviewPrompt('貓 CKD', '{"summary":"test"}');
    expect(prompt).toContain('貓 CKD');
    expect(prompt).toContain('{"summary":"test"}');
  });

  it('lists 4 scoring dimensions', () => {
    const prompt = buildContentReviewPrompt('X', '{}');
    expect(prompt).toContain('醫學準確性');
    expect(prompt).toContain('完整性');
    expect(prompt).toContain('教學品質');
    expect(prompt).toContain('一致性');
  });

  it('defines review_status enum in output schema', () => {
    const prompt = buildContentReviewPrompt('X', '{}');
    // 不用 /s flag（避 ES2018 目標）；改用 [\s\S] 代 .
    expect(prompt).toMatch(/approved[\s\S]*minor_revision[\s\S]*major_revision[\s\S]*reject/);
  });
});

describe('buildQuestionReviewPrompt', () => {
  it('embeds question JSON and node title', () => {
    const prompt = buildQuestionReviewPrompt('Quiz Topic', '[{"q":"t"}]');
    expect(prompt).toContain('Quiz Topic');
    expect(prompt).toContain('[{"q":"t"}]');
  });

  it('includes A/B/C/D answer distribution dimensions', () => {
    const prompt = buildQuestionReviewPrompt('X', '[]');
    expect(prompt).toContain('answer_distribution');
    expect(prompt).toContain('"A":');
    expect(prompt).toContain('"D":');
  });
});

describe('buildVisualsPrompt', () => {
  it('embeds node title, title_en, type, layer', () => {
    const prompt = buildVisualsPrompt(
      makeNode('X', { title: '心臟解剖', title_en: 'Cardiac Anatomy', layer: 1 })
    );
    expect(prompt).toContain('心臟解剖');
    expect(prompt).toContain('Cardiac Anatomy');
    expect(prompt).toContain('Layer 1');
  });

  it('handles null title_en gracefully', () => {
    const prompt = buildVisualsPrompt(makeNode('X', { title_en: null }));
    expect(prompt).toContain('心臟測試節點');
    expect(prompt).not.toContain('null');
  });

  it('lists 8 supported visual types', () => {
    const prompt = buildVisualsPrompt(makeNode('X'));
    for (const t of [
      'annotated_image',
      'flowchart',
      'comparison_table',
      'timeline',
      'animated_diagram',
      'interactive_overlay',
      'waveform',
      'mind_map',
    ]) {
      expect(prompt).toContain(t);
    }
  });

  it('requests 2-4 visuals per node', () => {
    const prompt = buildVisualsPrompt(makeNode('X'));
    expect(prompt).toMatch(/2-4/);
  });
});

describe('buildMermaidPrompt', () => {
  it('embeds title and content', () => {
    const prompt = buildMermaidPrompt('診斷流程', '若 BUN > 30 則...');
    expect(prompt).toContain('診斷流程');
    expect(prompt).toContain('若 BUN > 30');
  });

  it('instructs raw output without code block fences', () => {
    const prompt = buildMermaidPrompt('X', 'Y');
    expect(prompt).toContain('不要 code block');
    expect(prompt).toMatch(/graph TD|flowchart TD/);
  });
});

describe('buildSkeletonValidationPrompt', () => {
  it('embeds specialty and JSON', () => {
    const prompt = buildSkeletonValidationPrompt('{"x":1}', '心臟科');
    expect(prompt).toContain('心臟科');
    expect(prompt).toContain('{"x":1}');
  });

  it('asks for completeness_score field in output', () => {
    const prompt = buildSkeletonValidationPrompt('{}', '心臟科');
    expect(prompt).toContain('completeness_score');
    expect(prompt).toContain('suggested_modifications');
  });
});

describe('buildBatchSkeletonPrompt', () => {
  it('lists each specialty with full label', () => {
    const inputs: SkeletonInput[] = [
      { specialty_name: '心臟科', specialty_name_en: 'Cardiology', specialty_abbr: 'CARD' },
      { specialty_name: '內科', specialty_name_en: 'Internal Medicine', specialty_abbr: 'IM' },
    ];
    const prompt = buildBatchSkeletonPrompt(inputs);
    expect(prompt).toContain('心臟科');
    expect(prompt).toContain('Cardiology');
    expect(prompt).toContain('CARD');
    expect(prompt).toContain('內科');
    expect(prompt).toContain('Internal Medicine');
    expect(prompt).toContain('IM');
  });

  it('asks for JSON array output', () => {
    const prompt = buildBatchSkeletonPrompt([
      { specialty_name: 'A', specialty_name_en: 'A', specialty_abbr: 'A' },
    ]);
    expect(prompt).toContain('JSON 陣列');
  });
});
