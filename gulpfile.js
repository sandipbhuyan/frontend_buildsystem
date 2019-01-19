var gulp = require('gulp');
var sass = require('gulp-sass'); // Gulp scss
var browserSync = require('browser-sync').create();

// Scss operation

gulp.task('sass', function(){
  return gulp.src('app/scss/index.scss') // Get all the files endging with .scss
        .pipe(sass()) // Convert Sass to CSS with gulp-sass
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
          stream: true
        }))
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

// Watching more than one processes
gulp.task('watch', gulp.series('sass', 'browserSync'), function(){
  gulp.watch('app/scss/**/*.scss',gulp.series('sass'))

  // Reloads the browser whenever HTML or JS files change
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
})
