const ENV = (process.env.NODE_ENV || 'development').trim();

if (ENV === 'production') {
  module.exports = require('./config/webpack.prod');
} else {
  module.exports = require('./config/webpack.dev');
}
