let path  = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   mode: 'development',
   entry: {
      index: './src/index.js'
   },
   output: {
      // options related to how webpack emits results
      path: path.resolve(__dirname), // string (default)
      // the target directory for all output files
      // must be an absolute path (use the Node.js path module)
      // the filename template for entry chunks
      filename: 'bundle.js',
   },
   plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "src", "index.html"),
        inject: 'body',
        scriptLoading: 'blocking'
      }),
    ],
    devServer: {
      static: {
         directory: path.join(__dirname, 'dist'),
       },
    },

}