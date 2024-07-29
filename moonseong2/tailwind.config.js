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
        'dark-mode': {
          100: 'hsl(209, 23%, 22%)',
          900: 'hsl(207, 26%, 17%)'
        }
      },
      fontSize: {
        home: '14px'
      }
    },
  },
  plugins: [],
}

