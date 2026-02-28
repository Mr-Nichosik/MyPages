
import { Burger } from "./burger";

class Index
{
    Observer;
    HiddenItems;

    constructor()
    {
        document.documentElement.classList.add("js-enabled");
        new Burger();

        this.Observer = new IntersectionObserver((entries, observer) => this.Observe(entries, observer))
        this.HiddenItems = document.querySelectorAll(".hidden");
        this.HandleObvservation(this.HiddenItems);
    }

    Observe(entries, observer)
    {
        entries.forEach(entry => 
        {
            if (entry.isIntersecting)
            {
                const element = entry.target;
                element.classList.add("show");
                observer.unobserve(element);
            }
        });
    }

    HandleObvservation(items)
    {
        items.forEach(item =>
        {
            this.Observer.observe(item);
        });
    }
}

function main()
{
    const App = new Index();
}

main();