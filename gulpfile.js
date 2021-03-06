const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


function style(){
    return gulp.src("./sass/**/*.scss")
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dest/css'))
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir:'./'
        }
    });
    gulp.watch('./sass/**/*.scss', style);
    gulp.watch('./dest/*.html').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;