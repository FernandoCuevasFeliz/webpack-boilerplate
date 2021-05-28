const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PUG_LOADER = {
  loader: 'pug-loader',
  options: {
    pretty: true,
    self: true,
  },
};

const BABEL_LOADER = {
  loader: 'babel-loader',
};

const MINI_CSS_EXTRACT_PLUGIN = {
  loader: MiniCssExtractPlugin.loader,
  options: {
    publicPath: '../', // esto resuelve el problema de las rutas de imagenes en css|scss
  },
};

const CSS_LOADER = {
  loader: 'css-loader',
  options: {
    sourceMap: true,
    importLoaders: 1,
  },
};

const POSTCSS_LOADER = {
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
  },
};

const SASS_LOADER = {
  loader: 'sass-loader',
  options: {
    sourceMap: true,
  },
};

const IMAGE_WEBPACK_LOADER = {
  loader: 'image-webpack-loader',
  options: {
    mozjpeg: {
      progressive: true,
    },
    // optipng.enabled: false will disable optipng
    optipng: {
      enabled: false,
    },
    pngquant: {
      quality: [0.65, 0.9],
      speed: 4,
    },
    gifsicle: {
      interlaced: false,
    },
    // the webp option will enable WEBP
    webp: {
      quality: 75,
    },
  },
};

const loaders = [
  {
    test: /\.pug$/i,
    use: [PUG_LOADER],
  },

  {
    test: /\.js$/i,
    use: [BABEL_LOADER],
    exclude: /node_modules/,
  },

  {
    test: /\.(css|s[ac]ss)/i,
    use: [MINI_CSS_EXTRACT_PLUGIN, CSS_LOADER, POSTCSS_LOADER, SASS_LOADER],
    exclude: /node_modules/,
  },

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
];

module.exports = loaders;
