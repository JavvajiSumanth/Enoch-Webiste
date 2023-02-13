/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Dosis"],
    },
    extend: {
      colors: {
        secondary: "#848484",
      },
    },
  },
  plugins: [],
};
