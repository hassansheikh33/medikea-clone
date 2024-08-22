/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navBg: "rgba(217, 230, 253, 1)",
        docImageBg: "rgba(91, 115, 127, 1)",
        navBtn: "rgba(53, 121, 248, 1)",
        navBtnBorder: "rgba(129, 173, 255, 1)",
        filter: "rgba(0, 0, 0, 0.3)",
        cardBg: "rgba(235, 242, 254, 1)",
        cardColor: "rgba(65, 65, 65, 1)",
        creamBg: "rgba(249, 249, 249, 1)",
        greyDesc: "rgba(109, 109, 109, 1)",
        cardBg: "rgba(235, 242, 254, 1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
