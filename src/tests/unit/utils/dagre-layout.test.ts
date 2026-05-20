import { describe, expect, it } from 'vitest';
import type { Node, Edge } from '@xyflow/react';
import { getLayoutedElements } from '@/lib/utils/dagre-layout';

function makeNode(id: string): Node {
  return {
    id,
    position: { x: 0, y: 0 },
    data: { label: id },
  };
}

function makeEdge(source: string, target: string): Edge {
  return { id: `${source}->${target}`, source, target };
}

describe('getLayoutedElements', () => {
  it('returns same number of nodes and edges as input', () => {
    const nodes = ['A', 'B', 'C'].map(makeNode);
    const edges = [makeEdge('A', 'B'), makeEdge('B', 'C')];
    const result = getLayoutedElements(nodes, edges);
    expect(result.nodes).toHaveLength(3);
    expect(result.edges).toHaveLength(2);
  });

  it('assigns numeric positions to each node', () => {
    const nodes = ['A', 'B'].map(makeNode);
    const edges = [makeEdge('A', 'B')];
    const result = getLayoutedElements(nodes, edges);
    for (const n of result.nodes) {
      expect(typeof n.position.x).toBe('number');
      expect(typeof n.position.y).toBe('number');
      expect(Number.isFinite(n.position.x)).toBe(true);
      expect(Number.isFinite(n.position.y)).toBe(true);
    }
  });

  it('overwrites initial node positions', () => {
    const nodes: Node[] = [
      { id: 'A', position: { x: 9999, y: 9999 }, data: {} },
      { id: 'B', position: { x: 9999, y: 9999 }, data: {} },
    ];
    const edges = [makeEdge('A', 'B')];
    const result = getLayoutedElements(nodes, edges);
    expect(result.nodes[0]?.position.x).not.toBe(9999);
    expect(result.nodes[1]?.position.x).not.toBe(9999);
  });

  it('preserves other node properties (data, id)', () => {
    const nodes: Node[] = [
      { id: 'IM-L3-001', position: { x: 0, y: 0 }, data: { label: '貓 CKD', special: true } },
    ];
    const result = getLayoutedElements(nodes, []);
    expect(result.nodes[0]?.id).toBe('IM-L3-001');
    expect(result.nodes[0]?.data).toEqual({ label: '貓 CKD', special: true });
  });

  it('separates parent from child in TB direction (default)', () => {
    const nodes = ['parent', 'child'].map(makeNode);
    const edges = [makeEdge('parent', 'child')];
    const result = getLayoutedElements(nodes, edges);
    const parent = result.nodes.find((n) => n.id === 'parent');
    const child = result.nodes.find((n) => n.id === 'child');
    // TB = top-to-bottom，parent.y 應該小於 child.y
    expect(parent!.position.y).toBeLessThan(child!.position.y);
  });

  it('honours LR direction (left → right)', () => {
    const nodes = ['left', 'right'].map(makeNode);
    const edges = [makeEdge('left', 'right')];
    const result = getLayoutedElements(nodes, edges, { direction: 'LR' });
    const left = result.nodes.find((n) => n.id === 'left');
    const right = result.nodes.find((n) => n.id === 'right');
    expect(left!.position.x).toBeLessThan(right!.position.x);
  });

  it('handles empty graph without throwing', () => {
    const result = getLayoutedElements([], []);
    expect(result.nodes).toEqual([]);
    expect(result.edges).toEqual([]);
  });

  it('handles disconnected nodes (no edges)', () => {
    const nodes = ['A', 'B', 'C'].map(makeNode);
    const result = getLayoutedElements(nodes, []);
    expect(result.nodes).toHaveLength(3);
    // 每個節點都應有有效位置
    for (const n of result.nodes) {
      expect(Number.isFinite(n.position.x)).toBe(true);
    }
  });

  it('positions multiple children at distinct x coordinates', () => {
    const nodes = ['root', 'c1', 'c2', 'c3'].map(makeNode);
    const edges = [
      makeEdge('root', 'c1'),
      makeEdge('root', 'c2'),
      makeEdge('root', 'c3'),
    ];
    const result = getLayoutedElements(nodes, edges);
    const children = result.nodes.filter((n) => n.id !== 'root');
    const xs = children.map((n) => n.position.x);
    // 三個 child 至少有 2 個不同的 x（節點不能完全重疊）
    expect(new Set(xs).size).toBeGreaterThanOrEqual(2);
  });

  it('produces consistent positions across runs (deterministic given same input)', () => {
    const nodes = ['A', 'B', 'C'].map(makeNode);
    const edges = [makeEdge('A', 'B'), makeEdge('B', 'C')];
    const r1 = getLayoutedElements(nodes, edges);
    const r2 = getLayoutedElements(nodes, edges);
    for (let i = 0; i < 3; i++) {
      expect(r1.nodes[i]!.position).toEqual(r2.nodes[i]!.position);
    }
  });

  it('respects rankSep — increasing it widens parent-child gap', () => {
    const nodes = ['parent', 'child'].map(makeNode);
    const edges = [makeEdge('parent', 'child')];
    const tight = getLayoutedElements(nodes, edges, { rankSep: 50 });
    const loose = getLayoutedElements(nodes, edges, { rankSep: 300 });
    const gapTight = tight.nodes[1]!.position.y - tight.nodes[0]!.position.y;
    const gapLoose = loose.nodes[1]!.position.y - loose.nodes[0]!.position.y;
    expect(gapLoose).toBeGreaterThan(gapTight);
  });
});
