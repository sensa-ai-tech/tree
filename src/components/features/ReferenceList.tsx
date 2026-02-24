import type { Reference } from '@/types/knowledge';
import { cn } from '@/lib/utils/cn';

interface ReferenceListProps {
  references: Reference[];
  className?: string;
}

const TYPE_BADGE: Record<string, { label: string; icon: string; color: string }> = {
  textbook: { label: '教科書', icon: '📖', color: 'bg-blue-50 text-blue-700 ring-blue-200' },
  journal: { label: '期刊', icon: '📰', color: 'bg-green-50 text-green-700 ring-green-200' },
  guideline: { label: '指南', icon: '✅', color: 'bg-amber-50 text-amber-700 ring-amber-200' },
  consensus: { label: '共識', icon: '🤝', color: 'bg-purple-50 text-purple-700 ring-purple-200' },
  review: { label: '綜述', icon: '🔍', color: 'bg-indigo-50 text-indigo-700 ring-indigo-200' },
};

/** 自動偵測 PMID 並生成 PubMed 連結 */
function extractPmidLink(citation: string): string | null {
  const pmidMatch = /PMID[:\s]*(\d+)/i.exec(citation);
  if (pmidMatch) {
    return `https://pubmed.ncbi.nlm.nih.gov/${pmidMatch[1]}/`;
  }
  return null;
}

/** 自動偵測 DOI 並生成連結 */
function extractDoiLink(citation: string): string | null {
  const doiMatch = /doi[:\s]*(10\.\S+)/i.exec(citation);
  if (doiMatch) {
    return `https://doi.org/${doiMatch[1]}`;
  }
  return null;
}

/**
 * 參考文獻列表元件
 * - 文獻類型 badge 標識
 * - 字體 text-sm（取代 text-xs）
 * - 自動偵測 PMID/DOI 轉為外部連結
 */
export function ReferenceList({ references, className }: ReferenceListProps) {
  return (
    <ol className={cn('list-decimal list-inside space-y-3 text-sm text-gray-600', className)}>
      {references.map((ref, i) => {
        const badge = TYPE_BADGE[ref.type] ?? {
          label: ref.type,
          icon: '📄',
          color: 'bg-gray-50 text-gray-700 ring-gray-200',
        };
        const pmidLink = extractPmidLink(ref.citation);
        const doiLink = extractDoiLink(ref.citation);
        const externalLink = pmidLink ?? doiLink;

        return (
          <li key={i} className="leading-relaxed">
            <span
              className={cn(
                'mr-1.5 inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset',
                badge.color
              )}
            >
              {badge.icon} {badge.label}
            </span>
            <span className="text-gray-800">{ref.citation}</span>
            {ref.relevance && (
              <span className="ml-1 text-gray-500"> — {ref.relevance}</span>
            )}
            {externalLink && (
              <a
                href={externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1.5 inline-flex items-center text-xs text-indigo-600 hover:text-indigo-800"
              >
                🔗 查看
              </a>
            )}
          </li>
        );
      })}
    </ol>
  );
}
