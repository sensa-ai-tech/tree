import { Skeleton } from '@/components/ui/Skeleton';

/**
 * Dashboard 區域的全域 loading skeleton
 * 在子路由 data fetching 時顯示
 */
export default function DashboardLoading() {
  return (
    <div className="space-y-6 p-6">
      {/* Header skeleton */}
      <div className="space-y-2">
        <Skeleton variant="text" width="40%" height={32} />
        <Skeleton variant="text" width="60%" height={20} />
      </div>

      {/* Content grid skeleton */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-gray-200 bg-white p-4 space-y-3">
            <Skeleton variant="text" width="70%" height={24} />
            <Skeleton variant="text" width="100%" height={16} />
            <Skeleton variant="text" width="50%" height={16} />
            <Skeleton variant="rectangular" height={8} className="rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
