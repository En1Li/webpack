const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode:'development',
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
  ],
  devServer:{
    open : true , 
    port:3000
  },
  module:{
    rules:[
        {
            test: /\.css$/,
            use: [ "style-loader", "css-loader"]
        },
        {
            test: /\.less$/,
            use: [ "style-loader", "css-loader" , "less-loader"]
        },
        {
            test: /\.(png|jpg|gif|jpeg)$/,
        //    use: ['url-loader']
            type:'asset'
        },
        {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            type: 'asset/resource',
            generator: {
    	    filename: 'font-[name].[hash:6][ext]'
            }
        },
        {
            test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
              loader: 'babel-loader',
              options: {
                  presets: ['@babel/preset-env'] // 预设:转码规则(用bable开发环境本来预设的)
              }
          }
        }
    ]
  }
};