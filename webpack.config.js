'use strict';

const Webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// import HtmlWebpackPlugin from 'html-webpack-plugin';

const USE_CONFIG = JSON.stringify(process.env.USE_CONFIG) || 'build';
const IS_BUILD = process.argv.indexOf('--build') !== -1;
const IS_TEST = USE_CONFIG.indexOf('test') > -1;

// if (!IS_BUILD && !IS_TEST) {

//   var Dashboard = require('webpack-dashboard');
//   var DashboardPlugin = require('webpack-dashboard/plugin');
// }

const CONFIG = {
  context: __dirname + '/src',
  entry: './index.ts',
  output: {
    path: __dirname + (IS_BUILD ? '/dist/assets' : '/src'),
    filename: 'bundle.[name].js',
    publicPath: IS_BUILD ? '/assets/' : '/',
  },
  resolve: {
    extensions: ['.json', '.jsx', '.js', '.ts']
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.PRODUCTION': IS_BUILD,
      'process.env.DEVELOPMENT': !IS_BUILD,
      'process.env.USE_CONFIG': USE_CONFIG,
      'process.env.IS_TEST': IS_TEST
    }),
    new Webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer],
        'html-minify-loader': {
          empty: true,
          cdata: true,
          comments: false,
          dom: {
            lowerCaseAttributeNames: false,
          }
        },
      }
    }),
    new ExtractTextPlugin('bundle.[name].css'),
    // new Webpack.ProvidePlugin({
    //   moment: 'moment',
    //   $: 'jquery',
    //   jQuery: 'jquery',
    //   ZeroClipboard: 'zeroclipboard'
    // }),
    // new HtmlWebpackPlugin({
    //   template: './index.ejs',
    //   filename: IS_BUILD ? '../index.html' : 'index.html',
    //   IS_BUILD: IS_BUILD,
    //   E2E_TEST: false
    // })
  ],
  module: {
    rules: [{
        test: /\.ts$/,
        exclude: /(node_modules|vendor|\*.spec.js)/,
        loaders: ['ts-loader'],
      }, {
        test: /\.html$/,
        loader: 'raw-loader!html-minify-loader'
      }, {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!postcss-loader!less-loader' })
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
      }, {
        test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|jpe?g|png|gif|ico)$/,
        loader: 'url',
        exclude: /(img)/,
      }, {
        test: /\.((ttf|otf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|otf|eot)$/,
        loader: 'file'
      }
    ]
  },
  // postcss() {
  //   return [
  //     autoprefixer
  //   ];
  // }
  devServer: {
    port: 8080,
    host: 'localhost',
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};

// switch (IS_BUILD) {

//   case true:

//     CONFIG.plugins.push(

//       new Webpack.optimize.UglifyJsPlugin({
//         minimize: true,
//         compress: true,
//         comments: false
//       })
//     );
//     break;

//   case false:

//     if (!IS_TEST) {

//       var dashboard = new Dashboard();
//       CONFIG.plugins.push(new DashboardPlugin(dashboard.setData));
//       CONFIG.plugins.push(new LiveReloadPlugin());
//     }
//     break;
// }

module.exports = CONFIG;