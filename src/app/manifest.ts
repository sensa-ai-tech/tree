import type { MetadataRoute } from 'next';

/**
 * Web App Manifest — enables Android Chrome / Edge / Samsung Internet
 * Add-to-Home-Screen + PWA install prompt. iOS is covered by app/apple-icon.tsx.
 * Iter 3 PWA-MANIFEST-001.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'VetKnowledgeTree — 獸醫專科互動學習平台',
    short_name: 'VKT',
    description: '結構化的獸醫專科互動學習平台，涵蓋 8 大臨床專科的知識圖譜。',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#4338ca',
    lang: 'zh-TW',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/icon-192',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
