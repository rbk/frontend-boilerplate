const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack-plugin');


/**
 *
 * Webpack tools to build webpack workflows
 *
 * 1. { common } Common webpack parts (entry, output, devtool, etc)
 * 2. { devServer } Webpack Dev Server
 * 3. { setVar } Set free system Variable (Dev/Prod/Test)
 * 4. { clean } Clean the build folder
 * 5. { setupJS } Basic es6/React setup
 * 6. { extractJS } Extract JS into bundles
 * 7. { minfiyJS } Minify JS
 * 8. { setupCSS } Basic PostCSS setup
 * 9. { extractCSS } Extract CSS into css files
 * 10. { purifyCSS } Remove unused and duplicate CSS
 * 11. { setupHTML } Setup HTML output
 * 12. { setupHMR } Setup HMR
 */



/**
 * Common webpack setup
 *
 * @description This sets up a basic common point for most webpack builds
 *
 * @param {Object} opts object contains the entries/outputs
 * @param {Object} opts.entry is the entry object
 * @param {Object} opts.output is the output object
 * @param {String} opts.devtool is the devtool to use
 * @param {Object} opts.resolve is the resolve object
 */
exports.common = function(opts) {
  return {
    entry: opts.entry,
    output: opts.output,
    resolve: opts.resolve,
    devtool: opts.devtool,
  };
}


/**
 * Dev Server setup
 *
 * @description Set up webpack dev server config
 *
 * @param {Object} opts object contains dev server options
 * @param {Boolean} opts.hot with a fallback of true
 * @param {Boolean} opts.inline with a fallback of true
 * @param {String} opts.stats fallback of errors-only
 * @param {String} opts.host fallback of localhost
 * @param {Number} opts.port fallback of 8080
 * @param {Object} opts.hmr hmr fallback of {}
 */
exports.devServer = function(options) {

  let defaults = {
    hot: true,
    inline: true,
    stats: 'errors-only',
    host: 'localhost',
    post: 8080,
    hmr: {},
    publicPath: 'http://localhost:8080/',
  };

  let opts = Object.assign({}, options, defaults);

  return {
    devServer: {
      historyApiFallback: true,
      hot: opts.hot,
      inline: opts.inline,
      stats: opts.stats,
      host: opts.host,
      port: opts.port,
      publicPath: opts.publicPath,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(opts.hmr),
    ]
  };
}


/**
 * Set Variable
 *
 * @description Set a environment variable
 *
 * @param {String} key name of the variable
 * @param {Any} val value of the variable, converted to string
 */
exports.setVar = function(key, val) {
  const env = {};
  env[key] = JSON.stringify(val);
  return {
    plugins: [
      new webpack.DefinePlugin(env),
    ],
  };
}


/**
 * Clean
 *
 * @description Clean the build folder
 *
 * @param {String} path to the build folder
 */
exports.clean = function(path) {
  return {
    plugins: [
      new CleanWebpackPlugin([path], {
        root: process.cwd(),
      })
    ],
  };
}


/**
 * Setup JS
 *
 * @description Setup basic es6/React loaders
 *
 * @param {Array} paths to include for JS files
 * @param {Array} loaders array to customize JS loaders, babel-loader included by default
 */
exports.setupJS = function(paths, loaders = []) {

  let loaderArray = loaders.concat('babel-loader');
  return {
    module: {
      loaders: [
        {
          test: /\.(js|jsx)$/,
          loaders: loaderArray,
          exclude: /node_modules/,
          include: paths,
        },
      ],
    },
  };
}


/**
 * Extract JS
 *
 * @description Extract parts of the JS (such as vendor files) into seperate bundles
 *
 * @param {Object} opts options object
 * @param {String} opts.name name of the JS file for the extracted bundle
 * @param {Array} opts.entries is the array of entry points
 */
exports.extractJS = function(opts) {
  const entry = {};
  entry[opts.name] = opts.entries;

  return {
    entry: entry,
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        names: [opts.name, 'manifest']
      }),
    ],
  };
}


/**
 * Minify JS
 *
 * @description Minify the JavaScript file(s)
 */
exports.minifyJS = function() {
  return {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  };
}


/**
 * Setup CSS
 *
 * @description Basic setup for compiling PostCSS
 * Note: Mostly used for Dev over production, this wont extract CSS into a seperate file
 *
 * @param {Array} paths array of PostCSS entrypoints
 * @param {Array} loaders array for css adds style-loader by default
 */
exports.setupCSS = function(paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.(css|pcss)$/,
          loaders: ['style-loader', 'css-loader', 'postcss-loader'],
          include: paths,
        }
      ]
    }
  };
}


/**
 * Extract CSS
 *
 * @description Extract CSS into a seperate file
 * NOTE: this is being set to use only style, css and postcss loaders
 *
 * @param {Array} paths array to look for postcss files
 */
exports.extractCSS = function(paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.(css|pcss)$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader'),
          include: paths,
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('[name].css')
    ]
  };
}


/**
 * Purify CSS
 *
 * @description Remove unused CSS
 *
 * @param {Array} paths leading to the template files
 * @param {Array} extensions of the template files e.g. ['.html', '.jsx'] etc.
 */
exports.purifyCSS = function(paths, extensions = []) {
  return {
    plugins: [
      new PurifyCSSPlugin({
        basePath: process.cwd(),
        paths: paths.map(path => `${path}/*`),
        resolveExtensions: extensions,
      }),
    ]
  };
}


/**
 * Setup HTML
 *
 * @description Setup HTML
 *
 * @param {Object} opts for the HtmlWebpackPlugin
 */
exports.setupHTML = function(opts = {}) {
  return {
    module: {
      loaders: [
        {
          test: /\.tpl.html$/,
          loader: 'html-loader'
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin(opts),
    ]
  };
}

/**
 * Setup HMR
 *
 * @description Set up Hot Module Replacement
 *
 * @param {String} path to the root of the JS
 */
exports.setupHMR = function(path) {
  return {
    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      path
    ],
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
    ],
  }
}
