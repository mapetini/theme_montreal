var
  gulp = require('gulp'),
  less = require('gulp-less'),
  path = require('path');

gulp.task('less', function () {
  return gulp.src('./assets/scss/main.scss')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('watch', ['less'], function() {
  gulp.watch('./assets/scss/**/*.scss', ['less']);
});