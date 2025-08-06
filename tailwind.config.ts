import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FCFDFD",
        primary: "#4B8B9F",
        secondary: "#3A6C7B",
        Green: "#087A2E",
        Red: "#C6381B",
      },
    },
  },
  plugins: [],
};
export default config;
