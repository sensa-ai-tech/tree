import { Skeleton } from '@/components/ui/Skeleton';

export default function HomeLoading() {
  return (
    <div className="space-y-6 p-6">
      {/* Welcome message */}
      <div className="space-y-2">
        <Skeleton variant="text" width="40%" height={28} />
        <Skeleton variant="text" width="60%" height={18} />
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-gray-200 bg-white p-4 space-y-2">
            <Skeleton variant="text" width="50%" height={14} />
            <Skeleton variant="text" width="30%" height={28} />
          </div>
        ))}
      </div>

      {/* Recent activity */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 space-y-4">
        <Skeleton variant="text" width="20%" height={22} />
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <Skeleton variant="circular" width={40} height={40} />
            <div className="flex-1 space-y-1">
              <Skeleton variant="text" width="60%" height={16} />
              <Skeleton variant="text" width="40%" height={14} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
