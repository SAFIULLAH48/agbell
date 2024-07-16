/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#005B9E',
        'custom-grey':'#F2F1EB',
        'custom-black':'#010314',
        'custom-darkblue':'#0B3F67',
        'custom-lightblack':'#1A1617',

        // Add more custom colors here if needed
      },
    },
  },
  plugins: [],
}