const tailwindcss = require('@tailwindcss/postcss7-compat');

module.exports = {
  plugins:[
    tailwindcss,
    require('autoprefixer'),
  ],
};
