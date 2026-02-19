
export function validateDate(value)
{
        const today = new Date().toISOString().split("T")[0].split("-");
        const userDate = value.split("-");

        if (+userDate[0] < +today[0]) userDate[0] = today[0];
        if (+userDate[0] > +today[0] + 1) userDate[0] = +today[0] + 1;

        value = `${userDate[0]}-${userDate[1]}-${userDate[2]}`;

        return value;
}