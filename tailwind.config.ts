import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: {
          navy: '#0f2147',
          deep: '#070f24',
          blue: '#152C5B',
          indigo: '#4338ca',
          cyan: '#06b6d4',
          accent: '#38bdf8',
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
        'grid-light': 'linear-gradient(to right, rgba(15, 33, 71, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 33, 71, 0.04) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};

export default config;
