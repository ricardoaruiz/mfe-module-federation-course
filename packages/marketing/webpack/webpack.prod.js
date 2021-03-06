const path = require('path')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common')

module.exports = () => {
  const prodConfig = {
    mode: 'production',
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, '..', 'dist'),
      publicPath: '/marketing/latest/',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '..', 'public/index.html'),
        filename: 'index.html',
        title: 'MF Marketing',
        inject: 'body',
      }),
    ],
  }

  return merge(prodConfig, commonConfig)
}
