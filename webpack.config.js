const HtmlWebPackPlugin = require("html-webpack-plugin");
const CircularDependencyPlugin = require("circular-dependency-plugin");
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        publicPath: /*process.env.development ? '/' : */'/',
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
        // new WebpackPwaManifest({
        //     name: 'Recipes',
        //     short_name: 'Rc',
        //     description: 'My React recipes project!',
        //     background_color: '#fafafa',
        //     theme_color: '#EE4C7C',
        //     inject: true,
        //     ios: true,
        //     icons: [
        //         {
        //             src: path.resolve('./src/images/android-chrome-512x512.png'),
        //             sizes: [512],
        //         },
        //         // {
        //         //     src: path.resolve('app/images/icon-512x512.png'),
        //         //     sizes: [120, 152, 167, 180],
        //         //     ios: true,
        //         // },
        //     ],
        // }),
    ]
};