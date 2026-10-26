/** Typed access to environment variables. Add new VITE_* keys here and in vite-env.d.ts. */
export const env = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? '',
} as const;
