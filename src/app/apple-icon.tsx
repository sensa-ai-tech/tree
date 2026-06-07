import { ImageResponse } from 'next/og';

// Next 16 file-route convention: this auto-registers as
// <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon">.
// iOS Safari's Add-to-Home-Screen uses this instead of a page screenshot.
// Apple's spec: 180×180 PNG, square, opaque (Apple auto-rounds the corners).
export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default async function AppleIcon(): Promise<ImageResponse> {
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
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: -2,
            lineHeight: 1,
          }}
        >
          VKT
        </div>
        <div
          style={{
            marginTop: 8,
            fontSize: 16,
            opacity: 0.88,
            fontWeight: 600,
            letterSpacing: 1,
          }}
        >
          獸醫知識樹
        </div>
      </div>
    ),
    { ...size }
  );
}
