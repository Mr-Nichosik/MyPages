
export function validatePhone(value)
{
    if (value.length < 2) value = "+7";
    else value = value.replace(/[^+7\d{10}]/g, '');

    return value;
}