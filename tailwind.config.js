/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ["./theme/**/*.liquid"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display: ['group-active'],
      visibility: ['group-active'],
    },
  },
  plugins: [],
}