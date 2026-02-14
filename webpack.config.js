
module.exports =
{
    mode: "development",

    entry:
    {
        MyPages: ["./src/MyPages/css/main.css"],

        RestaurantLandingIndex:
            [
                "./src/projects/RestaurantLanding/css/main.css",
                "./src/projects/RestaurantLanding/css/specific/index.css",
                "./src/projects/RestaurantLanding/css/responsive/responsive-main.css",
                "./src/projects/RestaurantLanding/css/responsive/responsive-index.css",
                "./src/projects/RestaurantLanding/js/main.js",
                "./src/projects/RestaurantLanding/js/validation.js",
            ],
        RestaurantLandingMenu:
            [
                "./src/projects/RestaurantLanding/css/main.css",
                "./src/projects/RestaurantLanding/css/specific/menu.css",
                "./src/projects/RestaurantLanding/css/responsive/responsive-main.css",
                "./src/projects/RestaurantLanding/css/responsive/responsive-menu.css",
                "./src/projects/RestaurantLanding/js/main.js",
                "./src/projects/RestaurantLanding/js/validation.js",
                "./src/projects/RestaurantLanding/js/food-card.js",
            ],

        SoftwareLandingIndex:
            [
                "./src/projects/SoftwareLanding/css/main.css",
                "./src/projects/SoftwareLanding/css/specific/index.css",
                "./src/projects/SoftwareLanding/css/responsive/responsive-main.css",
                "./src/projects/SoftwareLanding/css/responsive/responsive-index.css",
                "./src/projects/SoftwareLanding/js/main.js"
            ],
        SoftwareLandingDownloads:
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

    },

    module:
    {

    },

    plugins: 
    [

    ],
};