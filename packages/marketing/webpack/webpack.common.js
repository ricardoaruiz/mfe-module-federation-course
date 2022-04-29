const path = require('path')
const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')

module.exports = {
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
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'MFMarketing',
      filename: 'remoteEntry.js',
      exposes: {
        './MarketingApp': './src/bootstrap.tsx',
      },
      shared: {
        ...packageJson.dependencies,
      },
    }),
  ],
}
