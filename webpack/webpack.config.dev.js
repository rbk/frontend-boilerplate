const path = require('path');
const webpack = require('webpack');
const resolve = require('path').resolve;
const validate = require('webpack-validator');


const config = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./src/js/index.js'
	],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [
      resolve('./src/js'),
    ],
  },
  output: {
    path: resolve('./dist'),
    filename: 'bundle.js',
		publicPath: 'http://localhost:8080/',
  },
  devServer: {
		hot: true,
		port: 8080,
		historyApiFallback: true,
		contentBase: './dist/',
		publicPath: 'http://localhost:8080/',
	},
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  module: {
    loaders: [
      // babel
      {
        test: /\.(js|jsx)$/,
        include: [resolve('./src/js')],
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        },
      },

      // json
      {
        test: /\.json$/,
        loader: 'json',
      },

      // images
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url?limit=10000!image-webpack',
      }
    ],
  },
  devtool: 'eval',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
};

module.exports = validate(config);
