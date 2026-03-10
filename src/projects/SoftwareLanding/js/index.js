
import { BurgerMenu } from "./modules/burger-menu";

class IndexPage
{
    constructor()
    {
        document.documentElement.classList.add("js-enabled");
        new BurgerMenu();
    }
}

function main()
{ 
    const App = new IndexPage(); 
}

main()