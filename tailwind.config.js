/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        expand: 'expand 0.5s ease-in-out',
        shrink: 'shrink 0.5s ease-in-out',
      },
      keyframes: {
        expand: {
          '0%': { width: '33.333333%' },
          '100%': { width: '80%' },
        },
        shrink: {
          '0%': { width: '33.333333%' },
          '100%': { width: '10%' },
        },
      },
    },
  },
  plugins: [],
}
