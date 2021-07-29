/**
 * 4kyu - Middle Permutation
 *
 * Task
 *
 * You are given a string s. Every letter in s appears once.
 *
 * Consider all strings formed by rearranging the letters in s. After ordering these strings in dictionary order, return the middle term. (If the sequence has a
 * even length n, define its middle term to be the (n/2)th term.)
 * Example
 *
 * For s = "abc", the result should be "bac".
 *
 * The permutations in order are: "abc", "acb", "bac", "bca", "cab", "cba" So, The middle term is "bac".
 * Input/Output
 *
 *     [input] string s
 *
 * unique letters (2 <= length <= 26)
 *
 *     [output] a string
 *
 * middle permutation.
 *
 */

const middlePermutation = (s) => {
  let splitted = s.split("").sort();
  if (splitted.length % 2 === 0) {
    let middle = splitted.length / 2 - 1;
    let remainder = splitted
      .slice(0, middle)
      .concat(splitted.slice(middle + 1));
    return splitted[middle] + remainder.reverse().join("");
  } else {
    let middle = Math.floor(splitted.length / 2);
    remainder = splitted
      .slice(0, middle - 1)
      .concat(splitted.slice(middle + 1));
    return (
      splitted[middle] + splitted[middle - 1] + remainder.reverse().join("")
    );
  }
};

console.log(middlePermutation("abc")); // "bac"
console.log(middlePermutation("abcd")); // "bdca"
console.log(middlePermutation("abcdx")); // "cbxda"
console.log(middlePermutation("abcdxg")); // "cxgdba"
console.log(middlePermutation("abcdxgz")); // "dczxgba"
console.log(middlePermutation("pvbuxjachqyelzg")); // ljzyxvuqphgecba
