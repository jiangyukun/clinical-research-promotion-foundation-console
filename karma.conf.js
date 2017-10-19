/**
 * Created by jiangyukun on 2017/6/26.
 */
const webpackConfig = require('./webpack.test')

module.exports = function (config) {
  return config.set({
    basePath: '',
    frameworks: [
      'jasmine'
    ],
    files: [
      'test/**/*.test.js'
    ],
    preprocessors: {
      'test/**/*.js': [
        'webpack', 'sourcemap'
      ],
      'test/**/spec.js': [
        'webpack'
      ]
    },
    webpack: webpackConfig
  })
}
