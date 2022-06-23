module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards"
      },
      width: {
        '320px': '320px'
      },
      height: {
        '700px': '700px',
        '1000px': '1000px'
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      variants: {
        animation: ["motion-safe"]
      },
      spacing: {
        '3%': '3%',
        '5%': '5%',
      },
      colors: {
        'gray-dark': '#171717',
        'gray-light': '#d4d4d8',
        'blue':'blue',

      },
      boxShadow: {
        "clay-card":
          "inset -10px -10px 20px hsl(302deg 25% 50% / 70%), inset 0 16px 32px hsl(302deg 25% 95%)",
        "clay-btn":
          "12px 12px 20px 0 hsl(277deg 0% 65% / 50%), inset -16px -16px 32px 0 hsl(262deg 0% 90%), inset 8px 8px 16px 0 hsl(227deg 5% 90% / 90%)",
        "clay-btn-two":
          "8px 8px 10px 0 hsl(277deg 0% 65% / 50%), inset -16px -16px 32px 0 hsl(262deg 0% 90%), inset 8px 8px 16px 0 hsl(227deg 0% 90% / 90%)",
        "clay-btn-three":
          "12px 12px 20px 0 hsl(277deg 0% 65% / 20%), inset -16px -16px 32px 0 hsl(262deg 0% 90%), inset 8px 8px 16px 0 hsl(227deg 5% 90% / 90%)"
       
      },
      dropShadow: {
        'clay': '35px 35px 35px hsl(302deg 25% 50%)',
      }
    },
  fontFamily: {
    sans: ['articula-cf','sans-serif'],
    heading: ['questa-grande','serif'],
    italic: ['questa-grande','sans-serif']
  },
  },  
  plugins: [],
};
