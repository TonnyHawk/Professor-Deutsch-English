const path = require('path');

module.exports = {
   mode: "development",
   entry: './src/js/main.js',
   output: {
      // options related to how webpack emits results
      path: path.resolve(__dirname, "src/js/"), // string (default)
      // the target directory for all output files
      // must be an absolute path (use the Node.js path module)
      filename: "bundle.js", // string (default)
      // the filename template for entry chunks
      library: "home"
   },
   watch: true
}