import { cn } from '@/lib/utils/cn';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  lines?: number;
}

export function Skeleton({ className, variant = 'text', width, height, lines = 1 }: SkeletonProps) {
  const baseClass = 'animate-pulse bg-gray-200 rounded';

  if (variant === 'circular') {
    return (
      <div
        className={cn(baseClass, 'rounded-full', className)}
        style={{ width: width ?? 40, height: height ?? 40 }}
      />
    );
  }

  if (variant === 'rectangular') {
    return (
      <div
        className={cn(baseClass, 'rounded-lg', className)}
        style={{ width: width ?? '100%', height: height ?? 120 }}
      />
    );
  }

  // text variant
  if (lines === 1) {
    return (
      <div
        className={cn(baseClass, 'h-4', className)}
        style={{ width: width ?? '100%' }}
      />
    );
  }

  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={cn(baseClass, 'h-4', className)}
          style={{ width: i === lines - 1 ? '60%' : '100%' }}
        />
      ))}
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 space-y-4">
      <Skeleton variant="text" width="40%" />
      <Skeleton variant="text" lines={3} />
      <div className="flex gap-2">
        <Skeleton variant="rectangular" width={80} height={24} />
        <Skeleton variant="rectangular" width={60} height={24} />
      </div>
    </div>
  );
}

export function GraphSkeleton() {
  return (
    <div className="w-full h-96 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-center">
      <div className="text-center space-y-3">
        <Skeleton variant="circular" width={48} height={48} className="mx-auto" />
        <Skeleton variant="text" width={120} className="mx-auto" />
      </div>
    </div>
  );
}
