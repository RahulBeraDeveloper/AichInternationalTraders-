import { useId } from 'react';
import { WORLD_DOTS } from '@/data/worldDots';
import { ORIGIN, TRADE_HUBS } from '@/data/trade-hubs';
import { routePath } from './routePath';

const HERO_ROUTES = ['europe', 'namerica', 'australia'];
const STARS: ReadonlyArray<readonly [number, number]> = [
  [40, 14], [88, 8], [150, 16], [214, 9], [300, 12], [338, 30], [22, 70], [60, 128], [200, 134], [312, 104],
];

interface Props {
  /** 'hero' = soft ambient layer, 'global' = stronger, shows labelled trade routes */
  variant?: 'hero' | 'global';
  activeRegionId?: string;
}

/** Animated dotted world map with trade routes from India. Purely decorative. */
export function WorldBackdrop({ variant = 'global', activeRegionId }: Props) {
  const isGlobal = variant === 'global';
  const uid = useId().replace(/:/g, '');

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {isGlobal && <div className="wb-grid absolute inset-0 opacity-60" />}

      <svg
        viewBox="0 0 360 144"
        preserveAspectRatio="xMidYMid meet"
        className={`absolute inset-0 h-full w-full ${isGlobal ? 'opacity-100' : 'opacity-90'}`}
      >
        <defs>
          <linearGradient id={`wb-sweep-${uid}`} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#FFF0B2" stopOpacity="0" />
            <stop offset="0.5" stopColor="#FFF0B2" stopOpacity="1" />
            <stop offset="1" stopColor="#FFF0B2" stopOpacity="0" />
          </linearGradient>
          <mask id={`wb-mask-${uid}`}>
            <g className="wb-sweep">
              <rect x="0" y="-10" width="140" height="170" fill={`url(#wb-sweep-${uid})`} transform="skewX(-18)" />
            </g>
          </mask>
          <linearGradient id={`wb-route-${uid}`} x1="0" x2="1">
            <stop offset="0" stopColor="#F3E5AB" />
            <stop offset="1" stopColor="#D4AF37" />
          </linearGradient>
        </defs>

        <g className="wb-drift">
          <path d={WORLD_DOTS} stroke="#D4AF37" strokeOpacity={isGlobal ? 0.62 : 0.4} strokeWidth="0.75" strokeLinecap="round" fill="none" />
          <path d={WORLD_DOTS} stroke="#FFE9A0" strokeOpacity="0.95" strokeWidth="0.9" strokeLinecap="round" fill="none" mask={`url(#wb-mask-${uid})`} />

          {Object.entries(TRADE_HUBS).map(([id, hub], i) => {
            if (!isGlobal && !HERO_ROUTES.includes(id)) return null;
            const active = id === activeRegionId;
            return (
              <g key={id}>
                <path
                  d={routePath(hub)}
                  fill="none"
                  stroke={`url(#wb-route-${uid})`}
                  strokeWidth={active ? 0.9 : 0.45}
                  strokeOpacity={active ? 1 : isGlobal ? 0.5 : 0.35}
                  strokeLinecap="round"
                  className={active ? 'wb-flow-active' : 'wb-flow'}
                  style={{ animationDelay: `${i * -0.4}s` }}
                />
                <circle cx={hub.x} cy={hub.y} r={active ? 1.9 : 1.2} fill="#FFE9A0" opacity={active ? 1 : 0.8} />
                <circle cx={hub.x} cy={hub.y} r="1.6" fill="none" stroke="#FFE9A0" strokeWidth="0.35" className="wb-ping" style={{ animationDelay: `${i * 0.5}s` }} />
                {active && isGlobal && (
                  <text x={hub.x} y={hub.y - 4} textAnchor="middle" fontSize="3.4" fill="#FFE9A0" style={{ letterSpacing: '0.2px' }}>
                    {hub.label}
                  </text>
                )}
              </g>
            );
          })}

          <circle cx={ORIGIN.x} cy={ORIGIN.y} r="2.2" fill="#FFF0B2" />
          <circle cx={ORIGIN.x} cy={ORIGIN.y} r="2.2" fill="none" stroke="#FFF0B2" strokeWidth="0.5" className="wb-ping" />
          <circle cx={ORIGIN.x} cy={ORIGIN.y} r="2.2" fill="none" stroke="#D4AF37" strokeWidth="0.4" className="wb-ping" style={{ animationDelay: '1.5s' }} />
          {isGlobal && (
            <text x={ORIGIN.x} y={ORIGIN.y + 7.5} textAnchor="middle" fontSize="3.4" fill="#FFF0B2" fontWeight="700" style={{ letterSpacing: '0.4px' }}>
              INDIA
            </text>
          )}

          {STARS.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="0.55" fill="#FFE9A0" className="wb-twinkle" style={{ animationDelay: `${i * 0.45}s` }} />
          ))}
        </g>
      </svg>

      {/* vignette keeps text readable and blends into the dark theme */}
      <div
        className="absolute inset-0"
        style={{
          background: isGlobal
            ? 'radial-gradient(ellipse at 50% 45%, rgba(11,15,25,0) 45%, rgba(11,15,25,.45) 85%, #0B0F19 100%), linear-gradient(to bottom, #0B0F19 0%, rgba(11,15,25,0) 14%, rgba(11,15,25,0) 86%, #0B0F19 100%)'
            : 'radial-gradient(ellipse at 50% 50%, rgba(8,10,15,0) 35%, rgba(8,10,15,.55) 85%, #080A0F 100%), linear-gradient(to bottom, rgba(8,10,15,.1), rgba(8,10,15,.4))',
        }}
      />
    </div>
  );
}
