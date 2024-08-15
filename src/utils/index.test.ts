import { it, expect } from "vitest";
import { numberToMonetaryDisplay } from ".";

it.each([
    [0, "£0.00"],
    [0.09, "£0.09"],
    [1, "£1.00"],
    [1.73, "£1.73"],
    [12, "£12.00"],
    [12.00, "£12.00"],
    [75.988, "£75.99"],
    [50250, "£50,250.00"],
    [123456, "£123,456.00"],
    [123456.98, "£123,456.98"],
    [2729694629286.98, "£2,729,694,629,286.98"],
])('Formatting number to money display (%i, %i)', (input, expected) => {
    expect(numberToMonetaryDisplay(input)).toBe(expected);
});