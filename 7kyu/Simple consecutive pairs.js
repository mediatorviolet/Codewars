/**
 * 7kyu - Simple consecutive pairs
 *
 * In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:
 *
 * pairs([1,2,5,8,-4,-3,7,6,5]) = 3
 * The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
 * --the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
 * --the second pair is (5,8) and are not consecutive
 * --the third pair is (-4,-3), consecutive. Count = 2
 * --the fourth pair is (7,6), also consecutive. Count = 3.
 * --the last digit has no pair, so we ignore.
 *
 * More examples in the test cases.
 *
 * Good luck!
 *
 */

function pairs(ar) {
  count = 0;
  for (var i = 0; i < ar.length; i = i + 2) {
    if (ar[i] + 1 == ar[i + 1] || ar[i] - 1 == ar[i + 1]) {
      count += 1;
    }
  }
  return count;
}

console.log(pairs([1, 2, 5, 8, -4, -3, 7, 6, 5])); // 3
console.log(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94])); // 2
console.log(pairs([81, 44, 80, 26, 12, 27, -34, 37, -35])); // 0
console.log(pairs([-55, -56, -7, -6, 56, 55, 63, 62])); // 4
console.log(pairs([73, 72, 8, 9, 73, 72])); // 3
