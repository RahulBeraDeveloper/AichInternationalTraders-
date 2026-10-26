import { useEffect, useState } from 'react';

/** Cycles an index every `delay` ms; the timer restarts whenever the index is changed manually. */
export function useAutoCycle(length: number, delay = 3400) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setIndex((i) => (i + 1) % length), delay);
    return () => clearTimeout(t);
  }, [index, length, delay]);
  return [index, setIndex] as const;
}
