import type { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
}

export interface Region {
  id: string;
  name: string;
  countries: string[];
  ports: string[];
  leadTime: string;
  standards: string[];
}

export interface Spice {
  id: string;
  name: string;
  note: string;
  image: string;
}

export interface Certification {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface InquiryFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  packaging: string;
  message: string;
}
