'use strict';

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var phaserModule = path.join(__dirname, '/node_modules/phaser/');
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js'),
  pixi = path.join(phaserModule, 'build/custom/pixi.js'),
  p2 = path.join(phaserModule, 'build/custom/p2.js');

module.exports = {
  entry: path.join(__dirname, '/client', 'main.js'),
  output: {
    path: 'static',
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.scss$/,
        loaders: ["style", "css?sourceMap", "sass?sourceMap"]
      }, {
        test: /.(jpg|png)$/,
        loader: 'file',
        // include: path.join(__dirname, 'assets')
      }, {
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
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
  devtool: 'eval',
  progress: true,
  colors: true,
  watch: true,
  plugins: [new HtmlWebpackPlugin()]
};
