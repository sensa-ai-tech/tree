import { Skeleton } from '@/components/ui/Skeleton';

/**
 * 註冊頁面的 loading skeleton
 */
export default function RegisterLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm space-y-6">
        {/* Logo */}
        <div className="text-center space-y-2">
          <Skeleton variant="rectangular" width={48} height={48} className="mx-auto rounded-lg" />
          <Skeleton variant="text" width="60%" height={24} className="mx-auto" />
        </div>

        {/* Form */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 space-y-4">
          <Skeleton variant="text" width="30%" height={18} />
          <Skeleton variant="rectangular" width="100%" height={40} className="rounded-lg" />
          <Skeleton variant="text" width="30%" height={18} />
          <Skeleton variant="rectangular" width="100%" height={40} className="rounded-lg" />
          <Skeleton variant="text" width="30%" height={18} />
          <Skeleton variant="rectangular" width="100%" height={40} className="rounded-lg" />
          <Skeleton variant="rectangular" width="100%" height={40} className="rounded-lg" />
        </div>
      </div>
    </div>
  );
}
