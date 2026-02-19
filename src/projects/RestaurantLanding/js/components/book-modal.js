
export function BookModal()
{
    const BookButtons = document.getElementsByClassName("book-button");
    const Modal = document.getElementById("book-modal");
    const Section = document.getElementById("book-modal-section")
    const Overlay = document.getElementById("overlay");
    const CloseButton = document.getElementById("book-modal-close-button");
    const FoodCardModal = document.getElementById("food-modal");

    for (let item of BookButtons)
    {
        item.addEventListener("click", () =>
        {
            Modal.classList.add("active");
            Overlay.classList.add("active");
            document.documentElement.classList.add("fixed");

            if (FoodCardModal != null) FoodCardModal.classList.remove("active");
        });
    }

    Modal.addEventListener("click", Close);
    Section.addEventListener("click", function (e) { e.stopPropagation() });

    CloseButton.addEventListener("click", () => { Close() });
    function Close()
    {
        Modal.classList.remove("active");
        Overlay.classList.remove("active");
        document.documentElement.classList.remove("fixed");
    }
}