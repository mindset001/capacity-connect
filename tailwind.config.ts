import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-left': "url('https://res.cloudinary.com/mindset/image/upload/v1709807082/hero-left_xciwgn.png')",
        'hero-right': "url('https://res.cloudinary.com/mindset/image/upload/v1709807082/hero-right_kvuvel.png')",
        'mainbg': "url('https://res.cloudinary.com/mindset/image/upload/v1709898979/Group_7_vfcvmg.png')",
        'bga': "url('https://res.cloudinary.com/mindset/image/upload/v1709914230/Rectangle_6350_h27izt.png')",
        'bgs': "url('https://res.cloudinary.com/mindset/image/upload/v1709914524/Rectangle_6336_bcpgme.png')",
      },
    },
  },
  plugins: [],
};
export default config;


const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    // rest of the code
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [
    // rest of the code
    addVariablesForColors,
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
