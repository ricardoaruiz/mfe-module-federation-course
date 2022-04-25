const path = require('path')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')

module.exports = (env) => {
  if (!env.MFS_HOST) {
    console.error(
      'The MFS_HOST was not provided. The application may not work properly'
    )
  }

  const prodConfig = {
    mode: 'production',
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, '..', 'dist'),
      publicPath: '/container/latest/',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '..', 'public/index.html'),
        filename: 'index.html',
        title: 'MFes Container',
        inject: 'body',
      }),
      new ModuleFederationPlugin({
        name: 'MFContainer',
        remotes: {
          marketing: `MFMarketing@${env.MFS_HOST}/marketing/latest/remoteEntry.js`,
        },
      }),
    ],
  }

  return merge(prodConfig, commonConfig)
}
