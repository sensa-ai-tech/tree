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

  let processed = rawMarkdown;
  processed = processed.replace(
    DRUG_PATTERN,
    '<span class="drug-link" data-drug="$1">$1</span>'
  );
  processed = processed.replace(
    IMAGE_PATTERN,
    '<div class="image-placeholder" data-desc="$1">[圖片預留位: $1]</div>'
  );
  processed = processed.replace(
    INTERACTIVE_PATTERN,
    '<div class="interactive-placeholder" data-desc="$1">[互動元件預留位: $1]</div>'
  );

  return { markdown: processed, drugLinks, imagePlaceholders, interactiveElements };
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
