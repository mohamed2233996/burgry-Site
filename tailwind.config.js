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
        'burger-intro':"url('/download1.png')",
        'snack-intro':"url('/download2.png')",
        'drink-intro':"url('/download3.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#ffba00",
        black: "#000000",
        boxColor:"#171717",
        opacityColor: "rgba(0, 0, 0, 0.75);",
        opacityColorLinearStart: "rgba(0,0,0,0.75) 50%;",
        opacityColorLinearEnd: "rgba(0,0,0,1) 100%;",
      }
    },
  },
  plugins: [daisyui],
};
