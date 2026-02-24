import { ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

interface ImagePlaceholderProps {
  description: string;
  className?: string;
}

/**
 * 圖片預留位卡片
 * 取代原始文字 [圖片:...] 的美化顯示元件
 */
export function ImagePlaceholder({ description, className }: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        'my-4 flex items-center gap-3 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50/80 p-4',
        className
      )}
    >
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gray-200">
        <ImageIcon className="h-5 w-5 text-gray-500" />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-600">圖片預留位</p>
        <p className="text-xs text-gray-400">{description}</p>
      </div>
    </div>
  );
}
