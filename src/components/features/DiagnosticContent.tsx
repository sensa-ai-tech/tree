'use client';

import { useState } from 'react';
import type { DiagnosticData } from '@/types/knowledge';
import { cn } from '@/lib/utils/cn';

interface DiagnosticContentProps {
  data: DiagnosticData;
  className?: string;
}

type TabKey = 'indications' | 'technique' | 'normal' | 'abnormal' | 'interpretation' | 'pitfalls';

interface TabConfig {
  key: TabKey;
  label: string;
}

const TABS: TabConfig[] = [
  { key: 'indications', label: '適應症/禁忌' },
  { key: 'technique', label: '操作技術' },
  { key: 'normal', label: '正常表現' },
  { key: 'abnormal', label: '異常表現' },
  { key: 'interpretation', label: '判讀指引' },
  { key: 'pitfalls', label: '陷阱' },
];

export function DiagnosticContent({ data, className }: DiagnosticContentProps) {
  const [activeTab, setActiveTab] = useState<TabKey>('indications');

  function handleTabChange(tab: TabKey): void {
    setActiveTab(tab);
  }

  function renderTabContent(): React.ReactNode {
    switch (activeTab) {
      case 'indications':
        return (
          <div className="space-y-4">
            <div>
              <h4 className="mb-2 text-sm font-semibold text-green-700">適應症</h4>
              <ul className="space-y-1">
                {data.indication.map((item, i) => (
                  <li key={i} className="text-sm text-gray-700">&bull; {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-semibold text-red-700">禁忌症</h4>
              {data.contraindication.length > 0 ? (
                <ul className="space-y-1">
                  {data.contraindication.map((item, i) => (
                    <li key={i} className="text-sm text-gray-700">&bull; {item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-400">無特殊禁忌</p>
              )}
            </div>
          </div>
        );
      case 'technique':
        return <p className="text-sm text-gray-700 whitespace-pre-wrap">{data.technique}</p>;
      case 'normal':
        return (
          <div className="space-y-2">
            {data.normal_findings.length > 0 ? (
              data.normal_findings.map((finding, i) => (
                <div key={i} className="rounded border border-gray-100 bg-gray-50 p-3">
                  <p className="text-sm font-medium text-gray-800">{finding.finding}</p>
                  <p className="mt-0.5 text-xs text-gray-600">{finding.description}</p>
                  <p className="mt-0.5 text-xs text-indigo-600">意義：{finding.significance}</p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-400">無資料</p>
            )}
          </div>
        );
      case 'abnormal':
        return (
          <div className="space-y-2">
            {data.abnormal_findings.length > 0 ? (
              data.abnormal_findings.map((finding, i) => (
                <div key={i} className="rounded border border-red-100 bg-red-50 p-3">
                  <p className="text-sm font-medium text-red-800">{finding.finding}</p>
                  <p className="mt-0.5 text-xs text-red-600">{finding.description}</p>
                  <p className="mt-0.5 text-xs text-red-700 font-medium">意義：{finding.significance}</p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-400">無資料</p>
            )}
          </div>
        );
      case 'interpretation':
        return (
          <div className="space-y-3">
            <p className="text-sm text-gray-700 whitespace-pre-wrap">{data.interpretation_guide}</p>
            {data.sensitivity_specificity && (
              <div className="rounded bg-blue-50 p-3">
                <p className="text-xs font-medium text-blue-700">敏感度/特異度</p>
                <p className="text-sm text-blue-800">{data.sensitivity_specificity}</p>
              </div>
            )}
            {data.cost_benefit && (
              <div className="rounded bg-amber-50 p-3">
                <p className="text-xs font-medium text-amber-700">成本效益</p>
                <p className="text-sm text-amber-800">{data.cost_benefit}</p>
              </div>
            )}
          </div>
        );
      case 'pitfalls':
        return (
          <div className="space-y-1">
            {data.pitfalls.length > 0 ? (
              data.pitfalls.map((pitfall, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <span className="mt-0.5 flex-shrink-0 text-amber-500">&#9888;</span>
                  <span className="text-gray-700">{pitfall}</span>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-400">無已知陷阱</p>
            )}
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div className={cn('space-y-3', className)}>
      {/* Tabs */}
      <div className="flex flex-wrap gap-1 border-b border-gray-200 pb-1">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => handleTabChange(tab.key)}
            className={cn(
              'rounded-t-lg px-3 py-1.5 text-xs font-medium transition-colors',
              activeTab === tab.key
                ? 'bg-indigo-50 text-indigo-700 border-b-2 border-indigo-600'
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[120px]">{renderTabContent()}</div>
    </div>
  );
}
