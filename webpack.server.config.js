const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const serverConfig = {
  mode: "development",
  entry: './server/index.ts',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: "tsconfig.server.json"
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", '.js', '.jsx']
  }
};

module.exports = serverConfig;