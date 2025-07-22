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
        primary: '#60A5FA',       // svetlejša modra (blue-400)
        accent: '#60A5FA',        // Aurora in ostali elementi
        primaryDark: '#3B82F6',   // dodatno (modra-500, če rabiš za hover ali temnejšo verzijo)
        dark: '#111827',
        light: '#F9FAFB',
        gradientStart: '#60A5FA', // gradient začetek
        gradientEnd: '#3B82F6',   // gradient konec (rahlo temnejša)
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
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
