/**
 * 6kyu - Character with the longest consecutive repetition
 *
 * For a given string s find the character c (or C) with longest consecutive repetition and return:
 *
 * [c, l]
 *
 * where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.
 *
 * For empty string return:
 *
 * ["", 0]
 *
 * Happy coding! :)
 *
 */

const longestRepetition = (s) => {
  if (s === "") return ["", 0];
  let arr = s.split("");
  let streaks = [];
  let streak = [];

  for (let i = 0; i < arr.length; i++) {
    streak.push(arr[i]);
    if (arr[i] !== arr[i + 1]) {
      streaks.push(streak);
      streak = [];
    }
  }

  let maxlength = Math.max(...streaks.map((streak) => streak.length));
  let char = streaks.find((streak) => streak.length === maxlength)[0];

  return [char, maxlength];
};

console.log(longestRepetition("aaaabb")); // ["a", 4]
console.log(longestRepetition("bbbaaabaaaa")); // ["a", 4]
console.log(longestRepetition("cbdeuuu900")); // ["u", 3]
console.log(longestRepetition("abbbbb")); // ["b", 5]
console.log(longestRepetition("aabb")); // ["a", 2]
console.log(longestRepetition("")); // ["", 0]
console.log(longestRepetition("ba")); // ["b", 1]
