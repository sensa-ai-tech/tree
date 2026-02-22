import { Skeleton } from '@/components/ui/Skeleton';

/**
 * 學習路徑列表頁面的 loading skeleton
 */
export default function PathsLoading() {
  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="space-y-2">
        <Skeleton variant="text" width="25%" height={28} />
        <Skeleton variant="text" width="50%" height={18} />
      </div>

      {/* Path cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-gray-200 bg-white p-5 space-y-3">
            <div className="flex items-center justify-between">
              <Skeleton variant="text" width="60%" height={22} />
              <Skeleton variant="rectangular" width={60} height={22} className="rounded-full" />
            </div>
            <Skeleton variant="text" width="100%" height={16} />
            <Skeleton variant="text" width="80%" height={16} />
            <div className="flex items-center gap-4 pt-2">
              <Skeleton variant="text" width={70} height={14} />
              <Skeleton variant="text" width={80} height={14} />
            </div>
            <div className="flex items-center gap-2">
              <Skeleton variant="rectangular" width={80} height={22} className="rounded-full" />
              <Skeleton variant="rectangular" width={60} height={22} className="rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
