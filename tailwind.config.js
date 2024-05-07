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
      keyframes: {
        updown: {
          '0%, 100%': {transform: 'translateY(0px)'},
          '50%': { transform: 'translateY(20px)' },
        }
      },
      animation: {
        updown: 'updown 2s ease infinite',
      },
      backgroundImage: {
        "burger-intro":"url('/download1.png')",
        "snack-intro":"url('/download2.png')",
        "drink-intro":"url('/download3.png')",
        "offerbg": "url('/offer.jpg')",
      },
      colors: {
        primary: "#ffba00",
        black: "#000000",
        boxColor:"#171717",
        opacityColor: "rgba(0, 0, 0, 0.75);",
        opacityColorLinearStart: "#000000bf",
        opacityColorLinearEnd: "#000000"
      }
    },
  },
  plugins: [daisyui],
};
