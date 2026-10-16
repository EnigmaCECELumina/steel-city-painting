module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#080808',
        gunmetal: '#0f1112',
        steel: '#222428',
        gold: '#D0A84E',
        brass: '#C6973B',
        amber: '#F3C44E',
        offwhite: '#F6F3EE',
        muted: '#B8BDC4'
      },
      boxShadow: {
        'gold-glow': '0 12px 40px rgba(243,196,78,.18)'
      }
    }
  },
  plugins: [],
}
