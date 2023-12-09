/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        "cinzel": "'Cinzel', serif"
      }
    },
  },
  plugins: [require("daisyui"), require('preline/plugin')],
}

