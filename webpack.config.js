const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
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
        ]
    },
    devServer: {
        historyApiFallback: true,
        open: false,
        hot: true,
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