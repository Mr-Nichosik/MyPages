
import { BurgerMenu } from "./modules/burger-menu";

class DownloadsPage
{
    constructor()
    {
        document.documentElement.classList.add("js-enabled");
        new BurgerMenu();
    }
}

function main()
{
    const App = new DownloadsPage();
}

main()