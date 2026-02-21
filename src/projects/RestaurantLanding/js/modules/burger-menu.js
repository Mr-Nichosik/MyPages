
export class BurgerMenu
{
    Menu;
    BurgerButton;
    BurgerLinks;

    constructor()
    {
        this.Menu = document.getElementById("burger-menu");
        this.BurgerButton = document.getElementById("burger-button");
        this.BurgerLinks = document.getElementsByClassName("burger-link");

        this.HandleOpening();
        this.HandleClosing();
    }

    HandleOpening()
    {
        this.BurgerButton.addEventListener("click", () => this.Open());
    }

    HandleClosing()
    {
        for (let item of this.BurgerLinks)
        {
            item.addEventListener("click", () => this.Close());
        }
    }

    Open()
    {
        this.Menu.classList.add("active")
        document.documentElement.classList.add("fixed");
    }

    Close()
    {
        this.Menu.classList.remove("active")
        document.documentElement.classList.remove("fixed");
    }
}