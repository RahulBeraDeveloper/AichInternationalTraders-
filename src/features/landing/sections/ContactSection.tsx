import { ChevronRight, Mail, MapPin, MessageSquare, Phone } from 'lucide-react';
import type { ReactNode } from 'react';
import { siteConfig, whatsappLink } from '@/config/site';
import { SectionHeading } from '@/components/ui';
import { InquiryForm } from '@/features/contact/components/InquiryForm';

export function ContactSection() {
  const { email, phoneDisplay, location } = siteConfig.contact;

  return (
    <section id="contact" className="border-t border-amber-500/15 bg-ink-soft px-4 py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="space-y-8 lg:col-span-5">
          <SectionHeading
            eyebrow="Trade Direct"
            eyebrowClassName="mb-2 block"
            title="Request Import Quotation"
            titleClassName="text-3xl sm:text-4xl"
   description={
  <>
    Connect directly with <span className="gold-gradient-text font-bold">AIT Teams</span> for bulk pricing,
    specifications, and FOB/CIF shipping schedules.
  </>
}
            descriptionClassName="mt-2 text-xs leading-relaxed text-gray-400 sm:text-sm"
          />

           <div className="glass-card space-y-4 rounded-2xl border border-amber-500/30 p-4 sm:p-6">
            <div className="border-b border-amber-500/15 pb-3">
              <h3 className="gold-gradient-text text-lg font-extrabold">{siteConfig.name}</h3>
              {/* <p className="text-xs uppercase tracking-wider text-gray-400">Founder, {siteConfig.name}</p> */}
            </div>
            <div className="space-y-4 text-xs">
              <ContactRow href={`mailto:${email}`} icon={<Mail className="h-4 w-4" />} label="Email Address" value={email} />
              <ContactRow href={whatsappLink()} external icon={<Phone className="h-4 w-4" />} label="Phone / WhatsApp" value={phoneDisplay} />
              <ContactRow icon={<MapPin className="h-4 w-4" />} label="Headquarters" value={`${location} (Exporting to Worldwide Destinations)`} small />
            </div>
          </div>

          <a
            href={whatsappLink('Hello AICH International Traders, I would like to inquire about spice imports.')}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-4 text-xs font-bold uppercase tracking-wider text-emerald-300 transition hover:bg-emerald-900/40"
          >
            <span className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-emerald-400" /> Chat directly on WhatsApp
            </span>
            <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <InquiryForm />
      </div>
    </section>
  );
}

interface RowProps {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  small?: boolean;
}

// function ContactRow({ icon, label, value, href, external, small }: RowProps) {
//   const body = (
//     <>
//       <div className="rounded-lg bg-amber-500/10 p-2.5 text-amber-400">{icon}</div>
//       <div>
//         <span className="block text-[10px] uppercase text-gray-400">{label}</span>
//         <span className={small ? 'text-xs font-semibold' : 'text-sm font-semibold'}>{value}</span>
//       </div>
//     </>
//   );
//   const cls = 'flex items-center gap-3 text-gray-200';
//   return href ? (
//     <a href={href} className={`${cls} transition hover:text-amber-300`} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
//       {body}
//     </a>
//   ) : (
//     <div className={cls}>{body}</div>
//   );
// }
function ContactRow({ icon, label, value, href, external, small }: RowProps) {
  const body = (
    <>
      <div className="rounded-lg bg-amber-500/10 p-2.5 text-amber-400 sm:row-span-2">{icon}</div>
      <span className="block text-[10px] uppercase text-gray-400">{label}</span>
      <span
        className={`col-span-2 sm:col-span-1 ${
          small ? 'text-xs font-semibold' : 'whitespace-nowrap text-[11px] font-semibold min-[400px]:text-xs sm:text-sm'
        }`}
      >
        {value}
      </span>
    </>
  );
  const cls = 'grid grid-cols-[auto_1fr] items-center gap-x-3 gap-y-2 text-gray-200 sm:gap-y-0';
  return href ? (
    <a href={href} className={`${cls} transition hover:text-amber-300`} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
      {body}
    </a>
  ) : (
    <div className={cls}>{body}</div>
  );
}