import type { Metadata } from 'next';
import { ALL_PATHS } from '@/data/seed';

interface PathLayoutProps {
  children: React.ReactNode;
  params: Promise<{ pathId: string }>;
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
 * Learning Path detail layout，負責動態 SEO metadata。
 * page.tsx 保持 Client Component 處理互動邏輯。
 */
export async function generateMetadata({ params }: PathLayoutProps): Promise<Metadata> {
  const { pathId } = await params;
  const path = ALL_PATHS.find((p) => p.id === pathId);

  if (!path) {
    return {
      title: '找不到學習路徑',
      description: '此學習路徑不存在。',
    };
  }

  const specialtyLabel = SPECIALTY_LABELS[path.specialty] ?? path.specialty;
  const title = `${path.title}（${specialtyLabel} 學習路徑）`;
  const description = path.description ?? `${path.title}，含 ${path.path_nodes?.length ?? 0} 個節點的結構化學習路徑。`;

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

export default function PathDetailLayout({ children }: PathLayoutProps) {
  return <>{children}</>;
}
