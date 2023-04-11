const LiveReloadPlugin = require('webpack-livereload-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [
    new LiveReloadPlugin(options),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css', // Формат имени файла
    }),
  ],
  resolve: {
    alias: {
      '../../theme.config$': path.join(__dirname, '/semantic-ui/theme.config'),
      '../semantic-ui/site': path.join(__dirname, '/semantic-ui/site'),
    },
  },
  module: {
    rules: [],
  },
};
