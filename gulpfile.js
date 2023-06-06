const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function compilaSass() {
    return gulp.src('./src/styles/main.scss')
    .pipe(sass( {
        outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('./dist/styles'))
}

function comprimeImagens() {
    return gulp.src('./src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

function compilaScripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
}

exports.default = gulp.parallel(compilaSass, comprimeImagens, compilaScripts)

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', { ignoreInitial: false }, gulp.parallel(compilaSass));
    gulp.watch('./src/images/*', { ignoreInitial: false }, gulp.parallel(comprimeImagens));
    gulp.watch('./src/scripts/*.js', { ignoreInitial: false }, gulp.parallel(compilaScripts));
}
