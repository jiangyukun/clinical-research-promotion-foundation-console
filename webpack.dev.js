const path = require('path')
const webpack = require('webpack')
const handleModulePath = require('./tools/handleModulePath')

const port = 3071

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './src/index.tsx'
  ],
  devServer: {
    hot: true,
    inline: true,
    port: port
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:' + port + '/static/',
    chunkFilename: '[name].chunk.js'
  },
  resolve: {
    extensions: ['.js', 'jsx', '.ts', '.tsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"dev"'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/, loaders: ['react-hot-loader', 'babel-loader?cacheDirectory'],
        exclude: handleModulePath.exclude,
        include: handleModulePath.include
      },
      {test: /\.(ts|tsx)$/, loader: 'awesome-typescript-loader?useCache '},
      {test: /\.less$/, loaders: ['style-loader', 'css-loader?sourceMap', 'postcss-loader', 'less-loader']},
      {test: /\.scss$/, loaders: ['style-loader', 'css-loader?sourceMap', 'postcss-loader', 'sass-loader']},
      {test: /\.(jpg|png|svg)$/, loader: 'url-loader?limit=8192'},
      {test: /\.(eot|woff|woff2|ttf)([\?]?.*)$/, loader: 'file-loader'}
    ]
  }
}
