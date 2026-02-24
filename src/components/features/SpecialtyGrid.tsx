'use client';

import {
  Heart,
  Stethoscope,
  Scissors,
  Brain,
  ShieldAlert,
  Microscope,
  Zap,
  FlaskConical,
} from 'lucide-react';
import { cn } from '@/lib/utils/cn';

interface SpecialtyInfo {
  value: string;
  label: string;
  labelEn: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
}

const SPECIALTY_INFO: SpecialtyInfo[] = [
  { value: 'CARDIO', label: '心臟科', labelEn: 'Cardiology', icon: <Heart className="h-8 w-8" />, color: 'text-red-600', bgColor: 'bg-red-50 hover:bg-red-100', borderColor: 'border-red-200' },
  { value: 'IM', label: '內科', labelEn: 'Internal Medicine', icon: <Stethoscope className="h-8 w-8" />, color: 'text-blue-600', bgColor: 'bg-blue-50 hover:bg-blue-100', borderColor: 'border-blue-200' },
  { value: 'DERM', label: '皮膚科', labelEn: 'Dermatology', icon: <FlaskConical className="h-8 w-8" />, color: 'text-purple-600', bgColor: 'bg-purple-50 hover:bg-purple-100', borderColor: 'border-purple-200' },
  { value: 'SURG', label: '外科', labelEn: 'Surgery', icon: <Scissors className="h-8 w-8" />, color: 'text-emerald-600', bgColor: 'bg-emerald-50 hover:bg-emerald-100', borderColor: 'border-emerald-200' },
  { value: 'NEURO', label: '神經科', labelEn: 'Neurology', icon: <Brain className="h-8 w-8" />, color: 'text-pink-600', bgColor: 'bg-pink-50 hover:bg-pink-100', borderColor: 'border-pink-200' },
  { value: 'ONCO', label: '腫瘤科', labelEn: 'Oncology', icon: <ShieldAlert className="h-8 w-8" />, color: 'text-orange-600', bgColor: 'bg-orange-50 hover:bg-orange-100', borderColor: 'border-orange-200' },
  { value: 'ECC', label: '急診加護', labelEn: 'Emergency & Critical Care', icon: <Zap className="h-8 w-8" />, color: 'text-amber-600', bgColor: 'bg-amber-50 hover:bg-amber-100', borderColor: 'border-amber-200' },
  { value: 'CPATH', label: '臨床病理', labelEn: 'Clinical Pathology', icon: <Microscope className="h-8 w-8" />, color: 'text-teal-600', bgColor: 'bg-teal-50 hover:bg-teal-100', borderColor: 'border-teal-200' },
];

interface SpecialtyGridProps {
  nodeCounts: Record<string, number>;
  onSelect: (specialty: string) => void;
  className?: string;
}

export function SpecialtyGrid({ nodeCounts, onSelect, className }: SpecialtyGridProps) {
  const totalNodes = Object.values(nodeCounts).reduce((sum, c) => sum + c, 0);

  return (
    <div className={cn('space-y-6', className)}>
      {/* 標題區 */}
      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-900 md:text-2xl">選擇專科開始探索</h2>
        <p className="mt-1 text-sm text-gray-500">
          共 {totalNodes} 個知識節點，涵蓋 8 大獸醫專科
        </p>
      </div>

      {/* 專科卡片網格 */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {SPECIALTY_INFO.map((spec) => {
          const count = nodeCounts[spec.value] ?? 0;
          return (
            <button
              key={spec.value}
              type="button"
              onClick={() => onSelect(spec.value)}
              className={cn(
                'group flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-all duration-200 md:gap-3 md:p-6',
                spec.bgColor,
                spec.borderColor,
                'hover:shadow-md hover:-translate-y-0.5 active:translate-y-0'
              )}
            >
              <div className={cn(spec.color, 'transition-transform group-hover:scale-110')}>
                {spec.icon}
              </div>
              <div className="text-center">
                <p className="text-base font-bold text-gray-900">{spec.label}</p>
                <p className="text-xs text-gray-500">{spec.labelEn}</p>
              </div>
              <span className="rounded-full bg-white/80 px-2.5 py-0.5 text-xs font-medium text-gray-600 shadow-sm">
                {count} 節點
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
