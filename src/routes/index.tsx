import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import HomePage from '@/pages/HomePage';

const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

/** Add new pages here: <Route path="products" element={<ProductsPage />} /> */
export function AppRoutes() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
