"use strict";

var gulp        = require("gulp"),
    sass        = require('gulp-dart-sass'),
    browserSync = require("browser-sync"),
    del         = require('del'),
    imagemin    = require('gulp-imagemin'),
    uglify      = require('gulp-uglify'),
    usemin      = require('gulp-usemin'),
    rev         = require('gulp-rev'),
    cleanCss    = require('gulp-clean-css'),
    flatmap     = require('gulp-flatmap'),
    htmlmin     = require('gulp-htmlmin');

 // sass Task
gulp.task("sass", function () {
  return gulp
    .src("./css/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest('./css'));
});

// Watch Task
gulp.task("sass:watch", function () {
  gulp.watch("./css/*.scss", ["sass"]);
});

// Browser-sync files
gulp.task("browser-sync", function () {
  var files = [
    "./*.html",
    "./css/*.css",
    "./js/*.js",
    "./img/*.{jpg, jpeg, gif}",
  ];
  browserSync.init(files, {
    server: {
      baseDir: "./",
    },
  });
});
// clean Task
gulp.task('clean', function(){
  return del(['dist'])
})

// Copyfiles
gulp.task('copyfiles', function(){
  return gulp.src('./node_modules/font-awesome/fonts/**/*.{eot,svg,ttf,woff,woff2}*')
         .pipe(gulp.dest('./dist/fonts'));
})
//imagemin Task

gulp.task('imagemin', function(){
  return gulp.src('./img/*.{png,jpg,gif}')
          .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 75, progressive: true}),
            imagemin.optipng({optimizationLevel: 5})
        ]))
          .pipe(gulp.dest('./dist/img'))
})

//usemin Task
gulp.task('usemin', function() {
  return gulp.src('./*.html')
  .pipe(flatmap(function(stream, file){
      return stream
        .pipe(usemin({
            css: [ rev() ],
            html: [ function() { return htmlmin({ collapseWhitespace: true })} ],
            js: [ uglify(), rev() ],
            inlinejs: [ uglify() ],
            inlinecss: [ cleanCss(), 'concat' ]
        }))
    }))
    .pipe(gulp.dest('dist/'));
});
// Build Task
gulp.task('build', gulp.series('clean','copyfiles', 'imagemin', 'usemin'))
//Default Task
gulp.task('default', gulp.series('browser-sync', 'sass:watch'))

