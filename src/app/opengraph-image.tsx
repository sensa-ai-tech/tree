import { ImageResponse } from 'next/og';

// Next 16 file-route convention: this auto-registers as openGraph.images
// AND twitter.images for every page, satisfying the existing
// `summary_large_image` declaration in src/app/layout.tsx.
export const runtime = 'edge';
export const alt = 'VetKnowledgeTree — 獸醫專科互動學習平台';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage(): Promise<ImageResponse> {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '80px',
          background:
            'linear-gradient(135deg, #4338ca 0%, #6366f1 50%, #818cf8 100%)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          color: '#ffffff',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: 'rgba(255,255,255,0.18)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 40,
            }}
          >
            VKT
          </div>
          <div style={{ fontSize: 32, opacity: 0.92, fontWeight: 500 }}>
            VetKnowledgeTree
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ fontSize: 78, fontWeight: 800, lineHeight: 1.05 }}>
            獸醫專科知識樹
          </div>
          <div style={{ fontSize: 34, opacity: 0.88, lineHeight: 1.3, maxWidth: 980 }}>
            8 大專科 · 結構化知識圖譜 · 間隔重複複習
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 28,
            fontSize: 22,
            opacity: 0.85,
            fontWeight: 500,
          }}
        >
          <span>心臟科</span>
          <span>內科</span>
          <span>皮膚科</span>
          <span>外科</span>
          <span>神經科</span>
          <span>腫瘤科</span>
          <span>急診加護</span>
          <span>臨床病理</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
