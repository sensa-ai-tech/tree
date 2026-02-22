'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * 知識圖譜頁面的 error boundary
 * 攔截圖譜渲染、資料載入等錯誤
 */
export default function GraphError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('[GraphError]', error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
          <AlertTriangle className="h-8 w-8 text-amber-600" />
        </div>
        <h2 className="mb-2 text-lg font-bold text-gray-900">知識圖譜載入失敗</h2>
        <p className="mb-6 text-sm text-gray-500">
          圖譜渲染時發生錯誤，可能是資料格式問題。請嘗試重新載入。
        </p>
        {error.digest && (
          <p className="mb-4 text-xs text-gray-400">錯誤代碼：{error.digest}</p>
        )}
        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
            aria-label="重新載入知識圖譜"
          >
            <RefreshCw className="h-4 w-4" />
            重試
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <Home className="h-4 w-4" />
            回到首頁
          </Link>
        </div>
      </div>
    </div>
  );
}
