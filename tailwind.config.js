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
        phonetextBg: "rgba(234, 241, 255, 1)",
        phonepicBg: "rgba(189, 211, 252, 1)",
        docCardBg: "rgba(125, 146, 181, 1)",
        lightGreyDesc: "rgba(138, 138, 138, 1)",
        footerBtn: "rgba(20, 17, 58, 1)",
        bottomBg: "rgba(230, 232, 235, 1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      custom2xl: { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      customXl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      customLg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      customMd: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      customSm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
