
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports =
{
    entry:
    {
        ".-Index":
            [
                "./src/css/main.css"
            ],

        "projects/RestaurantLanding-Index":
            [
                "./src/projects/RestaurantLanding/css/main.css",
                "./src/projects/RestaurantLanding/css/specific/index.css",
                "./src/projects/RestaurantLanding/css/responsive/responsive-main.css",
                "./src/projects/RestaurantLanding/css/responsive/responsive-index.css",
                "./src/projects/RestaurantLanding/js/main.js",
                "./src/projects/RestaurantLanding/js/validation.js",
            ],
        "projects/RestaurantLanding-Menu":
            [
                "./src/projects/RestaurantLanding/css/main.css",
                "./src/projects/RestaurantLanding/css/specific/menu.css",
                "./src/projects/RestaurantLanding/css/responsive/responsive-main.css",
                "./src/projects/RestaurantLanding/css/responsive/responsive-menu.css",
                "./src/projects/RestaurantLanding/js/main.js",
                "./src/projects/RestaurantLanding/js/validation.js",
                "./src/projects/RestaurantLanding/js/food-card.js",
            ],

        "projects/SoftwareLanding-Index":
            [
                "./src/projects/SoftwareLanding/css/main.css",
                "./src/projects/SoftwareLanding/css/specific/index.css",
                "./src/projects/SoftwareLanding/css/responsive/responsive-main.css",
                "./src/projects/SoftwareLanding/css/responsive/responsive-index.css",
                "./src/projects/SoftwareLanding/js/main.js"
            ],
        "projects/SoftwareLanding-Downloads":
            [
                "./src/projects/SoftwareLanding/css/main.css",
                "./src/projects/SoftwareLanding/css/specific/downloads.css",
                "./src/projects/SoftwareLanding/css/responsive/responsive-main.css",
                "./src/projects/SoftwareLanding/css/responsive/responsive-downloads.css",
                "./src/projects/SoftwareLanding/js/main.js"
            ],
    },

    output:
    {
        path: path.resolve(__dirname, "dist"),
        // filename: ((pathData) => `${pathData.chunk.name.split("-")[0]}/js/[name].bundle.js`),
        filename: ((pathData) => `${pathData.chunk.name.split("-")[0]}/js/${pathData.chunk.name.split("-")[1]}.bundle.js`),
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
                template: "./src/index.html",
                filename: "index.html",
                chunks: [".-Index"],
            }),

            new HtmlWebpackPlugin({
                template: "./src/projects/RestaurantLanding/index.html",
                filename: "projects/RestaurantLanding/index.html",
                chunks: ["projects/RestaurantLanding-Index"],
            }),

            new HtmlWebpackPlugin({
                template: "./src/projects/RestaurantLanding/menu.html",
                filename: "projects/RestaurantLanding/menu.html",
                chunks: ["projects/RestaurantLanding-Menu"],
            }),

            new HtmlWebpackPlugin({
                template: "./src/projects/SoftwareLanding/index.html",
                filename: "projects/SoftwareLanding/index.html",
                chunks: ["projects/SoftwareLanding-Index"],
            }),

            new HtmlWebpackPlugin({
                template: "./src/projects/SoftwareLanding/downloads.html",
                filename: "projects/SoftwareLanding/downloads.html",
                chunks: ["projects/SoftwareLanding-Downloads"],
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
                    { from: "./src/assets/", to: "./assets/" },
                    { from: "./src/projects/RestaurantLanding/assets/", to: "./projects/RestaurantLanding/assets/" },
                    { from: "./src/projects/SoftwareLanding/assets/", to: "./projects/SoftwareLanding/assets/" },
                ]
            }),
        ],
};