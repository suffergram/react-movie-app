const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
    console.log(env, argv);
    const isProduction = argv.mode === 'production';
    return {
        entry: "./src/index.js",
        output: {
            filename: "main.js",
            path: path.resolve(__dirname, "build"),
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(__dirname, "public", "index.html"),
            }),
            ...(isProduction ? [new MiniCssExtractPlugin()] : [])
        ],
        devServer: {
            static: {
                directory: path.join(__dirname, "build"),
            },
            port: 3000,
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"],
                },
                {
                    test: /\.css$/,
                    use: [isProduction ? MiniCssExtractPlugin.loader : "style-loader", "css-loader"],
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                },
            ],
        },
        resolve: {
            extensions: ["*", ".js", ".jsx", ".css"],
        }
    };
}