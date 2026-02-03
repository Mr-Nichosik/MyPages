
function main()
{
    document.documentElement.classList.add("js-enabled");
    BurgerMenu();
    BookModal();
}

function BurgerMenu()
{
    const Menu = document.getElementById("burger-menu");

    const BurgerButton = document.getElementById("burger-button");
    BurgerButton.addEventListener("click", () =>
    {
        Menu.classList.add("active")
        document.body.classList.add("fixed");
    });

    const BurgerLinks = document.getElementsByClassName("burger-link");
    for (item of BurgerLinks)
    {
        item.addEventListener("click", () =>
        {
            Menu.classList.remove("active")
            document.body.classList.remove("fixed");
        });
    }
}

function BookModal()
{
    const Modal = document.getElementById("book-modal");
    const Overlay = document.getElementById("overlay");

    const BookButtons = document.getElementsByClassName("book-button");
    for (item of BookButtons)
    {
        item.addEventListener("click", () =>
        {
            Modal.classList.add("active");
            Overlay.classList.add("active");
            document.body.classList.add("fixed");
        });
    }

    const CloseButton = document.getElementById("book-modal-close-button");
    CloseButton.addEventListener("click", () =>
    {
        Modal.classList.remove("active");
        Overlay.classList.remove("active");
        document.body.classList.remove("fixed");
    });
}

main();