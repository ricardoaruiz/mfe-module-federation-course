const path = require('path')
const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

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
}
