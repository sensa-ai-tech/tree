import type { KnowledgeEdge } from '@/types/knowledge';

let counter = 0;

/**
 * 建立 KnowledgeEdge。預設 prerequisite 類型、weight=1。
 */
export function makeKnowledgeEdge(
  overrides: Partial<KnowledgeEdge> = {}
): KnowledgeEdge {
  counter += 1;
  return {
    id: `edge-${counter}`,
    source_node_id: 'TEST-L1-001',
    target_node_id: 'TEST-L3-001',
    relation_type: 'prerequisite',
    weight: 1,
    description: null,
    bidirectional: false,
    unlock_condition: null,
    ...overrides,
  };
}
