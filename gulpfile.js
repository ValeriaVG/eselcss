'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var compass = require('gulp-compass');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');


var Server = require('karma').Server;



gulp.task('compass', function() {
  return gulp.src('./sass/**/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: 'css',
      sass: 'sass'
    }))
    .on('error', gutil.log)
    .pipe(gulp.dest('./css'));
});



gulp.task('coffee', function() {
  return gulp.src('./src/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./js/components/'))
    .pipe(concat('esel.js'))
    .pipe(gulp.dest('./js/'));
});



gulp.task('minify-js',['coffee'],function(){
  gulp.src(['./js/esel.js'])
    .pipe(concat('esel.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js/'))
});

gulp.task('minify-css',['compass'],function () {
    gulp.src('./css/esel.css')
        .pipe(minify({keepBreaks: false}))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./css/'))
    ;
});



gulp.task('test',['coffee'], function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('default', ['coffee','minify-js','compass','minify-css']);
