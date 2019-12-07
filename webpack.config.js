const pkg = require('./package.json');
const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const production = process.env.NODE_ENV === 'production' || false;

const banner = '';

module.exports = {
  entry: './src/jsBridge.js',
  mode: 'production',
  output: {
    filename: production ? 'jsBridge.min.js' : 'jsBridge.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'JSBridge',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  optimization: {
    minimize: production,
    minimizer: [
      new UglifyJSPlugin({
        parallel: require('os').cpus().length,
        uglifyOptions: {
          ie8: false,
          keep_fnames: false,
          output: {
            beautify: false,
            comments: (node, { value, type }) => type == 'comment2' && value.startsWith('!')
          }
        }
      })
    ]
  },
  plugins: [new webpack.BannerPlugin({ banner })]
};
