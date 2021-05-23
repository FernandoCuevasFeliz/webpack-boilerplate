const ENV = (process.env.NODE_ENV || 'development').trim();

ENV === 'development'
  ? (module.exports = require('./config/webpack.dev'))
  : (module.exports = require('./config/webpack.prod'));
