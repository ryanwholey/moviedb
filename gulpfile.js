var gulp = require('gulp');
var webpack = require('webpack-stream');
var jasmineBrowser = require('gulp-jasmine-browser');
var phantom = require('gulp-jasmine-phantom');

var testFiles = ['src/**/*.js', 'src/**/*[sS]pec.js'];

var webpackConfig = {
    output: {filename: 'spec.js'},
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader:'babel',
                exclude:/node_modules/,
                query: {presets: ['es2015', 'stage-0']}
            }
        ]
    }
};

gulp.task('test', function() {
    webpackConfig.watch = true;
    return gulp.src(testFiles)
        .pipe(webpack(webpackConfig))
        .pipe(jasmineBrowser.specRunner())
        .pipe(jasmineBrowser.server({port: 8888}));
});

gulp.task('webpack', function() {
    return gulp.src(testFiles)
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./.test'))
});

gulp.task('phantom', ['webpack'], function () {
    return gulp.src('./.test/spec.js')
        .pipe(phantom({integration: true}))
});


