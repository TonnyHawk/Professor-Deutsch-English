const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development'

// school
let distFold = '../../dist'
let projFold = '.'
module.exports = [(env) => {
   return {
      mode: 'development',
      entry: {
         index: projFold+'/js/main.js'
      },
      output: {
         path: path.resolve(__dirname, distFold+"/school"), // string (default)
         filename: 'js/bundle.js',
      },
      externals: {
         jquery: 'jQuery',
      },
      // plugins: [
      //    new HtmlWebpackPlugin({
      //      template: path.join(__dirname, "src", "index.html"),
      //      inject: 'body',
      //      scriptLoading: 'blocking',
      //    }),
      //  ],
       module: {
         rules: [
           {
             test: /\.?js$/,
             exclude: /node_modules/,
             use: {
               loader: "babel-loader",
               options: {
                  presets: ['@babel/preset-env', '@babel/preset-react']
                }
             }
           },
           {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
         ]
       },
       devServer: {
         static: {
            directory: path.join(__dirname, distFold),
          },
       },
       experiments: {
         topLevelAwait: true,
       },
   }
},
{
  mode: 'development',
   entry: projFold+'/js/main-addons.js',
   output: {
      path: path.resolve(__dirname, distFold+"/school"),
      filename: 'js/addons.js',
   },
   externals: {
      jquery: 'jQuery',
   },
},
{
   mode: 'development',
   entry: projFold+'/js/main-react-stuff.js',
   output: {
      path: path.resolve(__dirname, distFold+"/school"),
      filename: 'js/react-stuff.js',
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
},
]


