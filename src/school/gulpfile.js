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

   let path = {
      projFold: '.',
      distFold: '../../dist/school',
      styles: '/styles',
      css: '/css',
      scssEntry: '/main.scss',
      html: '/html',
      globals: '../'
   }

   function server() {
      browserSync.init({
         server: path.distFold
      });
   
      watch(path.globals + path.styles + "/**/*.scss", { ignoreInitial: false }, css);
      watch(path.projFold + path.html + "/*.html").on('change', series(html, browserSync.reload));
   }

   function css() {
      // return src(path.projFold + path.styles + "/school.scss")
      return src("../styles/school.scss")
      .pipe(scss())
      .pipe(gmq())
      .pipe(cleanCSS())
      .pipe(autoprefixer({
         overrideBrowserslist: ['last 99 versions'],
         cascade: false
      }))
      .pipe(rename('main.css'))
      .pipe(dest(path.distFold + '/css'))
      .pipe(browserSync.stream())
   }
   
   function html() {
         return src(path.projFold + path.html + '/index.html')
         .pipe(fileInclude())
         .pipe(dest(path.distFold))
         // .pipe(browserSync.reload())
   }

exports.default = series(css, html)
exports.css = css
exports.html = html
exports.serve = server