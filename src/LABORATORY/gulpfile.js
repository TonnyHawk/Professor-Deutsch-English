let {
   src,
   dest,
   watch,
   series,
   parallel
} = require('gulp'),
   scss = require('gulp-sass')(require('sass')),
   sourcemaps = require('gulp-sourcemaps'),
   cleanCSS = require('gulp-clean-css'),
   browserSync = require('browser-sync').create(),
   autoprefixer = require('gulp-autoprefixer');

function server() {
   browserSync.init({
      server: './src'
   });

   watch("./src/**/*.scss", css);
   watch("./src/**/*.html").on('change', browserSync.reload);
}


function css() {
   return src('./src/sass/main.scss')
         .pipe(sourcemaps.init())
         .pipe(scss())
         .pipe(cleanCSS())
         .pipe(autoprefixer())
         .pipe(sourcemaps.write())
         .pipe(dest('./src/css/'))
         .pipe(browserSync.stream())
}


exports.default = series(css, server);