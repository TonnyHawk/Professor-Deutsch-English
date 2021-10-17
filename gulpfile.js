let {
   src,
   dest,
   watch,
   series,
   parallel
} = require('gulp'),
   scss = require('gulp-sass')(require('sass')),
   gmq = require('gulp-group-css-media-queries'),
   sourcemaps = require('gulp-sourcemaps'),
   cleanCSS = require('gulp-clean-css'),
   rename = require('gulp-rename'),
   browserSync = require('browser-sync').create(),
   autoprefixer = require('gulp-autoprefixer'),
   fileInclude = require('gulp-file-include');

   let mode = !process.env.NODE_ENV ? 'build' : process.env.NODE_ENV;
   console.log(mode)

const merge = require('merge-stream');

const configs = [
   require('./gulp.config'),
   require('./gulp.config.firstCss')
];

let path = {
   projFold: './src',
   distFold: './dist',
   styles: '/styles',
   css: '/css',
   scssEntry: '/main.scss',
   html: '/html'
}

function server() {
   let server = mode === 'dev' ? "./src" : "./dist";
   browserSync.init({
      server: './dist'
   });

   watch(path.projFold + path.styles + "/**/*.scss", css);
   watch(path.projFold + path.html + "/*.html").on('change', series(html, browserSync.reload));
}

function watchCss(){
   watch(path.projFold + path.styles + "/**/*.scss", css);
}

function css() {
   let tasks = configs.map(config=>{
      let pipeline = src(config.css.sourcePaths)

      if(mode !== 'build'){
         pipeline = pipeline.pipe(sourcemaps.init())
      }

      pipeline.pipe(scss(config.thirdParty.sassOptions))
      .pipe(gmq())
      .pipe(cleanCSS())
      .pipe(autoprefixer())

      if(mode !== 'build'){
         pipeline = pipeline.pipe(sourcemaps.write())
      }

      pipeline.pipe(dest('./dist/css/'))

      pipeline = pipeline.pipe(browserSync.stream())

      return pipeline;
   })

   return merge(tasks);
}

function html() {
   let pipeline = src(path.projFold + path.html + '/index.html')
      .pipe(fileInclude())
      // .pipe(dest(mode === 'dev' ? './src/' : './dist/'))
      .pipe(dest('./dist/'))

      if(mode == 'dev'){
         pipeline = pipeline.pipe(browserSync.reload())
      }

      return pipeline;
         

}

function watchAll(){
   // parallel(watch(path.projFold + path.styles + "/**/*.scss", css),
   // watch(path.projFold + path.html + "/*.html").on('change', html));
   watch(path.projFold + path.styles + "/**/*.scss", css);
   watch(path.projFold + path.html + "/*.html").on('change', html);
}

exports.default = series(html, css, watchAll);
exports.dev = series(css, html, server);
exports.css = series(css, html, watchCss);
exports.buildCss = series(css);
exports.react = series(css, html, watchAll)