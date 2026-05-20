'use client';

import { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import dynamic from 'next/dynamic';
import { parseContentMarkers } from '@/lib/utils/markdown-renderer';
import { ImagePlaceholder } from '@/components/features/ImagePlaceholder';
import { ClinicalImage } from '@/components/features/ClinicalImage';

const MermaidRenderer = dynamic(
  () => import('@/components/features/MermaidRenderer').then(m => m.MermaidRenderer),
  { ssr: false, loading: () => <div className="my-4 h-48 animate-pulse rounded-lg bg-gray-100" /> }
);
import { cn } from '@/lib/utils/cn';

/**
 * Custom sanitization schema。
 *
 * 安全策略：
 * 1. 基於 rehype-sanitize 的 defaultSchema（已防 XSS、event handler、危險標籤）
 * 2. 額外允許 div/span/code 帶 className，作為自訂元件樣式 hook
 * 3. div 只允許特定 data-* 白名單，不用 data* 萬用字元，避免未來新增 data-on* 之類
 *    被誤認為合法屬性
 * 4. 即使 parseContentMarkers 產生的 HTML 不慎被惡意輸入污染（例如未來 user-generated
 *    content），這層 sanitize 仍會把 onclick / onload / javascript: 等都清掉
 *
 * 信任邊界：rehype-raw 解析的 HTML 必定先經過 rehype-sanitize 才能渲染。
 * 不允許繞過 sanitize 的渲染路徑。
 */
const sanitizeSchema = {
  ...defaultSchema,
  tagNames: [...(defaultSchema.tagNames ?? []), 'div', 'span'],
  attributes: {
    ...defaultSchema.attributes,
    div: [
      ...(defaultSchema.attributes?.div ?? []),
      'className',
      ['data-desc', /^[^<>"'`]+$/],
      ['data-asset-id', /^[A-Z0-9-]{1,64}$/],
      ['data-component', /^[a-z-]{1,32}$/],
    ],
    span: [...(defaultSchema.attributes?.span ?? []), 'className'],
    code: [...(defaultSchema.attributes?.code ?? []), 'className'],
  },
  // 明確拒絕 protocol-relative URLs 與 javascript: scheme
  protocols: {
    ...defaultSchema.protocols,
    href: ['http', 'https', 'mailto'],
    src: ['http', 'https', 'data'],
  },
};

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

/**
 * 統一 Markdown 渲染元件
 * - 呼叫 parseContentMarkers 預處理 [圖片:] / [藥物:] / [互動:] 占位符
 * - 表格自動包裹 overflow-x-auto 實現響應式捲動
 * - 偵測 language-mermaid 代碼塊並使用 MermaidRenderer
 * - 圖片預留位顯示美化卡片
 */
export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  const parsed = useMemo(() => parseContentMarkers(content), [content]);

  return (
    <div
      className={cn(
        'prose prose-base max-w-none text-gray-700',
        'prose-headings:text-gray-900 prose-a:text-indigo-600',
        'prose-strong:text-gray-900 prose-table:text-sm',
        className
      )}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, [rehypeSanitize, sanitizeSchema]]}
        components={{
          table: ({ children, ...props }) => (
            <div className="overflow-x-auto -mx-2 px-2">
              <table {...props}>{children}</table>
            </div>
          ),
          code: ({ children, className: codeClassName, ...props }) => {
            const match = /language-mermaid/.exec(codeClassName ?? '');
            if (match) {
              return <MermaidRenderer chart={String(children).trim()} />;
            }
            return (
              <code className={codeClassName} {...props}>
                {children}
              </code>
            );
          },
          pre: ({ children, ...props }) => {
            // 讓 Mermaid 代碼塊不被 pre 包裹
            const child = children as React.ReactElement<{ className?: string }>;
            if (
              child &&
              typeof child === 'object' &&
              'props' in child &&
              /language-mermaid/.test(child.props?.className ?? '')
            ) {
              return <>{children}</>;
            }
            return <pre {...props}>{children}</pre>;
          },
          div: ({ className: divClassName, children, ...props }) => {
            // Extract description from text content (data-desc may be stripped by sanitizer)
            const dataDesc =
              (props as Record<string, unknown>)['data-desc'] as string | undefined;
            const extractDesc = (prefix: string): string | undefined => {
              if (dataDesc) return dataDesc;
              const text = typeof children === 'string' ? children : '';
              const re = new RegExp(`^\\[${prefix}: (.+)\\]$`);
              const m = re.exec(text.trim());
              return m?.[1];
            };

            if (divClassName === 'clinical-image') {
              const desc = extractDesc('臨床影像');
              if (desc) {
                const asset = parsed.resolvedImages.get(desc);
                if (asset) {
                  return <ClinicalImage asset={asset} showAttribution />;
                }
              }
              return <ImagePlaceholder description={desc ?? ''} />;
            }
            if (divClassName === 'image-placeholder') {
              const desc = extractDesc('圖片預留位');
              return <ImagePlaceholder description={desc ?? ''} />;
            }
            if (divClassName === 'interactive-placeholder') {
              const desc = extractDesc('互動元件預留位');
              return (
                <div className="my-4 flex items-center gap-3 rounded-lg border-2 border-dashed border-purple-200 bg-purple-50/50 p-4">
                  <span className="text-2xl">🎮</span>
                  <div>
                    <p className="text-sm font-medium text-purple-700">互動元件預留位</p>
                    <p className="text-xs text-purple-500">{desc}</p>
                  </div>
                </div>
              );
            }
            return (
              <div className={divClassName} {...props}>
                {children}
              </div>
            );
          },
          span: ({ className: spanClassName, children, ...props }) => {
            if (spanClassName === 'drug-link') {
              return (
                <span className="inline-flex items-center rounded bg-emerald-50 px-1.5 py-0.5 text-sm font-medium text-emerald-700 ring-1 ring-inset ring-emerald-200">
                  💊 {children}
                </span>
              );
            }
            return (
              <span className={spanClassName} {...props}>
                {children}
              </span>
            );
          },
        }}
      >
        {parsed.markdown}
      </ReactMarkdown>
    </div>
  );
}
