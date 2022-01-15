module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        great: "'Fredericka the Great', cursive",
        girl: "'Crafty Girls', cursive",
      },
      colors: {
        green: {
          DEFAULT: "#71B214",
        },
        gray: {
          600: "#606060",
        },
        orange: {
          DEFAULT: "#ffb347",
          100: "#ffefd5",
        },
      },
      spacing: {
        13: "3.25rem",
      },
      boxShadow: {
        primary: "0px 9.9px 21.6px rgba(136, 202, 41, 0.41)",
      },
      backgroundImage: {
        "prep-time":
          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1LjBS5SCVQtkg0g7xBVJ1y0nmeMuZhAqOHg&usqp=CAU')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
