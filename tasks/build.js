var gulp = require('gulp');
//var rename = require('gulp-rename');

gulp.task('build', ['clean', 'styles'], function() {
  return gulp.src('./src/**/*.html')
    //.pipe(rename('index'))
    .pipe(gulp.dest('./build/'));
});
