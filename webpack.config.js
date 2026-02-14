
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports =
{
    mode: "development",

    entry:
    {
        "MyPages-Index": ["./src/MyPages/index.js"],

        "RestaurantLanding-Index": ["./src/RestaurantLanding/index.js"],
        "RestaurantLanding-Menu": ["./src/RestaurantLanding/menu.js"],

        "SoftwareLanding-Index": ["./src/SoftwareLanding/index.js"],
        "SoftwareLanding-Downloads": ["./src/SoftwareLanding/downloads.js",],
    },

    output:
    {
        path: path.resolve(__dirname, "dist"),
        filename: (pathData) => `${pathData.chunk.name.split('-')[0]}/[name].bundle.js`,
        clean: true,
    },

    module:
    {
        rules:
            [
                {
                    test: /\.css$/,
                    use: [
                        "style-loader",
                        {
                            loader: "css-loader",
                            options: { url: false },
                        },
                    ],
                },
            ]
    },

    plugins:
        [
            new HtmlWebpackPlugin({
                template: "./src/MyPages/index.html",
                filename: "MyPages/index.html",
                chunks: ["MyPages-Index"],
            }),

            new HtmlWebpackPlugin({
                template: "./src/RestaurantLanding/index.html",
                filename: "RestaurantLanding/index.html",
                chunks: ["RestaurantLanding-Index"],
            }),

            new HtmlWebpackPlugin({
                template: "./src/RestaurantLanding/menu.html",
                filename: "RestaurantLanding/menu.html",
                chunks: ["RestaurantLanding-Menu"],
            }),

            new HtmlWebpackPlugin({
                template: "./src/SoftwareLanding/index.html",
                filename: "SoftwareLanding/index.html",
                chunks: ["SoftwareLanding-Index"],
            }),

            new HtmlWebpackPlugin({
                template: "./src/SoftwareLanding/downloads.html",
                filename: "SoftwareLanding/downloads.html",
                chunks: ["SoftwareLanding-Downloads"],
            }),

            new CopyPlugin({
                patterns: [{ from: "./src/MyPages/assets/", to: "./MyPages/assets/" }],
            }),

            new CopyPlugin({
                patterns: [{ from: "./src/RestaurantLanding/assets/", to: "./RestaurantLanding/assets/" }],
            }),

            new CopyPlugin({
                patterns: [{ from: "./src/SoftwareLanding/assets/", to: "./SoftwareLanding/assets/" }],
            }),
        ],
};