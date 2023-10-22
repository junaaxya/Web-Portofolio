/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html", "./src/components/**/*.{html,js}", "./src/components/about.html"],
  theme: {
    screen: {
      tablet: "500px",
    },
    container: {},
    extend: {
      colors: {
        primary: "rgba(38, 32, 33, 1)",
        colorText: "rgba(243, 90, 90, 1)",
        linear1: "rgba(18, 18, 24, 1)",
        linear2: "#101c30",
        menu: "#101c30",
      },
      fontFamily: {
        opensans: ["Josefin Sans"],
        pangolin: ["Pangolin"],
        noto: ["Noto Sans"],
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
      padding: {
        7: "7px",
      },
      height: {
        55: "13.5rem",
        120: "320vh",
        110: "250vh",
        100: "145vh",
        90: "90vh",
      },
      fontSize: {
        s: ["10px", "14px"],
      },
      maxWidth: {
        17: "22.7rem",
        18: "25rem",
      },
      aspectRatio: {
        "4/3": "3 / 4",
      },
    },
  },
  plugins: [],
};
