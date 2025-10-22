import type { Config } from "tailwindcss";
import * as colors from "./colors"; 

const config: Config = {
  important:true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/*.{js,ts,jsx,tsx,mdx}",
    "./components/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
       elvyaGreen:colors.ElvyaGreen,
       elvyaGold:colors.ElvyaGold,
       neutralRed:colors.neutralRed,
       neutralBlue:colors.neutralBlue,
       neutralGreen:colors.neutralGreen
      }
    },
  },
  plugins: [],
};
export default config;