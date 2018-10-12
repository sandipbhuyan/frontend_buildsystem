var gulp = require('gulp');
var sass = require('gulp-sass'); // Gulp scss

// Scss operation

gulp.task('sass', function(){
  return gulp.src('app/scss/index.scss')
        .pipe(sass()) // Convert Sass to CSS with gulp-sass
        .pipe(gulp.dest('app/css'))
})

// Watching more than one processes
gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['sass']);
})
