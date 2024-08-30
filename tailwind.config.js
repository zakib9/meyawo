/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#695aa6",
        "secondary": "#e2e6ea",
      },
      fontFamily: {
        Karla: ["Karla", "sans-serif"],

      }
    },
  },
  plugins: [],
}