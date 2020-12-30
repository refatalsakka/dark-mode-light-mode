const errorsHandle = {
  emitError: true,
  emitWarning: true,
  failOnError: true,
  failOnWarning: true,
};
const { merge } = require('webpack-merge');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new ESLintPlugin({
      ...errorsHandle,
    }),
    new StylelintPlugin({
      configFile: '.stylelintrc.json',
      ...errorsHandle,
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        parallel: true,
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
        uglifyOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
});
