
import { Burger } from "./burger";

class Gallery
{
        constructor()
    {
        document.documentElement.classList.add("js-enabled");
        new Burger();
    }
}

function main()
{
    const App = new Gallery();
}

main();