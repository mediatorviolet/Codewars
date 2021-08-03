/**
 * 5kyu - Regex Password Validation
 *
 * You need to write regex that will validate a password to make sure it meets the following criteria:
 *
 *     At least six characters long
 *     contains a lowercase letter
 *     contains an uppercase letter
 *     contains a number
 *
 * Valid passwords will only be alphanumeric characters.
 *
 */

const validate = (password) => {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password);
};

console.log(validate("djI38D55")); // true
console.log(validate("a2.d412")); // false
console.log(validate("JHD5FJ53")); // false
console.log(validate("!fdjn345")); // false
console.log(validate("jfkdfj3j")); // false
console.log(validate("123")); // false
console.log(validate("abc")); // false
console.log(validate("Password123")); // true
