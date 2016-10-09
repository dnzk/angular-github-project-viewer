var bourbon = require('node-bourbon').includePaths;

module.exports = {
  devtool: 'sourcemap',
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    inline: true,
    contentBase: `${__dirname}/dist`,
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['ng-annotate', 'babel-loader?presets[]=es2015']
      },
      {
        test: /\.html$/,
        loader: 'raw'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass?includePaths[]=' + bourbon
      }
    ]
  }
};