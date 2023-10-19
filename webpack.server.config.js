const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const path = require("path");
const isDevelopment = true;

const serverConfig = {
  mode: "development",
  entry: "./server/index.ts",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            configFile: "tsconfig.server.json",
            transpileOnly: false
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'isomorphic-style-loader',
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              esModule: false,
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".js", ".jsx"]
  }
};

module.exports = serverConfig;