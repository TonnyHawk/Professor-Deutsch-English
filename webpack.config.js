const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = (env) => {
   console.log('mode: ', env.production == true ? 'production' : 'development'); // true
   return {
      mode: env.production == true ? 'production' : 'development',
      entry: {
         index: './src/js/main.js'
      },
      output: {
         // options related to how webpack emits results
         path: path.resolve(__dirname, "dist"), // string (default)
         // the target directory for all output files
         // must be an absolute path (use the Node.js path module)
         // the filename template for entry chunks
         filename: 'js/bundle.js',
      },
      // watch: env.production != true,
      externals: {
         jquery: 'jQuery',
      },
      watch: env.production == true ? false : true,
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
            directory: path.join(__dirname, 'dist'),
          },
       },
       experiments: {
         topLevelAwait: true,
       },
   }
}