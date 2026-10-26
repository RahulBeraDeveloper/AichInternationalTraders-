// import { Clock } from 'lucide-react';
// import catalogImage from '@/assets/images/catalog-spices.jpg';
// import { useProductModal } from '@/app/providers/ProductModalProvider';
// import { siteConfig, whatsappLink } from '@/config/site';
// import { Badge, Button, Modal } from '@/components/ui';

// export function ProductModal() {
//   const { isOpen, close } = useProductModal();

//   return (
//     <Modal isOpen={isOpen} onClose={close}>
//       <div className="space-y-2 text-center">
//         <Badge>Digital Catalog Showcase</Badge>
//         <h3 className="text-2xl font-black text-white sm:text-3xl">Premium Indian Spice Catalog</h3>
//       </div>

//       <div className="group relative h-64 overflow-hidden rounded-2xl border border-amber-500/30 sm:h-72">
//         <img
//           src={catalogImage}
//           alt="Indian spices"
//           className="h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-110"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
//         <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 p-6 text-center">
//           <div className="gold-border-glow rounded-full border border-amber-400/50 bg-black/80 p-3 shadow-xl">
//             <Clock className="animate-spin-slow h-8 w-8 text-amber-400" />
//           </div>
//           <div className="space-y-1">
//             <div className="gold-gradient-text text-2xl font-black uppercase tracking-widest sm:text-3xl">COMING SOON</div>
//             <p className="mx-auto max-w-md text-xs font-medium text-gray-200">
//               Our full interactive digital B2B spice portal & real-time pricing engine is launching soon!
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="space-y-3 rounded-xl border border-amber-500/20 bg-amber-950/30 p-4 text-center">
//         <p className="text-xs text-amber-200">
//           Pre-order and custom bulk export orders for <strong>Cardamom, Black Pepper, Turmeric, Red Chilli & Cumin</strong>{' '}
//           are fully operational right now!
//         </p>
//         <div className="flex flex-col justify-center gap-3 sm:flex-row">
//           <Button href="#contact" onClick={close} className="rounded-lg px-6 py-2.5">
//             Request Bulk Quote Now
//           </Button>
//           <Button href={whatsappLink()} variant="whatsapp" target="_blank" rel="noreferrer" className="rounded-lg px-6 py-2.5">
//             WhatsApp {siteConfig.founder.name}
//           </Button>
//         </div>
//       </div>
//     </Modal>
//   );
// }
import { Clock } from 'lucide-react';
import catalogImage from '@/assets/images/catalog-spices.jpg';
import { useProductModal } from '@/app/providers/ProductModalProvider';
import { siteConfig, whatsappLink } from '@/config/site';
import { Badge, Button, Modal } from '@/components/ui';

export function ProductModal() {
  const { isOpen, close, closeThen } = useProductModal();

  return (
    <Modal isOpen={isOpen} onClose={close}>
      <div className="space-y-2 text-center">
        <Badge>Digital Catalog Showcase</Badge>
        <h3 className="text-2xl font-black text-white sm:text-3xl">Premium Indian Spice Catalog</h3>
      </div>

      <div className="group relative h-64 overflow-hidden rounded-2xl border border-amber-500/30 sm:h-72">
        <img
          src={catalogImage}
          alt="Indian spices"
          className="h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 p-6 text-center">
          <div className="gold-border-glow rounded-full border border-amber-400/50 bg-black/80 p-3 shadow-xl">
            <Clock className="animate-spin-slow h-8 w-8 text-amber-400" />
          </div>
          <div className="space-y-1">
            <div className="gold-gradient-text text-2xl font-black uppercase tracking-widest sm:text-3xl">COMING SOON</div>
            <p className="mx-auto max-w-md text-xs font-medium text-gray-200">
              Our full interactive digital B2B spice portal & real-time pricing engine is launching soon!
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3 rounded-xl border border-amber-500/20 bg-amber-950/30 p-4 text-center">
      <p className="text-xs text-amber-200">
  Pre-order and custom bulk export orders for{' '}
  <strong>Cardamom, Black Pepper, Turmeric, Red Chilli &amp; Cumin</strong>, and many other spices as well,{' '}
  are fully operational right now!
</p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              closeThen(() => {
                window.location.hash = 'contact';
              });
            }}
            className="rounded-lg px-6 py-2.5"
          >
            Request Bulk Quote Now
          </Button>
          <Button href={whatsappLink()} variant="whatsapp" target="_blank" rel="noreferrer" className="rounded-lg px-6 py-2.5">
            WhatsApp {siteConfig.name}
          </Button>
        </div>
      </div>
    </Modal>
  );
}