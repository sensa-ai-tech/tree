import { ImageResponse } from 'next/og';

// Next 16 file-route convention: registers as <link rel="icon" sizes="512x512" href="/icon-512">.
// Used by Android PWA install + maskable purpose (wordmark stays in 80% safe zone center).
export const runtime = 'edge';
export const size = { width: 512, height: 512 };
export const contentType = 'image/png';

export default async function Icon512(): Promise<ImageResponse> {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'linear-gradient(135deg, #4338ca 0%, #6366f1 55%, #818cf8 100%)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          color: '#ffffff',
        }}
      >
        <div
          style={{
            fontSize: 200,
            fontWeight: 800,
            letterSpacing: -6,
            lineHeight: 1,
          }}
        >
          VKT
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 44,
            opacity: 0.88,
            fontWeight: 600,
            letterSpacing: 4,
          }}
        >
          獸醫知識樹
        </div>
      </div>
    ),
    { ...size }
  );
}
