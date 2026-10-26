import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { ProductModal } from '@/features/landing/components/ProductModal';

/** Shared chrome for every page: navbar, routed content, footer, global modals. */
export function MainLayout() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink font-sans text-gray-100 selection:bg-gold selection:text-black">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ProductModal />
    </div>
  );
}
