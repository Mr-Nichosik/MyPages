
import { Validator } from "./modules/validator";
import { BurgerMenu } from "./modules/burger-menu";
import { BookModal } from "./modules/book-modal";

class IndexPage
{
    constructor()
    {
        document.documentElement.classList.add("js-enabled");

        new Validator();
        new BurgerMenu();
        new BookModal();
    }
}

const App = new IndexPage();