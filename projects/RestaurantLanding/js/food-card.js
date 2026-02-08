
function main()
{
    const FoodCards = document.getElementsByClassName("food-card");

    for (element of FoodCards)
    {
        element.addEventListener("click", () => console.log(1));
    }
}

main();