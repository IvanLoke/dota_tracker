/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sidebar: "#171624",
        primary: "#131625",
        selected: "#1C6892",
        titleCard: "#171a29",
        oxfordBlue: "#141831",
        spaceCadet: "#2A2D46",
        raisinBlack: "#262335",
        ultraViolet: "#5f5C82",
        frenchGray: "#BBB5BB",
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(to right, #131625, #2a2b34, #1f212b)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        "xs": "580px",
        "3xl": "1600px",
      },
    },
  },
  plugins: [],
};
