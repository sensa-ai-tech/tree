import { cn } from '@/lib/utils/cn';
import { LAYER_COLORS, NODE_TYPE_LABELS, type Layer, type NodeType } from '@/types/knowledge';

type BadgeVariant = 'default' | 'outline' | 'layer' | 'nodeType' | 'difficulty';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  layer?: Layer;
  nodeType?: NodeType;
  difficulty?: number;
  className?: string;
}

export function Badge({ children, variant = 'default', layer, nodeType, difficulty, className }: BadgeProps) {
  if (variant === 'layer' && layer !== undefined) {
    return (
      <span
        className={cn('inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium text-white', className)}
        style={{ backgroundColor: LAYER_COLORS[layer] }}
      >
        {children}
      </span>
    );
  }

  if (variant === 'nodeType' && nodeType) {
    return (
      <span className={cn('inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700', className)}>
        {NODE_TYPE_LABELS[nodeType]}
      </span>
    );
  }

  if (variant === 'difficulty' && difficulty) {
    const colors = ['', 'bg-green-100 text-green-700', 'bg-blue-100 text-blue-700', 'bg-yellow-100 text-yellow-700', 'bg-orange-100 text-orange-700', 'bg-red-100 text-red-700'];
    return (
      <span className={cn('inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium', colors[difficulty], className)}>
        {children}
      </span>
    );
  }

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        variant === 'outline'
          ? 'border border-gray-300 text-gray-600'
          : 'bg-indigo-100 text-indigo-700',
        className
      )}
    >
      {children}
    </span>
  );
}
