/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    container: {},
    extend: {
      colors: {
        primary: "rgba(38, 32, 33, 1)",
        colorText: "rgba(243, 90, 90, 1)",
        linear1: "rgba(18, 18, 24, 1)",
        linear2: "#101c30",
      },
      fontFamily: {
        opensans: ["Josefin Sans"],
        pangolin: ["Pangolin"],
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      padding: {
        7: "7px",
      },
      height: {
        55: "13.5rem",
        120: "300vh",
      },
      fontSize: {
        s: ["10px", "14px"],
      },
      maxWidth: {
        17: "22.7rem",
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
    },
  },
  plugins: [],
};
