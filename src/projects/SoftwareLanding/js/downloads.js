
import { BurgerMenu } from "./modules/burger-menu";

class DownloadsPage
{
    constructor()
    {
        document.documentElement.classList.add("js-enabled");
        BurgerMenu();
    }
}

new DownloadsPage();