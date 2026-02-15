'use client';

import type { LearningPath } from '@/types/knowledge';
import { Card, CardBody, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Progress } from '@/components/ui/Progress';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils/cn';
import { Clock, BookOpen } from 'lucide-react';

interface LearningPathCardProps {
  path: LearningPath;
  progress?: number;
  onStart?: () => void;
  className?: string;
}

export function LearningPathCard({ path, progress, onStart, className }: LearningPathCardProps) {
  const hasStarted = progress !== undefined && progress > 0;
  const isComplete = progress !== undefined && progress >= 100;

  return (
    <Card hoverable className={cn('flex flex-col', className)}>
      <CardBody className="flex-1 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold text-gray-900 leading-tight">{path.title}</h3>
          {path.has_certificate && (
            <Badge variant="default" className="flex-shrink-0">證書</Badge>
          )}
        </div>

        {path.description && (
          <p className="text-xs text-gray-500 line-clamp-2">{path.description}</p>
        )}

        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {path.estimated_hours} 小時
          </span>
          <span className="flex items-center gap-1">
            <BookOpen className="h-3.5 w-3.5" />
            {path.path_nodes.length} 個節點
          </span>
        </div>

        {path.target_audience && (
          <Badge variant="outline" className="text-xs">{path.target_audience}</Badge>
        )}

        {progress !== undefined && (
          <Progress
            value={progress}
            max={100}
            showPercentage
            variant={isComplete ? 'mastery' : 'default'}
            size="sm"
          />
        )}
      </CardBody>

      <CardFooter>
        <Button
          size="sm"
          variant={isComplete ? 'secondary' : 'primary'}
          onClick={onStart}
          disabled={isComplete}
          className="w-full"
        >
          {isComplete ? '已完成' : hasStarted ? '繼續學習' : '開始學習'}
        </Button>
      </CardFooter>
    </Card>
  );
}
