/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '26': '6.5rem',   // 104px
        '30': '7.5rem',   // 120px
      },
      colors: {
        purple: {
          DEFAULT: '#881692',
          light: '#a61db3',
          dark: '#6a1173',
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
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
        navy: {
          DEFAULT: '#1e3a5f',
          dark: '#0f172a',
          light: '#334155',
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
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
        '3xl': '32px',
      },
    },
  },
  plugins: [],
}
