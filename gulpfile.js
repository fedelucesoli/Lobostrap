var gulp = require('gulp'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload');

gulp.task('less', function() {
  gulp.src('less/*.less')
    .pipe(less())
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});

gulp.task('css', function() {
  gulp.src('assets/css/*.css')
    // .pipe(less())
    // .pipe(gulp.dest('css'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  // gulp.watch('less/*.less', ['less']);
  gulp.watch('assets/css/*.css', ['css']);
});