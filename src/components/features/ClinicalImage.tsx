'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ExternalLink, ZoomIn, X } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import type { ImageAsset } from '@/types/image';
import { ImagePlaceholder } from './ImagePlaceholder';

/** All focusable element selectors per ARIA spec */
const FOCUSABLE_SELECTORS = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

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
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  // Track the element focused before the lightbox opened so we can restore it on close (WCAG 2.4.3)
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  const closeZoom = useCallback(() => {
    setIsZoomed(false);
  }, []);

  const openZoom = useCallback(() => {
    previouslyFocusedRef.current = document.activeElement as HTMLElement | null;
    setIsZoomed(true);
  }, []);

  // WCAG 2.1.1 + 2.1.2: Escape to dismiss, Tab/Shift+Tab cycles inside the dialog
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeZoom();
        return;
      }
      if (e.key !== 'Tab' || !dialogRef.current) return;
      const focusable = Array.from<HTMLElement>(
        dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)
      );
      if (focusable.length === 0) {
        e.preventDefault();
        dialogRef.current.focus();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },
    [closeZoom]
  );

  useEffect(() => {
    if (!isZoomed) {
      // Restore focus to the trigger (zoom-in button) when the lightbox closes
      if (previouslyFocusedRef.current) {
        previouslyFocusedRef.current.focus();
        previouslyFocusedRef.current = null;
      }
      return;
    }
    document.addEventListener('keydown', handleKeyDown);
    // Move initial focus into the dialog so Tab stays inside
    requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isZoomed, handleKeyDown]);

  if (hasError) {
    return <ImagePlaceholder description={asset.alt_text} className={className} />;
  }

  return (
    <>
      <figure className={cn('my-4 overflow-hidden rounded-lg border border-gray-200 bg-white', className)}>
        <div className="group relative">
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
              onClick={openZoom}
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
          ref={dialogRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={closeZoom}
          role="dialog"
          aria-modal="true"
          aria-label={asset.alt_text}
          tabIndex={-1}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeZoom}
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
