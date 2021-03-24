/**
 *6kyu WeIrD StRiNg CaSe
 *
 * Description:
 *
 * Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed
 * characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is
 * zero based, so the zero-ith index is even, therefore that character should be upper cased.
 *
 * The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are
 * multiple words. Words will be separated by a single space(' ').
 * Examples:
 *
 * toWeirdCase( "String" );//=> returns "StRiNg"
 * toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
 *
 */

//  First solution
function toWeirdCase(string) {
  let arr = string.split("");
  let wordArr = string.split(" ");
  let space = [];
  let result = [];
  wordArr.forEach((el) => {
    for (let i = 0; i < el.length; i++) {
      if (i === 0 || i % 2 === 0) {
        result.push(el[i].toUpperCase());
      } else {
        result.push(el[i].toLowerCase());
      }
    }
  });
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === " ") {
      space.push(i);
    }
  }
  for (let i = 0; i < space.length; i++) {
    result.splice(space[i], 0, " ");
  }
  console.log(result.join(""));
  return result.join("");
}

// Other solution
function toWeirdCase(string) {
  return string
    .split(" ")
    .map((word) => {
      return word
        .split("")
        .map((letter, index) => {
          return index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
        })
        .join("");
    })
    .join(" ");
}

toWeirdCase("This");
toWeirdCase("is");
toWeirdCase("This is a test");
