import { Skeleton } from '@/components/ui/Skeleton';

/**
 * 成就頁面的 loading skeleton
 */
export default function AchievementsLoading() {
  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Skeleton variant="text" width="20%" height={28} />
        <Skeleton variant="rectangular" width={100} height={28} className="rounded-full" />
      </div>

      {/* Achievement category */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 space-y-4">
        <Skeleton variant="text" width="30%" height={22} />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-2 rounded-xl border border-gray-100 bg-gray-50 p-4">
              <Skeleton variant="circular" width={48} height={48} />
              <Skeleton variant="text" width="70%" height={16} />
              <Skeleton variant="text" width="90%" height={14} />
            </div>
          ))}
        </div>
      </div>

      {/* Second category */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 space-y-4">
        <Skeleton variant="text" width="25%" height={22} />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-2 rounded-xl border border-gray-100 bg-gray-50 p-4">
              <Skeleton variant="circular" width={48} height={48} />
              <Skeleton variant="text" width="70%" height={16} />
              <Skeleton variant="text" width="90%" height={14} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
