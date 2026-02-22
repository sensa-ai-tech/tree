import { describe, it, expect, beforeEach } from 'vitest';
import { useKnowledgeStore } from '@/stores/knowledge-store';
import type { KnowledgeNode, KnowledgeEdge } from '@/types/knowledge';

const mockNodes: KnowledgeNode[] = [
  {
    id: 'TEST-L0-001',
    specialty: 'TEST',
    title: '測試總覽',
    title_en: 'Test Overview',
    layer: 0,
    node_type: 'concept',
    difficulty: 1,
    estimated_minutes: 15,
    clinical_relevance: 1,
    exam_relevance: 1,
    prerequisite_ids: [],
    keywords: ['test'],
    species: [],
  },
  {
    id: 'TEST-L3-001',
    specialty: 'TEST',
    title: '測試疾病',
    title_en: 'Test Disease',
    layer: 3,
    node_type: 'disease',
    difficulty: 3,
    estimated_minutes: 30,
    clinical_relevance: 5,
    exam_relevance: 4,
    prerequisite_ids: ['TEST-L0-001'],
    keywords: ['test', 'disease'],
    species: ['canine'],
  },
];

const mockEdges: KnowledgeEdge[] = [
  {
    id: 'TEST-E-001',
    source_id: 'TEST-L0-001',
    target_id: 'TEST-L3-001',
    relationship: 'prerequisite',
    weight: 1.0,
  },
];

describe('knowledge-store', () => {
  beforeEach(() => {
    // 重設 store 狀態
    const store = useKnowledgeStore.getState();
    store.setNodes([]);
    store.setEdges([]);
    store.setPaths([]);
    store.resetFilters();
    store.setError(null);
    store.setLoading(false);
  });

  it('should initialize with empty state', () => {
    const state = useKnowledgeStore.getState();
    expect(state.nodes).toHaveLength(0);
    expect(state.edges).toHaveLength(0);
    expect(state.paths).toHaveLength(0);
    expect(state.isLoading).toBe(false);
    expect(state.error).toBeNull();
  });

  it('should set and retrieve nodes', () => {
    useKnowledgeStore.getState().setNodes(mockNodes);
    const state = useKnowledgeStore.getState();
    expect(state.nodes).toHaveLength(2);
    expect(state.nodes[0].id).toBe('TEST-L0-001');
  });

  it('should set and retrieve edges', () => {
    useKnowledgeStore.getState().setEdges(mockEdges);
    const state = useKnowledgeStore.getState();
    expect(state.edges).toHaveLength(1);
    expect(state.edges[0].relationship).toBe('prerequisite');
  });

  it('should get node by id', () => {
    useKnowledgeStore.getState().setNodes(mockNodes);
    const node = useKnowledgeStore.getState().getNodeById('TEST-L3-001');
    expect(node).toBeDefined();
    expect(node?.title).toBe('測試疾病');
  });

  it('should return undefined for non-existent node', () => {
    useKnowledgeStore.getState().setNodes(mockNodes);
    const node = useKnowledgeStore.getState().getNodeById('NONEXISTENT');
    expect(node).toBeUndefined();
  });

  it('should get edges for a specific node', () => {
    useKnowledgeStore.getState().setNodes(mockNodes);
    useKnowledgeStore.getState().setEdges(mockEdges);
    const edges = useKnowledgeStore.getState().getEdgesForNode('TEST-L0-001');
    expect(edges).toHaveLength(1);
    expect(edges[0].target_id).toBe('TEST-L3-001');
  });

  it('should filter nodes by specialty', () => {
    useKnowledgeStore.getState().setNodes(mockNodes);
    useKnowledgeStore.getState().setFilters({ specialty: 'TEST' });
    const filtered = useKnowledgeStore.getState().getFilteredNodes();
    expect(filtered).toHaveLength(2);
  });

  it('should filter nodes by layer', () => {
    useKnowledgeStore.getState().setNodes(mockNodes);
    useKnowledgeStore.getState().setFilters({ layer: 3 });
    const filtered = useKnowledgeStore.getState().getFilteredNodes();
    expect(filtered).toHaveLength(1);
    expect(filtered[0].id).toBe('TEST-L3-001');
  });

  it('should filter nodes by search text', () => {
    useKnowledgeStore.getState().setNodes(mockNodes);
    useKnowledgeStore.getState().setFilters({ search: '疾病' });
    const filtered = useKnowledgeStore.getState().getFilteredNodes();
    expect(filtered).toHaveLength(1);
  });

  it('should reset filters', () => {
    useKnowledgeStore.getState().setFilters({ specialty: 'TEST', layer: 3 });
    useKnowledgeStore.getState().resetFilters();
    const state = useKnowledgeStore.getState();
    expect(state.filters.specialty).toBeNull();
    expect(state.filters.layer).toBeNull();
  });

  it('should set loading and error states', () => {
    useKnowledgeStore.getState().setLoading(true);
    expect(useKnowledgeStore.getState().isLoading).toBe(true);

    useKnowledgeStore.getState().setError('Something went wrong');
    expect(useKnowledgeStore.getState().error).toBe('Something went wrong');
  });

  it('should select and deselect node', () => {
    useKnowledgeStore.getState().selectNode('TEST-L3-001');
    expect(useKnowledgeStore.getState().selectedNodeId).toBe('TEST-L3-001');

    useKnowledgeStore.getState().selectNode(null);
    expect(useKnowledgeStore.getState().selectedNodeId).toBeNull();
  });
});
