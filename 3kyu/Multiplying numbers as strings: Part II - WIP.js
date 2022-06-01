/**
 * 3kyu - Multiplying numbers as strings: Part II
 *
 * TODO
 *
 * Multiply two numbers! Simple!
 * Rules
 *
 *     The arguments are passed as strings.
 *     The numbers will be very large
 *     The arguments can be negative, in decimals, and might have leading and trailing zeros. e.g. "-01.300"
 *     Answer should be returned as string
 *     The returned answer should not have leading or trailing zeroes (when applicable) e.g. "0123" and "1.100" are wrong, they should be "123" and "1.1"
 *     Zero should not be signed and "-0.0" should be simply returned as "0".
 *
 */

const multiply = (n, o) => {
    const regex = /[^\.]*$/;

    const roundUp = (num, precision) => {
        precision = Math.pow(10, precision);
        return Math.ceil(num * precision) / precision;
    };

    (parseInt(BigInt("2")) * Math.pow(10, 0)) * (parseInt(BigInt("-3000001")) * Math.pow(10, -6))

    console.log(o.includes(".") && o.match(regex)[0].length);
    if (n.includes(".")) {
        let precisionN = n.match(regex)[0].length;
        n = n.replace(".", "")
    }
    return BigInt(n) * BigInt(o) + "";
};

console.log(multiply("30", "69")); // "2070"
console.log(multiply("-0.00", "0.0000")); // "0"
console.log(multiply("2", "-3.000001")); // "-6.000002"
