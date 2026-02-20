
import { Validator } from "./modules/validator";
import { BurgerMenu } from "./modules/burger-menu";
import { BookModal } from "./modules/book-modal";
import { FoodCard } from "./modules/food-card";

class MenuPage
{
    constructor()
    {
        document.documentElement.classList.add("js-enabled");

        new Validator();
        BurgerMenu();
        BookModal();
        FoodCard();
    }
}

new MenuPage();