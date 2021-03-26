module.exports = {
  purge: {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: [
        'text-yellow-400',
        'text-red-400',
        'text-green-400',
        'bg-green-50',
        'bg-yellow-50',
        'bg-red-50'
      ]
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
