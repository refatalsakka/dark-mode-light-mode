const path = require('path');

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'dark-mode-light-mode.js',
    environment: {
      arrowFunction: false,
      const: false,
      destructuring: false,
      forOf: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|dist)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
