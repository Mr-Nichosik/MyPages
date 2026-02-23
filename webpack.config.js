
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
                "./src/css/index.css"
            ],

        "RestaurantLanding-Index":
            [
                "./src/projects/RestaurantLanding/css/main.css",
                "./src/projects/RestaurantLanding/css/index.css",
                "./src/projects/RestaurantLanding/css/responsive/responsive-main.css",
                "./src/projects/RestaurantLanding/css/responsive/responsive-index.css",
                "./src/projects/RestaurantLanding/js/index.ts",
            ],
        "RestaurantLanding-Menu":
            [
                "./src/projects/RestaurantLanding/css/main.css",
                "./src/projects/RestaurantLanding/css/menu.css",
                "./src/projects/RestaurantLanding/css/responsive/responsive-main.css",
                "./src/projects/RestaurantLanding/css/responsive/responsive-menu.css",
                "./src/projects/RestaurantLanding/js/menu.ts",
            ],

        "SoftwareLanding-Index":
            [
                "./src/projects/SoftwareLanding/css/main.css",
                "./src/projects/SoftwareLanding/css/index.css",
                "./src/projects/SoftwareLanding/css/responsive/responsive-main.css",
                "./src/projects/SoftwareLanding/css/responsive/responsive-index.css",
                "./src/projects/SoftwareLanding/js/index.js"
            ],
        "SoftwareLanding-Downloads":
            [
                "./src/projects/SoftwareLanding/css/main.css",
                "./src/projects/SoftwareLanding/css/downloads.css",
                "./src/projects/SoftwareLanding/css/responsive/responsive-main.css",
                "./src/projects/SoftwareLanding/css/responsive/responsive-downloads.css",
                "./src/projects/SoftwareLanding/js/downloads.js"
            ],

        "EniseiGardens-Index":
            [
                "./src/projects/EniseiGardens/css/general.css",
                "./src/projects/EniseiGardens/css/index.css",
                "./src/projects/EniseiGardens/js/index.js"
            ],
    },

    output:
    {
        path: path.resolve(__dirname, "dist"),
        filename: ({ chunk }) =>
        {
            const [project] = chunk.name.split("-");
            if (project === "RestaurantLanding")
            {
                return `./projects/RestaurantLanding/js/[name].bundle.js`;
            }
            else if (project === "SoftwareLanding")
            {
                return `./projects/SoftwareLanding/js/[name].bundle.js`;
            }
            else if (project === "EniseiGardens")
            {
                return `./projects/EniseiGardens/js/[name].bundle.js`;
            }
            return `./js/index.bundle.js`;
        },
        clean: true,
    },

    module:
    {
        rules:
            [
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },

                {
                    test: /\.css$/,
                    use:
                        [
                            MiniCssExtractPlugin.loader,
                            {
                                loader: "css-loader",
                                options: { url: false },
                            },
                        ],
                },
            ]
    },

    resolve:
    {
        extensions: [".ts", ".js"]
    },

    plugins:
        [
            new MiniCssExtractPlugin({
                filename: ({ chunk }) =>
                {
                    const [project] = chunk.name.split("-");
                    if (project === "RestaurantLanding")
                    {
                        return `./projects/RestaurantLanding/css/[name].bundle.css`;
                    }
                    else if (project === "SoftwareLanding")
                    {
                        return `./projects/SoftwareLanding/css/[name].bundle.css`;
                    }
                    else if (project === "EniseiGardens")
                    {
                        return `./projects/EniseiGardens/css/[name].bundle.css`;
                    }
                    return `./css/index.css`;
                },
            }),

            new HtmlWebpackPlugin({
                template: "./src/index.html",
                filename: "index.html",
                chunks: [".-Index"],
            }),

            new HtmlWebpackPlugin({
                template: "./src/projects/RestaurantLanding/index.html",
                filename: "projects/RestaurantLanding/index.html",
                chunks: ["RestaurantLanding-Index"],
            }),

            new HtmlWebpackPlugin({
                template: "./src/projects/RestaurantLanding/menu.html",
                filename: "projects/RestaurantLanding/menu.html",
                chunks: ["RestaurantLanding-Menu"],
            }),

            new HtmlWebpackPlugin({
                template: "./src/projects/SoftwareLanding/index.html",
                filename: "projects/SoftwareLanding/index.html",
                chunks: ["SoftwareLanding-Index"],
            }),

            new HtmlWebpackPlugin({
                template: "./src/projects/SoftwareLanding/downloads.html",
                filename: "projects/SoftwareLanding/downloads.html",
                chunks: ["SoftwareLanding-Downloads"],
            }),

            new HtmlWebpackPlugin({
                template: "./src/projects/EniseiGardens/index.html",
                filename: "projects/EniseiGardens/index.html",
                chunks: ["EniseiGardens-Index"],
            }),

            new CopyPlugin({
                patterns: [
                    { from: "./src/assets/", to: "./assets/" },
                    { from: "./src/projects/RestaurantLanding/assets/", to: "./projects/RestaurantLanding/assets/" },
                    { from: "./src/projects/SoftwareLanding/assets/", to: "./projects/SoftwareLanding/assets/" },
                    { from: "./src/projects/EniseiGardens/assets/", to: "./projects/EniseiGardens/assets/" }
                ],
            }),
        ],

    devServer:
    {
        hot: true,
        open: true,
        port: 3000,
    },
};