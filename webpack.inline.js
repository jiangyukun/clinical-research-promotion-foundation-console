const path = require('path')
const webpack = require('webpack')
const handleModulePath = require('./tools/handleModulePath')

const ipAddress = 'localhost'
const port = 3021

module.exports = {
  entry: [
    './src/index.tsx'
  ],
  devServer: {
    hot: true,
    inline: true,
    host: ipAddress,
    port: port,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://' + ipAddress + ':' + port + '/static/',
    chunkFilename: '[name].chunk.js'
  },
  resolve: {
    extensions: ['.js', 'jsx', '.ts', '.tsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"inline"'
    }),
    new webpack.NamedModulesPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/, loaders: ['babel-loader?cacheDirectory'],
        exclude: handleModulePath.exclude,
        include: handleModulePath.include
      },
      {
        test: /\.(ts|tsx)$/,
        loader: ['babel-loader?cacheDirectory', 'awesome-typescript-loader?useCache']
      },
      {test: /\.less$/, loaders: ['style-loader', 'css-loader?sourceMap', 'postcss-loader', 'less-loader']},
      {test: /\.scss$/, loaders: ['style-loader', 'css-loader?sourceMap', 'postcss-loader', 'sass-loader']},
      {test: /\.(jpg|png|svg)$/, loader: 'url-loader?limit=8192'},
      {test: /\.(eot|woff|woff2|ttf)([?]?.*)$/, loader: 'file-loader'}
    ]
  }
}
