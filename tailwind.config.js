/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        "primary-yellow": "#FCFF81",
        "primary-yellow-hover": "#F9FC5B",
        "primary-purple": "#7E22CE",
        "dark-purple": "#7800B7",
        "dark-blue": "#001DB7",
        "primary-linear-purple":
          "linear-gradient(268.64deg, #D06BFF 0%, #A43DFF 100%);",
        "fade-purple": "#F7E7FF",
        "secondary-purple": "#B840F5",
        "custom-pink": "#FF81DC",
        "custom-light-blue": "#81BBFF",
      },
    },
  },
  plugins: [],
};
