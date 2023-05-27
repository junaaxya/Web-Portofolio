/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    container:{
      
    },
    extend: {
      colors: {
        primary: "rgba(38, 32, 33, 1)",
        colorText : "rgba(243, 90, 90, 1)"
      },
      height: {
        '55': '13.5rem',
      },
      fontSize: {
        s : ['10px','14px']
      },
      maxWidth: {
        '17': '22rem',
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
  },
  plugins: [],
};
