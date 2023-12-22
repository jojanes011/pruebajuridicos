import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ["Merriweather", "serif"], // Asegúrate de que el nombre coincida con el nombre de la fuente
      },
      backgroundImage: {
        texture: "url('/images/texture.png')",
      },
    },
    screens: {
      sm: "1025px",
    },
    colors: {
      primary: "#511011",
      secondary: "#977930",
      tertiary: "#727074",
      black: "#000000",
      white: "#FFFFFF",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
