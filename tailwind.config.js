/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        "albert-sans": ['"Albert Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
