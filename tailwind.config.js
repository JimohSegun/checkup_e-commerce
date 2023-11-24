/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0808fe",
        secondary: "#f0f5ff",
        gray: "#ced4da",
        dimWhite:"#fff",
        dimBlack: "#11101d",
        tertiary: "",
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
  plugins: [],
};









