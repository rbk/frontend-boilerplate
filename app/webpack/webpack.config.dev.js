const path = require('path');
const webpack = require('webpack');
const resolve = require('path').resolve;
const validate = require('webpack-validator');


const config = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./app/js/index.js'
	],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [
      resolve('./app/js'),
    ],
  },
  output: {
    path: resolve('./app/dist'),
    filename: 'bundle.js',
		publicPath: 'http://localhost:8080/',
  },
  devServer: {
		hot: true,
		port: 8080,
		historyApiFallback: true,
		contentBase: './app/dist',
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
        include: [resolve('./app/js')],
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

      // static files
      {
        test: /[\s\S]*$/,
        include: resolve('./assets/dist'),
        loader: 'file?name=[name].[ext]',
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
