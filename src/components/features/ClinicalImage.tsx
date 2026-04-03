'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, ZoomIn, X } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import type { ImageAsset } from '@/types/image';
import { ImagePlaceholder } from './ImagePlaceholder';

interface ClinicalImageProps {
  asset: ImageAsset;
  showAttribution?: boolean;
  zoomable?: boolean;
  className?: string;
}

const LICENSE_LABELS: Record<string, string> = {
  'CC-BY': 'CC BY',
  'CC-BY-SA': 'CC BY-SA',
  'CC-BY-NC': 'CC BY-NC',
  'CC-BY-NC-SA': 'CC BY-NC-SA',
  'CC0': 'CC0',
  'public_domain': 'Public Domain',
  'fair_use_education': 'Fair Use (Education)',
};

export function ClinicalImage({
  asset,
  showAttribution = true,
  zoomable = true,
  className,
}: ClinicalImageProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <ImagePlaceholder description={asset.alt_text} className={className} />;
  }

  return (
    <>
      <figure className={cn('my-4 overflow-hidden rounded-lg border border-gray-200 bg-white', className)}>
        <div className="relative">
          <Image
            src={asset.url}
            alt={asset.alt_text}
            width={asset.width}
            height={asset.height}
            className="w-full h-auto object-contain"
            placeholder="empty"
            onError={() => setHasError(true)}
          />
          {zoomable && (
            <button
              type="button"
              onClick={() => setIsZoomed(true)}
              className="absolute bottom-2 right-2 rounded-full bg-black/50 p-1.5 text-white opacity-0 transition-opacity hover:bg-black/70 group-hover:opacity-100 focus:opacity-100"
              aria-label="Zoom in"
            >
              <ZoomIn className="h-4 w-4" />
            </button>
          )}
        </div>

        {(asset.caption || showAttribution) && (
          <figcaption className="border-t border-gray-100 px-3 py-2">
            {asset.caption && (
              <p className="text-sm text-gray-600">{asset.caption}</p>
            )}
            {showAttribution && asset.source && (
              <p className="mt-1 text-xs text-gray-400">
                {asset.source.attribution_text}
                {' '}
                <span className="inline-flex items-center gap-0.5 rounded bg-gray-100 px-1 py-0.5 text-[10px] font-medium text-gray-500">
                  {LICENSE_LABELS[asset.source.license] ?? asset.source.license}
                </span>
                {asset.source.original_url && (
                  <a
                    href={asset.source.original_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 inline-flex items-center text-indigo-400 hover:text-indigo-600"
                    aria-label="View original source"
                  >
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </p>
            )}
          </figcaption>
        )}
      </figure>

      {/* Lightbox dialog */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsZoomed(false)}
          role="dialog"
          aria-modal="true"
          aria-label={asset.alt_text}
        >
          <button
            type="button"
            onClick={() => setIsZoomed(false)}
            className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white hover:bg-white/30"
            aria-label="Close zoom"
          >
            <X className="h-6 w-6" />
          </button>
          <Image
            src={asset.url}
            alt={asset.alt_text}
            width={asset.width}
            height={asset.height}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
