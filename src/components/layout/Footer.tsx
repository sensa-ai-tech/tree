import Link from 'next/link';
import { cn } from '@/lib/utils/cn';

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  // C03 fix: gray-600 (7.41:1 vs white) passes WCAG AA at text-xs; gray-400 was only 2.85:1
  return (
    <footer className={cn('border-t border-gray-200 bg-white px-4 py-3 text-center text-xs text-gray-600', className)}>
      <p>
        &copy; 2026 VetKnowledgeTree &middot; v0.1.0
        <span className="mx-2">&middot;</span>
        <Link href="/privacy" className="hover:text-indigo-600 transition-colors">隱私權政策</Link>
        <span className="mx-1">&middot;</span>
        <Link href="/terms" className="hover:text-indigo-600 transition-colors">服務條款</Link>
      </p>
    </footer>
  );
}
