import { Skeleton } from '@/components/ui/Skeleton';

/**
 * 病例詳情頁面的 loading skeleton
 */
export default function CaseDetailLoading() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 p-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2">
        <Skeleton variant="text" width={80} height={16} />
        <span className="text-gray-300">/</span>
        <Skeleton variant="text" width={120} height={16} />
      </div>

      {/* Case header */}
      <div className="space-y-3">
        <Skeleton variant="text" width="70%" height={28} />
        <div className="flex items-center gap-3">
          <Skeleton variant="rectangular" width={60} height={22} className="rounded-full" />
          <Skeleton variant="rectangular" width={50} height={22} className="rounded-full" />
          <Skeleton variant="text" width={100} height={16} />
        </div>
      </div>

      {/* Case content */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 space-y-4">
        <Skeleton variant="text" width="40%" height={20} />
        <Skeleton variant="text" width="100%" height={16} />
        <Skeleton variant="text" width="95%" height={16} />
        <Skeleton variant="text" width="80%" height={16} />
      </div>

      {/* Options */}
      <div className="space-y-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} variant="rectangular" width="100%" height={48} className="rounded-lg" />
        ))}
      </div>
    </div>
  );
}
