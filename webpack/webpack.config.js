const path = require('path');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const tools = require('./webpack.tools.js');

const PATHS = {
  app: path.join(__dirname, '../src', 'js'),
  style: [
    path.join(__dirname, '../node_modules', 'normalize.css'),
    path.join(__dirname, '../node_modules', 'f-of-s'),
    path.join(__dirname, '../src', 'styles', 'main.pcss'),
  ],
  build: path.join(__dirname, '../dist'),
};

const common = tools.common({
  entry: {
    style: PATHS.style,
    app: PATHS.app,
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [PATHS.app],
  },
  postcss: function(webpack) {
    return [
      require('postcss-import'),
    ];
  }
});


// Dev config
const devConfig = merge(
  common,
  {
    devtool: 'eval-source-map',
    performance: { hints: false },
  },
  tools.setupJS(PATHS.app),
  tools.extractCSS(PATHS.style),
  tools.setupHMR(PATHS.app),
  tools.setupHTML({
    title: 'Boilerplate',
    template: 'templates/index.tpl.html'
  }),
  tools.devServer()
);


// Build config
const buildConfig = merge(
  common,
  {
    devtool: 'source-map',
    output: {
      path: PATHS.build,
      filename: '[name].js',
      publicPath: '/',
    }
  },
  tools.clean(PATHS.build),
  tools.setVar('process.env.NODE_ENV', 'build'),
  tools.setupJS(PATHS.app),
  tools.extractCSS(PATHS.style),
  tools.purifyCSS([PATHS.app], ['.jsx']),
  tools.setupHTML({
    title: 'Boilerplate',
    template: 'templates/index.tpl.html'
  })
);


// Test Config
const testConfig = merge(
common
);


const exportConfig = function(env) {
  if (env === 'build')
    return validate(buildConfig);

  if (env === 'dev')
    return validate(devConfig);

  if (env === 'test')
    return validate(testConfig);

}

module.exports = exportConfig(process.env.NODE_ENV);
