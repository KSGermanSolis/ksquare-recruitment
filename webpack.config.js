/**
 * Created by gsolis on 3/8/16.
 */
var path = require('path');
var webpack = require('webpack');

config = {
  context: path.join(__dirname, 'app'),
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'app'),
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', query: { presets: ['es2015'] }, exclude: /node_modules/ },
      { test: /\.html$/, loader: 'raw', exclude: /node_modules/ },
      { test: /\.css/, loader: 'style!css', exclude: /node_modules/ },
      { test: /\.less$/, loader: 'style!css!less', exclude: /node_modules/ }
    ]
  }
};

if(process.env.NODE_ENV === 'production'){
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  );
}

module.exports = config;