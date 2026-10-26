import { useState } from 'react';
import { Anchor, CheckCircle2, Compass, ShieldCheck } from 'lucide-react';
import { WorldBackdrop } from '@/components/effects/WorldBackdrop';
import { Badge, Button, GlassCard, SectionHeading } from '@/components/ui';
import { cn } from '@/lib/cn';
import { GLOBAL_REGIONS } from '@/data/regions';

export function GlobalNetworkSection() {
  const [selected, setSelected] = useState(GLOBAL_REGIONS[0]);

  return (
    <section id="global" className="relative overflow-hidden border-y border-amber-500/15 bg-ink-soft px-4 py-24">
      <WorldBackdrop variant="global" activeRegionId={selected.id} />

      <div className="relative z-10 mx-auto max-w-7xl space-y-12">
        <SectionHeading
          className="mx-auto max-w-3xl space-y-3 text-center"
          eyebrow="International Trade Logistics"
          title="Global Port Network Across 7 Continents"
          titleClassName="text-3xl tracking-tight sm:text-5xl"
          //description="Select a target trade destination below to inspect average transit lead times, port access, and regulatory compliance standards."
          descriptionClassName="text-sm text-gray-400"
        />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {GLOBAL_REGIONS.map((region) => {
            const active = selected.id === region.id;
            return (
              <button
                key={region.id}
                onClick={() => setSelected(region)}
                className={cn(
                  'flex flex-col items-center gap-2 rounded-xl p-4 text-center text-xs font-bold transition-all',
                  active
                    ? 'gold-gradient-bg scale-105 text-black shadow-lg shadow-amber-500/20'
                    : 'glass-card border border-amber-500/10 text-gray-300 hover:border-amber-400/40',
                )}
              >
                <Compass className={cn('h-5 w-5', active ? 'text-black' : 'text-amber-400')} />
                <span>{region.name}</span>
              </button>
            );
          })}
        </div>

        <GlassCard className="grid grid-cols-1 items-start gap-8 rounded-3xl border-amber-500/30 p-8 shadow-2xl sm:p-10 lg:grid-cols-3">
          <div className="space-y-4">
            <Badge>Active Trade Hub</Badge>
            <h3 className="text-2xl font-bold text-white">{selected.name}</h3>
            <p className="text-xs leading-relaxed text-gray-400">
              Pre-cleared export shipments with full documentation including Phytosanitary certificates, Certificate of
              Origin, and custom labeling.
            </p>
            <div>
              <h4 className="mb-2 text-xs font-bold uppercase text-amber-400">Key Countries Served:</h4>
              <div className="flex flex-wrap gap-1.5">
                {selected.countries.map((c) => (
                  <span key={c} className="rounded-md border border-amber-500/20 bg-black/60 px-2.5 py-1 text-xs font-medium text-gray-200">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4 border-t border-amber-500/15 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-amber-300">
              <Anchor className="h-4 w-4 text-amber-400" /> Maritime Logistics & Transit
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <span className="block text-gray-400">Major Sea Ports:</span>
                <ul className="mt-1 space-y-1 font-medium text-gray-200">
                  {selected.ports.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="block text-gray-400">Avg. Port Lead Time:</span>
                <span className="text-sm font-extrabold text-amber-300">{selected.leadTime}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 border-t border-amber-500/15 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-amber-300">
              <ShieldCheck className="h-4 w-4 text-amber-400" /> Quality & Regulatory Standards
            </h4>
            <div className="space-y-2">
              {selected.standards.map((st) => (
                <div key={st} className="flex items-center gap-2 rounded-xl border border-amber-500/10 bg-black/50 p-2.5 text-xs text-gray-200">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-amber-400" />
                  <span>{st}</span>
                </div>
              ))}
            </div>
            <Button
              href="#contact"
              variant="outline"
              className="mt-4 block w-full rounded-xl bg-amber-500/10 py-3 text-center font-bold tracking-wider text-amber-300"
            >
              Inquire For {selected.name} Dispatch
            </Button>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
