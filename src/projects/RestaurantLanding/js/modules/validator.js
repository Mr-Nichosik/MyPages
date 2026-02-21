
import { validateName } from "./validators/name-validator";
import { validatePhone } from "./validators/phone-validator";
import { validateDate } from "./validators/date-validator";
import { validateNumber } from "./validators/number-validator";

export class Validator 
{
    constructor()
    {
        this.Form = document.getElementById("book-modal-form");

        this.Name = this.Form.querySelector("[name=\"name\"]");
        this.Phone = this.Form.querySelector("[name=\"phone\"]");
        this.DateValue = this.Form.querySelector("[name=\"date\"]");
        this.TimeValue = this.Form.querySelector("[name=\"time\"]");
        this.GuestsNumber = this.Form.querySelector("[name=\"number\"]");

        this.Validators =
        {
            Name: validateName,
            Phone: validatePhone,
            Date: validateDate,
            Number: validateNumber
        }

        this.Init()
    }

    Init()
    {
        this.Form.addEventListener("submit", (event) => { this.HandleValidity(this.Form, event) });

        this.Name.addEventListener("input", () => { this.HandleName(this.Name) });

        this.Phone.addEventListener("input", () => { this.HandlePhone(this.Phone) });

        this.DateValue.addEventListener("input", () => { this.HandleDate(this.DateValue) });

        this.TimeValue.addEventListener("input", () => { this.HandleTime(this.TimeValue) });

        this.GuestsNumber.addEventListener("input", () => { this.HandleNumber(this.GuestsNumber) });
    }

    HandleValidity(Form, event)
    {
        if (!Form.checkValidity())
        {
            event.preventDefault();
            const invalidInputs = Form.querySelectorAll("input:invalid");
            invalidInputs.forEach(input => input.classList.add("invalid"));
            console.log(invalidInputs);
        }
        else
        {
            this.SubmitForm();
        }
    }

    HandleName(Name)
    {
        Name.value = this.Validators.Name(Name.value);
        Name.classList.remove("invalid");
    }

    HandlePhone(Phone)
    {
        console.log(Phone.value);
        Phone.value = this.Validators.Phone(Phone.value)
        Phone.classList.remove("invalid");
    }

    HandleDate(Date)
    {
        Date.value = this.Validators.Date(Date.value)
        Date.classList.remove("invalid");
    }

    HandleTime(Time)
    {
        Time.classList.remove("invalid");
    }

    HandleNumber(Number)
    {
        Number.value = this.Validators.Number(Number.value)
        Number.classList.remove("invalid");
    }

    SubmitForm()
    {
        console.log("Form is valid");
    }
}