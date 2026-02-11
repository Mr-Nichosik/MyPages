
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
        document.documentElement.classList.add("fixed");
    });

    const BurgerLinks = document.getElementsByClassName("burger-link");
    for (item of BurgerLinks)
    {
        item.addEventListener("click", () =>
        {
            Menu.classList.remove("active")
            document.documentElement.classList.remove("fixed");
        });
    }
}

function BookModal()
{
    const BookButtons = document.getElementsByClassName("book-button");
    const Modal = document.getElementById("book-modal");
    const Section = document.getElementById("book-modal-section")
    const Overlay = document.getElementById("overlay");
    const CloseButton = document.getElementById("book-modal-close-button");
    const FoodCardModal = document.getElementById("food-modal");

    for (item of BookButtons)
    {
        item.addEventListener("click", () =>
        {
            Modal.classList.add("active");
            Overlay.classList.add("active");
            document.documentElement.classList.add("fixed");

            FoodCardModal.classList.remove("active");
        });
    }

    Modal.addEventListener("click", Close);
    Section.addEventListener("click", function (e) { e.stopPropagation() });

    CloseButton.addEventListener("click", Close);
    function Close()
    {
        Modal.classList.remove("active");
        Overlay.classList.remove("active");
        document.documentElement.classList.remove("fixed");
    }
}

main();