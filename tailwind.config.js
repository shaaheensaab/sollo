/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'spacemono': ['space mono', 'monospace'],
      },
      animation: {
        'bounce-slow': 'bounce 2s linear infinite',
        'bounce-slower': 'bounce 3s linear infinite',
        'bounce-slowest': 'bounce 4s linear infinite',
        'bounce-slowests': 'bounce 5s linear infinite',
      },
    },
  },
  plugins: [],
}
