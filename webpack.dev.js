const errorsHandle = {
  emitError: true,
  emitWarning: true,
  failOnError: false,
  failOnWarning: false,
};
const { merge } = require('webpack-merge');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  watch: true,
  mode: 'development',
  devtool: 'source-map',
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
    minimize: false,
  },
});
