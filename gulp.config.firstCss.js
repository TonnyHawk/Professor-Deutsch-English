let appName = 'first css';
let path = {
   projFold: './src/school',
   distFold: './dist',
   styles: '/styles',
   css: '/css',
   scssEntry: '/main.scss',
   firstCss: '/first-loaded.scss',
   html: '/html'
}

module.exports = {
   app: { name: appName },
   css: {
       sourcePaths: [
         path.projFold + path.styles + path.firstCss
       ],
       exportPath: './src/css/'
   },
   path,
   thirdParty: {
       // https://github.com/sass/node-sass#options
       sassOptions: {
           errLogToConsole: true,
           outputStyle: 'expanded'
       },
   }
};