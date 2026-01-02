
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nutrition-yellow': '#FFF085',
        'nutrition-light': '#FCB454',
        'nutrition-orange': '#FF9B17',
        'nutrition-red': '#F16767',
        'nutrition-dark': '#333333', // Keeping a dark color for text
      }
    },
  },
  plugins: [],
}