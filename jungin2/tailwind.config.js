/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cl-cyan": "hsl(180, 66%, 49%)",
        "cl-cyan-hover": "hsl(180, 66%, 80%)",
        "cl-dark-violet": "hsl(257, 27%, 26%)",
        "cl-red": "hsl(0, 87%, 67%)",
        "cl-gray": "hsl(0, 0%, 75%)",
        "cl-grayish-violet": "hsl(257, 7%, 63%)",
        "cl-grayish-violet-light": "hsl(257, 7%, 90%)",
        "cl-very-dark-blue": "hsl(255, 11%, 22%)",
        "cl-very-dark-violet": "hsl(260, 8%, 14%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}

