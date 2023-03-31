/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js", "./src/*.js"],
  theme: {
    extend: {
      animation: {
        slide: "spin 2s infinite linear",
      },
    },
  },
  plugins: [],
};
