module.exports = {
  test: /\.(css|s[ac]ss)$/,

  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
      },
    },
    'postcss-loader',

    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
      },
    },
  ],
  exclude: /node_modules/,
};
