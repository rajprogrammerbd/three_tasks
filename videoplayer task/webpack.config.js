const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "[name].[contentHash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: "html-loader"
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[hash].[ext]",
                    outputPath: "assets/images/"
                }
            },
            {
                test: /\.mp4$/,
                loader: "file-loader",
                options: {
                    name: "[name].[hash].[ext]",
                    outputPath: "assets/videos/"
                }
            }
        ]
    }
};