const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  devtool: 'source-map',
  // module: {
  //   rules: [],
  // },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
    },
  },
};

module.exports = merge(common, prodConfig);
