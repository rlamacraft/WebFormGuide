var gulp = require('gulp'),
     pug = require('gulp-pug'),
    sass = require('gulp-sass');

gulp.task('html', function() {
  return gulp.src('pages/*.pug')
             .pipe(pug()) // pipe to pug plugin
             .pipe(gulp.dest('.')); //tell gulp our output folder
});

gulp.task('css', function(){
  return gulp.src('styles/sass/styles.sass')
    .pipe(sass())
    .pipe(gulp.dest('styles/css'))
});

gulp.task('default', [ 'html', 'css' ]);
