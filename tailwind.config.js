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
        brand: {
          navy: '#08172E',
          'navy-light': '#0D2244',
          'navy-dark': '#040C18',
          'navy-card': '#0B1E3B',
          blue: '#1685FF',
          'blue-hover': '#3895FF',
          'blue-dark': '#0E6BD1',
          silver: '#C5CED9',
          'silver-light': '#E2E8F0',
          'silver-dark': '#94A3B8',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 25px -5px rgba(22, 133, 255, 0.35)',
        'glow-subtle': '0 4px 20px -2px rgba(8, 23, 46, 0.12)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
