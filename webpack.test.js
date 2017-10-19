const path = require('path')
const webpack = require('webpack')
const moment = require('moment')
const handleModulePath = require('./tools/handleModulePath')

module.exports = {
  devtool: 'inline-source-map',
  externals: {
    cheerio: 'window',
    'react/addons': 'react',
    'react/lib/ExecutionEnvironment': 'react',
    'react/lib/ReactContext': 'react'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ],
  resolve: {
    extensions: ['.js', 'jsx', '.ts', '.tsx']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader?cacheDirectory'],
        exclude: handleModulePath.exclude,
        include: handleModulePath.include
      },
      {test: /\.(ts|tsx)$/, loaders: ['react-hot-loader', 'babel-loader?cacheDirectory', 'awesome-typescript-loader?useCache']},
      {test: /\.less$/, loaders: ['style-loader', 'css-loader', 'less-loader']},
      {test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader']},
      {test: /\.(jpg|png|svg)$/, loader: 'url-loader?limit=8192'},
      {test: /\.(eot|woff|woff2|ttf)([\?]?.*)$/, loader: 'file-loader'}
    ]
  }
}
