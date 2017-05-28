'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const WebpackDevServer = require('webpack-dev-server');

gulp.task('webpack-dev-server', function(callback) {
  let compiler = webpack(webpackConfig);

  new WebpackDevServer(compiler, {
    hot: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }).listen(4001, '0.0.0.0', function(err) {
    if (err) throw new gutil.PluginError('webpack-dev-server', err);
  });
});

gulp.task('watch', function() {
  return $.nodemon({
    script: `${__dirname}/app/server/main.js`,
    ext: 'js',
    exec: 'babel-node --plugins system-import-transformer',
    legacyWatch: true
  });
});


gulp.task('default', ['webpack-dev-server', 'watch']);