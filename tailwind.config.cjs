/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        100: "#151515",
        200: "#212121",
        300: "#3D3D3D",
        400: "#FFFFFF",
        500: "#202020",
        600: "#808080",
        700: "#FDCA52",
        800: "#6dc849",
        900: "#C30101",
        transparent: "transparent",
      },
    },
    extend: {
      fontFamily: {
        Zelda: ["zelda"],
      },
      backgroundImage: {
        hero: "url('./Banner.jpg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
