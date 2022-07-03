/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3cb574",
          secondary: "#0f848f",
          accent: "#37cdbe",
          neutral: "#3d4451",
        },
      },
    ],
  },
}
