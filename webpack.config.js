const path = require('path');

module.exports = {
  entry: './app/assets/scripts/app.js',
  output: {
    filename: 'app.bundled.js',
    path: path.resolve(__dirname, 'app'), // bring the absolute path
  },
  mode: 'development', // work on development mode
  watch: true, // continously watch the server
};
