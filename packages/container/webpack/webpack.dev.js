const path = require('path')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const { dependencies } = require('../package.json')

module.exports = (env) => {
  if (!env.DEV_SERVER_PORT) {
    console.info(
      'The DEV_SERVER_PORT was not provided. The used port will be defined by Webpack'
    )
  }

  const mfsHost = env.MFS_HOST || 'http://localhost'
  if (!env.MFS_HOST) {
    console.info(
      'The MFS_HOST was not provided. The used MFS_HOST will be "http://localhost"'
    )
  }

  const devConfig = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
      publicPath: `http://localhost:${env.DEV_SERVER_PORT}/`,
    },
    devServer: {
      port: env.DEV_SERVER_PORT,
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '..', 'public/index.html'),
        filename: 'index.html',
        title: 'Mfes Container',
        inject: 'body',
      }),
      new ModuleFederationPlugin({
        name: 'MFContainer',
        remotes: {
          auth: `MFAuth@${mfsHost}:9003/remoteEntry.js`,
          marketing: `MFMarketing@${mfsHost}:9001/remoteEntry.js`,
        },
        shared: {
          ...dependencies,
          react: {
            singleton: true,
            requiredVersion: dependencies.react,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: dependencies['react-dom'],
          },
          'react-router-dom': {
            singleton: true,
            requiredVersion: dependencies['react-router-dom'],
          },
        },
      }),
    ],
  }

  return merge(devConfig, commonConfig)
}
