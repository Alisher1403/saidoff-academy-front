/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-title":
          "linear-gradient(204.43deg, #FFFFFF 15.62%, #D2D2D2 65.42%)",
        "gradient-comments":
          "radial-gradient(100% 102.77% at 0% 8.27%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 139, 251, 0.5) 38.23%, rgba(126, 110, 232, 0.5) 92.55%)",
      },
      colors: {
        textGray: "#CECECE",
        Gray: "#A4A4A4",
        primary: "rgba(255, 255, 255, 1)",
        none: "rgba(227,226,226,0.51)",
        Nfixen: "rgba(227,226,226,0.25)",
        blacks: "rgb(24,24,24)",
        index: "rgba(227,226,226,0.14)",
        "main-bg": "#121212",
        grey: "#A4A4A4",
        gray: "#838383",
        bpurple: "#8B3D88",
        bpink: "#E93163",
        boxbg: "#000223",
        // "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-radial":
          "radial-gradient(50% 50% at 50% 50%, rgba(81, 65, 161, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%)",
      },
      spacing: {
        theight: "960px",
      },
      fontSize: {
        num_120: "120px",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".gradient-border": {
          border: "2px solid",
          borderImageSource:
            "radial-gradient(85% 85% at 14.67% 12.77%, rgba(152, 68, 255, 0.4) 0%, rgba(255, 255, 255, 0.4) 45.65%, rgba(151, 99, 255, 0.4) 100%)",
          borderImageSlice: "1",
          borderRadius: "0.75rem", // Radius qo'shish
        },
      });
    },
  ],
};