import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { NodeContent } from '@/components/features/NodeContent';
import type { NodeContent as NodeContentType } from '@/types/knowledge';

function makeContent(overrides: Partial<NodeContentType> = {}): NodeContentType {
  return {
    id: 'content-1',
    node_id: 'IM-L3-001',
    version: 1,
    summary: '貓 CKD 是常見的老年貓內科疾病',
    learning_objectives: ['理解 IRIS 分期', '熟悉治療策略'],
    key_points: ['限磷從 Stage 2 開始', 'SDMA 早於 Cre'],
    body: '## 病理機制\n\n慢性腎臟病導致 nephron 進行性流失。',
    clinical_pearl: 'Stage 4 預後不佳，需與飼主討論安寧',
    common_mistakes: ['忘記檢查血壓', '太晚限磷'],
    disease_data: null,
    diagnostic_data: null,
    procedure_data: null,
    visual_placeholders: [],
    interactive_placeholders: [],
    drug_api_links: [],
    references: [],
    is_current: true,
    created_at: '2026-01-01T00:00:00Z',
    ...overrides,
  };
}

describe('NodeContent: 三態（loading/error/empty）', () => {
  it('renders skeleton loaders when isLoading=true', () => {
    const { container } = render(
      <NodeContent content={null} isLoading={true} error={null} />
    );
    // Skeleton 元件會用 animate-pulse class
    expect(container.querySelector('.animate-pulse')).toBeTruthy();
  });

  it('renders error banner when error provided', () => {
    render(
      <NodeContent content={null} isLoading={false} error="連線逾時" />
    );
    expect(screen.getByText('載入內容失敗')).toBeInTheDocument();
    expect(screen.getByText('連線逾時')).toBeInTheDocument();
  });

  it('renders 尚無內容 when content is null and not loading', () => {
    render(<NodeContent content={null} isLoading={false} error={null} />);
    expect(screen.getByText('尚無內容')).toBeInTheDocument();
  });

  it('does NOT show error banner when isLoading is true (loading takes precedence)', () => {
    render(
      <NodeContent content={null} isLoading={true} error="should not show" />
    );
    expect(screen.queryByText('載入內容失敗')).not.toBeInTheDocument();
  });
});

describe('NodeContent: rendered sections', () => {
  it('renders summary text', () => {
    render(
      <NodeContent content={makeContent()} isLoading={false} error={null} />
    );
    expect(screen.getByText('貓 CKD 是常見的老年貓內科疾病')).toBeInTheDocument();
  });

  it('renders all key_points as list items', () => {
    render(
      <NodeContent content={makeContent()} isLoading={false} error={null} />
    );
    expect(screen.getByText(/限磷從 Stage 2 開始/)).toBeInTheDocument();
    expect(screen.getByText(/SDMA 早於 Cre/)).toBeInTheDocument();
    expect(screen.getByText('重點整理')).toBeInTheDocument();
  });

  it('renders clinical_pearl section when present', () => {
    render(
      <NodeContent content={makeContent()} isLoading={false} error={null} />
    );
    expect(screen.getByText('臨床珍珠')).toBeInTheDocument();
    expect(screen.getByText(/Stage 4 預後不佳/)).toBeInTheDocument();
  });

  it('renders common_mistakes section when array non-empty', () => {
    render(
      <NodeContent content={makeContent()} isLoading={false} error={null} />
    );
    expect(screen.getByText('常見錯誤')).toBeInTheDocument();
    expect(screen.getByText(/忘記檢查血壓/)).toBeInTheDocument();
  });

  it('renders markdown body with heading', () => {
    const { container } = render(
      <NodeContent content={makeContent()} isLoading={false} error={null} />
    );
    expect(container.querySelector('h2')?.textContent).toMatch(/病理機制/);
  });
});

describe('NodeContent: conditional sections', () => {
  it('hides 臨床珍珠 when clinical_pearl is empty string', () => {
    render(
      <NodeContent
        content={makeContent({ clinical_pearl: '' })}
        isLoading={false}
        error={null}
      />
    );
    expect(screen.queryByText('臨床珍珠')).not.toBeInTheDocument();
  });

  it('hides 重點整理 when key_points array is empty', () => {
    render(
      <NodeContent
        content={makeContent({ key_points: [] })}
        isLoading={false}
        error={null}
      />
    );
    expect(screen.queryByText('重點整理')).not.toBeInTheDocument();
  });

  it('hides 常見錯誤 when common_mistakes array is empty', () => {
    render(
      <NodeContent
        content={makeContent({ common_mistakes: [] })}
        isLoading={false}
        error={null}
      />
    );
    expect(screen.queryByText('常見錯誤')).not.toBeInTheDocument();
  });

  it('hides summary section when summary is empty', () => {
    const { container } = render(
      <NodeContent
        content={makeContent({ summary: '' })}
        isLoading={false}
        error={null}
      />
    );
    // indigo summary banner 不該存在
    expect(container.querySelector('.bg-indigo-50')).toBeNull();
  });
});

describe('NodeContent: markdown sanitize', () => {
  it('strips <script> from body content', () => {
    const { container } = render(
      <NodeContent
        content={makeContent({ body: '<script>alert(1)</script>safe content' })}
        isLoading={false}
        error={null}
      />
    );
    expect(container.querySelector('script')).toBeNull();
    expect(container.textContent).toContain('safe content');
  });
});
