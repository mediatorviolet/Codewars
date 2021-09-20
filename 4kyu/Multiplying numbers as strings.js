/**
 * 4kyu - Multiplying numbers as strings
 *
 * This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!
 *
 *     The arguments are passed as strings.
 *     The numbers may be way very large
 *     Answer should be returned as a string
 *     The returned "number" should not start with zeros e.g. 0123 is invalid
 *
 */

function multiply(a, b) {
    return BigInt(a) * BigInt(b) + "";
}

console.log(multiply("2", "3")); // "6"
console.log(multiply("1020303004875647366210", "2774537626200857473632627613")); // "2830869077153280552556547081187254342445169156730"
