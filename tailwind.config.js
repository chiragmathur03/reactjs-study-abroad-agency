/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#70467E',
        'primary-hover': '#643f71'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
})

