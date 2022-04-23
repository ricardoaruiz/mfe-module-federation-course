const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  devServer: {
    port: 9000
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
     plugins: [
      new TSConfigPathsPlugin({
        configFile: path.resolve(__dirname, '..', './tsconfig.json'),
      }),
    ],
  },
  module: {
    rules: [
      { 
        test: /\.(ts|js)x?$/, 
        exclude: /node_modules/, 
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'public/index.html'),
      filename: 'index.html',
      title: 'Mfes Container',
      inject: 'body'
    })
  ]
}