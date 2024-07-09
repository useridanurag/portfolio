/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    fontFamily:{
      bellefair:["Bellefair"],
      garamond:["Cormorant Garamond"],
      greatVibes:["Great Vibes"],
      charm:["Charm"],

    },
    },
  },
  plugins: [],
}

