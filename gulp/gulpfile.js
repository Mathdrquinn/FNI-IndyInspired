var gulp = require('gulp');
	sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename');

gulp.task('express', function() {
    var express = require('express');
  var app = express();
  app.use(require('connect-livereload')({port: 4002}));
  app.use(express.static(__dirname));
  app.listen(4000);
}); 

var tinylr;
gulp.task('livereload', function() {
  tinylr = require('tiny-lr')();
  tinylr.listen(4002);
});

function notifyLiveReload(event) {
  var fileName = require('path').relative(__dirname, event.path);

  tinylr.changed({
    body: {
      files: [fileName]
    }
  });
}

gulp.task('sass', function() {
    return sass('sass', { style: 'expanded' })
        .pipe(gulp.dest('css'))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
	    .pipe(gulp.dest('css'))
	    .pipe(rename({suffix: '.min'}))
	    .pipe(minifycss())
	    .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  gulp.watch('sass/*.scss', ['sass']);
  gulp.watch('*.html', notifyLiveReload);
  gulp.watch('css/*.css', notifyLiveReload);
  gulp.watch('js/*.js', notifyLiveReload);
});


gulp.task('default', ['sass', 'express', 'livereload', 'watch'], function() {

});