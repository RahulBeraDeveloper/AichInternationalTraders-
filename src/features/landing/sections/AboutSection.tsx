import { Award, Globe } from 'lucide-react';
import { CERTIFICATIONS } from '@/data/certifications';
import { siteConfig } from '@/config/site';
import { GlassCard, SectionHeading } from '@/components/ui';

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl space-y-16 px-4 py-24">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-6">
          <SectionHeading
            className="space-y-6"
            eyebrow="Exporter Identity"
            title={`${siteConfig.name} (${siteConfig.shortName})`}
            titleClassName="text-3xl leading-tight sm:text-5xl"
          />
          <p className="text-sm leading-relaxed text-gray-300">
            <strong className="text-amber-300">{siteConfig.legalName}</strong>, is
            built on an unwavering commitment to purity, direct sourcing from Indian agricultural belts, and rapid
            international customs clearance.
          </p>

          <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
            <GlassCard className="space-y-1 rounded-xl p-4">
              <Globe className="h-5 w-5 text-amber-400" />
              <h3 className="text-sm font-bold text-white">Global Reach</h3>
              <p className="text-xs text-gray-400">Direct ocean routes connecting Asia, Europe, Americas, Africa & Australia.</p>
            </GlassCard>
            <GlassCard className="space-y-1 rounded-xl p-4">
              <Award className="h-5 w-5 text-amber-400" />
              <h3 className="text-sm font-bold text-white">Reliable Quality</h3>
              <p className="text-xs text-gray-400">Strict moisture, essential oil, and ASTA color parameters tested in accredited labs.</p>
            </GlassCard>
          </div>

          {/* <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/40 via-black to-zinc-950 p-6">
            <h4 className="gold-gradient-text text-base font-extrabold">{siteConfig.founder.name}</h4>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">{siteConfig.founder.title}</p>
            <p className="mt-2 text-xs italic text-gray-300">
              "{siteConfig.slogan} — We ensure Indian spices reach global markets with zero compromise on grade or freshness."
            </p>
          </div> */}
        </div>

        {/* <div className="grid grid-cols-2 gap-4 lg:col-span-6">
          {CERTIFICATIONS.map(({ id, title, description, icon: Icon }) => (
            <GlassCard key={id} className="space-y-3 rounded-2xl p-6">
              <div className="w-fit rounded-xl bg-amber-500/10 p-3 text-amber-400">
                <Icon className="h-6 w-6" />
              </div>
              <div className="gold-gradient-text text-2xl font-black">{title}</div>
              <p className="text-xs text-gray-400">{description}</p>
            </GlassCard>
          ))}
        </div> */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-6">
  {CERTIFICATIONS.map(({ id, title, description, icon: Icon }) => (
    <GlassCard key={id} className="space-y-3 rounded-2xl p-4 sm:p-6">
      <div className="w-fit rounded-xl bg-amber-500/10 p-2.5 text-amber-400 sm:p-3">
        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
      </div>
      <div className="gold-gradient-text break-words text-base font-black leading-tight sm:text-xl lg:text-2xl">
        {title}
      </div>
      <p className="text-xs text-gray-400">{description}</p>
    </GlassCard>
  ))}
</div>
      </div>
    </section>
  );
}
