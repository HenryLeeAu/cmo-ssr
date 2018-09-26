module.exports = {
  module:{
    rules:[
      {
        test : /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_moudles/,
        options:{
          presets:[
            'react',
            'stage-0',
            ['env',{targets:{ browsers:['last 2 versions']}}]
          ],
          plugins:['babel-plugin-styled-components','react-loadable/babel']
        }
      }
    ],
    
  }
}