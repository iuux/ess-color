var gulp = require('gulp');

gulp.task('assets', function() {
  return gulp.src('./bower_components/bootstrap/img/*')
    .pipe(gulp.dest('./build/assets'));
});
