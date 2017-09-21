const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: './public'
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
  },
  resolve: {
    extensions: ['.webpack.js', '.js', '.scss','.css']
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
    },
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
  ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Webpack app',
        template: './src/index.html',
    })
  ]
};