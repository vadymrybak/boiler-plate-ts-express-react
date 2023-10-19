const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const clientConfig = {
    watch: true,
    entry: './client/index.tsx',
    mode: "development",
    output: {
        filename: 'client.js',
        path: __dirname + '/build'
    },
    devServer: {
        client: {
            overlay: false
        },
        hot: true,
        compress: true,
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        configFile: "tsconfig.client.json"
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'isomorphic-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    },

    resolve: {
        extensions: ['.tsx', '.js', '.jsx']
    },

    plugins: [
        // new HtmlWebpackPlugin({
        //     templateContent: `
        //         <html>
        //             <head>
        //                 <meta charset="utf-8" />
        //                 <title>Demo</title>
        //             </head>
        //             <body>
        //                 <div id="app"></div>
        //                 <script src="/bundle.js"></script>
        //             </body>
        //         </html>
        //     `
        // })
    ]

};

module.exports = clientConfig;