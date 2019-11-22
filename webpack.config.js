const path = require('path');
const webpack = require('webpack')


module.exportss = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'boundle.js',
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {test:/\.txt$/,use: 'raw-loader'},
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {test:/\.css$/,use: ['style-loader', 'css-loader']},
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js','.css','vue'],
    alias: {
      'vue$' : 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.BannerPlugin('最终版权归coderwhy所用')
  ]
}