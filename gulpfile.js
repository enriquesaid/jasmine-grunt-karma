var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('reload', function () {
  connect.reload()
});

gulp.task('watch', function () {
  gulp.watch(['./app/**/*.html'], ['reload']);
  gulp.watch(['./app/**/*.js'], ['reload']);
});

gulp.task('default', ['connect', 'watch']);
