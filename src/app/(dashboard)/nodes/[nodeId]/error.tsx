'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * 知識節點詳情頁的 error boundary
 * 攔截節點內容載入和渲染錯誤
 */
export default function NodeDetailError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('[NodeDetailError]', error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
          <AlertTriangle className="h-8 w-8 text-red-600" />
        </div>
        <h2 className="mb-2 text-lg font-bold text-gray-900">節點內容載入失敗</h2>
        <p className="mb-6 text-sm text-gray-500">
          載入知識節點時發生錯誤。該節點可能不存在或資料格式有誤。
        </p>
        {error.digest && (
          <p className="mb-4 text-xs text-gray-400">錯誤代碼：{error.digest}</p>
        )}
        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
            aria-label="重新載入節點內容"
          >
            <RefreshCw className="h-4 w-4" />
            重試
          </button>
          <Link
            href="/graph"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            返回圖譜
          </Link>
        </div>
      </div>
    </div>
  );
}
