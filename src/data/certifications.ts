import { Award, CheckCircle2, FlaskConical, BadgeCheck } from 'lucide-react';
import type { Certification } from '@/types';

// export const CERTIFICATIONS: Certification[] = [
//   { id: 'apeda', title: 'APEDA', description: 'Authorized agricultural export registration holder.', icon: ShieldCheck },
//   { id: 'spices-board', title: 'SPICES BOARD', description: 'Official Spice Export Certificate clearance.', icon: Award },
//   { id: 'fssai', title: 'FSSAI', description: 'Strict food safety & health compliance licensed.', icon: CheckCircle2 },
//   { id: 'iso', title: 'ISO 22000', description: 'International standard food safety systems.', icon: Layers },
// ];
export const CERTIFICATIONS: Certification[] = [
  // { id: 'apeda', title: 'APEDA', description: 'Authorized agricultural export registration holder.', icon: ShieldCheck },
  { id: 'spices-board', title: 'SPICES BOARD', description: 'Official Spice Export Certificate clearance.', icon: Award },
  { id: 'fssai', title: 'FSSAI', description: 'Strict food safety & health compliance licensed.', icon: CheckCircle2 },
  { id: 'iec', title: 'IEC APPROVED', description: 'DGFT-issued Importer Exporter Code for legal global trade.', icon: BadgeCheck },
  { id: 'lab-test', title: 'LAB TESTED', description: 'Every batch backed by a Certificate of Analysis (COA).', icon: FlaskConical },
  // { id: 'iso', title: 'ISO 22000', description: 'International standard food safety systems.', icon: Layers },
];