const path = require('path');
const webpack = require('webpack')

const NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = (env) => {
   console.log('mode: ', env.production == true ? 'production' : 'development'); // true
   return {
      mode: env.production == true ? 'production' : 'development',
      entry: './src/js/main.js',
      output: {
         // options related to how webpack emits results
         path: path.resolve(__dirname, "src/js/"), // string (default)
         // the target directory for all output files
         // must be an absolute path (use the Node.js path module)
         filename: "bundle.js", // string (default)
         // the filename template for entry chunks
      },
      watch: env.production != true,
      externals: {
         jquery: 'jQuery',
      }
   }
}