import Link from 'next/link';
import { cn } from '@/lib/utils/cn';

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn('border-t border-gray-200 bg-white px-4 py-3 text-center text-xs text-gray-400', className)}>
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
