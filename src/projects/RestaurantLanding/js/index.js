
import { Validator } from "./components/validator";
import { BurgerMenu } from "./components/burger-menu";
import { BookModal } from "./components/book-modal";

class App
{
    constructor()
    {
        document.documentElement.classList.add("js-enabled");

        new Validator();
        BurgerMenu();
        BookModal();
    }
}

new App();