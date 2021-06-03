const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const { HotModuleReplacementPlugin } = require('webpack');
const path = require('path');

const devConfig = {
  mode: 'development',
  devServer: {
    open: true,
    port: 4000,
    liveReload: true,
    contentBase: path.resolve(__dirname, '../src'),
    hot: true,
    publicPath: '/',
    stats: 'errors-only',
    inline: true,
    watchContentBase: true,
  },
  target: 'web',
  plugins: [new HotModuleReplacementPlugin()],
  devtool: 'eval-source-map',
};

module.exports = merge(common, devConfig);
