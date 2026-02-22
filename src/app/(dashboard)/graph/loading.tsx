import { Skeleton } from '@/components/ui/Skeleton';

/**
 * 知識圖譜頁面的 loading skeleton
 * 模擬篩選列 + 圖譜區域
 */
export default function GraphLoading() {
  return (
    <div className="space-y-4 p-6">
      {/* Filter bar skeleton */}
      <div className="flex items-center gap-3">
        <Skeleton variant="rectangular" width={120} height={36} className="rounded-lg" />
        <Skeleton variant="rectangular" width={120} height={36} className="rounded-lg" />
        <Skeleton variant="rectangular" width={120} height={36} className="rounded-lg" />
      </div>

      {/* Graph canvas skeleton */}
      <div className="relative h-[600px] rounded-xl border border-gray-200 bg-gray-50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="space-y-3 text-center">
            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-indigo-600" />
            <p className="text-sm text-gray-400">載入知識圖譜中...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
