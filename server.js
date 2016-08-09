var config = require('./webpack.config.js');
var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var path = require('path');

var server = new WebpackDevServer(webpack(config), {
  contentBase: path.join(__dirname, 'src'),
  hot: true,
  https: false,
  noInfo: false,
  publicPath: config.output.publicPath,
  quiet: false,
  stats: {
    assets: true,
    chunks: true,
    chunkModules: false,
    hash: false,
    version: false,
    colors: true
  },
}).listen(3001, 'localhost', function(err) {
  if (err) {
    console.log(err)
  }

  console.log('Listening at localhost:3001')
});
