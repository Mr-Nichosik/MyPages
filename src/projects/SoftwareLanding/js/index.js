
import { BurgerMenu } from "./modules/burger-menu";

class IndexPage
{
    constructor()
    {
        document.documentElement.classList.add("js-enabled");
        BurgerMenu();
    }
}

new IndexPage();