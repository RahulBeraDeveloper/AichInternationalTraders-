import { ChevronRight, Menu, X } from 'lucide-react';
import { useDisclosure } from '@/hooks/useDisclosure';
import { useProductModal } from '@/app/providers/ProductModalProvider';
import { navLinks, siteConfig } from '@/config/site';
import { Button } from '@/components/ui';
import { Logo } from '@/components/ui/Logo';

const desktopLink =
  'text-gray-300 hover:text-amber-300 transition-colors py-2 border-b-2 border-transparent hover:border-amber-400';
const mobileLink = 'block py-2.5 text-sm font-semibold text-gray-200 hover:text-amber-300 border-b border-gray-800';

export function Navbar() {
  const menu = useDisclosure();
  const products = useProductModal();

  // Order matches the original design: Home, Global Network, Spices & Products, Why AIT, Contact
  const [home, global, ...rest] = navLinks;

  return (
    <nav className="sticky top-0 z-50 border-b border-amber-500/15 bg-ink/85 backdrop-blur-xl transition-all">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-3">
            <Logo className="h-12 w-12 shadow-lg shadow-amber-500/10 transition-shadow group-hover:shadow-amber-500/30" />
            <div className="flex flex-col">
              <span className="gold-gradient-text text-base font-bold uppercase leading-tight tracking-wider sm:text-lg">
                {siteConfig.name}
              </span>
              {/* <span className="text-[10px] font-medium uppercase tracking-widest text-gray-400">
                {siteConfig.tagline}
              </span> */}
            </div>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center space-x-8 text-xs font-semibold uppercase tracking-wider lg:flex">
            <a href={home.href} className={desktopLink}>{home.label}</a>
            <a href={global.href} className={desktopLink}>{global.label}</a>
            <button
              onClick={products.open}
              className="flex items-center gap-1.5 border-b-2 border-transparent py-2 text-amber-300 transition-colors hover:border-amber-400 hover:text-amber-200"
            >
              <span>Spices & Products</span>
              <span className="rounded border border-amber-500/30 bg-amber-500/20 px-1.5 py-0.5 text-[9px] font-bold text-amber-300">SOON</span>
            </button>
            {rest.map((l) => (
              <a key={l.href} href={l.href} className={desktopLink}>{l.label}</a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden items-center space-x-4 lg:flex">
            <Button href="#contact" className="rounded-lg px-6 py-3 shadow-lg hover:brightness-110">
              <span>Get Import Quote</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={menu.toggle}
              className="rounded-lg border border-amber-500/20 bg-amber-500/10 p-2.5 text-amber-300 transition hover:bg-amber-500/20"
              aria-label="Toggle Menu"
              aria-expanded={menu.isOpen}
            >
              {menu.isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {menu.isOpen && (
        <div className="space-y-4 border-b border-amber-500/20 bg-ink/95 px-6 pb-8 pt-4 backdrop-blur-2xl lg:hidden">
          <a href={home.href} onClick={menu.close} className={mobileLink}>{home.label}</a>
          <a href={global.href} onClick={menu.close} className={mobileLink}>{global.label}</a>
          <button
            onClick={() => {
              menu.close();
              products.open();
            }}
            className="flex w-full items-center justify-between border-b border-gray-800 py-2.5 text-left text-sm font-semibold text-amber-300"
          >
            <span>Spices & Products</span>
            <span className="rounded border border-amber-500/40 bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold text-amber-300">COMING SOON</span>
          </button>
          {rest.map((l) => (
            <a key={l.href} href={l.href} onClick={menu.close} className={mobileLink}>
              {l.label === 'Contact' ? 'Contact Us' : l.label}
            </a>
          ))}
          <Button href="#contact" onClick={menu.close} className="mt-4 w-full rounded-xl px-4 py-3.5">
            Get Import Quote
          </Button>
        </div>
      )}
    </nav>
  );
}
