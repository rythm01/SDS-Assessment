/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
import { default: flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette"

module.exports = withMT({
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      sans: ['Inter'],
    },
    extend: {
      colors: {
        'primary': '#003654',
      },
      fontSize: {
        'custom': ['25.91px', '32.38px'], // [fontSize, lineHeight]
      },
      keyframes: {
        fadeAnim: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        fadeAnim: 'fadeAnim 0.5s ease-out',
      },
      boxShadow: {
        boxshadow: '0 0 5px 3px rgba(0,0,0,.07)',
        boxshadow_2: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
      },
      variants: {
        extend: {
          backgroundColor: ['even', 'odd', 'hover'],
        },
      },
    },

  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    addVariablesForColors,
  ],
});

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}