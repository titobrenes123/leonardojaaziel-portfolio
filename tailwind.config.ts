import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg0: '#0a0f1c',
        bg1: '#0e1424',
        bg2: '#131a2e',
        bg3: '#1a2440',
        bg4: '#202b4d',
        line: 'rgba(148,163,184,0.10)',
        lineMid: 'rgba(148,163,184,0.18)',
        lineStrong: 'rgba(56,189,248,0.32)',
        sky: {
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
        },
        cyan: {
          300: '#67e8f9',
          400: '#22d3ee',
        },
        mint: {
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
        },
        violet: {
          300: '#c4b5fd',
          400: '#a78bfa',
        },
        rose: {
          300: '#fda4af',
          400: '#fb7185',
        },
        amber: {
          300: '#fcd34d',
        },
        ink: {
          100: '#f8fafc',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
      letterSpacing: {
        eyebrow: '0.16em',
        display: '-0.025em',
      },
      boxShadow: {
        card: '0 24px 60px rgba(2, 6, 23, 0.5)',
        cardSm: '0 12px 32px rgba(2, 6, 23, 0.45)',
        glow: '0 0 32px rgba(56, 189, 248, 0.18)',
        glowStrong: '0 0 48px rgba(56, 189, 248, 0.32)',
        innerLine: 'inset 0 1px 0 rgba(255,255,255,0.04)',
      },
      keyframes: {
        blink: {
          '0%,49%': { opacity: '1' },
          '50%,100%': { opacity: '0' },
        },
        pulseDot: {
          '0%,100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.15)' },
        },
        floaty: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        blink: 'blink 1.1s steps(2,end) infinite',
        pulseDot: 'pulseDot 2.4s ease-in-out infinite',
        floaty: 'floaty 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
