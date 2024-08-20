/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlack: "rgba(0, 0, 0, 1)",
        navBg: "rgba(217, 230, 253, 1)",
        docImageBg: "rgba(91, 115, 127, 1)",
        navBtn: "rgba(53, 121, 248, 1)",
        navBtnBorder: "rgba(129, 173, 255, 1)",
        filter: "rgba(0, 0, 0, 0.3)",
        cardBg: "rgba(235, 242, 254, 1)",
        cardColor: "rgba(65, 65, 65, 1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
