/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#6d28d9', // purple-700
        secondary: '#0ea5e9', // sky-500
        dark: '#0f172a', // slate-900
      }
    },
  },
  plugins: [],
}