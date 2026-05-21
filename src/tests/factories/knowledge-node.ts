import type { KnowledgeNode } from '@/types/knowledge';

let counter = 0;
function uniqueSuffix(): string {
  counter += 1;
  return String(counter).padStart(3, '0');
}

/**
 * 建立測試用 KnowledgeNode。所有欄位都帶合理預設值，
 * 只要塞 overrides 就能客製。預設 specialty=IM、layer=3、disease。
 */
export function makeKnowledgeNode(
  overrides: Partial<KnowledgeNode> = {}
): KnowledgeNode {
  const suffix = uniqueSuffix();
  return {
    id: `TEST-L3-${suffix}`,
    specialty: 'TEST',
    title: `測試節點 ${suffix}`,
    title_en: `Test Node ${suffix}`,
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
    created_at: '2026-01-01T00:00:00Z',
    updated_at: '2026-01-01T00:00:00Z',
    ...overrides,
  };
}

/**
 * 一次建立 n 個節點，方便填表/列表/grid 場景。
 */
export function makeKnowledgeNodes(
  count: number,
  overrideBuilder?: (i: number) => Partial<KnowledgeNode>
): KnowledgeNode[] {
  return Array.from({ length: count }, (_, i) =>
    makeKnowledgeNode(overrideBuilder?.(i))
  );
}
