'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import type { NodeContent as NodeContentType } from '@/types/knowledge';
import { Skeleton } from '@/components/ui/Skeleton';
import { cn } from '@/lib/utils/cn';
import { AlertTriangle, Lightbulb, CheckCircle2 } from 'lucide-react';

interface NodeContentProps {
  content: NodeContentType | null;
  isLoading: boolean;
  error: string | null;
  className?: string;
}

export function NodeContent({ content, isLoading, error, className }: NodeContentProps) {
  // Loading state
  if (isLoading) {
    return (
      <div className={cn('space-y-4 p-4', className)}>
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" lines={4} />
        <Skeleton variant="text" lines={2} />
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className={cn('rounded-lg border border-red-200 bg-red-50 p-4', className)}>
        <div className="flex items-center gap-2 text-red-700">
          <AlertTriangle className="h-5 w-5 flex-shrink-0" />
          <p className="text-sm font-medium">載入內容失敗</p>
        </div>
        <p className="mt-1 text-xs text-red-500">{error}</p>
      </div>
    );
  }

  // Empty state
  if (!content) {
    return (
      <div className={cn('flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 p-8', className)}>
        <p className="text-sm text-gray-500">尚無內容</p>
      </div>
    );
  }

  return (
    <article className={cn('space-y-6', className)}>
      {/* Summary */}
      {content.summary && (
        <section className="rounded-lg bg-indigo-50 p-4">
          <p className="text-sm leading-relaxed text-indigo-900">{content.summary}</p>
        </section>
      )}

      {/* Body (Markdown) */}
      {content.body && (
        <section className="prose prose-sm max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {content.body}
          </ReactMarkdown>
        </section>
      )}

      {/* Key Points */}
      {content.key_points.length > 0 && (
        <section className="rounded-lg border border-green-200 bg-green-50 p-4">
          <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-green-800">
            <CheckCircle2 className="h-4 w-4" />
            重點整理
          </h3>
          <ul className="space-y-1">
            {content.key_points.map((point, index) => (
              <li key={index} className="text-sm text-green-700">
                &bull; {point}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Clinical Pearl */}
      {content.clinical_pearl && (
        <section className="rounded-lg border border-amber-200 bg-amber-50 p-4">
          <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-amber-800">
            <Lightbulb className="h-4 w-4" />
            臨床珍珠
          </h3>
          <p className="text-sm text-amber-700">{content.clinical_pearl}</p>
        </section>
      )}

      {/* Common Mistakes */}
      {content.common_mistakes.length > 0 && (
        <section className="rounded-lg border border-red-200 bg-red-50 p-4">
          <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-red-800">
            <AlertTriangle className="h-4 w-4" />
            常見錯誤
          </h3>
          <ul className="space-y-1">
            {content.common_mistakes.map((mistake, index) => (
              <li key={index} className="text-sm text-red-700">
                &bull; {mistake}
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
