/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2E3D72",
          secondary: "#272727",
          neutral: "#202020",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
