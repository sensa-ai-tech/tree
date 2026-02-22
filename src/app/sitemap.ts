import type { MetadataRoute } from 'next';
import { ALL_NODES } from '@/data/seed';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://vet-knowledge-tree.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  // 靜態路由
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...['/login', '/register', '/graph', '/cases', '/paths', '/review', '/achievements', '/privacy', '/terms'].map(
      (route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      })
    ),
  ];

  // 動態路由：所有知識節點
  const nodeRoutes: MetadataRoute.Sitemap = ALL_NODES.map((node) => ({
    url: `${BASE_URL}/nodes/${node.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: node.layer === 3 ? 0.9 : 0.7, // L3 疾病節點較高優先級
  }));

  return [...staticRoutes, ...nodeRoutes];
}
