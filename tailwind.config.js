/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "gray-100": "#e5e5e5",
        "gray-200": "#cccccc",
        "gray-300": "#b2b2b2",
        "gray-400": "#999999",
        "gray-500": "#7f7f7f",
        "gray-600": "#666666",
        "gray-700": "#4c4c4c",
        "gray-800": "#333333",
        "gray-900": "#191919",
      },
      aspectRatio: {
        "4/2-5": "4 / 2.5",
        "almost-square": "4 / 3.75",
      },
      gridTemplateColumns: {
        "vertical-grid": "auto 1fr",
        8: "repeat(8,1fr)",
      },
      height: {
        "120vh": "120vh",
      },
      spacing: {
        "40vh": "40vh",
      },
      backgroundSize: {
        "120%": "120%",
      },
      minHeight: {
        "90vh": "90vh",
      },
      animation: {
        noise: "noise .09s infinite",
      },
      keyframes: {
        noise: {
          "0%, 100%": {
            "background-position": "0 0",
          },
          "10%": {
            "background-position": "-5% -10%",
          },
          "20%": {
            "background-position": "-15% 5%",
          },
          "30%": {
            "background-position": "7% -25%",
          },
          "40%": {
            "background-position": "20% 25%",
          },
          "50%": {
            "background-position": "-25% 10%",
          },
          "60%": {
            "background-position": "15% 5%",
          },
          "70%": {
            "background-position": "0 15%",
          },
          "80%": {
            "background-position": "25% 35%",
          },
          "90%": {
            "background-position": "-10% 10%",
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "translate-z": (value) => ({
            "--tw-translate-z": value,
            transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
          }), // this is actual CSS
        },
        { values: theme("translate"), supportsNegativeValues: true }
      );
    }),
  ],
};
