//These are the node modules I call for using the package
const gulp = require('gulp');
const validator = require('gulp-html');
const eslint = require('gulp-eslint');
const babel = require('gulp-babel');
//This is the html task
let html = () => {
  return gulp.src('html/index.html')
    .pipe(validator())
    .pipe(gulp.dest('dist/'));
};
//This is the css task
let css = () => {
  const gulpStylelint = require('gulp-stylelint');
  return gulp
    .src('css/style.css')
    .pipe(gulpStylelint({
      reporters: [
        {formatter: 'string', console: true}
      ]
    }));
};
//This is the javascript task
let js = () => {
  return gulp
        .src(['js/app.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
};
//This is the babel task
let babelCode = () => {
  return gulp
      .src('js/app.js')
      .pipe(babel({
          presets: ['@babel/env']
      }))
      .pipe(gulp.dest('dist'))
}
//These exports allow the gulp task to be run in the command line
exports.html = html;
exports.stylelint = css;
exports.eslint= js;
exports.babel = babelCode;
