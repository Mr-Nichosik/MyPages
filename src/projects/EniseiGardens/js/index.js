
import { Burger } from "./burger"; 

class Index
{
    constructor()
    {
        document.documentElement.classList.add("js-enabled");
        new Burger();
    }
}

function main()
{
    const App = new Index();
}

main();