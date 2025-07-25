/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{css,scss}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#38bdf8',
        accent: '#38bdf8',
        primaryDark: '#0ea5e9',
        dark: '#111827',
        light: '#F9FAFB',
        gradientStart: '#38bdf8',
        gradientEnd: '#0ea5e9',
      },
      fontFamily: {
        display: ['"Poppins"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'bounce-slow': 'bounce 4s infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')({
      strategy: 'class', // ⬅️ Ključni dodatek: omogoča uporabo "form-control" razredov samo tam, kjer jih želiš!
    }),
  ],
}
