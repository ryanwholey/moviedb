var path = require('path');

var gulp = require('gulp');
var webpackStream = require('webpack-stream');
var jasmineBrowser = require('gulp-jasmine-browser');
var phantom = require('gulp-jasmine-phantom');
var webpack = require('webpack');

var testFiles = ['src/**/*[sS]pec.js'];
var config = require('./webpack.config.js')['test'];

gulp.task('test', function() {
    config.watch = true;

    return gulp.src(testFiles)
        .pipe(webpackStream(config))
        .pipe(jasmineBrowser.specRunner())
        .pipe(jasmineBrowser.server({port: 8888}));
});

gulp.task('webpack', function() {
    return gulp.src(testFiles)
        .pipe(webpackStream(config))
        .pipe(gulp.dest('./.test'))
});

gulp.task('phantom', ['webpack'], function () {
    return gulp.src('./.test/spec.js')
        .pipe(phantom({integration: true}))
});



