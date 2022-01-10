const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

let projFold = '.'
let distFold = '../../dist'

module.exports = {
  //  mode: 'development',
    mode: 'production',
   entry: projFold+'/js/index.js',
   output: {
      path: path.resolve(__dirname, distFold+"/gall"),
      filename: 'js/bundle.js',
   },
   externals: {
      jquery: 'jQuery',
      $: 'JQuery',
   },
   module: {
      rules: [
        {
          test: /\.?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
               presets: ['@babel/preset-env', '@babel/preset-react'],
               plugins: [
                    ["@babel/transform-runtime"]
                ]
             }
          }
        },
        {
         test: /\.css$/i,
         use: ["style-loader", "css-loader"],
       },
      ]
    },
    experiments: {
      topLevelAwait: true,
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist/gall'),
      },
      compress: true,
    },
   //  plugins: [new HtmlWebpackPlugin({
   //     template: 'html/index.html'
   //  })],
   
}