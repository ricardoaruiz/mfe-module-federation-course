const path = require('path')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common')

module.exports = (env) => {
  if (!env.DEV_SERVER_PORT) {
    console.log(
      `The DEV_SERVER_PORT was not provided. The used port will be defined by Webpack`
    )
  }

  const devConfig = {
    mode: 'development',
    entry: './src/index.tsx',
    devServer: {
      port: env.DEV_SERVER_PORT,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '..', 'public/index.html'),
        filename: 'index.html',
        title: 'Mfes Container',
        inject: 'body',
      }),
    ],
  }

  return merge(devConfig, commonConfig)
}
