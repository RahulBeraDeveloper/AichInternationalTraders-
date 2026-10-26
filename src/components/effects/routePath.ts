import { ORIGIN, type TradeHub } from '@/data/trade-hubs';

/** Quadratic curve from India to a hub, arched upwards like a flight/sea route. */
export const routePath = (to: Pick<TradeHub, 'x' | 'y'>): string => {
  const mx = (ORIGIN.x + to.x) / 2;
  const my = (ORIGIN.y + to.y) / 2;
  const dist = Math.hypot(to.x - ORIGIN.x, to.y - ORIGIN.y);
  return `M${ORIGIN.x} ${ORIGIN.y} Q${mx} ${my - dist * 0.28} ${to.x} ${to.y}`;
};
