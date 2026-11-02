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
          navy: '#001060',
          deep: '#000d2e',
          canvas: '#000924',
          surface: '#001242',
          card: '#001552',
          border: '#002e8a',
          blue: '#0055ff',
          royal: '#0044ee',
          electric: '#0066ff',
          vivid: '#0077ff',
          cyan: '#00b4ff',
          sky: '#38bdf8',
          accent: '#00d2ff',
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
