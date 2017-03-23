var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map', // output errors relative to original files (not bundle.js)
  entry: [
    'webpack-hot-middleware/client',
    './client/client.js'
    ],
  output: {
    path: require("path").resolve("./dist"),  // using 'path' to give an absolute path (fix crash)
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(), // optimizes
    new webpack.HotModuleReplacementPlugin(),     // hot module reloading
    new webpack.NoErrorsPlugin()                  // stop build if errors
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: { // same thing as setting up a babelrc file
          presets: ['react', 'es2015', 'react-hmre'] // hot module reloading
        }
      }
    ]
  }
}
