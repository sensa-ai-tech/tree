import type { MetadataRoute } from 'next';
import { ALL_NODES } from '@/data/seed';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://vet-knowledge-tree.vercel.app';

/**
 * 用節點 ID 推算「穩定的」lastmod。
 * 同一節點每次部署不應該變動 lastmod（搜尋引擎會視為內容大量更新）。
 * Seed data 帶有 updated_at；若無，用節點 layer 推算固定日期。
 */
function getNodeLastModified(node: { updated_at?: string }): Date {
  if (node.updated_at) {
    const parsed = new Date(node.updated_at);
    if (!isNaN(parsed.getTime())) return parsed;
  }
  // Fallback：以專案上線日為基準
  return new Date('2026-03-01T00:00:00Z');
}

export default function sitemap(): MetadataRoute.Sitemap {
  const projectLastMod = new Date('2026-03-01T00:00:00Z');

  // 靜態路由
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: projectLastMod,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...['/login', '/register', '/graph', '/cases', '/paths', '/review', '/achievements', '/privacy', '/terms'].map(
      (route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: projectLastMod,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      })
    ),
  ];

  // 動態路由：所有知識節點，使用節點本身的 updated_at 而非部署時間
  const nodeRoutes: MetadataRoute.Sitemap = ALL_NODES.map((node) => ({
    url: `${BASE_URL}/nodes/${node.id}`,
    lastModified: getNodeLastModified(node),
    changeFrequency: 'monthly' as const,
    priority: node.layer === 3 ? 0.9 : 0.7, // L3 疾病節點較高優先級
  }));

  return [...staticRoutes, ...nodeRoutes];
}
