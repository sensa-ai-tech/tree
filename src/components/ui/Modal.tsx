'use client';

import { useEffect, useCallback, useRef } from 'react';
import { cn } from '@/lib/utils/cn';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
  showCloseButton?: boolean;
}

/** All focusable element selectors per ARIA spec */
const FOCUSABLE_SELECTORS = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

export function Modal({ isOpen, onClose, title, children, className, showCloseButton = true }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  // Track the element focused before the modal opened so we can restore it on close (A01)
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  // A02 fix: focus trap — cycle Tab/Shift+Tab within modal
  const handleTabTrap = useCallback((e: KeyboardEvent) => {
    if (e.key !== 'Tab' || !dialogRef.current) return;
    const focusable = Array.from<HTMLElement>(
      dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey) {
      // Shift+Tab: if first element is focused, wrap to last
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      // Tab: if last element is focused, wrap to first
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      // A01 fix: save currently focused element so we can restore it on close
      previouslyFocusedRef.current = document.activeElement as HTMLElement;

      document.addEventListener('keydown', handleEscape);
      document.addEventListener('keydown', handleTabTrap);
      document.body.style.overflow = 'hidden';

      // Move focus into the modal (first focusable child, or the dialog itself)
      requestAnimationFrame(() => {
        if (!dialogRef.current) return;
        const firstFocusable = dialogRef.current.querySelector<HTMLElement>(FOCUSABLE_SELECTORS);
        if (firstFocusable) {
          firstFocusable.focus();
        } else {
          dialogRef.current.focus();
        }
      });
    } else {
      // A01 fix: restore focus to the element that triggered the modal
      if (previouslyFocusedRef.current) {
        previouslyFocusedRef.current.focus();
        previouslyFocusedRef.current = null;
      }
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleTabTrap);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleEscape, handleTabTrap]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={dialogRef}
        className={cn(
          'relative z-10 w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl',
          'animate-in fade-in zoom-in-95 duration-200',
          className
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        // Allow the container itself to receive focus when no focusable children exist
        tabIndex={-1}
      >
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between mb-4">
            {title && (
              <h2 id="modal-title" className="text-lg font-semibold text-gray-900">
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                onClick={onClose}
                className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
                aria-label="關閉"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
