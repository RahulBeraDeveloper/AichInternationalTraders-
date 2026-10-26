/** Map coordinates for WorldBackdrop: x = lon + 180, y = 84 - lat (viewBox 0 0 360 144). */
export interface TradeHub {
  x: number;
  y: number;
  label: string;
}

export const ORIGIN = { x: 252.8, y: 64.9 }; // India (Mumbai / Mundra)

/** Keys match `Region.id` in data/regions.ts */
export const TRADE_HUBS: Record<string, TradeHub> = {
  sea: { x: 283.8, y: 82.7, label: 'Singapore' },
  europe: { x: 184.4, y: 32.1, label: 'Rotterdam' },
  namerica: { x: 106, y: 43.3, label: 'New York' },
  samerica: { x: 133.7, y: 107.9, label: 'Santos' },
  africa: { x: 219.7, y: 88, label: 'Mombasa' },
  australia: { x: 324.9, y: 121.8, label: 'Melbourne' },
};
