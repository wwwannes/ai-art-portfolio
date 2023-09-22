/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      aspectRatio: {
        "4/2-5": "4 / 2.5",
      },
      gridTemplateColumns: {
        "home-image": "auto minmax(50%,600px)",
      },
    },
  },
  plugins: [],
};
