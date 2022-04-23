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
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript"
            ],
            plugins: [
              "@babel/plugin-proposal-class-properties",
              "@babel/plugin-transform-runtime"
            ]
          }
        }
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