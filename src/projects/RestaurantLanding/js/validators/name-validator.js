
export function validateName(value) 
{
    if (value.length > 0)
    {
        value = value[0].toUpperCase() + value.slice(1);
        value = value.replace(/[^а-яА-ЯёЁ\s]/g, '');
    }
    if (value[value.length - 2] === " ")
    {
        value = value.slice(0, value.length - 2) + " " + value.slice(value.length - 1).toUpperCase();
    }

    return value;
}