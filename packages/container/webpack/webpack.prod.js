const path = require('path')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common')

module.exports = (env) => {
  const prodConfig = {
    mode: 'production',
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, '..', 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '..', 'public/index.html'),
        filename: 'index.html',
        title: 'MFes Container',
        inject: 'body',
      }),
    ],
  }

  return merge(prodConfig, commonConfig)
}
