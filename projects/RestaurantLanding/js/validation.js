
function Validation()
{
    // general
    const Form = document.getElementById("book-modal-form");
    Form.addEventListener("submit", (event) =>
    {
        if (!Form.checkValidity())
        {
            event.preventDefault();
            const invalidInputs = Form.querySelectorAll("input:invalid");
            invalidInputs.forEach(input => input.classList.add("invalid"));
            console.log(invalidInputs);
        }
    });

    // name
    const Name = Form.querySelector("[name=\"name\"]");
    Name.addEventListener("input", function (e)
    {
        if (this.value.length > 0)
        {
            this.value = this.value[0].toUpperCase() + this.value.slice(1);
            this.value = this.value.replace(/[^а-яА-ЯёЁ\s]/g, '');
        }
        if (this.value[this.value.length - 2] === " ")
        {
            this.value = this.value.slice(0, this.value.length - 2) + " " + this.value.slice(this.value.length - 1).toUpperCase();
        }

        this.classList.remove("invalid")
    });

    // phone
    const Phone = Form.querySelector("[name=\"phone\"]");
    Phone.addEventListener("input", function (e)
    {
        if (this.value.length < 2) this.value = "+7";
        else this.value = this.value.replace(/[^+7\d{10}]/g, '');

        this.classList.remove("invalid")
    });

    // date
    const DateVal = Form.querySelector("[name=\"date\"]");
    DateVal.addEventListener("input", function (e)
    {
        // const Days = { "01": 31, "02": 28, "03": 31, "04": 30, "05": 31, "06": 30, "07": 31, "08": 31, "09": 30, "10": 31, "11": 30, "12": 31, }

        // yyyy-mm-dd
        const today = new Date().toISOString().split("T")[0].split("-");
        const userDate = this.value.split("-");

        if (+userDate[0] < +today[0]) userDate[0] = today[0];
        if (+userDate[0] > +today[0] + 1) userDate[0] = +today[0] + 1;

        this.value = `${userDate[0]}-${userDate[1]}-${userDate[2]}`;

        this.classList.remove("invalid")
    });

    // time
    const TimeVal = Form.querySelector("[name=\"time\"]");
    TimeVal.addEventListener("input", function (e)
    {
        this.classList.remove("invalid")
    });

    // number
    const GuestsNumber = Form.querySelector("[name=\"number\"]");
    GuestsNumber.addEventListener("input", function (e)
    {
        this.value = this.value.replace(/[^\d{2}]/g, '');

        if (this.value > 15) this.value = 15;
        if (this.value < 0) this.value = 0;

        this.classList.remove("invalid")
    });
}

Validation();