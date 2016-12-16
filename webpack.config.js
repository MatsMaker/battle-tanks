'use strict';

var path = require('path');
var webpack = require('webpack');

var phaserModule = path.join(__dirname, '/node_modules/phaser/');
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js'),
  pixi = path.join(phaserModule, 'build/custom/pixi.js'),
  p2 = path.join(phaserModule, 'build/custom/p2.js');

var isDevelopment = process.env.NODE_ENV != 'production';

var plugins = [];
if (isDevelopment) {} else {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    comments: false
  }))
}

module.exports = {
  entry: {
    'game_client': path.join(__dirname, '/game', 'main.js'),
    'index': path.join(__dirname, '/client', 'app.js')
  },
  output: {
    path: 'public',
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js',
  },
  vue: {
    loaders: {
      js: 'babel'
    }
  },
  module: {
    loaders: [
      {
        test: /.scss$/,
        loaders: ["style", "css?sourceMap", "sass?sourceMap"]
      }, {
        test: /.(jpg|png)$/,
        loader: 'file'
      }, {
        test: /\.vue$/,
        loader: 'vue?sourceMap'
      }, {
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        exclude: /node_modules/
      }, {
        test: /p2.js/,
        loader: "script"
      }, {
        test: /pixi.js/,
        loader: "script"
      }, {
        test: /phaser.js/,
        loader: "script"
      }
    ]
  },
  resolve: {
    alias: {
      'pixi.js': pixi,
      'p2': p2,
      'phaser': phaser
    }
  },
  split: true,
  devtool: (isDevelopment)
    ? 'source-map'
    : 'cheap-module-source-map',
  progress: true,
  colors: true,
  watch: isDevelopment,
  plugins: plugins
};
