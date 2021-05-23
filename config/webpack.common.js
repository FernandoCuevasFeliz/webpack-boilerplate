const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

// importing rules
const { multiPages, pugRules } = require('./rules/pug.rules');
const jsRules = require('./rules/js.rules');
const styleRules = require('./rules/style.rules');
const imageRules = require('./rules/image.rules');
const fileRules = require('./rules/file.rules');

const rules = [pugRules, jsRules, styleRules, imageRules, fileRules];
module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'js/script.min.js',
    publicPath: '',
  },
  module: { rules },
  resolve: {
    extensions: ['.js', '.json', '.pug'],
  },
  plugins: [new CleanWebpackPlugin()].concat(multiPages),
};
