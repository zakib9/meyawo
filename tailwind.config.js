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
        "accent": "#A59CCA",
        "hoverd": "#574b8e"
      },
      fontFamily: {
        Karla: ["Karla", "sans-serif"],

      }
    },
  },
  plugins: [],
}