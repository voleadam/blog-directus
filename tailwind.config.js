/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.6' }],
        'sm': ['0.875rem', { lineHeight: '1.6' }],
        'base': ['1rem', { lineHeight: '1.6' }],
        'lg': ['1.2rem', { lineHeight: '1.4' }],
        'xl': ['1.44rem', { lineHeight: '1.4' }],
        '2xl': ['1.728rem', { lineHeight: '1.2' }],
        '3xl': ['2.074rem', { lineHeight: '1.2' }],
        '4xl': ['2.488rem', { lineHeight: '1.2' }],
      },
      colors: {
        'accent-blue': '#2563eb',
        'neutral-50': '#fafafa',
        'neutral-100': '#f5f5f5',
        'neutral-200': '#e5e5e5',
        'neutral-300': '#d4d4d4',
        'neutral-400': '#a3a3a3',
        'neutral-500': '#737373',
        'neutral-600': '#525252',
        'neutral-700': '#404040',
        'neutral-800': '#262626',
        'neutral-900': '#171717',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      screens: {
        'sm': '768px',
        'md': '1024px',
        'lg': '1200px',
        'xl': '1400px',
      },
    },
  },
  plugins: [],
};