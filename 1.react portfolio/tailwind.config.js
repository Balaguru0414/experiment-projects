/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "translate(0)",
          },

          "10% ,50% ,80%": {
            transform: "translate(-2px, -2px)",
          },

          "20% ,60% ,90%": {
            transform: "translate(2px, -2px)",
          },

          "30%, 70%": {
            transform: " translate(-2px, 2px)",
          },

          "40%": {
            transform: "translate(2px, 2px)",
          },
        },
        left: {
          "0%": {
            opacity: 0,
            transform: "translateX(-250px)",
          },

          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        right: {
          "0%": {
            opacity: 0,
            transform: "translateX(250px)",
          },

          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        bottom: {
          "0%": {
            opacity: 0,
            transform: "translateY(250px)",
          },

          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        secbottom: {
          "0%": {
            opacity: 0,
            transform: "translateY(150px)",
          },

          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 7s ease 0s infinite normal forwards",
        vibrate: "wiggle 5s ease 0s infinite normal forwards",
        left: "left 1s ease 0s 1 normal forwards",
        right: "right 1s ease 0s 1 normal forwards",
        "mob-nav": "right 0.5s ease 0s 1 normal forwards",
        bottom: "bottom 1s ease 0s 1 normal forwards",
      },
      borderColor: {
        primary: "rgb(85 81 227)",
        secondary: "#2b2d77",
      },
      colors: {
        // primary: "#622bd8",
        primary: "#8564cd",
        secondary: "#3c2177",
      },
    },
    fontFamily: {
      "hero-font": "Permanent marker",
      poppins: "Poppins",
    },
    backgroundSize: {
      580: "580px",
    },
  },
  plugins: [require("daisyui")],
};
