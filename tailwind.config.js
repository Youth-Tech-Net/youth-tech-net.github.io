/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: '#881692',
          light: '#a61db3',
          dark: '#6a1173',
        },
        orange: {
          DEFAULT: '#ff8000',
          light: '#ffa142',
          dark: '#cc6600',
        },
        yellow: {
          DEFAULT: '#fff3a8',
          brand: '#fff3a8',
          light: '#fffbd4',
          dark: '#b8a860',
        },
        cream: {
          DEFAULT: '#faf7f2',
          dark: '#f5f0e8',
          darker: '#efe8dd',
        },
      },
      fontFamily: {
        sans: ['Manrope', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(2.5rem, 2rem + 4vw, 4.5rem)',
        'display': 'clamp(2rem, 1.5rem + 2vw, 3rem)',
      },
      maxWidth: {
        'container': '1200px',
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '24px',
      },
    },
  },
  plugins: [],
}
