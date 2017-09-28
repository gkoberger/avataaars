// webpack.config.js
const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: path.join(__dirname, "public/javascripts", "app-client.js"),
    output: {
        path: path.join(__dirname, "public", "dist"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, "public/javascripts"),
                loader: ["babel-loader"]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
        })
    ]
};
