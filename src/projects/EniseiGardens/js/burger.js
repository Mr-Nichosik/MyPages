
export class Burger
{
    BurgerButton;
    BurgerMenu;
    IsOpen;

    constructor()
    {
        this.BurgerButton = document.getElementById("burger-button");
        this.BurgerMenu = document.getElementById("burger-menu");
        this.IsOpen = false;

        this.HandleClick();
    }

    HandleClick()
    {
        this.BurgerButton.addEventListener("click", () => this.Click());
    }

    Click()
    {
        if (this.IsOpen == false)
        {
            this.BurgerMenu.classList.add("active");
            this.BurgerButton.classList.add("active")
            this.IsOpen = true;
        }
        else
        {
            this.BurgerMenu.classList.remove("active");
            this.BurgerButton.classList.remove("active")
            this.IsOpen = false;
        }
    }
}