var gulp = require('gulp'),
  minifycss = require('gulp-clean-css'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  clean = require('gulp-clean'),
  concat = require('gulp-concat'),
  htmlreplace = require('gulp-html-replace');

// HTML
gulp.task('html', function() {
  return gulp.src('index.html')
    .pipe(htmlreplace({
      'vendorstyles': 'css/vendor.min.css',
      'appstyles': 'css/app.min.css',
      'vendorscripts': 'js/vendor.min.js',
      'appscripts': 'js/app.min.js'
    }))
    .pipe(gulp.dest('dist'));
});

// PHP
gulp.task('php', function() {
  return gulp.src('*.php')
    .pipe(gulp.dest('dist'));
});

// FONTS
gulp.task('fonts', function() {
  return gulp.src('node_modules/materialize-css/dist/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
});


// Vendor Styles
gulp.task('vendorstyles', function() {
  return gulp.src(['node_modules/materialize-css/dist/css/materialize.min.css'])
    .pipe(minifycss())
    .pipe(concat('vendor.min.css'))
    .pipe(gulp.dest('dist/css'));
});

// App Styles
gulp.task('appstyles', function() {
  return gulp.src('css/style.css')
    .pipe(minifycss())
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest('dist/css'));
});

// Vendor Scripts
gulp.task('vendorscripts', function() {

  return gulp.src([
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/materialize-css/dist/js/materialize.min.js'])
    .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest('dist/js'));

});

// App Scripts
gulp.task('appscripts', function() {
  return gulp.src('js/script.js')
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('dist/js'));
});

// Images
gulp.task('images', function() {
  return gulp.src('images/**/*')
    .pipe(gulp.dest('dist/images'));
});

// Clean
gulp.task('clean', function() {
  return gulp.src(['dist/css', 'dist/js', 'dist/images', 'dist/fonts', 'dist/*.html'], {read: false})
    .pipe(clean());
});

// Default task
gulp.task('default', ['clean'], function() {
  gulp.run('vendorstyles', 'appstyles', 'vendorscripts', 'appscripts', 'images', 'html', 'fonts', 'php');
});