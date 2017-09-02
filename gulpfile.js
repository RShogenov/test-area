var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("css/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("js/*.js").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("css/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("css/"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);