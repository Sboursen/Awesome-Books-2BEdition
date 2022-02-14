module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        nier: ['nier-font', 'system-ui'],
      },
      colors: {
        body: '#d1cdb7',
        bodyLight: '#dadbbf',
        bodyDark: '#bab5a1',
        active: '#454138',
        warning: '#BF6851',
        warningLight: '#CB7C63',
      },
    },
    screens: {
      sm: '375px',
      md: '768px',
      lg: '992px',
      xlg: '1440px',
    },
  },
  plugins: [],
};
