import { cn } from '@/lib/utils/cn';
import { LAYER_COLORS, NODE_TYPE_LABELS, type Layer, type NodeType } from '@/types/knowledge';

type BadgeVariant = 'default' | 'outline' | 'layer' | 'nodeType' | 'difficulty';
type BadgeSize = 'sm' | 'md';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  layer?: Layer;
  nodeType?: NodeType;
  difficulty?: number;
  className?: string;
}

const SIZE_CLASSES: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-[10px]',
  md: 'px-2.5 py-0.5 text-xs',
};

export function Badge({ children, variant = 'default', size = 'md', layer, nodeType, difficulty, className }: BadgeProps) {
  const sizeClass = SIZE_CLASSES[size];

  if (variant === 'layer' && layer !== undefined) {
    return (
      <span
        className={cn('inline-flex items-center rounded-full font-medium text-white', sizeClass, className)}
        style={{ backgroundColor: LAYER_COLORS[layer] }}
      >
        {children}
      </span>
    );
  }

  if (variant === 'nodeType' && nodeType) {
    return (
      <span className={cn('inline-flex items-center rounded-full bg-gray-100 font-medium text-gray-700', sizeClass, className)}>
        {NODE_TYPE_LABELS[nodeType]}
      </span>
    );
  }

  if (variant === 'difficulty' && difficulty) {
    const colors = ['', 'bg-green-100 text-green-700', 'bg-blue-100 text-blue-700', 'bg-yellow-100 text-yellow-700', 'bg-orange-100 text-orange-700', 'bg-red-100 text-red-700'];
    return (
      <span className={cn('inline-flex items-center rounded-full font-medium', sizeClass, colors[difficulty], className)}>
        {children}
      </span>
    );
  }

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium',
        sizeClass,
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
