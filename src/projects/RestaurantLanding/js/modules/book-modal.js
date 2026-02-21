
export class BookModal
{
    Overlay;
    BookButtons;
    Modal;
    ModalSection;
    CloseButton;
    FoodCardModal;

    constructor()
    {
        this.Overlay = document.getElementById("overlay");
        this.BookButtons = document.getElementsByClassName("book-button");
        this.Modal = document.getElementById("book-modal");
        this.ModalSection = document.getElementById("book-modal-section")
        this.CloseButton = document.getElementById("book-modal-close-button");
        this.FoodCardModal = document.getElementById("food-modal");

        this.HandleOpening();
        this.HandleClosing();
    }

    HandleOpening()
    {
        for (let item of this.BookButtons)
        {
            item.addEventListener("click", () => this.Open());
        }
    }

    HandleClosing()
    {
        this.Modal.addEventListener("click", () => this.Close());
        this.ModalSection.addEventListener("click", function (e) { e.stopPropagation() });
        this.CloseButton.addEventListener("click", () => this.Close());
    }

    Open()
    {
        this.Modal.classList.add("active");
        this.Overlay.classList.add("active");
        document.documentElement.classList.add("fixed");

        if (this.FoodCardModal != null) this.FoodCardModal.classList.remove("active");
    }

    Close()
    {
        this.Modal.classList.remove("active");
        this.Overlay.classList.remove("active");
        document.documentElement.classList.remove("fixed");
    }
}