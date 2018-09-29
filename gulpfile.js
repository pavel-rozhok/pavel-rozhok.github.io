// Plugins
const gulp = require('gulp');
const del = require('del');
const notify = require('gulp-notify');

// CSS
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-minify-css');
const sass = require('gulp-sass');
const rename = require('gulp-rename');

// JS
const minifyJS = require('gulp-minify');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

const paths = {
  dist: 'assets',
  src: {
    images: 'src/**/*.+(png|jpg|jpeg|svg)',
    sass: 'src/**/*.scss',
    js: 'src/**/*.js',
    fonts: 'src/**/*.+(eot|ttf|woff|woff2)',
  },
};

const browsers = [
  'ie >= 10',
  'Firefox >= 11',
  'Chrome >= 18',
  'Safari >= 6',
  'Opera >= 12.1',
];

gulp.task('css', () => {
  gulp.src(paths.src.sass)
    .pipe(autoprefixer({
      browsers,
      cascade: false,
    }))
    .pipe(
      sass()
        .on('error', notify.onError({
          message: '<%= error.message %>',
          title: 'Sass Error!',
        }))
    )
    .pipe(rename({ suffix: '.min' }))
    .pipe(minify())
    .pipe(gulp.dest(paths.dist));
});

gulp.task('images', () => {
  gulp.src(paths.src.images)
    .pipe(gulp.dest(paths.dist));
});

gulp.task('fonts', () => {
  gulp.src(paths.src.fonts)
    .pipe(gulp.dest(paths.dist));
});

gulp.task('js', () => {
  gulp.src(paths.src.js)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(
      babel()
        .on('error', notify.onError({
          message: '<%= error.message %>',
          title: 'Babel Error!',
        }))
    )
    .pipe(minifyJS({
      ext: {
        min: '.min.js',
      },
      noSource: true,
      preserveComments: 'some',
    }))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('del', () => {
  del.sync('assets');
});

gulp.task('default', ['css', 'fonts', 'images', 'js'], () => {
  gulp.watch(paths.src.sass, ['css']);
  gulp.watch(paths.src.images, ['images']);
  gulp.watch(paths.src.fonts, ['fonts']);
  gulp.watch(paths.src.js, ['js']);
});
