module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                modules: false,
                useBuiltIns: "entry",
            },
        ],
        '@babel/preset-react',
    ],
    plugins: [
        // probably should remove those
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-export-default-from",
        "react-hot-loader/babel",

    ],
};