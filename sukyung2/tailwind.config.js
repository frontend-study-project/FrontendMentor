/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Nunito_Sans: ['Nunito Sans', 'sans-serif'],
      },
    },
    colors: {
      'dark-blue': 'hsl(209, 23%, 22%)',
      'd-very-dark-blue': 'hsl(207, 26%, 17%)',
      'l-very-dark-blue': 'hsl(200, 15%, 8%)',
      'dark-gray': 'hsl(0, 0%, 52%)',
      'very-light-gray': 'hsl(0, 0%, 98%)',
      white: 'hsl(0, 0%, 100%)',
    },
  },
  plugins: [],
  mode: 'jit',
};
