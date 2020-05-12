const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    // output: {
    //     path: path.resolve(__dirname, 'dist'),
    //     publicPath: "dist"
    // },
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
        ]
    },
    devServer: {
        historyApiFallback: true,
        // open: true,
        contentBase: path.join(__dirname, 'dist'),
        port: 5000
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
};