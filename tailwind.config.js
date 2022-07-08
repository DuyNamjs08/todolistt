module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-header": "rgba(175, 47, 47, 0.15)",
      },
      boxShadow: {
        "input-shadow": "inset 0 -2px 1px rgb(0 0 0 / 3%);",
      },
    },
  },
  plugins: [],
};
