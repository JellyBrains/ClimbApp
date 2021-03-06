const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, './dist');
const APP_DIR = path.resolve(__dirname, './app');


const config = {
  entry: `${APP_DIR}/index.jsx`,
  output: {
    path: BUILD_DIR,
    filename: 'main.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Starter JodieHag',
      template: 'app/index.html',
      hash: true
    }),
    new CopyWebpackPlugin([
      {
        from: `${APP_DIR}/static/img`,
        to: `${BUILD_DIR}/img`
      }, {
        from: `${APP_DIR}/static/scss/utils/fonts`,
        to: `${BUILD_DIR}/fonts`
      },
      {
        from: `${APP_DIR}/static/favicon`,
        to: `${BUILD_DIR}/favicon`
      }
    ])
  ],
  module: {
    loaders: [
      {
        test: /\.(jsx)$/,
        include: APP_DIR,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }, {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
              removeComments: true
            }
          }
        ]
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.sass/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
      }, {
        test: /\.scss/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
      }, {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
      }, {
        test: /\.(mp4|ogg|svg)$/,
        loader: 'file-loader'
      }, {
        test: /\.json$/,
        include: /node_modules/,
        loader: 'json-loader'
      }, {
        test: /\.md/,
        loader: 'markdown-it-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

module.exports = config;
