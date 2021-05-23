const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const fs = require('fs');

// Multiple pages
const templatePath = path.resolve(__dirname, '../../src/views/pages');

const pages = fs
  .readdirSync(templatePath)
  .filter((fileName) => fileName.endsWith('.pug'));

const multiPages = pages.map((page) => {
  page = page.substring(0, page.lastIndexOf('.'));
  return new HtmlWebpackPlugin({
    template: `${templatePath}/${page}.pug`,
    filename: `${page}.html`,
    inject: true,
  });
});

module.exports = {
  pugRules: {
    test: /\.pug$/,
    loader: 'pug-loader',
    options: {
      pretty: true,
      self: true,
    },
  },
  multiPages,
};
