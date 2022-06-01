/**
 * 6kyu - Count the divisible numbers
 *
 * Complete the function that takes 3 numbers x, y and k (where x ≤ y), and returns the number of integers within the range [x..y] (both ends included) that are divisible by k.
 *
 * More scientifically: { i : x ≤ i ≤ y, i mod k = 0 }
 *
 * Example
 * Given x = 6, y = 11, k = 2 the function should return 3, because there are three numbers divisible by 2 between 6 and 11: 6, 8, 10
 *
 * Note: The test cases are very large. You will need a O(log n) solution or better to pass. (A constant time solution is possible.)
 */

function divisibleCount(x, y, k) {
    let firstDivisible = x % k === 0 ? x : x + (k - x % k);
    let lastDivisible = y % k === 0 ? y : y - y % k;
    return (lastDivisible - firstDivisible) / k + 1;
}

console.log(divisibleCount(6, 11, 2)) // 3
console.log(divisibleCount(101, 9007199254740991, 11)) // 818836295885535