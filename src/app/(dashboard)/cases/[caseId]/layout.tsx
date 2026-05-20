import type { Metadata } from 'next';
import { ALL_CASES } from '@/data/seed';

interface CaseLayoutProps {
  children: React.ReactNode;
  params: Promise<{ caseId: string }>;
}

const SPECIALTY_LABELS: Record<string, string> = {
  CARDIO: '心臟科',
  IM: '內科',
  DERM: '皮膚科',
  SURG: '外科',
  NEURO: '神經科',
  ONCO: '腫瘤科',
  ECC: '急診加護',
  CPATH: '臨床病理',
};

/**
 * Case detail layout，負責動態 SEO metadata。
 * page.tsx 保持 Client Component 處理互動邏輯。
 */
export async function generateMetadata({ params }: CaseLayoutProps): Promise<Metadata> {
  const { caseId } = await params;
  const caseChallenge = ALL_CASES.find((c) => c.id === caseId);

  if (!caseChallenge) {
    return {
      title: '找不到病例',
      description: '此互動病例不存在。',
    };
  }

  const specialtyLabel = SPECIALTY_LABELS[caseChallenge.specialty] ?? caseChallenge.specialty;
  const title = `${caseChallenge.title}（${specialtyLabel} 互動病例）`;
  const description = `${caseChallenge.scenario?.signalment ?? ''}。${caseChallenge.scenario?.chief_complaint ?? ''}`.trim();

  return {
    title,
    description,
    openGraph: {
      title: `${title} | VetKnowledgeTree`,
      description,
      type: 'article',
    },
  };
}

export default function CaseDetailLayout({ children }: CaseLayoutProps) {
  return <>{children}</>;
}
