
export class BurgerMenu
{
    BurgerButton;
    Menu;
    Overlay;
    RightSideBar;
    Main;

    constructor()
    {
        this.BurgerButton = document.getElementById("burger-menu-button");
        this.Menu = document.getElementById("burger-menu-block");

        this.DisplayOverlay = document.getElementById("display-overlay");
        this.RightSideBar = document.getElementById("burger-menu-right-sidebar")
        this.Main = document.querySelector("main");
    }

    HandleOpening()
    {
        this.BurgerButton.addEventListener("click", () => this.Open());
    }

    HandleClosing()
    {
        this.RightSideBar.addEventListener("click", () => this.Close());
    }

    Open()
    {
        this.Menu.classList.add("active");
        this.Overlay.classList.add("active");

        this.Main.classList.add("inactive");
        document.documentElement.classList.add("fixed");
    }

    Close()
    {
        this.Menu.classList.remove("active");
        this.Overlay.classList.remove("active");

        this.Main.classList.remove("inactive");
        document.documentElement.classList.remove("fixed");
    }
}