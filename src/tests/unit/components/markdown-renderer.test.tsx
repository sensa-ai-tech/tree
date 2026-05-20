import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { MarkdownRenderer } from '@/components/features/MarkdownRenderer';

// MermaidRenderer 是 dynamic import + ssr:false，在 jsdom 沒必要實際 render
vi.mock('@/components/features/MermaidRenderer', () => ({
  MermaidRenderer: ({ chart }: { chart: string }) => (
    <div data-testid="mermaid-stub">{chart}</div>
  ),
}));

describe('MarkdownRenderer: basic rendering', () => {
  it('renders plain text as paragraph', () => {
    const { container } = render(<MarkdownRenderer content="這是一段內文" />);
    expect(container.textContent).toContain('這是一段內文');
  });

  it('renders heading hierarchy', () => {
    const { container } = render(
      <MarkdownRenderer content={'# H1\n## H2\n### H3'} />
    );
    expect(container.querySelector('h1')?.textContent).toBe('H1');
    expect(container.querySelector('h2')?.textContent).toBe('H2');
    expect(container.querySelector('h3')?.textContent).toBe('H3');
  });

  it('renders bullet lists', () => {
    const { container } = render(
      <MarkdownRenderer content={'- item A\n- item B\n- item C'} />
    );
    expect(container.querySelectorAll('li')).toHaveLength(3);
  });

  it('wraps tables in overflow container for mobile scroll', () => {
    const { container } = render(
      <MarkdownRenderer content={'| a | b |\n|---|---|\n| 1 | 2 |'} />
    );
    const wrapper = container.querySelector('.overflow-x-auto');
    expect(wrapper).toBeTruthy();
    expect(wrapper?.querySelector('table')).toBeTruthy();
  });

  it('applies custom className to outer wrapper', () => {
    const { container } = render(
      <MarkdownRenderer content="text" className="my-custom-class" />
    );
    expect(container.firstChild).toHaveClass('my-custom-class');
  });
});

describe('MarkdownRenderer: XSS sanitize boundary', () => {
  it('strips <script> tags from raw HTML input', () => {
    const { container } = render(
      <MarkdownRenderer content={'<script>alert(1)</script>safe text'} />
    );
    expect(container.querySelector('script')).toBeNull();
    expect(container.textContent).toContain('safe text');
  });

  it('strips onclick attribute from anchor', () => {
    const { container } = render(
      <MarkdownRenderer content={'<a href="https://example.com" onclick="alert(1)">link</a>'} />
    );
    const link = container.querySelector('a');
    expect(link).toBeTruthy();
    expect(link?.getAttribute('onclick')).toBeNull();
  });

  it('strips onload from img', () => {
    const { container } = render(
      <MarkdownRenderer content={'<img src="https://example.com/x.png" onload="alert(1)" alt="x" />'} />
    );
    const img = container.querySelector('img');
    if (img) {
      expect(img.getAttribute('onload')).toBeNull();
    }
  });

  it('blocks javascript: protocol on href', () => {
    const { container } = render(
      <MarkdownRenderer content={'<a href="javascript:alert(1)">danger</a>'} />
    );
    const link = container.querySelector('a');
    // rehype-sanitize 會把 javascript: 直接拿掉整個 href（變 null）
    // 即使有殘留，也不能是 javascript:
    const href = link?.getAttribute('href') ?? '';
    expect(href).not.toMatch(/javascript:/i);
  });

  it('allows http and https links', () => {
    const { container } = render(
      <MarkdownRenderer content={'[ok](https://example.com)'} />
    );
    const link = container.querySelector('a');
    expect(link?.getAttribute('href')).toBe('https://example.com');
  });

  it('allows mailto links', () => {
    const { container } = render(
      <MarkdownRenderer content={'<a href="mailto:vet@example.com">contact</a>'} />
    );
    const link = container.querySelector('a');
    expect(link?.getAttribute('href')).toBe('mailto:vet@example.com');
  });

  it('strips data: protocol on href (not in allowlist)', () => {
    const { container } = render(
      <MarkdownRenderer
        content={'<a href="data:text/html,<script>alert(1)</script>">danger</a>'}
      />
    );
    const link = container.querySelector('a');
    // 任一狀態都可接受：(1) link 整個被拿掉 (2) href 變 null (3) href 不再以 data: 開頭
    // 重點是不能有可執行的 data: URL 留下來
    const href = link?.getAttribute('href') ?? '';
    expect(href).not.toMatch(/^data:/);
    // 而且 inline <script> 一定要被剝掉
    expect(container.querySelector('script')).toBeNull();
  });

  it('rejects unknown data-* attributes (not in whitelist)', () => {
    // data-desc 在白名單內，data-malicious 不在
    const { container } = render(
      <MarkdownRenderer content={'<div data-malicious="bad" data-desc="ok">content</div>'} />
    );
    // 整個 markdown 不應該洩漏 data-malicious
    expect(container.innerHTML).not.toMatch(/data-malicious/);
  });
});

describe('MarkdownRenderer: custom component placeholders', () => {
  it('renders image placeholder from marker', () => {
    const { container } = render(
      <MarkdownRenderer content={'[圖片預留位: 心臟解剖示意]'} />
    );
    // ImagePlaceholder 的特徵：應該出現「心臟解剖示意」這串
    expect(container.textContent).toContain('心臟解剖示意');
  });

  it('renders interactive placeholder card with description', () => {
    const { container } = render(
      <MarkdownRenderer content={'[互動: ECG 判讀練習]'} />
    );
    expect(container.textContent).toMatch(/ECG 判讀練習|互動元件預留位/);
  });

  it('renders drug-link span with pill emoji prefix', () => {
    const { container } = render(
      <MarkdownRenderer content={'<span class="drug-link">Furosemide</span>'} />
    );
    expect(container.textContent).toContain('💊');
    expect(container.textContent).toContain('Furosemide');
  });

  it('renders mermaid code blocks via MermaidRenderer (or shows loading stub)', () => {
    const { container } = render(
      <MarkdownRenderer
        content={'```mermaid\ngraph TD; A-->B;\n```'}
      />
    );
    // dynamic import 在 jsdom 同步 render 時可能還沒解，因此可能：
    // (1) 出現 mermaid-stub（dynamic import 立刻 resolve）
    // (2) 出現 animate-pulse 的 loading skeleton（仍在載入中）
    // 兩者擇一即合理
    const stub = container.querySelector('[data-testid="mermaid-stub"]');
    const loading = container.querySelector('.animate-pulse');
    expect(stub || loading).toBeTruthy();
  });
});
