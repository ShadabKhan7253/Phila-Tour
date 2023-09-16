const path = require('path');
const postcssPlugins = [
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('autoprefixer'),
];

module.exports = {
  entry: './app/assets/scripts/app.js',
  output: {
    filename: 'app.bundled.js',
    path: path.resolve(__dirname, 'app'), // bring the absolute path
  },
  mode: 'development', // work on development mode
  watch: true, // continously watch the server
  module: {
    rules: [
      {
        test: /\.css/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: postcssPlugins,
              },
            },
          },
        ],
      },
    ],
  },
};
