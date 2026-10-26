import type { Spice } from '@/types';
// import cardamom from '@/assets/images/spices/cardamom.jpg';
import cardamon_one from "@/assets/images/spices/cardamon-1.jpg"
import pepper from '@/assets/images/spices/pepper-1.jpg';
import turmeric from '@/assets/images/spices/turmeric-1.jpg';
import chilli from '@/assets/images/spices/chilli-1.jpg';
import cumin from '@/assets/images/spices/cumin-1.jpg';

export const SPICES: Spice[] = [
  { id: 'cardamom', name: 'Green Cardamom', note: 'Handpicked, aromatic & bold', image: cardamon_one },
  { id: 'pepper', name: 'Black Pepper', note: 'Tellicherry-grade heat & depth', image: pepper },
  { id: 'turmeric', name: 'Turmeric', note: 'High-curcumin golden roots', image: turmeric },
  { id: 'chilli', name: 'Red Chilli', note: 'Kashmiri colour, rich flavour', image: chilli },
  { id: 'cumin', name: 'Cumin', note: 'Warm, earthy & fragrant', image: cumin },
];
