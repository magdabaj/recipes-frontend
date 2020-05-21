const HtmlWebPackPlugin = require("html-webpack-plugin");
const CircularDependencyPlugin = require("circular-dependency-plugin");
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        publicPath: '/',
        filename: 'static/bundle.[hash].js',
        chunkFilename: 'static/chunk.[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader',
                // options: {
                //     name: '[name].[ext]',
                //     useRelativePath: true,
                //     outputPath: './src/images',
                // },
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        open: false,
        hot: true,
        contentBase: [
            path.join(__dirname, 'public'),
            path.join(__dirname, 'dist'),
        ],
        port: 5000
    },
    plugins: [
        new HtmlWebPackPlugin({
            inject: true,
            template: "./src/index.html",
            filename: "./index.html",
            favicon: "./src/images/favicon.ico"
        }),
        new CircularDependencyPlugin({
            exclude: /a\.js|node_modules/, // exclude node_modules
            failOnError: false, // show a warning when there is a circular dependency
        }),
    ]
};