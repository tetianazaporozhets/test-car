/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        robotoFlex: ["Roboto Flex", "system-ui"],
        robotoCondensed: ['"Roboto Condensed"', "system-ui"],
        bebasNeue: ['"Bebas Neue"', "system-ui"],
      },
      colors: {
        "bg-color-light": "#F7F7F7",
        "accent-color": "#0147FF",
        "hover-color": "#2E68FF",
        "bg-color-dark": "#282828",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
  },
  plugins: [],
};
