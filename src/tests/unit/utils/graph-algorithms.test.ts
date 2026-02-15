import { describe, it, expect } from 'vitest';
import {
  topologicalSort,
  detectCycles,
  findOrphanNodes,
  findShortestPath,
  getConnectedComponents,
  getPrerequisiteChain,
  validatePathOrder,
} from '@/lib/utils/graph-algorithms';
import type { KnowledgeEdge } from '@/types/knowledge';

function makeEdge(
  source: string,
  target: string,
  type: string = 'prerequisite',
  bidirectional = false
): KnowledgeEdge {
  return {
    id: `${source}-${target}`,
    source_node_id: source,
    target_node_id: target,
    relation_type: type as KnowledgeEdge['relation_type'],
    weight: 1,
    description: null,
    bidirectional,
    unlock_condition: null,
  };
}

describe('topologicalSort', () => {
  it('should sort nodes in dependency order', () => {
    const nodes = ['A', 'B', 'C', 'D'];
    const edges = [
      makeEdge('A', 'B'),
      makeEdge('B', 'C'),
      makeEdge('A', 'D'),
    ];
    const sorted = topologicalSort(nodes, edges);
    expect(sorted.indexOf('A')).toBeLessThan(sorted.indexOf('B'));
    expect(sorted.indexOf('B')).toBeLessThan(sorted.indexOf('C'));
    expect(sorted.indexOf('A')).toBeLessThan(sorted.indexOf('D'));
  });

  it('should return all nodes for empty edges', () => {
    const nodes = ['A', 'B', 'C'];
    const sorted = topologicalSort(nodes, []);
    expect(sorted).toHaveLength(3);
  });

  it('should only consider prerequisite and builds_on edges', () => {
    const nodes = ['A', 'B', 'C'];
    const edges = [
      makeEdge('A', 'B', 'prerequisite'),
      makeEdge('C', 'A', 'cross_specialty'),
    ];
    const sorted = topologicalSort(nodes, edges);
    expect(sorted.indexOf('A')).toBeLessThan(sorted.indexOf('B'));
    expect(sorted).toContain('C');
  });
});

describe('detectCycles', () => {
  it('should detect no cycles in DAG', () => {
    const edges = [makeEdge('A', 'B'), makeEdge('B', 'C')];
    const cycles = detectCycles(edges);
    expect(cycles).toHaveLength(0);
  });

  it('should detect a simple cycle', () => {
    const edges = [
      makeEdge('A', 'B'),
      makeEdge('B', 'C'),
      makeEdge('C', 'A'),
    ];
    const cycles = detectCycles(edges);
    expect(cycles.length).toBeGreaterThan(0);
  });
});

describe('findOrphanNodes', () => {
  it('should find nodes with no edges', () => {
    const nodes = ['A', 'B', 'C', 'D'];
    const edges = [makeEdge('A', 'B')];
    const orphans = findOrphanNodes(nodes, edges);
    expect(orphans).toContain('C');
    expect(orphans).toContain('D');
    expect(orphans).not.toContain('A');
    expect(orphans).not.toContain('B');
  });

  it('should return all nodes when no edges', () => {
    const orphans = findOrphanNodes(['A', 'B'], []);
    expect(orphans).toEqual(['A', 'B']);
  });

  it('should return empty when all connected', () => {
    const edges = [makeEdge('A', 'B'), makeEdge('B', 'C')];
    const orphans = findOrphanNodes(['A', 'B', 'C'], edges);
    expect(orphans).toHaveLength(0);
  });
});

describe('findShortestPath', () => {
  it('should find direct path', () => {
    const edges = [makeEdge('A', 'B', 'prerequisite')];
    const path = findShortestPath('A', 'B', edges);
    expect(path).toEqual(['A', 'B']);
  });

  it('should find multi-hop path', () => {
    const edges = [
      makeEdge('A', 'B', 'prerequisite'),
      makeEdge('B', 'C', 'prerequisite'),
      makeEdge('C', 'D', 'prerequisite'),
    ];
    const path = findShortestPath('A', 'D', edges);
    expect(path).toEqual(['A', 'B', 'C', 'D']);
  });

  it('should return null when no path exists', () => {
    const edges = [makeEdge('A', 'B', 'prerequisite')];
    const path = findShortestPath('A', 'C', edges);
    expect(path).toBeNull();
  });

  it('should handle bidirectional edges', () => {
    const edges = [makeEdge('A', 'B', 'same_system', true)];
    const path = findShortestPath('B', 'A', edges);
    expect(path).toEqual(['B', 'A']);
  });
});

describe('getConnectedComponents', () => {
  it('should find single component', () => {
    const nodes = ['A', 'B', 'C'];
    const edges = [makeEdge('A', 'B'), makeEdge('B', 'C')];
    const components = getConnectedComponents(nodes, edges);
    expect(components).toHaveLength(1);
    expect(components[0]).toHaveLength(3);
  });

  it('should find multiple components', () => {
    const nodes = ['A', 'B', 'C', 'D'];
    const edges = [makeEdge('A', 'B'), makeEdge('C', 'D')];
    const components = getConnectedComponents(nodes, edges);
    expect(components).toHaveLength(2);
  });

  it('should treat isolated nodes as separate components', () => {
    const components = getConnectedComponents(['A', 'B'], []);
    expect(components).toHaveLength(2);
  });
});

describe('getPrerequisiteChain', () => {
  it('should find prerequisite chain', () => {
    const edges = [
      makeEdge('A', 'B'),
      makeEdge('B', 'C'),
    ];
    const chain = getPrerequisiteChain('C', edges);
    expect(chain).toContain('B');
    expect(chain).toContain('A');
  });

  it('should return empty for node with no prerequisites', () => {
    const edges = [makeEdge('A', 'B')];
    const chain = getPrerequisiteChain('A', edges);
    expect(chain).toHaveLength(0);
  });
});

describe('validatePathOrder', () => {
  it('should validate correct order', () => {
    const edges = [makeEdge('A', 'B'), makeEdge('B', 'C')];
    const result = validatePathOrder(['A', 'B', 'C'], edges);
    expect(result.valid).toBe(true);
    expect(result.violations).toHaveLength(0);
  });

  it('should detect order violations', () => {
    const edges = [makeEdge('A', 'B')];
    const result = validatePathOrder(['B', 'A'], edges);
    expect(result.valid).toBe(false);
    expect(result.violations.length).toBeGreaterThan(0);
  });
});
