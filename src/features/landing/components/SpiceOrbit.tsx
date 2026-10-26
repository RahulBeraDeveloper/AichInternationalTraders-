// import type { CSSProperties } from 'react';
// import { cn } from '@/lib/cn';
// import type { Spice } from '@/types';

// interface Props {
//   spices: Spice[];
//   activeIndex: number;
//   onSelect: (index: number) => void;
// }

// /** Spice photos orbiting a centre medallion that shows the active spice. */
// export function SpiceOrbit({ spices, activeIndex, onSelect }: Props) {
//   const current = spices[activeIndex];

//   return (
//     <div className="sp-scene relative aspect-square w-full max-w-[560px]">
//       {/* rings */}
//       <div className="absolute inset-[3%] rounded-full border border-amber-500/20" />
//       <div className="sp-orbit-rev absolute inset-[3%] rounded-full border border-dashed border-amber-400/30" />
//       <div className="absolute inset-[16%] rounded-full border border-amber-500/15" />
//       <div className="sp-orbit absolute inset-[30%] rounded-full border border-dashed border-amber-500/25" />

//       {/* orbiting spices */}
//       <div className="sp-orbit absolute inset-0">
//         {spices.map((s, i) => {
//           const angle = (i / spices.length) * Math.PI * 2 - Math.PI / 2;
//           const style: CSSProperties = {
//             left: `${50 + 40 * Math.cos(angle)}%`,
//             top: `${50 + 40 * Math.sin(angle)}%`,
//             width: '25%',
//             height: '25%',
//             marginLeft: '-12.5%',
//             marginTop: '-12.5%',
//           };
//           const isActive = i === activeIndex;
//           return (
//             <div key={s.id} className="absolute" style={style}>
//               <div className="sp-counter h-full w-full">
//                 <button
//                   onClick={() => onSelect(i)}
//                   aria-label={s.name}
//                   className={cn(
//                     'sp-bob relative h-full w-full rounded-full p-[5%] transition-all duration-500',
//                     isActive
//                       ? 'scale-125 bg-amber-500/15 shadow-[0_0_40px_6px_rgba(212,175,55,.45)] ring-2 ring-amber-300/70'
//                       : 'bg-black/30 ring-1 ring-amber-500/20 hover:ring-amber-300/60',
//                   )}
//                   style={{ animationDelay: `${i * -1}s` }}
//                 >
//                   <img src={s.image} alt={s.name} className="h-full w-full rounded-full object-cover" draggable={false} />
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* centre medallion */}
//       <div className="absolute inset-[33%] rounded-full bg-gradient-to-br from-amber-200 via-amber-500 to-amber-800 p-[3px] shadow-[0_0_60px_rgba(212,175,55,.35)]">
//         <div className="glass-card sp-shine relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-full border border-amber-400/30 px-3 text-center">
//           <div key={current.id} className="sp-pop space-y-1">
//             <div className="sp-bob mx-auto aspect-square w-[40%]">
//               <img src={current.image} alt={current.name} className="h-full w-full rounded-full object-cover shadow-lg ring-2 ring-amber-300/60" />
//             </div>
//             <div className="gold-gradient-text text-[clamp(10px,2.2vw,15px)] font-black uppercase leading-tight tracking-wider">
//               {current.name}
//             </div>
//             <div className="hidden text-[10px] leading-snug text-gray-300 sm:block">{current.note}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import type { CSSProperties } from 'react';
import { cn } from '@/lib/cn';
import type { Spice } from '@/types';

interface Props {
  spices: Spice[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

/** Spice photos orbiting a centre medallion that shows the active spice. */
export function SpiceOrbit({ spices, activeIndex, onSelect }: Props) {
  const current = spices[activeIndex];

  return (
    <div className="sp-scene relative aspect-square w-full max-w-[560px]">
      {/* rings */}
      <div className="absolute inset-[3%] rounded-full border border-amber-500/20" />
      <div className="sp-orbit-rev absolute inset-[3%] rounded-full border border-dashed border-amber-400/30" />
      <div className="absolute inset-[16%] rounded-full border border-amber-500/15" />
      <div className="sp-orbit absolute inset-[30%] rounded-full border border-dashed border-amber-500/25" />

      {/* orbiting spices */}
      <div className="sp-orbit absolute inset-0">
        {spices.map((s, i) => {
          const angle = (i / spices.length) * Math.PI * 2 - Math.PI / 2;
          const style: CSSProperties = {
            left: `${50 + 40 * Math.cos(angle)}%`,
            top: `${50 + 40 * Math.sin(angle)}%`,
            width: '25%',
            height: '25%',
            marginLeft: '-12.5%',
            marginTop: '-12.5%',
          };
          const isActive = i === activeIndex;
          return (
            <div key={s.id} className="absolute" style={style}>
              <div className="sp-counter h-full w-full">
                <button
                  onClick={() => onSelect(i)}
                  aria-label={s.name}
                  className={cn(
                    'sp-bob relative h-full w-full rounded-full p-[5%] transition-all duration-500',
                    isActive
                      ? 'scale-125 bg-amber-500/15 shadow-[0_0_40px_6px_rgba(212,175,55,.45)] ring-2 ring-amber-300/70'
                      : 'bg-black/30 ring-1 ring-amber-500/20 hover:ring-amber-300/60',
                  )}
                  style={{ animationDelay: `${i * -1}s` }}
                >
                  <img src={s.image} alt={s.name} className="h-full w-full rounded-full object-cover" draggable={false} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* centre medallion */}
      <div className="absolute inset-[33%] rounded-full bg-gradient-to-br from-amber-200 via-amber-500 to-amber-800 p-[3px] shadow-[0_0_60px_rgba(212,175,55,.35)]">
        <div className="glass-card sp-shine relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-full border border-amber-400/30 px-3 text-center">
          <div key={current.id} className="sp-pop space-y-0.5">
            <div className="sp-bob mx-auto aspect-square w-[62%] sm:w-[58%]">
              <img src={current.image} alt={current.name} className="h-full w-full rounded-full object-cover shadow-lg ring-2 ring-amber-300/60" />
            </div>
            <div className="gold-gradient-text text-[clamp(10px,2.2vw,15px)] font-black uppercase leading-tight tracking-wider">
              {current.name}
            </div>
            <div className="hidden text-[10px] leading-snug text-gray-300 sm:block">{current.note}</div>
          </div>
        </div>
      </div>
    </div>
  );
}