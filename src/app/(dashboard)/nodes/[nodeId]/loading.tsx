import { Skeleton } from '@/components/ui/Skeleton';

/**
 * 知識節點詳情頁的 loading skeleton
 * 模擬標題 + 內容區域 + 側邊資訊
 */
export default function NodeDetailLoading() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 p-6">
      {/* Breadcrumb skeleton */}
      <div className="flex items-center gap-2">
        <Skeleton variant="text" width={60} height={16} />
        <span className="text-gray-300">/</span>
        <Skeleton variant="text" width={80} height={16} />
        <span className="text-gray-300">/</span>
        <Skeleton variant="text" width={120} height={16} />
      </div>

      {/* Title + badges skeleton */}
      <div className="space-y-3">
        <Skeleton variant="text" width="60%" height={32} />
        <div className="flex gap-2">
          <Skeleton variant="rectangular" width={60} height={24} className="rounded-full" />
          <Skeleton variant="rectangular" width={80} height={24} className="rounded-full" />
          <Skeleton variant="rectangular" width={50} height={24} className="rounded-full" />
        </div>
      </div>

      {/* Content sections skeleton */}
      <div className="space-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-gray-200 bg-white p-5 space-y-3">
            <Skeleton variant="text" width="30%" height={24} />
            <Skeleton variant="text" width="100%" height={16} />
            <Skeleton variant="text" width="90%" height={16} />
            <Skeleton variant="text" width="75%" height={16} />
          </div>
        ))}
      </div>
    </div>
  );
}
