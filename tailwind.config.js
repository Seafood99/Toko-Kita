/** @type {import('tailwindcss').Config} */

import flowbite from 'flowbite/plugin';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container:{
      center: true,
      padding:{
        default: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        '2xl': "6rem",
      }
    }
  },
  plugins: [
      flowbite
  ],
}