const config = require("./webpack.config");
const { merge } = require("webpack-merge");

module.exports = merge(config, {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.s[c|a]ss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
});