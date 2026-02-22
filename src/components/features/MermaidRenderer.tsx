'use client';

import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import DOMPurify from 'dompurify';
import { cn } from '@/lib/utils/cn';
import { Skeleton } from '@/components/ui/Skeleton';
import { AlertTriangle } from 'lucide-react';

interface MermaidRendererProps {
  chart: string;
  className?: string;
}

mermaid.initialize({
  startOnLoad: false,
  theme: 'default',
  securityLevel: 'strict',
});

/**
 * 安全的 Mermaid 圖表渲染器
 * - securityLevel: 'strict' 防止 XSS 注入
 * - DOMPurify 對 SVG 輸出進行二次消毒
 * - 允許 SVG 相關標籤和屬性，過濾危險內容
 */
export function MermaidRenderer({ chart, className }: MermaidRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!chart || !containerRef.current) return;

    let cancelled = false;
    setIsLoading(true);
    setError(null);

    const id = `mermaid-${Date.now()}`;

    mermaid
      .render(id, chart)
      .then(({ svg }) => {
        if (!cancelled && containerRef.current) {
          // DOMPurify 消毒 SVG 輸出，允許 SVG 標籤但過濾危險腳本
          const sanitizedSvg = DOMPurify.sanitize(svg, {
            USE_PROFILES: { svg: true, svgFilters: true },
            ADD_TAGS: ['foreignObject'],
          });
          containerRef.current.innerHTML = sanitizedSvg;
          setIsLoading(false);
        }
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          const message = err instanceof Error ? err.message : '無法渲染 Mermaid 圖表';
          setError(message);
          setIsLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [chart]);

  // Loading state
  if (isLoading) {
    return <Skeleton variant="rectangular" height={200} className={className} />;
  }

  // Error state
  if (error) {
    return (
      <div className={cn('flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-4', className)}>
        <AlertTriangle className="h-5 w-5 flex-shrink-0 text-red-500" />
        <div>
          <p className="text-sm font-medium text-red-700">圖表渲染失敗</p>
          <p className="text-xs text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn('overflow-auto rounded-lg border border-gray-200 bg-white p-4', className)}
    />
  );
}
