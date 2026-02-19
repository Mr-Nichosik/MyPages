
export function BurgerMenu()
{
    const Menu = document.getElementById("burger-menu");

    const BurgerButton = document.getElementById("burger-button");
    BurgerButton.addEventListener("click", () =>
    {
        Menu.classList.add("active")
        document.documentElement.classList.add("fixed");
    });

    const BurgerLinks = document.getElementsByClassName("burger-link");
    for (let item of BurgerLinks)
    {
        item.addEventListener("click", () =>
        {
            Menu.classList.remove("active")
            document.documentElement.classList.remove("fixed");
        });
    }
}