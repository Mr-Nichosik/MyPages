
export function validateNumber(value)
{
    value = value.replace(/[^\d{2}]/g, '');

    if (value > 15) value = 15;
    if (value < 0) value = 0;

    return value;
}