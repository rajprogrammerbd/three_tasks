const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "[name].[contentHash].js",
        path: path.resolve(__dirname, "public")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        "plugins": ["@babel/plugin-proposal-class-properties"]
                    }
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })]
}