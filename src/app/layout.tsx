import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ToastProvider } from '@/components/ui/Toast';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://vet-knowledge-tree.vercel.app';

export const metadata: Metadata = {
  title: {
    default: 'VetKnowledgeTree - 獸醫專科知識樹',
    template: '%s | VetKnowledgeTree',
  },
  description: '結構化的獸醫專科互動學習平台，涵蓋心臟科、內科、皮膚科、外科、神經科、腫瘤科、急診加護、臨床病理 8 大專科知識圖譜。',
  metadataBase: new URL(BASE_URL),
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    url: BASE_URL,
    siteName: 'VetKnowledgeTree',
    title: 'VetKnowledgeTree - 獸醫專科知識樹',
    description: '結構化的獸醫專科互動學習平台，涵蓋 8 大專科、187 個知識節點的互動式學習體驗。',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VetKnowledgeTree - 獸醫專科知識樹',
    description: '結構化的獸醫專科互動學習平台',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}
