/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi-Bold', 'sans-serif'],
        satoshiMed: ['Satoshi-Medium', 'sans-serif'],
        
      },
    },
  },
  plugins: [require("tailwind-gradient-mask-image")]

}