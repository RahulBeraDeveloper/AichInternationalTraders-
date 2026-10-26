import type { Config } from 'tailwindcss';

/**
 * Brand tokens live here so the whole site can be re-themed from one place.
 * Utility classes (bg-ink, text-gold, ...) are used across components.
 */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#080A0F', soft: '#0B0F19' },
        gold: { DEFAULT: '#D4AF37' },
      },
    },
  },
  plugins: [],
} satisfies Config;
