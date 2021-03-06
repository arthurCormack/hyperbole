/**
 * DEVELOPMENT WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const WebpackPwaManifest = require('webpack-pwa-manifest');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');


module.exports = require('./webpack.base.babel')({
  mode: 'development',

  // Add hot reloading in development
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(process.cwd(), 'app/app.js'), // Start with js/app.js
  ],
  target: 'web',
  // Don't use hashes in dev mode for better performance
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },

  optimization: {
    // splitChunks: {
    //   chunks: 'all',
    // },
   
    minimize: false,
  
  },

  // Add development plugins
  plugins: [
    new ErrorOverlayPlugin(),
    new webpack.HotModuleReplacementPlugin({
      multiStep: true,
    }), // Tell webpack we want hot reloading
    // new HtmlWebpackPlugin({
    //   inject: true, // Inject all files that are generated by webpack, e.g. bundle.js
    //   template: 'app/index.html',
    // }),
    // new WebpackPwaManifest({
    //   name: 'Hyperbole Boilerplate',
    //   short_name: 'Hyperbole BP',
    //   description: 'Hyperbole Boilerplate-based project!',
    //   background_color: '#fafafa',
    //   theme_color: '#b1624d',
    //   inject: false,
    //   includeDirectory: true,
    //   publicPath: null,
    //   ios: true,
    //   icons: [
    //     {
    //       src: path.resolve('app/images/icon-512x512.png'),
    //       sizes: [72, 96, 128, 144, 192, 384, 512],
    //     },
    //     {
    //       src: path.resolve('app/images/icon-512x512.png'),
    //       sizes: [120, 152, 167, 180],
    //       ios: true,
    //     },
    //   ],
    // }),
    
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/, // exclude node_modules
      failOnError: false, // show a warning when there is a circular dependency
    }),
  ],

  // Emit a source map for easier debugging
  // See https://webpack.js.org/configuration/devtool/#devtool
  devtool: 'cheap-module-source-map',

  performance: {
    hints: false,
  },
  node: {
    fs: "empty"
  },
});
