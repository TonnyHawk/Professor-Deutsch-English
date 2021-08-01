let {src, dest, watch, series, parallel} = require('gulp'),
   scss = require('gulp-sass'),
   gmq = require('gulp-group-css-media-queries'),
   sourcemaps = require('gulp-sourcemaps'),
   cleanCSS = require('gulp-clean-css'),
   rename = require('gulp-rename'),
   browserSync = require('browser-sync').create(),
   autoprefixer = require('gulp-autoprefixer');

let path = {
   projFold: './src',
   distFold: './dist',
   styles: '/styles',
   css: '/css',
   scssEntry: '/main.scss'
}


function server(){
   browserSync.init({
      server: "./src"
  });

  watch(path.projFold + path.styles + "/**/*.scss", css);
  watch(path.projFold + "/index.html").on('change', browserSync.reload);
}

function css(){
   return src(path.projFold + path.styles + path.scssEntry)
         .pipe(sourcemaps.init())
         .pipe(scss({outputStyle: 'expanded'}))
         .pipe(gmq())
         .pipe(cleanCSS())
         .pipe(autoprefixer())
         .pipe(sourcemaps.write())
         .pipe(dest('./src/css/'))
         .pipe(browserSync.stream());
}

let go = series(css, server)

exports.default = go;



