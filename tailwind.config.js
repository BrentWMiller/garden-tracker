/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f2f4f4",
          100: "#dee4e3",
          200: "#c8d3d1",
          300: "#b1c1be",
          400: "#a1b3b0",
          500: "#90a6a2",
          600: "#889e9a",
          700: "#7d9590",
          800: "#738b86",
          900: "#617b75",
          A100: "#eefefb",
          A200: "#bcfdef",
          A400: "#87ffe4",
          A700: "#6effdf"
        },
        secondary: {
          50: "#fff2e0",
          100: "#ffdeb3",
          200: "#ffc880",
          300: "#ffb24d",
          400: "#ffa226",
          500: "#ff9100",
          600: "#ff8900",
          700: "#ff7e00",
          800: "#ff7400",
          900: "#ff6200",
          A100: "#ffffff",
          A200: "#fff6f2",
          A400: "#ffd4bf",
          A700: "#ffc2a6"
        }
      },
      fontSize: {
        20: ["1.25rem", "1.25rem"],
        24: ["1.5rem", "1.5rem"]
      },
      fontFamily: {
        nunito: ["Nunito", "Arial", "sans-serif"]
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem"
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js"
    ]
  }
};
