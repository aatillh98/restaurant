module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        primary: 'red',
        second: '#444',
        666: '#666',
        777: '#777',
        gold: '#b7903c'
      },
      backgroundColor: {
        mainColor: 'red',
        dark: '#222',
        teal: 'teal',
        333: '#333',
      },
      height: {
        slider: 'calc(100vh - 100px)',
        100: '100%',
        80: '80%',
        30: '30px',
        40: '40px',
        50: '50px',
        70: '70vw',
        mbSlider: '50vh',
      },
      width: {
        100: '100vw',
        300: '300vw',
        70: '70%',
        22: '22%',
        80: '80%',
        30: '30px',
        40: '40px',
        50: '50px',
        90: '90%',
        70: '70vw',
      },
      fontWeight: {
        50: '50'
      },
      maxHeight: {
        300: '300px'
      },
      fontSize: {
        24: '24px',
        18: '18px',
        12: '12px',
        14: '14px',
        10: '10px',
      },
      padding: {
        10: '10px',
        50: '50px',
      },
      borderColor: {
        primary: 'red',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-3%)' },
        },
        inProgress: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        }
      },
      animation: {
        bounce: 'bounce 1s ease-in-out infinite',
        size: 'bounce 500ms infinite',
        inProgress: 'inProgress 1s ease infinite alternate',
      },
      opacity: {
        1: '0.5'
      }
    },
    plugins: [],
  }
}