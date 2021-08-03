/**
 * 5kyu - Valid Parentheses
 *
 * Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is
 * valid, and false if it's invalid.
 * Examples
 *
 * "()"              =>  true
 * ")(()))"          =>  false
 * "("               =>  false
 * "(())((()())())"  =>  true
 *
 * Constraints
 *
 * 0 <= input.length <= 100
 *
 */

function validParentheses(parens) {
  var tracer = [];
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] === "(") {
      tracer.push(parens[i]);
    } else {
      if (tracer.length === 0) return false;
      var lastValue = tracer[tracer.length - 1];
      if (parens[i] === ")" && lastValue === "(") {
        tracer.pop();
      } else {
        break;
      }
    }
  }
  return tracer.length === 0;
}

console.log(validParentheses("()")); // true
console.log(validParentheses(")(()))")); // false
console.log(validParentheses("(")); // false
console.log(validParentheses("(())((()())())")); // true
console.log(validParentheses("())")); // false
