module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "480px", // Mobile
        xs: "481px", // Extra small devices
        md: "768px", // Small tablets
        lg: "992px", // Large tablets/laptops
        xl: "1200px", // Desktops
        xxl: "1920px", // Extra large screens
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        "albert-sans": ['"Albert Sans"', "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};
