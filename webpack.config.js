const path = require('path');
const postcssPlugins = [
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('postcss-mixins'),
  require('autoprefixer'),
  require('postcss-import'),
];

module.exports = {
  entry: './app/assets/scripts/app.js',
  output: {
    filename: 'app.bundled.js',
    path: path.resolve(__dirname, 'app'), // bring the absolute path
  },
  devServer: {
    watchFiles: {
      paths: ['./app/**/*.html'],
      options: {
        ignored: './app/assets/*',
      },
    },
    static: {
      directory: path.join(__dirname, 'app'),
      watch: false,
    },
    hot: 'only',
    port: 3000,
  },

  mode: 'development', // work on development mode
  // watch: true, // continously watch the server
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
