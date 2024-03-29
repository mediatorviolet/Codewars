/**
 * 6kyu - Twisted Sum
 *
 * Find the sum of the digits of all the numbers from 1 to N (both ends included).
 *
 * Examples
 * # N = 4
 * 1 + 2 + 3 + 4 = 10
 *
 * # N = 10
 * 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46
 *
 * # N = 12
 * 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51
 *
 */

function twistedSum(n) {
    let sum = 0;
    for (let i = 1; i < n + 1; i++) {
        if (i < 10) {
            sum += i;
        } else {
            let digits = i.toString().split('');
            for (const d of digits) {
                sum += d * 1;
            }
        }
    }

    return sum;
}

console.log(twistedSum(4))
console.log(twistedSum(10))
console.log(twistedSum(12))