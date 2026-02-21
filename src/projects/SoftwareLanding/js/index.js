
import { BurgerMenu } from "./modules/burger-menu";

class IndexPage
{
    constructor()
    {
        document.documentElement.classList.add("js-enabled");
        new BurgerMenu();
    }
}

const App = new IndexPage();