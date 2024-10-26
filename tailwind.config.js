import daisyui from "daisyui"


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#131313',
        secondary: '#E7FE29',
      },
      backgroundImage: {
        'banner-bg': "url('/src/assets/bg-shadow.png')",
      }

    },
  },
  plugins: [daisyui,],
}