import { useEffect, type ReactNode } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/cn';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

/** Full-screen dimmed overlay with a glass panel. Closes on Escape and backdrop click. */
export function Modal({ isOpen, onClose, children, className }: Props) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={cn(
          'glass-card animate-float relative w-full max-w-2xl space-y-6 overflow-hidden rounded-3xl border border-amber-500/40 p-6 shadow-2xl sm:p-8',
          className,
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full border border-amber-500/20 bg-black/60 p-2 text-gray-400 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>
        {children}
      </div>
    </div>
  );
}
