import type { NavLink } from '@/types';

export const siteConfig = {
  name: 'Aich International Traders',
  legalName: 'AICH INTERNATIONAL TRADERS',
  shortName: 'AIT',
  tagline: 'Connecting Continents',
  slogan: 'Connecting Continents, Creating Opportunities',
  founder: { name: 'Barnak Aich', title: 'Founder & Managing Director' },
  contact: {
    email: 'info.aichinternationaltraders@gmail.com',
    phoneDisplay: '+91 74397 13284',
    whatsappNumber: '917439713284',
    location: 'India',
  },
} as const;

export const whatsappLink = (text?: string): string => {
  const base = `https://wa.me/${siteConfig.contact.whatsappNumber}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
};

/** Primary navigation. `action: 'products'` opens the catalog modal instead of scrolling. */
export const navLinks: NavLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Global Network', href: '#global' },
  { label: 'Why AIT', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const PACKAGING_OPTIONS = [
  'Bulk 25kg PP Bags',
  'Bulk 50kg Jute Sacks',
  'Vacuum Sealed Foil Packaging',
  'Custom Private Labeling',
] as const;
