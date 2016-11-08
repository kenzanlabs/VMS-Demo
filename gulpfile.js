var gulp = require('gulp');
var mocha = require('gulp-mocha');
var notifierReporter = require('mocha-notifier-reporter');

gulp.task('test', function() {
  gulp.src(['src/**/*.spec.js'])
    .pipe(mocha({
      options: 'tdd',
      reporter: notifierReporter.decorate('spec')
    }));
});

gulp.task('build', ['test'], function () {
  // Compile as-needed
  // Move files
});

// Transpile?

gulp.task('server', function() {

});

gulp.task('dev', ['build', 'serve'], function() {
  return gulp.watch(['src/**/*.js'], ['test']);
});

gulp.task('default', 'build');