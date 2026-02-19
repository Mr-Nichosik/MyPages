
import { Validator } from "./components/validator";
import { BurgerMenu } from "./components/burger-menu";
import { BookModal } from "./components/book-modal";
import { FoodCard } from "./components/food-card";

class App
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

new App();