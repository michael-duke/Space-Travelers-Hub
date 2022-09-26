const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:['Montserrat', 'sans-serif'], 
        serif:['Roboto Slab', 'serif']
      },
      letterSpacing: {
        widest: '.19em',
      },
      colors: {
      },
      screens: {
        sm: { max: '768px' },
        sl: { max: '500px' },
        ms: { max: '1212px' },
        fold: { max: '327px' },
        pro: { max: '900px' },
        lgg: { max: '960px' }
      }
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
});
