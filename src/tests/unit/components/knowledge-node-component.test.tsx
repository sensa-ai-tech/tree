import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ReactFlowProvider, type NodeProps } from '@xyflow/react';
import {
  KnowledgeNodeComponent,
  type KnowledgeFlowNode,
  type KnowledgeNodeData,
} from '@/components/features/KnowledgeNodeComponent';

/**
 * KnowledgeNodeComponent 是 @xyflow/react 的 custom node。
 * 必須包在 ReactFlowProvider 裡才能用 Handle，不然會丟 "useStoreApi" error。
 */

function makeNodeProps(
  data: Partial<KnowledgeNodeData> = {}
): NodeProps<KnowledgeFlowNode> {
  const fullData: KnowledgeNodeData = {
    label: '貓 CKD',
    color: '#4f46e5',
    isHighlighted: false,
    layer: 3,
    ...data,
  };
  return {
    id: 'IM-L3-001',
    type: 'knowledge',
    data: fullData,
    selected: false,
    dragging: false,
    isConnectable: true,
    positionAbsoluteX: 0,
    positionAbsoluteY: 0,
    zIndex: 0,
    width: 220,
    height: 72,
    sourcePosition: undefined,
    targetPosition: undefined,
    dragHandle: undefined,
    parentId: undefined,
  } as unknown as NodeProps<KnowledgeFlowNode>;
}

function renderNode(data: Partial<KnowledgeNodeData> = {}) {
  return render(
    <ReactFlowProvider>
      <KnowledgeNodeComponent {...makeNodeProps(data)} />
    </ReactFlowProvider>
  );
}

describe('KnowledgeNodeComponent: label and layer', () => {
  it('renders label text', () => {
    const { container } = renderNode({ label: '心律不整' });
    expect(container.textContent).toContain('心律不整');
  });

  it('renders layer badge in shorthand form (L0-L5)', () => {
    for (const layer of [0, 1, 2, 3, 4, 5]) {
      const { container } = renderNode({ layer });
      expect(container.textContent).toContain(`L${layer}`);
    }
  });

  it('falls back to L{n} for layer outside 0-5 mapping', () => {
    const { container } = renderNode({ layer: 7 });
    expect(container.textContent).toContain('L7');
  });

  it('breaks long labels with word-break style', () => {
    const longLabel = '貓慢性腎臟病第三期合併蛋白尿與高血壓的多系統管理';
    const { container } = renderNode({ label: longLabel });
    expect(container.textContent).toContain(longLabel);
  });
});

describe('KnowledgeNodeComponent: highlight visual differences', () => {
  it('uses transparent fill (xx22) when not highlighted', () => {
    const { container } = renderNode({ color: '#4f46e5', isHighlighted: false });
    const body = container.querySelector('.knowledge-node-body') as HTMLElement;
    expect(body).toBeTruthy();
    expect(body.style.background).toMatch(/22|rgb/i);
  });

  it('uses solid color fill when highlighted', () => {
    const { container } = renderNode({ color: '#4f46e5', isHighlighted: true });
    const body = container.querySelector('.knowledge-node-body') as HTMLElement;
    // 高亮時 background 為 color 不含 alpha
    expect(body.style.background).not.toMatch(/22$/);
  });

  it('uses white text when highlighted', () => {
    const { container } = renderNode({ isHighlighted: true });
    const text = container.querySelector('.knowledge-node-body > div:last-child') as HTMLElement;
    expect(text.style.color).toBe('rgb(255, 255, 255)');
  });

  it('uses dark text when not highlighted', () => {
    const { container } = renderNode({ isHighlighted: false });
    const text = container.querySelector('.knowledge-node-body > div:last-child') as HTMLElement;
    // 應為 #1f2937 (rgb(31, 41, 55))
    expect(text.style.color).toBe('rgb(31, 41, 55)');
  });

  it('renders heavier font-weight when highlighted', () => {
    const { container } = renderNode({ isHighlighted: true });
    const text = container.querySelector('.knowledge-node-body > div:last-child') as HTMLElement;
    expect(text.style.fontWeight).toBe('700');
  });
});

describe('KnowledgeNodeComponent: ReactFlow handles', () => {
  it('renders two Handle elements (target on top, source on bottom)', () => {
    const { container } = renderNode();
    // ReactFlow Handles are rendered as <div class="react-flow__handle ...">
    const handles = container.querySelectorAll('.react-flow__handle');
    expect(handles.length).toBe(2);
  });

  it('handles use node color', () => {
    const { container } = renderNode({ color: '#16a34a' });
    const handle = container.querySelector('.react-flow__handle') as HTMLElement;
    expect(handle.style.background).toMatch(/16a34a|rgb\(22, 163, 74\)/i);
  });
});
