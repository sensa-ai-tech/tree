import type { ImageAsset } from '@/types/image';
import { getImageByDescription } from '@/data/seed/image-registry';

export interface DrugLink {
  name: string;
  position: number;
}

export interface ImagePlaceholder {
  description: string;
  position: number;
}

export interface InteractiveElement {
  description: string;
  position: number;
}

export interface ParsedContent {
  markdown: string;
  drugLinks: DrugLink[];
  imagePlaceholders: ImagePlaceholder[];
  interactiveElements: InteractiveElement[];
  resolvedImages: Map<string, ImageAsset>;
}

const DRUG_PATTERN = /\[藥物:([^\]]+)\]/g;
const IMAGE_PATTERN = /\[圖片:([^\]]+)\]/g;
const INTERACTIVE_PATTERN = /\[互動:([^\]]+)\]/g;

export function parseContentMarkers(rawMarkdown: string): ParsedContent {
  const drugLinks: DrugLink[] = [];
  const imagePlaceholders: ImagePlaceholder[] = [];
  const interactiveElements: InteractiveElement[] = [];

  let match: RegExpExecArray | null;

  const drugRegex = new RegExp(DRUG_PATTERN.source, 'g');
  while ((match = drugRegex.exec(rawMarkdown)) !== null) {
    drugLinks.push({ name: match[1], position: match.index });
  }

  const imageRegex = new RegExp(IMAGE_PATTERN.source, 'g');
  while ((match = imageRegex.exec(rawMarkdown)) !== null) {
    imagePlaceholders.push({ description: match[1], position: match.index });
  }

  const interactiveRegex = new RegExp(INTERACTIVE_PATTERN.source, 'g');
  while ((match = interactiveRegex.exec(rawMarkdown)) !== null) {
    interactiveElements.push({
      description: match[1],
      position: match.index,
    });
  }

  // Resolve images from registry
  const resolvedImages = new Map<string, ImageAsset>();
  for (const ip of imagePlaceholders) {
    const asset = getImageByDescription(ip.description);
    if (asset) {
      resolvedImages.set(ip.description, asset);
    }
  }

  // Escape HTML metacharacters before interpolating any captured marker text into
  // raw HTML — rehype-sanitize is defense in depth, not the primary boundary.
  const escapeHtml = (s: string): string =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

  let processed = rawMarkdown;
  processed = processed.replace(DRUG_PATTERN, (_m, name: string) => {
    const safe = escapeHtml(name);
    return `<span class="drug-link" data-drug="${safe}">${safe}</span>`;
  });
  processed = processed.replace(IMAGE_PATTERN, (_match, desc: string) => {
    const safe = escapeHtml(desc);
    const hasImage = resolvedImages.has(desc);
    if (hasImage) {
      return `<div class="clinical-image">[臨床影像: ${safe}]</div>`;
    }
    return `<div class="image-placeholder">[圖片預留位: ${safe}]</div>`;
  });
  processed = processed.replace(INTERACTIVE_PATTERN, (_m, desc: string) => {
    const safe = escapeHtml(desc);
    return `<div class="interactive-placeholder" data-desc="${safe}">[互動元件預留位: ${safe}]</div>`;
  });

  return { markdown: processed, drugLinks, imagePlaceholders, interactiveElements, resolvedImages };
}

export function extractHeadings(
  markdown: string
): Array<{ level: number; text: string; id: string }> {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const headings: Array<{ level: number; text: string; id: string }> = [];

  let headingMatch: RegExpExecArray | null;
  while ((headingMatch = headingRegex.exec(markdown)) !== null) {
    const level = headingMatch[1].length;
    const text = headingMatch[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\u4e00-\u9fff]+/g, '-')
      .replace(/^-|-$/g, '');
    headings.push({ level, text, id });
  }

  return headings;
}
