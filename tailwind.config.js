/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Use Inter as a custom font
        satoshi: ['Satoshi', 'sans-serif'], // Use Inter as a custom font
      },
    },
  },
  plugins: [],
}