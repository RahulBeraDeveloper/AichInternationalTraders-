// import { createContext, useContext, type ReactNode } from 'react';
// import { useDisclosure } from '@/hooks/useDisclosure';

// interface ProductModalValue {
//   isOpen: boolean;
//   open: () => void;
//   close: () => void;
// }

// const ProductModalContext = createContext<ProductModalValue | null>(null);

// /** Lets the navbar, hero and footer all open the same "Coming Soon" catalog modal. */
// export function ProductModalProvider({ children }: { children: ReactNode }) {
//   const { isOpen, open, close } = useDisclosure();
//   return <ProductModalContext.Provider value={{ isOpen, open, close }}>{children}</ProductModalContext.Provider>;
// }

// // eslint-disable-next-line react-refresh/only-export-components
// export function useProductModal(): ProductModalValue {
//   const ctx = useContext(ProductModalContext);
//   if (!ctx) throw new Error('useProductModal must be used inside <ProductModalProvider>');
//   return ctx;
// }
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';

interface ProductModalValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  /** Closes the modal, then runs `after` once the history entry is gone (used for in-page links). */
  closeThen: (after: () => void) => void;
}

const ProductModalContext = createContext<ProductModalValue | null>(null);

const MARKER = '__productModal';
const hasMarker = () => Boolean((window.history.state as Record<string, unknown> | null)?.[MARKER]);

/**
 * Lets the navbar, hero and footer all open the same "Coming Soon" catalog modal.
 *
 * Opening the modal pushes a history entry, so the browser Back button closes it
 * (and stays on the landing page) instead of leaving the site.
 */
export function ProductModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const pendingAfter = useRef<(() => void) | null>(null);

  // Browser Back/Forward: the modal follows the history entry.
  useEffect(() => {
    const onPopState = () => {
      setIsOpen(hasMarker());
      const after = pendingAfter.current;
      pendingAfter.current = null;
      after?.();
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const open = useCallback(() => {
    if (!hasMarker()) {
      // Keep router's own state (key/idx) intact and just tag the new entry.
      window.history.pushState({ ...(window.history.state ?? {}), [MARKER]: true }, '');
    }
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    if (hasMarker()) window.history.back(); // popstate handler hides the modal
    else setIsOpen(false);
  }, []);

  const closeThen = useCallback((after: () => void) => {
    if (hasMarker()) {
      pendingAfter.current = after;
      window.history.back();
    } else {
      setIsOpen(false);
      after();
    }
  }, []);

  const value = useMemo(() => ({ isOpen, open, close, closeThen }), [isOpen, open, close, closeThen]);
  return <ProductModalContext.Provider value={value}>{children}</ProductModalContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useProductModal(): ProductModalValue {
  const ctx = useContext(ProductModalContext);
  if (!ctx) throw new Error('useProductModal must be used inside <ProductModalProvider>');
  return ctx;
}