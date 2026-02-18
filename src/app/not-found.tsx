import Link from 'next/link';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md text-center">
        <p className="text-7xl font-extrabold text-indigo-600">404</p>
        <h2 className="mt-4 text-2xl font-bold text-gray-900">找不到頁面</h2>
        <p className="mt-2 text-sm text-gray-500">
          您要找的頁面不存在或已被移動。
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
          >
            <Home className="h-4 w-4" />
            回到首頁
          </Link>
          <Link
            href="/graph"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <Search className="h-4 w-4" />
            瀏覽知識圖譜
          </Link>
        </div>
      </div>
    </div>
  );
}
