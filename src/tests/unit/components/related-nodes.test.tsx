import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RelatedNodes } from '@/components/features/RelatedNodes';
import {
  makeKnowledgeNode,
  makeKnowledgeNodes,
  makeKnowledgeEdge,
} from '@/tests/factories';

describe('RelatedNodes: dedup by node id', () => {
  it('renders a neighbor connected by two directed edges only once', () => {
    const a = makeKnowledgeNode({ id: 'A', title: '節點A' });
    const b = makeKnowledgeNode({ id: 'B', title: '節點B' });
    // B is a neighbor via BOTH an outgoing and an incoming edge (a bidirectional
    // relationship modeled as two directed edges) — it must render exactly once.
    const edges = [
      makeKnowledgeEdge({ source_node_id: 'A', target_node_id: 'B', relation_type: 'prerequisite' }),
      makeKnowledgeEdge({ source_node_id: 'B', target_node_id: 'A', relation_type: 'differential' }),
    ];
    render(<RelatedNodes currentNodeId="A" edges={edges} allNodes={[a, b]} />);
    expect(screen.getAllByRole('link')).toHaveLength(1);
    expect(screen.getByText('節點B')).toBeInTheDocument();
  });

  it('keeps distinct neighbors separate', () => {
    const a = makeKnowledgeNode({ id: 'A' });
    const b = makeKnowledgeNode({ id: 'B' });
    const c = makeKnowledgeNode({ id: 'C' });
    const edges = [
      makeKnowledgeEdge({ source_node_id: 'A', target_node_id: 'B' }),
      makeKnowledgeEdge({ source_node_id: 'A', target_node_id: 'C' }),
    ];
    render(<RelatedNodes currentNodeId="A" edges={edges} allNodes={[a, b, c]} />);
    expect(screen.getAllByRole('link')).toHaveLength(2);
  });
});

describe('RelatedNodes: rendering & edge semantics', () => {
  it('returns null when no edges touch the current node', () => {
    const a = makeKnowledgeNode({ id: 'A' });
    const b = makeKnowledgeNode({ id: 'B' });
    const c = makeKnowledgeNode({ id: 'C' });
    const edges = [makeKnowledgeEdge({ source_node_id: 'B', target_node_id: 'C' })];
    const { container } = render(
      <RelatedNodes currentNodeId="A" edges={edges} allNodes={[a, b, c]} />
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('skips an edge whose neighbor is missing from allNodes', () => {
    const a = makeKnowledgeNode({ id: 'A' });
    const edges = [makeKnowledgeEdge({ source_node_id: 'A', target_node_id: 'MISSING' })];
    const { container } = render(
      <RelatedNodes currentNodeId="A" edges={edges} allNodes={[a]} />
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('labels an outgoing prerequisite edge with → and 前置知識', () => {
    const a = makeKnowledgeNode({ id: 'A' });
    const b = makeKnowledgeNode({ id: 'B', title: '節點B' });
    const edges = [
      makeKnowledgeEdge({ source_node_id: 'A', target_node_id: 'B', relation_type: 'prerequisite' }),
    ];
    const { container } = render(
      <RelatedNodes currentNodeId="A" edges={edges} allNodes={[a, b]} />
    );
    expect(container.textContent).toContain('前置知識');
    expect(container.textContent).toContain('→');
  });

  it('labels an incoming differential edge with ← and 鑑別診斷', () => {
    const a = makeKnowledgeNode({ id: 'A' });
    const b = makeKnowledgeNode({ id: 'B', title: '節點B' });
    const edges = [
      makeKnowledgeEdge({ source_node_id: 'B', target_node_id: 'A', relation_type: 'differential' }),
    ];
    const { container } = render(
      <RelatedNodes currentNodeId="A" edges={edges} allNodes={[a, b]} />
    );
    expect(container.textContent).toContain('鑑別診斷');
    expect(container.textContent).toContain('←');
  });

  it('slices to 6 cards and shows the overflow line for >6 neighbors', () => {
    const a = makeKnowledgeNode({ id: 'A' });
    const neighbors = makeKnowledgeNodes(8);
    const edges = neighbors.map((n) =>
      makeKnowledgeEdge({ source_node_id: 'A', target_node_id: n.id })
    );
    render(<RelatedNodes currentNodeId="A" edges={edges} allNodes={[a, ...neighbors]} />);
    expect(screen.getAllByRole('link')).toHaveLength(6);
    expect(screen.getByText('還有 2 個相關節點')).toBeInTheDocument();
  });
});
