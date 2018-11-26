'use strict';

const gulp = require('gulp');
// const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const cleancss = require('gulp-clean-css');
const rename = require('gulp-rename');
// const remember = require('gulp-remember');
const autoprefixer = require('gulp-autoprefixer');
const bSync = require('browser-sync');
const imageResize = require('gulp-image-resize');
const del = require('del');
const newer = require('gulp-newer');
const debug = require('gulp-debug');

gulp.task('serve', function () {
  bSync({
    server: '_site',
    // tunnel: true,
  });
  gulp.watch('_site/**/*.*').on('change', bSync.reload);
});

gulp.task('sass', function () {
  return gulp.src('sass/main.sass')
    // .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer(['last 15 versions']))
    .pipe(cleancss())
    .pipe(rename('main.min.css'))
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest('_site/css'));
});

gulp.task('js', function () {
  return gulp.src('js/*.js')
    // .pipe(sourcemaps.init())
    .pipe(babel({ presets: ['@babel/env'] }))
    .pipe(uglify())
    .pipe(concat('script.min.js'))
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest('_site/js'));
});

gulp.task('js:libs', function () {
  return gulp.src('libs/**/*.js', { since: gulp.lastRun('js:libs') })
    .pipe(newer('_site/js/libs'))
    // .pipe(debug({ title: 'js:libs' }))
    .pipe(gulp.dest('_site/js/libs'));
});

gulp.task('img:post', function () {
  return gulp.src('_posts/**/*.jpg', { since: gulp.lastRun('img:post') })
    .pipe(rename(function (path) { path.basename = '1'; }))
    .pipe(newer('_site/images'))
    .pipe(debug({ title: 'img:post' }))
    .pipe(imageResize({ width: 1920, height: 720, crop: true }))
    .pipe(gulp.dest('_site/images'));
});

gulp.task('img:thumb', function () {
  return gulp.src('_posts/**/*.jpg', { since: gulp.lastRun('img:thumb') })
    .pipe(rename(function (path) { path.basename = '1t'; }))
    .pipe(newer('_site/images'))
    .pipe(debug({ title: 'img:thumb' }))
    .pipe(imageResize({ width: 480, height: 320, crop: true }))
    .pipe(gulp.dest('_site/images'));
});

gulp.task('img:cover', function () {
  return gulp.src('blog/**/*.jpg', { since: gulp.lastRun('img:cover') })
    .pipe(rename(function (path) { path.basename = 'cover'; }))
    .pipe(newer('_site/images'))
    .pipe(debug({ title: 'img:cover' }))
    .pipe(imageResize({ width: 1920, height: 720, crop: true }))
    .pipe(gulp.dest('_site/images'));
});

gulp.task('img:clean', function () {
  return del('_site/images');
});

gulp.task('img', gulp.parallel('img:post', 'img:thumb', 'img:cover'));

gulp.task('clean', function () {
  return del(['_site/js/*.js', '_site/css']);
});

gulp.task('watch', function () {
  gulp.watch('sass/**/*.sass', gulp.series('sass'));
  gulp.watch('js/*.js', gulp.series('js'));
  gulp.watch('libs/**/*.js', gulp.series('js:libs'));
  gulp.watch('_posts/**/*.jpg', gulp.parallel('img:post', 'img:thumb'));
  gulp.watch('blog/**/*.jpg', gulp.series('img:cover'));
});

gulp.task('build', gulp.series('clean', gulp.parallel('js', 'js:libs', 'sass')));

gulp.task('default', gulp.series('build', gulp.parallel('watch', 'serve')));
