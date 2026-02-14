
function FoodCard()
{
    const FoodCards = document.querySelectorAll(".food-card");

    const FoodCardModal = document.getElementById("food-modal");
    const FoodModalSection = document.getElementById("food-modal-section");
    const FoodModalTitle = document.getElementById("food-modal-title");
    const FoodModalDescription = document.getElementById("food-modal-description");
    const FoodModalPrice = document.getElementById("food-modal-price");
    const CloseButton = document.getElementById("food-modal-close-button");

    const Overlay = document.getElementById("overlay")

    FoodModalSection.addEventListener("click", function (e) { e.stopPropagation() });
    FoodCardModal.addEventListener("click", close);

    FoodCards.forEach(card =>
    {
        card.addEventListener("click", () =>
        {
            FoodCardModal.classList.add("active");
            Overlay.classList.add("active");
            document.documentElement.classList.add("fixed");

            FoodModalTitle.textContent = card.querySelector("figcaption").textContent;
            FoodModalDescription.textContent = card.getAttribute("data-description");
            FoodModalPrice.textContent = card.querySelector(".food-price").textContent;
        });
    });

    CloseButton.addEventListener("click", close);

    function close()
    {
        FoodCardModal.classList.remove("active");
        Overlay.classList.remove("active");
        document.documentElement.classList.remove("fixed");
    }
}

FoodCard();