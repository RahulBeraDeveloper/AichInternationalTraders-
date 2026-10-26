import { useProductModal } from '@/app/providers/ProductModalProvider';
import { siteConfig } from '@/config/site';
import { Container } from '@/components/ui';
import { Logo } from '@/components/ui/Logo';

const heading = 'text-xs font-bold uppercase tracking-widest text-amber-400';

/** Uses the Bootstrap grid (row / col-*) for its columns. */
export function Footer() {
  const products = useProductModal();

  return (
    <footer className="border-t border-amber-500/20 bg-black px-4 pb-8 pt-16">
      <Container className="space-y-12">
        <div className="row row-gap-8">
          <div className="col-12 col-md-6 col-lg-3 space-y-4">
            <div className="flex items-center gap-3">
              <Logo className="h-11 w-11" />
              <span className="gold-gradient-text text-base font-extrabold">{siteConfig.legalName}</span>
            </div>
            <p className="text-xs leading-relaxed text-gray-400">
               Spice exporter committed to quality, purity, and seamless global logistics across 7 continents.
            </p>
          </div>

          <div className="col-12 col-md-6 col-lg-3 space-y-3">
            <h4 className={heading}>Navigation</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#hero" className="hover:text-white">Home</a></li>
              <li><a href="#global" className="hover:text-white">Global Network</a></li>
              <li><button onClick={products.open} className="hover:text-amber-300">Spices & Products (Soon)</button></li>
              <li><a href="#about" className="hover:text-white">Why AIT</a></li>
              <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          <div className="col-12 col-md-6 col-lg-3 space-y-3">
            <h4 className={heading}>Global Markets</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              {FOOTER_MARKETS.map((m) => <li key={m}>{m}</li>)}
            </ul>
          </div>

          <div className="col-12 col-md-6 col-lg-3 space-y-3">
            <h4 className={heading}>Direct Contact</h4>
            <div className="space-y-2 text-xs text-gray-400">
              <p className="font-bold text-gray-200">{siteConfig.name}</p>
              <p>E-mail:- {siteConfig.contact.email}</p>
              <p>Contact us:- {siteConfig.contact.phoneDisplay}</p>
              <p className="text-amber-300">{siteConfig.contact.location}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-900 pt-8 text-xs text-gray-500 sm:flex-row">
          <div>&copy; {new Date().getFullYear()} {siteConfig.legalName} (AIT). All Rights Reserved.</div>
          <div className="flex gap-4 text-[11px] text-gray-400">
            <span>Lab Test Report</span>
            <span>•</span>
             <span>IEC approved</span>
            <span>•</span>
            <span>Spices Board Authorized</span>
            <span>•</span>
            <span>FSSAI Compliant</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

const FOOTER_MARKETS = [
  'Southeast Asia',
  'Europe & United Kingdom',
  'North & South America',
  'Africa & Middle East',
  'Australia & Oceania',
];
