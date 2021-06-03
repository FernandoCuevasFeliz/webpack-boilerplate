const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset',
        generator: {
          filename: 'assets/img/[hash][ext][query]',
        },
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf|mp4|mp3|txt|xml|pdf)$/i,
        type: 'asset',
        generator: {
          filename: 'assets/[path][hash][ext][query]',
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/styles.min.css',
    }),
  ],
};

module.exports = merge(common, prodConfig);
