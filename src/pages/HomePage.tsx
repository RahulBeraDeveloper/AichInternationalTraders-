import { AboutSection } from '@/features/landing/sections/AboutSection';
import { ContactSection } from '@/features/landing/sections/ContactSection';
import { GlobalNetworkSection } from '@/features/landing/sections/GlobalNetworkSection';
import { HeroSection } from '@/features/landing/sections/HeroSection';
import { SpiceShowcaseSection } from '@/features/landing/sections/SpiceShowcaseSection';

/** Landing page. Add/remove/reorder sections here (e.g. Testimonials in a later phase). */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <GlobalNetworkSection />
      <SpiceShowcaseSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
