import { Award, ArrowUpRight, Box, ChevronRight, Globe, Package, Sparkles } from 'lucide-react';
import heroImage from '@/assets/images/hero-spices.jpg';
import { useProductModal } from '@/app/providers/ProductModalProvider';
import { WorldBackdrop } from '@/components/effects/WorldBackdrop';
import { Button } from '@/components/ui';

const METRICS = [
  { value: '100%', label: 'Grade Compliance' },
  { value: '35+', label: 'Export Markets' },
  { value: 'FCL / LCL', label: 'Global Freight' },
];

export function HeroSection() {
  const products = useProductModal();

  return (
    <section id="hero" className="relative flex min-h-[88vh] items-center justify-center overflow-hidden px-4 py-20">
      <WorldBackdrop variant="hero" />

      {/* Glow spheres */}
      <div className="animate-pulse-glow pointer-events-none absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-amber-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-10 -right-10 h-[350px] w-[350px] rounded-full bg-yellow-600/10 blur-[100px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
        {/* Left copy */}
        <div className="space-y-8 text-center lg:col-span-7 lg:text-left">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-amber-300 backdrop-blur-md">
            <Sparkles className="h-4 w-4 animate-pulse text-amber-400" />
            <span>SPICES BOARD AUTHORIZED EXPORTER</span>
          </div>

          <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Connecting Continents, <br />
            <span className="gold-gradient-text">Creating Opportunities</span>
          </h1>

          <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-gray-300 sm:text-lg lg:mx-0">
            Delivering premium, authentic Indian whole and ground spices from heritage farm belts to international
            importers across{' '}
            <span className="font-semibold text-amber-300">Asia, Europe, Americas, Africa & Australia</span>.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row lg:justify-start">
            <Button href="#contact" className="w-full rounded-xl px-8 py-4 shadow-xl hover:scale-105 sm:w-auto">
              <span>Request Custom Quote</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" onClick={products.open} className="w-full rounded-xl px-8 py-4 sm:w-auto">
              <Box className="h-4 w-4 text-amber-400" />
              <span>Explore Products Portal</span>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 border-t border-amber-500/15 pt-8 text-center lg:text-left">
            {METRICS.map((m) => (
              <div key={m.label}>
                <div className="gold-gradient-text text-2xl font-extrabold sm:text-3xl">{m.value}</div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-gray-400">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right showcase */}
        <div className="relative flex items-center justify-center lg:col-span-5">
          <div className="animate-spin-slow pointer-events-none absolute h-[320px] w-[320px] rounded-full border border-dashed border-amber-500/20 sm:h-[420px] sm:w-[420px]" />

          <div className="gold-border-glow animate-float relative aspect-square w-full max-w-md rounded-3xl bg-gradient-to-br from-amber-300/30 via-amber-500/10 to-transparent p-1">
            <div className="glass-card relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[22px] border border-amber-500/20 p-6">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
              <img
                src={heroImage}
                alt="Authentic Indian Spices"
                className="absolute inset-0 h-full w-full scale-110 object-cover opacity-50 transition-transform duration-700 hover:scale-125"
              />

              <div className="relative z-20 flex items-center justify-between">
                <span className="rounded-full border border-amber-400/40 bg-black/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-amber-300 backdrop-blur-md">
                  INDIAN HERITAGE EXPORTS
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-amber-400/40 bg-amber-500/20 text-amber-300">
                  <Globe className="h-4 w-4" />
                </div>
              </div>

              <div className="relative z-20 mt-auto space-y-2">
                <h3 className="text-2xl font-black tracking-tight text-white">Pure Indian Spices</h3>
                <p className="text-xs font-light leading-relaxed text-amber-200/80">
                  Handpicked Green Cardamom, Tellicherry Black Pepper, Kashmiri Red Chili, and High-Curcumin Turmeric
                  Roots.
                </p>
                <div className="flex items-center justify-between pt-3">
                  {/* <div className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-300">
                    <ShieldCheck className="h-4 w-4 text-amber-400" /> APEDA Certified
                  </div> */}
                  <button
                    onClick={products.open}
                    className="flex items-center gap-1 text-xs font-bold text-amber-300 underline underline-offset-4 hover:text-white"
                  >
                    View Digital Catalog <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <FloatingBadge className="-left-4 -top-6 animate-float-reverse sm:-left-6 sm:top-4" icon={<Award className="h-5 w-5" />} title="Spices Board India" subtitle="Official Merchant Exporter" />
          <FloatingBadge className="-bottom-6 -right-4 animate-float sm:-right-6 sm:bottom-4" icon={<Package className="h-5 w-5" />} title="Custom Packaging" subtitle="Jute, PP & Vacuum Foil" />
        </div>
      </div>
    </section>
  );
}

function FloatingBadge({ icon, title, className }: { icon: React.ReactNode; title: string; subtitle?: string; className: string }) {
  return (
    <div className={`glass-card absolute z-30 rounded-2xl border border-amber-500/30 p-4 shadow-xl ${className}`}>
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-amber-500/20 p-2.5 text-amber-400">{icon}</div>
        <div>
          <div className="text-xs font-bold text-white">{title}</div>
          {/* <div className="text-[10px] text-gray-400">{subtitle}</div> */}
        </div>
      </div>
    </div>
  );
}
