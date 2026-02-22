import { Skeleton } from '@/components/ui/Skeleton';

/**
 * 個人資料頁面的 loading skeleton
 */
export default function ProfileLoading() {
  return (
    <div className="mx-auto max-w-2xl space-y-6 p-6">
      {/* Avatar & name */}
      <div className="flex items-center gap-4">
        <Skeleton variant="circular" width={64} height={64} />
        <div className="space-y-2">
          <Skeleton variant="text" width={160} height={24} />
          <Skeleton variant="text" width={200} height={16} />
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-gray-200 bg-white p-4 text-center space-y-2">
            <Skeleton variant="text" width="60%" height={28} className="mx-auto" />
            <Skeleton variant="text" width="80%" height={14} className="mx-auto" />
          </div>
        ))}
      </div>

      {/* Settings section */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 space-y-4">
        <Skeleton variant="text" width="30%" height={22} />
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
            <Skeleton variant="text" width="40%" height={16} />
            <Skeleton variant="rectangular" width={48} height={24} className="rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
