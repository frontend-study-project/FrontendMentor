/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'main-color': '#9f9f9f',
        'sub-color': '#28d2d1',
        'sub-color-over': '#9be3e0',
        'white': '#ffffff',
        purple: {
          1: '#3a3053'
        },
        black: {
          100: '#232027'
        }
      },
    },
  },
  plugins: [],
}