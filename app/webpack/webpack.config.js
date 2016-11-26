// Constants
const ENV_DEV = 'dev';
const ENV_PROD = 'prod';
const ENV = process.env.NODE_ENV || ENV_DEV;

// export correct config
const config = require('./webpack.config.dev.js');


module.exports = config;
//module.exports = ENV === ENV_DEV ? require('./webpack.config.dev.js') : {};
