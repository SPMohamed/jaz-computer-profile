/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neon: {
          purple: '#10051F',
          deep: '#241035',
          dark: '#07010E',
          surface: '#0E041C',
          card: '#180B28',
          'card-hover': '#24113B',
          magenta: '#D900FF',
          'magenta-glow': 'rgba(217, 0, 255, 0.35)',
          cyan: '#00E5FF',
          'cyan-glow': 'rgba(0, 229, 255, 0.35)',
          grey: '#B9B4C5',
          'grey-light': '#E8E4F0',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-magenta': '0 0 25px -3px rgba(217, 0, 255, 0.45)',
        'glow-cyan': '0 0 25px -3px rgba(0, 229, 255, 0.45)',
        'glow-combo': '0 0 30px -4px rgba(217, 0, 255, 0.35), 0 0 20px -3px rgba(0, 229, 255, 0.25)',
        'neon-border': '0 0 15px -2px rgba(217, 0, 255, 0.4), inset 0 0 15px -2px rgba(0, 229, 255, 0.2)',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'pulse-slow': 'pulseSlow 6s ease-in-out infinite',
        'neon-flicker': 'neonFlicker 3s infinite alternate',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.08)' },
        },
        neonFlicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: '1' },
          '20%, 24%, 55%': { opacity: '0.7' },
        }
      }
    },
  },
  plugins: [],
}
