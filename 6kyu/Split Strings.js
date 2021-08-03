/**
 * 6kyu - Split Strings
 *
 * Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the
 * missing second character of the final pair with an underscore ('_').
 *
 * Examples:
 *
 * solution('abc') // should return ['ab', 'c_']
 * solution('abcdef') // should return ['ab', 'cd', 'ef']
 *
 */

const solution = (str) => {
  let arr =
    str.split("").length % 2 === 0 ? str.split("") : `${str}_`.split("");
  let result = [];
  
  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr.slice(i, i + 2).join(""));
  }

  return result;
};

console.log(solution("abcdef")); // ["ab", "cd", "ef"]
console.log(solution("abcdefg")); // ["ab", "cd", "ef", "g_"]
console.log(solution("")); // []
