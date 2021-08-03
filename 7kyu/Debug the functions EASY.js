/**
 * 7kyu - Debug the functions EASY
 *
 */

const multi = (arr) => {
  return arr.reduce((acc, cur) => acc * cur, 1);
};

const add = (arr) => {
  return arr.reduce((acc, cur) => acc + cur, 0);
};

const reverse = (str) => {
  return str.split("").reverse().join("");
};

console.log(multi([5, 1, 5])); // 25
console.log(add([9, 8, 5])); // 22
