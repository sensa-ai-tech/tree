import { Skeleton } from '@/components/ui/Skeleton';

/**
 * 病例列表頁面的 loading skeleton
 */
export default function CasesLoading() {
  return (
    <div className="space-y-6 p-6">
      {/* Header skeleton */}
      <div className="space-y-2">
        <Skeleton variant="text" width="30%" height={28} />
        <Skeleton variant="text" width="50%" height={18} />
      </div>

      {/* Case cards skeleton */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-gray-200 bg-white p-5 space-y-3">
            <div className="flex items-center justify-between">
              <Skeleton variant="text" width="50%" height={22} />
              <Skeleton variant="rectangular" width={60} height={22} className="rounded-full" />
            </div>
            <Skeleton variant="text" width="100%" height={16} />
            <Skeleton variant="text" width="80%" height={16} />
            <div className="flex items-center gap-2 pt-2">
              <Skeleton variant="rectangular" width={40} height={20} className="rounded" />
              <Skeleton variant="rectangular" width={50} height={20} className="rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
