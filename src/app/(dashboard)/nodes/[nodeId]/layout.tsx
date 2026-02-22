import type { Metadata } from 'next';
import { ALL_NODES, SEED_NODE_CONTENTS } from '@/data/seed';

interface NodeLayoutProps {
  children: React.ReactNode;
  params: Promise<{ nodeId: string }>;
}

/**
 * Node detail layout — Server Component
 * 負責 generateMetadata 產生動態 SEO metadata，
 * page.tsx 保持為 Client Component 負責互動邏輯。
 */
export async function generateMetadata({ params }: NodeLayoutProps): Promise<Metadata> {
  const { nodeId } = await params;

  const node = ALL_NODES.find((n) => n.id === nodeId);
  const content = SEED_NODE_CONTENTS.get(nodeId);

  if (!node) {
    return {
      title: '找不到節點',
      description: '此知識節點不存在。',
    };
  }

  const title = node.title_en
    ? `${node.title} (${node.title_en})`
    : node.title;

  const description = content?.summary
    ?? `${node.title} — 獸醫專科知識樹 ${node.specialty} 專科 Layer ${node.layer} 知識節點。`;

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

export default function NodeDetailLayout({ children }: NodeLayoutProps) {
  return <>{children}</>;
}
