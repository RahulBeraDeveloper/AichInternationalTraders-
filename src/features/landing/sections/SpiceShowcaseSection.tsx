import { useAutoCycle } from '@/hooks/useAutoCycle';
import { SPICES } from '@/data/spices';
import { SectionHeading } from '@/components/ui';
import { cn } from '@/lib/cn';
import { SpiceDust } from '../components/SpiceDust';
import { SpiceOrbit } from '../components/SpiceOrbit';

export function SpiceShowcaseSection() {
  const [active, setActive] = useAutoCycle(SPICES.length);

  return (
    <section id="spices" className="relative overflow-hidden bg-ink px-4 py-24">
      <div className="sp-aura pointer-events-none absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute -left-24 top-10 h-[320px] w-[320px] rounded-full bg-red-900/15 blur-[110px]" />
      <SpiceDust />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="space-y-6 text-center lg:col-span-5 lg:text-left">
          <SectionHeading
            className="space-y-6"
            eyebrow="Heritage Spice Collection"
            title={
              <>
                From Indian Farms, <br />
                <span className="gold-gradient-text">To Every Market That Needs Spice</span>
              </>
            }
            titleClassName="text-3xl leading-[1.1] tracking-tight sm:text-5xl"
            description="Cardamom, Black Pepper, Turmeric, Red Chilli and Cumin — sourced directly from India's spice belts and graded for aroma, colour and purity before they ship worldwide."
            descriptionClassName="mx-auto max-w-lg text-sm font-light leading-relaxed text-gray-300 lg:mx-0"
          />

          <div className="flex flex-wrap justify-center gap-2.5 pt-2 lg:justify-start">
            {SPICES.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={cn(
                  'rounded-full border px-4 py-2 text-[11px] font-bold uppercase tracking-wider transition-all',
                  i === active
                    ? 'gold-gradient-bg scale-105 border-transparent text-black shadow-lg shadow-amber-500/25'
                    : 'glass-card border-amber-500/20 text-gray-300 hover:border-amber-400/50',
                )}
              >
                {s.name}
              </button>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-300 underline decoration-amber-500/40 underline-offset-8 hover:text-white"
          >
            Request spice specifications →
          </a>
        </div>

        <div className="flex justify-center lg:col-span-7">
          <SpiceOrbit spices={SPICES} activeIndex={active} onSelect={setActive} />
        </div>
      </div>
    </section>
  );
}
