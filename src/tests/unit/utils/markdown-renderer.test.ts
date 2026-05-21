import { afterEach, describe, expect, it, vi } from 'vitest';
import { parseContentMarkers, extractHeadings } from '@/lib/utils/markdown-renderer';

describe('parseContentMarkers: drug links', () => {
  it('extracts single drug marker', () => {
    const result = parseContentMarkers('使用 [藥物:Furosemide] 1-2 mg/kg PO BID');
    expect(result.drugLinks).toHaveLength(1);
    expect(result.drugLinks[0]?.name).toBe('Furosemide');
    expect(result.drugLinks[0]?.position).toBe(3);
  });

  it('extracts multiple drug markers with correct positions', () => {
    const result = parseContentMarkers(
      'First [藥物:Amlodipine] then [藥物:Benazepril]'
    );
    expect(result.drugLinks).toHaveLength(2);
    expect(result.drugLinks[0]?.name).toBe('Amlodipine');
    expect(result.drugLinks[1]?.name).toBe('Benazepril');
    expect(result.drugLinks[1]?.position).toBeGreaterThan(
      result.drugLinks[0]?.position ?? 0
    );
  });

  it('replaces drug marker with <span class="drug-link"> wrapping', () => {
    const result = parseContentMarkers('[藥物:Pimobendan]');
    expect(result.markdown).toContain('<span class="drug-link"');
    expect(result.markdown).toContain('data-drug="Pimobendan"');
    expect(result.markdown).toContain('Pimobendan</span>');
  });

  it('returns empty array when no drug markers', () => {
    const result = parseContentMarkers('純文字內容');
    expect(result.drugLinks).toEqual([]);
  });
});

describe('parseContentMarkers: image placeholders', () => {
  it('extracts image marker', () => {
    const result = parseContentMarkers('[圖片:心臟解剖]');
    expect(result.imagePlaceholders).toHaveLength(1);
    expect(result.imagePlaceholders[0]?.description).toBe('心臟解剖');
  });

  it('falls back to image-placeholder div when image NOT in registry', () => {
    const result = parseContentMarkers('[圖片:虛構描述-不在 registry]');
    expect(result.markdown).toContain('class="image-placeholder"');
    expect(result.markdown).toContain('[圖片預留位: 虛構描述-不在 registry]');
    expect(result.resolvedImages.size).toBe(0);
  });

  it('handles multiple image markers independently', () => {
    const result = parseContentMarkers('[圖片:A] 接著 [圖片:B]');
    expect(result.imagePlaceholders).toHaveLength(2);
    expect(result.imagePlaceholders.map((i) => i.description)).toEqual(['A', 'B']);
  });
});

describe('parseContentMarkers: image marker with mocked registry', () => {
  afterEach(() => {
    vi.resetModules();
    vi.restoreAllMocks();
  });

  it('uses clinical-image div when registry resolves the description', async () => {
    vi.resetModules();
    vi.doMock('@/data/seed/image-registry', () => ({
      getImageByDescription: (desc: string) =>
        desc === '已註冊影像'
          ? { id: 'IMG-1', description: desc, url: 'https://example.com/x.png' }
          : null,
    }));
    const mod = await import('@/lib/utils/markdown-renderer');
    const result = mod.parseContentMarkers('[圖片:已註冊影像] 跟 [圖片:未註冊]');
    // 已註冊應走 clinical-image 分支
    expect(result.markdown).toContain('<div class="clinical-image">');
    expect(result.markdown).toContain('[臨床影像: 已註冊影像]');
    // 未註冊仍走 image-placeholder
    expect(result.markdown).toContain('class="image-placeholder"');
    expect(result.markdown).toContain('[圖片預留位: 未註冊]');
    // resolvedImages 只記錄成功的
    expect(result.resolvedImages.size).toBe(1);
    expect(result.resolvedImages.has('已註冊影像')).toBe(true);
  });
});

describe('parseContentMarkers: interactive elements', () => {
  it('extracts interactive marker', () => {
    const result = parseContentMarkers('[互動:ECG 判讀練習]');
    expect(result.interactiveElements).toHaveLength(1);
    expect(result.interactiveElements[0]?.description).toBe('ECG 判讀練習');
  });

  it('replaces interactive marker with placeholder div carrying data-desc', () => {
    const result = parseContentMarkers('[互動:聽診模擬]');
    expect(result.markdown).toContain('class="interactive-placeholder"');
    expect(result.markdown).toContain('data-desc="聽診模擬"');
    expect(result.markdown).toContain('[互動元件預留位: 聽診模擬]');
  });
});

describe('parseContentMarkers: mixed content', () => {
  it('handles all three marker types in same input', () => {
    const result = parseContentMarkers(
      '處方 [藥物:Maropitant] 拍 [圖片:腹部超音波] 並 [互動:練習題]'
    );
    expect(result.drugLinks).toHaveLength(1);
    expect(result.imagePlaceholders).toHaveLength(1);
    expect(result.interactiveElements).toHaveLength(1);
    expect(result.markdown).toContain('drug-link');
    expect(result.markdown).toContain('image-placeholder');
    expect(result.markdown).toContain('interactive-placeholder');
  });

  it('leaves normal markdown intact', () => {
    const result = parseContentMarkers('# Heading\n\n- bullet 1\n- bullet 2');
    expect(result.markdown).toContain('# Heading');
    expect(result.markdown).toContain('- bullet 1');
  });
});

describe('extractHeadings', () => {
  it('extracts H1-H6 levels correctly', () => {
    const md = '# H1 標題\n## H2\n### H3\n#### H4\n##### H5\n###### H6';
    const headings = extractHeadings(md);
    expect(headings).toHaveLength(6);
    expect(headings.map((h) => h.level)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('generates URL-safe IDs from heading text', () => {
    const result = extractHeadings('# Hello World!');
    expect(result[0]?.id).toBe('hello-world');
  });

  it('preserves CJK characters in IDs', () => {
    const result = extractHeadings('## 病理機制');
    expect(result[0]?.id).toBe('病理機制');
    expect(result[0]?.text).toBe('病理機制');
  });

  it('strips leading and trailing dashes from generated IDs', () => {
    const result = extractHeadings('### --weird-- title --');
    // 前後 dash 應被剝掉
    expect(result[0]?.id).not.toMatch(/^-/);
    expect(result[0]?.id).not.toMatch(/-$/);
  });

  it('returns empty array for markdown without headings', () => {
    expect(extractHeadings('plain paragraph')).toEqual([]);
  });

  it('does not match headings without trailing space (markdown spec)', () => {
    // markdown 規定 # 跟標題之間要有空白；#noheading 不算
    const result = extractHeadings('#noheading\n# real heading');
    expect(result).toHaveLength(1);
    expect(result[0]?.text).toBe('real heading');
  });

  it('trims surrounding whitespace from heading text', () => {
    const result = extractHeadings('##   有空白的標題   ');
    expect(result[0]?.text).toBe('有空白的標題');
  });
});
