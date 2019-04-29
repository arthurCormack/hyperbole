// Important modules this config uses
const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');
const outputPath = path.join(process.cwd(), 'server', 'middlewares');


// we are going to have to refactor this in a couple of ways. plugins + loaders need to be made webpack 4 compatible.
// also, we can't define it statically, because with webpack 4 we need to indicate a mode which is one of none, production, or development
// so ... to use the same one in both contexts, it cannot be static. we need a function that we can pass a config object to,
// much like we do for webpack.base.babel.js
// that way we can set mode=development ... arg. but wait. we might need to have 2 files.
// webpack.ssr.dev.babel.js and webpack.ssr.prod.js. becasue in dev mode, it gets called and has to work by itself,
// without passing in an object, when we call ssr:generate


module.exports = {
  name: 'server',
  target: 'node',
  mode: 'development',
  externals: [nodeExternals(), '@loadable/component'],
  entry: [
    require.resolve('react-app-polyfill/ie11'),
    path.join(process.cwd(), 'app/serverEntry.js'),
  ],
  output: {
    path: outputPath,
    filename: 'generated.serverEntry.js',
    publicPath: '/',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Transform all .js files required somewhere with Babel
        exclude: /node_modules/,
        // use: ['dynamic-import-node'],
        use: [
          {
            loader: 'babel-loader', 
            options: {
              
            }
          },
        ],
      }, {
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      }, {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
        }, 'css-loader'],
      }, {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: 'file-loader',
      }, {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024,
              noquotes: true,
            },
          },
        ],
      }, {
        test: /\.(jpg|png|gif)$/,
        use: [

          // {
          //   loader: 'url-loader',
          //   options: {
          //     // Inline files smaller than 10 kB
          //     limit: 10 * 1024,
          //   },
          // },

          {
            loader: "file-loader",
            options: {
              // name: "[name].[ext]",
              // outputPath: path.resolve(outputPath, 'build'),
              // outputPath: '../../build',
              emitFile: false
            }
          },

          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                enabled: false,
                // NOTE: mozjpeg is disabled as it causes errors in some Linux environments
                // Try enabling it in your environment by switching the config to:
                // enabled: true,
                // progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
            },
          },
        ],
      }, {
        test: /\.html$/,
        use: 'html-loader',
      }, {
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      },

    ],
  
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
        API_URL: JSON.stringify(process.env.API_URL),
        SERVER_API_URL: JSON.stringify(process.env.SERVER_API_URL),
      }
    }),
    new webpack.NamedModulesPlugin(),
    new LoadablePlugin(), new MiniCssExtractPlugin()
  ],

  resolve: {
    modules: ['app', 'node_modules'],
    extensions: [
      '.js',
      '.jsx',
      '.react.js',
    ],
    mainFields: ['browser', 'jsnext:main', 'main'],
  },
};
