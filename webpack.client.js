const path = require('path')
const merge =require('webpack-merge');
const baseConfig = require('./webpack.base.js')
const reactLoadable = require('react-loadable/webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var webpack = require('webpack');

const config = {
 //path.resolve(__dirname, 'src/cmo/client/client.js'),
  //Tell webpack the root file of our server application
  entry: './src/cmo/client/client.js',
  //where to put output files that is generated
  output: {
   
    path: path.resolve(__dirname, 'public/cmo'),
    filename: '[name].js',
    publicPath:'/cmo/'

  },
  module: {
    rules: [
     
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        exclude: /node_modules/,
        loader:'file-loader',
        options: {
          publicPath: '/cmo/',
         
         }
       // options: {
         // publicPath: 'cmo/',
          //useRelativePath:true
       // }
     },
    ]
  },
  
  plugins: [
    new reactLoadable.ReactLoadablePlugin({
      filename: 'public/cmo/react-loadable.json',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'bundle',
      minChunks: Infinity
    }),
   // new UglifyJsPlugin()
  ]
  
};
module.exports = merge(baseConfig,config)