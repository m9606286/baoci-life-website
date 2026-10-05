/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Ink — deep near-black neutral (primary text / dark sections)
        ink: {
          50: '#f5f6f7',
          100: '#e6e8ea',
          200: '#c9ced3',
          300: '#9aa2ab',
          400: '#6b7480',
          500: '#4a525d',
          600: '#333a44',
          700: '#222831',
          800: '#161b22',
          900: '#0c0f14',
          950: '#06080b',
        },
        // Gold — refined warm gold accent
        gold: {
          50: '#fbf7ec',
          100: '#f5ecd2',
          200: '#ebd7a4',
          300: '#dfbd72',
          400: '#d4a749',
          500: '#c4933a',
          600: '#a9752f',
          700: '#855a28',
          800: '#5f3f1f',
          900: '#3d2914',
        },
        // Sage — muted desaturated green (secondary)
        sage: {
          50: '#f3f5f1',
          100: '#e2e8dd',
          200: '#c4d0ba',
          300: '#9fb092',
          400: '#7c916c',
          500: '#60774f',
          600: '#4b5f3d',
          700: '#3c4c31',
          800: '#2f3b27',
          900: '#222b1c',
        },
        // Ivory — warm off-white background
        ivory: {
          50: '#fdfcf9',
          100: '#faf7f0',
          200: '#f3ecdc',
          300: '#e9dcc0',
          400: '#d9c79c',
          500: '#c4ac78',
        },
      },
      fontFamily: {
        serif: ['"Noto Serif TC"', '"Songti TC"', 'STSong', 'serif'],
        sans: ['"Noto Sans TC"', '"PingFang TC"', '"Microsoft JhengHei"', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fade-in 1.2s ease forwards',
        'scale-in': 'scale-in 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'slow-zoom': 'slow-zoom 12s ease-out forwards',
        'shimmer': 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};
