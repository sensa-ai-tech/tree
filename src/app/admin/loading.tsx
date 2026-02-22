import { Skeleton } from '@/components/ui/Skeleton';

/**
 * Admin 頁面的 loading skeleton
 */
export default function AdminLoading() {
  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="space-y-2">
        <Skeleton variant="text" width="30%" height={28} />
        <Skeleton variant="text" width="50%" height={18} />
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-gray-200 bg-white p-5 space-y-2">
            <Skeleton variant="text" width="40%" height={16} />
            <Skeleton variant="text" width="60%" height={28} />
          </div>
        ))}
      </div>

      {/* Content area */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 space-y-4">
        <Skeleton variant="text" width="25%" height={22} />
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center gap-4 py-3 border-b border-gray-100 last:border-0">
            <Skeleton variant="rectangular" width={40} height={40} className="rounded-lg" />
            <div className="flex-1 space-y-1">
              <Skeleton variant="text" width="50%" height={16} />
              <Skeleton variant="text" width="30%" height={14} />
            </div>
            <Skeleton variant="rectangular" width={60} height={28} className="rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}
