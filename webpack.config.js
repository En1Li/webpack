const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  plugins:[
    new HtmlWebpackPlugin({
        template:'./public/index.html',
        filename: 'index.html',
    }),
    new CleanWebpackPlugin()
  ]
};