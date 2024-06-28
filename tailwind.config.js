/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["winter"],
  },
  theme: {
    extend: {
      colors: {
        "gray-20": "#FEFEFE",
        "gray-50": "#F2F2F2",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#C2CCFF",
        "primary-300": "#899AF1",
        "primary-500": "#183df4",
        "secondary-400": "#FFCD58",
        "secondary-500": "#FFC123",
        "white-red-transparent": "#FFF0F0",
        "pink": "#FFA4A4",
      },
      gradientColorStopPositions: {
        13:'13%',
      },
      backgroundImage: (theme) => ({
        "gradient-darkblue": "linear-gradient(90deg, #0B2244 0%, #5E7AA9 100%)",
        "mobile-home": "url('./assets/my-photo.png')",
        "bg-global": "url('./assets/bg_pattern.png')"
      }),
      fontFamily: {
        montseratt: ["Montserrat", "sans-serif"],
        reckless_neue: ["Reckless"],
        firs_neue: ["FirstNeue"],
        firs_neue_regular: ["FirstNeueRegular"],
        gajkley: ['Gajkley']
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px"
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
}