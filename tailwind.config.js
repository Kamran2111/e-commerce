import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      backgroundColor: {
        bgAll: "#808585",
      },
      backgroundImage: {
        "custom-img": 'url("../src/assets/images/content.jpg")',
        // "custom-img-two": 'url("./src/assets/images/collection-image.jpg")',
      },
      backgroundSize: {
        cover: "cover",
      },
      backgroundPosition: {
        center: "center",
      },
      backgroundRepeat: {
        "no-repeat": "no-repeat",
      },
      boxShadow: {
        boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        ".border-animation": {
          position: "relative",
          paddingBottom: "5px",
          boxSizing: "content-box",
        },
        ".border-animation::after": {
          content: "''",
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "100%",
          height: "2px",
          backgroundColor: "#808585",
          transform: "scaleX(0)",
          transformOrigin: "center",
          transition: "transform 0.7s ease",
        },
        ".border-animation:hover::after": {
          transform: "scaleX(1)",
        },
        ".navbar-menu": {
          position: "relative",
          cursor: "pointer",
          width: "20px",
          height: "20px",
          marginLeft: "20px",
        },
        ".navbar-menu-btn": {
          position: "absolute",
          top: "9px",
          width: "20px",
          backgroundColor: "white",
          height: "3px",
        },
        ".navbar-menu::before": {
          content: '""',
          position: "absolute",
          top: "0",
          width: "20px",
          backgroundColor: "white",
          height: "3px",
        },
        ".navbar-menu::after": {
          content: '""',
          position: "absolute",
          bottom: "0",
          width: "20px",
          backgroundColor: "white",
          height: "3px",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
