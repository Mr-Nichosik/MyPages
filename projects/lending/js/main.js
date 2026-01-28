
function main()
{
    document.documentElement.classList.add("js-enabled");

    BurgerLogic();
}

function BurgerLogic()
{
    const BurgerMenuBlock = document.getElementById("burger-menu-block");
    const DisplayOverlay = document.getElementById("display-overlay");
    const RightSideBar = document.getElementById("burger-menu-right-sidebar")
    const Main = document.getElementById("main");

    RightSideBar.addEventListener("click", CloseMenu);

    const BurgerButton = document.getElementById("burger-menu-button");
    BurgerButton.addEventListener("click", ShowMenu);

    function ShowMenu() 
    {
        Main.classList.add("inactive");
        BurgerMenuBlock.classList.add("active");
        DisplayOverlay.classList.add("active");
    }

    function CloseMenu()
    {
        Main.classList.remove("inactive");
        BurgerMenuBlock.classList.remove("active");
        DisplayOverlay.classList.remove("active");
    }
}

main();