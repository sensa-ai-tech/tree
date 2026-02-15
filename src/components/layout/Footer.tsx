import { cn } from '@/lib/utils/cn';

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn('border-t border-gray-200 bg-white px-4 py-3 text-center text-xs text-gray-400', className)}>
      <p>&copy; 2026 VetKnowledgeTree &middot; v0.1.0</p>
    </footer>
  );
}
