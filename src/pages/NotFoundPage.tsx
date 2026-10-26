import { Button } from '@/components/ui';

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="gold-gradient-text text-6xl font-black">404</h1>
      <p className="text-gray-400">This page could not be found.</p>
      <Button href="/" className="rounded-xl px-8 py-4">Back to Home</Button>
    </section>
  );
}
