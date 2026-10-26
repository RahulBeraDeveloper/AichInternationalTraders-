import type { ReactNode } from 'react';
import { ProductModalProvider } from './ProductModalProvider';

/** Single place to add future providers (query client, auth, i18n, ...). */
export function AppProviders({ children }: { children: ReactNode }) {
  return <ProductModalProvider>{children}</ProductModalProvider>;
}
