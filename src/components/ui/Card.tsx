import { cn } from '@/lib/utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverable?: boolean;
}

export function Card({ className, children, onClick, hoverable, ...rest }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-gray-200 bg-white shadow-sm',
        hoverable && 'transition-shadow hover:shadow-md cursor-pointer',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
      role={onClick ? 'button' : rest.role ?? undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter') onClick(e as unknown as React.MouseEvent<HTMLDivElement>); } : undefined}
      {...rest}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('px-6 py-4 border-b border-gray-100', className)}>{children}</div>;
}

export function CardBody({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('px-6 py-4', className)}>{children}</div>;
}

export function CardFooter({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('px-6 py-4 border-t border-gray-100', className)}>{children}</div>;
}
