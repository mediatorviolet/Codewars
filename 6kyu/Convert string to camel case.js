/**
 * 6kyu Convert string to camel case
 *
 * Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the
 * output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as
 * Pascal case).
 * Examples
 *
 * "the-stealth-warrior" gets converted to "theStealthWarrior"
 * "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
 *
 */

function toCamelCase(str) {
  return (
    str.split(/[-_]+/)[0] +
    str
      .split(/[-_]+/)
      .slice(1)
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join("")
  );
}

console.log(toCamelCase("")); // Should return ''
console.log(toCamelCase("the_stealth_warrior")); // Should return "theStealthWarrior"
console.log(toCamelCase("The-Stealth-Warrior")); // Should return "TheStealthWarrior"
console.log(toCamelCase("A-B-C")); // Should return "ABC"
