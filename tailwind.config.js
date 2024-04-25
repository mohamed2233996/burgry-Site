/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#ffba00",
        black: "#080808",
        opacityColor: "rgba(0, 0, 0, 0.75);",
        opacityColorLinearStart: "rgba(0,0,0,0.75) 50%;",
        opacityColorLinearEnd: "rgba(0,0,0,1) 100%;",
      }
    },
  },
  plugins: [daisyui],
};
