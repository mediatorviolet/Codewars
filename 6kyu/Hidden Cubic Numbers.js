/**
 * 6kyu - Hidden "Cubic" numbers
 *
 * We search non-negative integer numbers, with at most 3 digits, such as the sum of the cubes of their digits is the number itself; we will call them "cubic"
 * numbers.
 *
 * 153 is such a "cubic" number : 1^3 + 5^3 + 3^3 = 153
 *
 * These "cubic" numbers of at most 3 digits are easy to find, even by hand, so they are "hidden" with other numbers and characters in a string.
 *
 * The task is to find, or not, the "cubic" numbers in the string and then to make the sum of these "cubic" numbers found in the string, if any, and to return a
 * string such as:
 *
 * "number1 number2 (and so on if necessary) sumOfCubicNumbers Lucky"
 *
 * if "cubic" numbers number1, number2, ... were found.
 *
 * The numbers in the output are to be in the order in which they are encountered in the input string.
 *
 * If no cubic numbers are found return the string: `"Unlucky"``.
 * Examples:
 *
 * - s = "aqdf&0#1xyz!22[153(777.777"
 *    the groups of at most 3 digits are 0 and 1 (one digit), 22 (two digits), 153, 777, 777 (3 digits)
 *    Only 0, 1, 153 are cubic and their sum is 154
 *    Return: "0 1 153 154 Lucky"
 *
 * - s = "QK29a45[&erui9026315"
 *   the groups are 29, 45, 902, 631, 5. None is cubic.
 *   Return: "Unlucky"
 *
 * Notes
 *
 *     In the string "001234" where 3 digits or more follow each other the first group to examine is "001" and the following is "234". If a packet of at most
 *     three digits has been taken, whether or not "cubic", it's over for that packet.
 *
 *     When a continuous string of digits exceeds 3, the string is split into groups of 3 from the left. The last grouping could have 3, 2 or 1 digits.
 *
 *     e.g "24172410" becomes 3 strings comprising "241", "724" and "10"
 *
 *     e.g "0785" becomes 2 strings comprising "078" and "5".
 *
 */

const isSumOfCubes = (s) => {
    const regex = /[^0-9 ]+/g;
    let numbersOnly = s
        .replace(regex, " ")
        .split(" ")
        .filter((el) => el !== "");

    for (let i = 0; i < numbersOnly.length; ++i) {
        if (numbersOnly[i].length > 3) {
            numbersOnly.splice(i, 1, numbersOnly[i].match(/(.{1,3})/g, " "));
        }
    }
    const nums = numbersOnly
        .reduce((acc, val) => acc.concat(val), [])
        .map((el) => (el === "000" ? el * 1 + "" : el));

    const getCubic = nums.filter((num) => {
        return (
            num
                .split("")
                .map((n) => n ** 3)
                .reduce((a, b) => a + b, 0) == num
        );
    });
    if (getCubic.length === 0) return "Unlucky";
    return `${getCubic.join(" ")} ${getCubic.reduce(
        (a, b) => a * 1 + b * 1,
        0
    )} Lucky`;
};

console.log(isSumOfCubes("0 9026315 -827&()")); // "0 0 Lucky"
console.log(isSumOfCubes("9026315 -827&()")); // "Unlucky"
console.log(
    isSumOfCubes(
        "371407298a --- dreary, ###100.153 I thought, 9926315strong -127&() 1"
    )
); // "371 407 153 1 932 Lucky"
console.log(
    isSumOfCubes(
        "...181 & 37193abc210a time37110 & 40 & 153462Once upon466?/!0abc58xyz37156"
    )
); // "371 371 153 0 371 1266 Lucky"
