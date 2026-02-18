import type { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://vet-knowledge-tree.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/login',
    '/register',
    '/graph',
    '/cases',
    '/paths',
    '/review',
    '/achievements',
  ];

  return staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
