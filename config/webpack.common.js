const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const LOADERS = require('./loaders');
const PAGES = require('./pages');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/script.min.js',
    path: path.resolve(__dirname, '../public'),
    publicPath: '',
    clean: true,
  },

  resolve: {
    extensions: ['.js', '.ts'],
  },
  module: { rules: LOADERS },

  plugins: [
    new CleanWebpackPlugin(),
    ...PAGES,
    new MiniCssExtractPlugin({
      filename: 'css/style.min.css',
    }),
  ],
};
