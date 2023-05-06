/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,tsx,jsx}'],
  theme: {
    extend: {
      colors: {
        primary_yellow: '#ffbd12',
        primary_black: '#18191f',
      },
      boxShadow: {
        'neo-down': '0px 4px 0px #18191F;',
      },
    },
  },
  plugins: [],
}
