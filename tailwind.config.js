/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customGreen: "rgb(45 248 197)",
      },
    },
  },
  plugins: [],
};
