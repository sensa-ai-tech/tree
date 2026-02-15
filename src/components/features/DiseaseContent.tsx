'use client';

import { useState } from 'react';
import type { DiseaseData } from '@/types/knowledge';
import { cn } from '@/lib/utils/cn';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface DiseaseContentProps {
  data: DiseaseData;
  className?: string;
}

interface AccordionSection {
  key: string;
  label: string;
  render: () => React.ReactNode;
}

function SectionHeader({
  label,
  isOpen,
  onToggle,
}: {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex w-full items-center justify-between rounded-lg bg-gray-50 px-4 py-2.5 text-left text-sm font-medium text-gray-800 hover:bg-gray-100 transition-colors"
    >
      <span>{label}</span>
      {isOpen ? <ChevronDown className="h-4 w-4 text-gray-500" /> : <ChevronRight className="h-4 w-4 text-gray-500" />}
    </button>
  );
}

export function DiseaseContent({ data, className }: DiseaseContentProps) {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set(['signalment']));

  function handleToggle(key: string): void {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  }

  const sections: AccordionSection[] = [
    { key: 'signalment', label: '好發族群 (Signalment)', render: () => <p className="text-sm text-gray-700">{data.signalment}</p> },
    { key: 'etiology', label: '病因 (Etiology)', render: () => <p className="text-sm text-gray-700">{data.etiology}</p> },
    { key: 'pathogenesis', label: '病理機轉 (Pathogenesis)', render: () => <p className="text-sm text-gray-700">{data.pathogenesis}</p> },
    {
      key: 'clinical_signs',
      label: '臨床症狀 (Clinical Signs)',
      render: () => (
        <div className="space-y-2">
          {data.clinical_signs.map((sign, i) => (
            <div key={i} className="rounded border border-gray-100 bg-gray-50 p-2">
              <div className="flex items-center gap-2">
                <span className={cn(
                  'inline-block rounded-full px-2 py-0.5 text-xs font-medium',
                  sign.category === 'primary' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                )}>
                  {sign.category === 'primary' ? '主要' : '次要'}
                </span>
                <span className="text-sm font-medium text-gray-800">{sign.sign}</span>
              </div>
              <p className="mt-1 text-xs text-gray-600">{sign.description}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      key: 'staging',
      label: '分期 (Staging)',
      render: () =>
        data.staging ? (
          <div>
            <p className="mb-1 text-xs font-medium text-gray-500">{data.staging.system}</p>
            <ol className="list-decimal list-inside space-y-1">
              {data.staging.stages.map((stage, i) => (
                <li key={i} className="text-sm text-gray-700">{stage}</li>
              ))}
            </ol>
          </div>
        ) : (
          <p className="text-sm text-gray-400">無分期資訊</p>
        ),
    },
    {
      key: 'differential_diagnosis',
      label: '鑑別診斷 (Differential Diagnosis)',
      render: () => (
        <div className="space-y-1">
          {data.differential_diagnosis.map((dd, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              <span className="font-medium text-gray-800">{dd.condition}:</span>
              <span className="text-gray-600">{dd.key_differentiator}</span>
            </div>
          ))}
        </div>
      ),
    },
    { key: 'diagnostic_workup', label: '診斷流程 (Diagnostic Workup)', render: () => <p className="text-sm text-gray-700 whitespace-pre-wrap">{data.diagnostic_workup}</p> },
    { key: 'treatment_protocol', label: '治療方案 (Treatment Protocol)', render: () => <p className="text-sm text-gray-700 whitespace-pre-wrap">{data.treatment_protocol}</p> },
    { key: 'prognosis', label: '預後 (Prognosis)', render: () => <p className="text-sm text-gray-700">{data.prognosis}</p> },
    { key: 'monitoring', label: '追蹤監控 (Monitoring)', render: () => <p className="text-sm text-gray-700">{data.monitoring}</p> },
    { key: 'owner_communication', label: '飼主溝通 (Owner Communication)', render: () => <p className="text-sm text-gray-700">{data.owner_communication}</p> },
  ];

  return (
    <div className={cn('space-y-2', className)}>
      {sections.map((section) => {
        const isOpen = openSections.has(section.key);
        return (
          <div key={section.key} className="rounded-lg border border-gray-200">
            <SectionHeader
              label={section.label}
              isOpen={isOpen}
              onToggle={() => handleToggle(section.key)}
            />
            {isOpen && (
              <div className="px-4 py-3">
                {section.render()}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
