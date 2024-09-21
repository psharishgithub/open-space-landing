/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {colors: {
      'black':'#0A0A0A',
      'white':'#ffffff',
      'purple': '#3f3cbb',
    },},
    screens: {
      'mobile': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
      '2k':"1536px",
    },
  },
  
  
  plugins: [],
}

