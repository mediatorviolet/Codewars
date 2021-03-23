/**
 * Given the string representations of two integers, return the string representation of the sum of those integers.
 *
 * For example:
 *
 * sumStrings('1','2') // => '3'
 *
 * A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
 *
 */

function sumStrings(a, b) {
    var aa = Array.from(a, Number),
        bb = Array.from(b, Number),
        result = [],
        carry = 0,
        i = Math.max(a.length, b.length);

    while (i--) {
        carry += (aa.pop() || 0) + (bb.pop() || 0);
        result.unshift(carry % 10);
        carry = Math.floor(carry / 10);
    }
    while (carry) {
        result.unshift(carry % 10);
        carry = Math.floor(carry / 10);
    }
    return result.join("").startsWith("0")
        ? result.join("").slice(1)
        : result.join("");
}

sumStrings("123", "456"); // "579"
