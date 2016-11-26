var gulp = require('gulp');
var postcss = require('gulp-postcss');
var rename = require('gulp-rename');


// Media Query Breakpoints
const breakpoints = [
  { prefix: 'xs-', mediaQuery: '(max-width: 480px)' },
  { prefix: 'sm-', mediaQuery: '(min-width: 480px)' },
  { prefix: 'md-', mediaQuery: '(min-width: 630px)' },
  { prefix: 'nrw-', mediaQuery: '(min-width: 720px)' },
  { prefix: 'lg-', mediaQuery: '(min-width: 800px)' },
  { prefix: 'mn-', mediaQuery: '(min-width: 960px)' },
  { prefix: 'xl-', mediaQuery: '(min-width: 1200px)' },
  { prefix: 'hdr-', mediaQuery: '(min-width: 1440px)' },
];

// Postcss Plugins
const processors = [
  require('postcss-import'),
  require('postcss-custom-properties'),
  require('postcss-custom-media'),
  require('postcss-nested'),
  require('autoprefixer')({browsers: ['last 1 version']}),
  require('postcss-responsify')({breakpoints}),
  require('cssnano'),
];

gulp.task('css', function() {
  return gulp.src('./app/styles/main.pcss')
      .pipe(postcss(processors))
      .pipe(rename('main.min.css'))
      .pipe(gulp.dest('./app/dist'));
});

gulp.task('default', ['css'], function() {
  gulp.watch('./app/styles/*.pcss', ['css']);
})
