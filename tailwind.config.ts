import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0F172A',
        steel: '#334155',
        mist: '#E2E8F0',
        accent: '#0F766E',
        surface: '#F8FAFC'
      },
      boxShadow: {
        card: '0 10px 40px rgba(15,23,42,0.08)'
      }
    }
  },
  plugins: []
} satisfies Config;
