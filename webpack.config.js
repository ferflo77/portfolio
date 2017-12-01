module.exports = {
  entry: [
    './index.jsx'
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]      
      },
      {
        test: /\.(gif|png|jpe?g)$/,
        use: [
         'file-loader',
          {
            loader: 'image-webpack-loader',
              options: {
                bypassOnDebug: true,
              },
          },
        ]
      },
      {
        test: /\.css$/,
        use: [
              'style-loader',
              {
                loader: 'css-loader', 
                options: {modules: true}
              }
            ]
      }
    ]
  },
  output: {
    filename: 'bundle.js' 
  },
  devServer: {
  	historyApiFallback: true,
    overlay: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}