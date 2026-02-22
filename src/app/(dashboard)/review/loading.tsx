import { Skeleton } from '@/components/ui/Skeleton';

/**
 * 複習/測驗頁面的 loading skeleton
 */
export default function ReviewLoading() {
  return (
    <div className="mx-auto max-w-lg space-y-6 p-6">
      {/* Quiz card skeleton */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 space-y-5">
        {/* Progress bar */}
        <div className="flex items-center justify-between">
          <Skeleton variant="text" width={80} height={16} />
          <Skeleton variant="rectangular" width={128} height={8} className="rounded-full" />
        </div>

        {/* Question text */}
        <div className="space-y-2">
          <Skeleton variant="text" width="100%" height={20} />
          <Skeleton variant="text" width="85%" height={20} />
        </div>

        {/* Options */}
        <div className="space-y-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} variant="rectangular" height={48} className="rounded-lg" />
          ))}
        </div>

        {/* Action button */}
        <div className="flex justify-end">
          <Skeleton variant="rectangular" width={100} height={36} className="rounded-lg" />
        </div>
      </div>
    </div>
  );
}
