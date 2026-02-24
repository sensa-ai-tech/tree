'use client';

import { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { parseContentMarkers } from '@/lib/utils/markdown-renderer';
import { MermaidRenderer } from '@/components/features/MermaidRenderer';
import { ImagePlaceholder } from '@/components/features/ImagePlaceholder';
import { cn } from '@/lib/utils/cn';

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
        rehypePlugins={[rehypeRaw]}
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
            const dataDesc =
              (props as Record<string, unknown>)['data-desc'] as string | undefined;
            if (divClassName === 'image-placeholder' && dataDesc) {
              return <ImagePlaceholder description={dataDesc} />;
            }
            if (divClassName === 'interactive-placeholder' && dataDesc) {
              return (
                <div className="my-4 flex items-center gap-3 rounded-lg border-2 border-dashed border-purple-200 bg-purple-50/50 p-4">
                  <span className="text-2xl">🎮</span>
                  <div>
                    <p className="text-sm font-medium text-purple-700">互動元件預留位</p>
                    <p className="text-xs text-purple-500">{dataDesc}</p>
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
