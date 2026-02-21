
export class FoodCard
{
    FoodCards;

    FoodCardModal;
    FoodModalSection;
    FoodModalTitle;
    FoodModalDescription;
    FoodModalPrice;
    CloseButton;

    Overlay;

    constructor()
    {
        this.FoodCards = document.querySelectorAll(".food-card");

        this.FoodCardModal = document.getElementById("food-modal");
        this.FoodModalSection = document.getElementById("food-modal-section");
        this.FoodModalTitle = document.getElementById("food-modal-title");
        this.FoodModalDescription = document.getElementById("food-modal-description");
        this.FoodModalPrice = document.getElementById("food-modal-price");
        this.FoodModalCloseButton = document.getElementById("food-modal-close-button");

        this.Overlay = document.getElementById("overlay")

        this.HandleOpening();
        this.HandleClosing();
    }

    HandleOpening()
    {
        this.FoodCards.forEach(card =>
        {
            card.addEventListener("click", () => this.Open(card));
        });
    }

    HandleClosing()
    {
        this.FoodModalSection.addEventListener("click", (e) => e.stopPropagation());
        this.FoodCardModal.addEventListener("click", () => this.Close());
        this.FoodModalCloseButton.addEventListener("click", () => Close());
    }

    Open(card)
    {
        this.FoodCardModal.classList.add("active");
        this.Overlay.classList.add("active");
        document.documentElement.classList.add("fixed");

        this.FoodModalTitle.textContent = card.querySelector("figcaption").textContent;
        this.FoodModalDescription.textContent = card.getAttribute("data-description");
        this.FoodModalPrice.textContent = card.querySelector(".food-price").textContent;
    }

    Close()
    {
        this.FoodCardModal.classList.remove("active");
        this.Overlay.classList.remove("active");
        document.documentElement.classList.remove("fixed");
    }
}