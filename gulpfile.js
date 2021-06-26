const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


function style(){
    return gulp.src("./components/sass/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest('./builds/dest/css'))
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir:'./builds/dest/'
        }
    });
    gulp.watch('./components/sass/**/*.scss', style);
    gulp.watch('./builds/dest/*.html').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;