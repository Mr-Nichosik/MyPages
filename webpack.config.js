
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports =
{
    entry:
    {
        "MyPages-Index":
            [
                "./src/MyPages/css/main.css"
            ],

        "RestaurantLanding-Index":
            [
                "./src/RestaurantLanding/css/main.css",
                "./src/RestaurantLanding/css/index.css",
                "./src/RestaurantLanding/css/responsive/responsive-main.css",
                "./src/RestaurantLanding/css/responsive/responsive-index.css",
                "./src/RestaurantLanding/js/main.js",
                "./src/RestaurantLanding/js/validation.js",
            ],
        "RestaurantLanding-Menu":
            [
                "./src/RestaurantLanding/css/main.css",
                "./src/RestaurantLanding/css/menu.css",
                "./src/RestaurantLanding/css/responsive/responsive-main.css",
                "./src/RestaurantLanding/css/responsive/responsive-menu.css",
                "./src/RestaurantLanding/js/main.js",
                "./src/RestaurantLanding/js/validation.js",
                "./src/RestaurantLanding/js/food-card.js",
            ],

        "SoftwareLanding-Index":
            [
                "./src/SoftwareLanding/css/main.css",
                "./src/SoftwareLanding/css/specific/index.css",
                "./src/SoftwareLanding/css/responsive/responsive-main.css",
                "./src/SoftwareLanding/css/responsive/responsive-index.css",
                "./src/SoftwareLanding/js/main.js"
            ],
        "SoftwareLanding-Downloads":
            [
                "./src/SoftwareLanding/css/main.css",
                "./src/SoftwareLanding/css/specific/downloads.css",
                "./src/SoftwareLanding/css/responsive/responsive-main.css",
                "./src/SoftwareLanding/css/responsive/responsive-downloads.css",
                "./src/SoftwareLanding/js/main.js"
            ],
    },

    output:
    {
        path: path.resolve(__dirname, "dist"),
        filename: ((pathData) => `${pathData.chunk.name.split("-")[0]}/js/[name].bundle.js`),
        clean: true,
    },

    module:
    {
        rules:
            [
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
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
            new MiniCssExtractPlugin({
                filename: ((pathData) => `${pathData.chunk.name.split("-")[0]}/css/[name].css`),
            }),

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

            // new HtmlWebpackPlugin({
            //     filename: "index.html",
            //     templateContent: `
            //         <!DOCTYPE html>
            //         <html>
            //             <head>
            //                 <meta http-equiv="refresh" content="0; URL='./MyPages/index.html'" />
            //             </head>
            //             <body>
            //                 <p>Перенаправляем на по ссылке -> </p><a href="MyPages/index.html">MyPages</a><p>...</p>
            //             </body>
            //        </html>
            //     `,
            //     inject: false,
            // }),

            new CopyPlugin({
                patterns: [
                    { from: "./src/MyPages/assets/", to: "./MyPages/assets/" },
                    { from: "./src/RestaurantLanding/assets/", to: "./RestaurantLanding/assets/" },
                    { from: "./src/SoftwareLanding/assets/", to: "./SoftwareLanding/assets/" },
                ]
            }),
        ],
};