
import { validateName } from "./validators/name-validator";
import { validatePhone } from "./validators/phone-validator";
import { validateDate } from "./validators/date-validator";
import { validateNumber } from "./validators/number-validator";

interface ValidatorsMap
{
    [key: string]: Function;
}

export class Validator 
{
    readonly Form: HTMLFormElement;

    readonly Name: HTMLInputElement;
    readonly Phone: HTMLInputElement;
    readonly DateValue: HTMLInputElement;
    readonly TimeValue: HTMLInputElement;
    readonly GuestsNumber: HTMLInputElement;

    readonly Validators: ValidatorsMap;

    constructor()
    {
        this.Form = document.querySelector<HTMLFormElement>("#book-modal-form")!;

        this.Name = this.Form.querySelector<HTMLInputElement>("[name=\"name\"]")!;
        this.Phone = this.Form.querySelector<HTMLInputElement>("[name=\"phone\"]")!;
        this.DateValue = this.Form.querySelector<HTMLInputElement>("[name=\"date\"]")!;
        this.TimeValue = this.Form.querySelector<HTMLInputElement>("[name=\"time\"]")!;
        this.GuestsNumber = this.Form.querySelector<HTMLInputElement>("[name=\"number\"]")!;

        this.Validators =
        {
            Name: validateName,
            Phone: validatePhone,
            Date: validateDate,
            Number: validateNumber
        }

        this.Init()
    }

    Init(): void
    {
        this.Form.addEventListener("submit", (event) => { this.HandleValidity(this.Form, event) });

        this.Name.addEventListener("input", () => { this.HandleName(this.Name) });

        this.Phone.addEventListener("input", () => { this.HandlePhone(this.Phone) });

        this.DateValue.addEventListener("input", () => { this.HandleDate(this.DateValue) });

        this.TimeValue.addEventListener("input", () => { this.HandleTime(this.TimeValue) });

        this.GuestsNumber.addEventListener("input", () => { this.HandleNumber(this.GuestsNumber) });
    }

    HandleValidity(Form: HTMLFormElement, event: Event): void
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

    HandleName(Name: HTMLInputElement): void
    {
        Name.value = this.Validators.Name(Name.value);
        Name.classList.remove("invalid");
    }

    HandlePhone(Phone: HTMLInputElement): void
    {
        console.log(Phone.value);
        Phone.value = this.Validators.Phone(Phone.value)
        Phone.classList.remove("invalid");
    }

    HandleDate(Date: HTMLInputElement): void
    {
        Date.value = this.Validators.Date(Date.value)
        Date.classList.remove("invalid");
    }

    HandleTime(Time: HTMLInputElement): void
    {
        Time.classList.remove("invalid");
    }

    HandleNumber(Number: HTMLInputElement): void
    {
        Number.value = this.Validators.Number(Number.value)
        Number.classList.remove("invalid");
    }

    SubmitForm(): void
    {
        console.log("Form is valid");
    }
}