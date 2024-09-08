/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: ['./**/*.{html,js,jsx,ts,tsx,css}'],
  theme: {
    extend: {
      colors:{
        orange: colors.orange,
        teal: colors.teal,
        "light-blue": colors.sky,
      }
    },
  },
  plugins: [],
}

