/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'allContainer': '1320px',
      },
      fontFamily: {
        'pop': ['Poppins'],
        'podkova': ['Podkova'],
        'frank': ['Frank Ruhl Libre'],
      },
      colors:{
        'btnColor':'#FDBB57',
        'allBg':'#FAE3B6',
      }
    },
  },
  plugins: [],
}

