import { ImageResponse } from 'next/og';

// Next 16 file-route convention: registers as <link rel="icon" sizes="192x192" href="/icon-192">.
// Used by Android Chrome / Edge / Samsung Internet via manifest.ts.
export const runtime = 'edge';
export const size = { width: 192, height: 192 };
export const contentType = 'image/png';

export default async function Icon192(): Promise<ImageResponse> {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'linear-gradient(135deg, #4338ca 0%, #6366f1 55%, #818cf8 100%)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          color: '#ffffff',
          fontSize: 80,
          fontWeight: 800,
          letterSpacing: -2,
        }}
      >
        VKT
      </div>
    ),
    { ...size }
  );
}
