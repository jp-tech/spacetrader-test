export const numberToMonetaryDisplay = (number: number): string => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'GBP' })
    .format(
        number,
    )
}