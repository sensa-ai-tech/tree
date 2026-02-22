import { Skeleton } from '@/components/ui/Skeleton';

/**
 * 學習路徑詳情頁面的 loading skeleton
 */
export default function PathDetailLoading() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 p-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2">
        <Skeleton variant="text" width={80} height={16} />
        <span className="text-gray-300">/</span>
        <Skeleton variant="text" width={140} height={16} />
      </div>

      {/* Path header */}
      <div className="space-y-3">
        <Skeleton variant="text" width="60%" height={28} />
        <Skeleton variant="text" width="80%" height={18} />
        <div className="flex items-center gap-4">
          <Skeleton variant="rectangular" width={70} height={24} className="rounded-full" />
          <Skeleton variant="text" width={100} height={16} />
          <Skeleton variant="text" width={80} height={16} />
        </div>
      </div>

      {/* Progress bar */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 space-y-3">
        <Skeleton variant="text" width="20%" height={18} />
        <Skeleton variant="rectangular" width="100%" height={8} className="rounded-full" />
      </div>

      {/* Path nodes list */}
      <div className="space-y-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4">
            <Skeleton variant="circular" width={32} height={32} />
            <div className="flex-1 space-y-1">
              <Skeleton variant="text" width="40%" height={18} />
              <Skeleton variant="text" width="60%" height={14} />
            </div>
            <Skeleton variant="rectangular" width={60} height={28} className="rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}
