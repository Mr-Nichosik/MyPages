
export function BurgerMenu()
{
    const BurgerMenuBlock = document.getElementById("burger-menu-block");
    const DisplayOverlay = document.getElementById("display-overlay");
    const RightSideBar = document.getElementById("burger-menu-right-sidebar")
    const Main = document.getElementById("main");
    const Body = document.body;

    RightSideBar.addEventListener("click", CloseMenu);

    const BurgerButton = document.getElementById("burger-menu-button");
    BurgerButton.addEventListener("click", ShowMenu);

    function ShowMenu() 
    {
        Body.classList.add("fixed");
        Main.classList.add("inactive");
        BurgerMenuBlock.classList.add("active");
        DisplayOverlay.classList.add("active");
    }

    function CloseMenu()
    {
        Body.classList.remove("fixed");
        Main.classList.remove("inactive");
        BurgerMenuBlock.classList.remove("active");
        DisplayOverlay.classList.remove("active");
    }
}