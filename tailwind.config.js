/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0808fe",
        secondary: "#f0f5ff",
        gray: "#ced4da",
        dimBlack: "#11101d",
        tertiary: "#8e8e91",
        liteBlue: "#d8edff",
      },
      fontFamily: {
        cormorant: ["Cormorant Upright', serif ,'Open Sans', sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [require("tailwind-scrollbar")],
}); 