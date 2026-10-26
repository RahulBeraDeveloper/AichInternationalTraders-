import type { CSSProperties } from 'react';

const COLORS = ['#FFE9A0', '#D4AF37', '#e0701a'];

/** Decorative rising spice-dust particles. Deterministic so renders are stable. */
export function SpiceDust({ count = 18 }: { count?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => {
        const size = 2 + (i % 3);
        const style = {
          left: `${(i * 53) % 100}%`,
          width: size,
          height: size,
          background: COLORS[i % 3],
          boxShadow: '0 0 8px rgba(212,175,55,.8)',
          animationDelay: `${(i * 0.9) % 7}s`,
          animationDuration: `${6 + (i % 5)}s`,
          '--dx': `${(i % 2 ? 1 : -1) * (10 + (i % 4) * 12)}px`,
        } as CSSProperties;
        return <span key={i} className="sp-dust absolute bottom-6 rounded-full" style={style} />;
      })}
    </div>
  );
}
