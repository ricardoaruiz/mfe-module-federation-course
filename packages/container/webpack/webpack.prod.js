const path = require('path')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

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
          auth: `MFAuth@${env.MFS_HOST}/auth/latest/remoteEntry.js`,
          marketing: `MFMarketing@${env.MFS_HOST}/marketing/latest/remoteEntry.js`,
        },
        shared: {
          ...packageJson.dependencies,
        },
      }),
    ],
  }

  return merge(prodConfig, commonConfig)
}
