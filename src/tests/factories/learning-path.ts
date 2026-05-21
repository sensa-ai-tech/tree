import type { LearningPath, PathNode } from '@/types/knowledge';

let counter = 0;

export function makePathNode(overrides: Partial<PathNode> = {}): PathNode {
  return {
    node_id: 'IM-L0-001',
    is_required: true,
    phase: 'basic',
    learning_note: null,
    ...overrides,
  };
}

/**
 * 預設帶 3 個 node、specialty=IM、is_published=true。
 */
export function makeLearningPath(
  overrides: Partial<LearningPath> = {}
): LearningPath {
  counter += 1;
  return {
    id: `PATH-IM-${counter}`,
    title: `測試路徑 ${counter}`,
    description: '從常見疾病開始的學習路徑',
    specialty: 'IM',
    target_audience: '實習獸醫',
    estimated_hours: 12,
    path_nodes: [
      makePathNode({ node_id: 'IM-L0-001', phase: 'basic' }),
      makePathNode({ node_id: 'IM-L1-001', phase: 'basic' }),
      makePathNode({ node_id: 'IM-L3-001', phase: 'advanced', is_required: false }),
    ],
    milestones: [],
    has_certificate: false,
    status: 'published',
    ...overrides,
  };
}
