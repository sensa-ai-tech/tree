import { Skeleton } from '@/components/ui/Skeleton';

export default function TermsLoading() {
  return (
    <div className="mx-auto max-w-3xl space-y-4 p-6">
      <Skeleton variant="text" width="35%" height={32} />
      <Skeleton variant="text" width="100%" height={16} />
      <Skeleton variant="text" width="100%" height={16} />
      <Skeleton variant="text" width="80%" height={16} />
      <div className="pt-4 space-y-3">
        <Skeleton variant="text" width="25%" height={24} />
        <Skeleton variant="text" width="100%" height={16} />
        <Skeleton variant="text" width="100%" height={16} />
        <Skeleton variant="text" width="70%" height={16} />
      </div>
    </div>
  );
}
