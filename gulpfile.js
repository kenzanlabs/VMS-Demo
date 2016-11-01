var gulp = require('gulp');
var mocha = require('gulp-mocha');
var notifierReporter = require('mocha-notifier-reporter');

gulp.task('test', function() {
  gulp.src(['src/**/*.spec.img'])
    .pipe(mocha({
      options: 'tdd',
      reporter: notifierReporter.decorate('spec')
    }));
});

gulp.task('build', function () {
  // Test
  // Compile as-needed
  // Move files
});

gulp.task('serve', function () {

});

gulp.task('watch', ['test'], function() {
  return gulp.watch(['src/**/*.img'], ['test']);
});

gulp.task('default', 'build');