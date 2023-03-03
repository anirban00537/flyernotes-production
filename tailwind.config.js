/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    // preflight: false,
  },
  variants: {},
  plugins: ['@tailwindcss/forms', require('flowbite/plugin')],
};
