/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./index.tsx",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./ignite/templates/**/*.{js,jsx,ts,tsx,ejs}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
