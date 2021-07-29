/**
 * 3kyu Calculator.js
 *
 * Create a simple calculator that given a string of operators (), +, -, *, / and numbers separated by spaces returns the value of that expression
 *
 * Example:
 *
 * Calculator().evaluate("2 / 2 + 3 * 4 - 6") # => 7
 *
 * Remember about the order of operations! Multiplications and divisions have a higher priority and should be performed left-to-right. Additions and subtractions
 * have a lower priority and should also be performed left-to-right.
 *
 */

const Calculator = function () {
  this.divideOrMultiply = (array) => {
    let acc = 0;
    let operators = (el) => el === "/" || el === "*";
    while (array.some(operators)) {
      let opIndex = array.findIndex(operators);
      switch (array[opIndex]) {
        case "/":
          acc +=
            parseFloat(array[opIndex - 1]) / parseFloat(array[opIndex + 1]);
          array.splice(opIndex - 1, 3, acc);
          acc = 0;
          break;
        case "*":
          acc +=
            parseFloat(array[opIndex - 1]) * parseFloat(array[opIndex + 1]);
          array.splice(opIndex - 1, 3, acc);
          acc = 0;
          break;
        default:
          break;
      }
    }
    return array;
  };

  this.addOrSubstract = (array) => {
    let acc = 0;
    let operators = (el) => el === "+" || el === "-";
    while (array.some(operators)) {
      let opIndex = array.findIndex(operators);
      switch (array[opIndex]) {
        case "+":
          acc +=
            parseFloat(array[opIndex - 1]) + parseFloat(array[opIndex + 1]);
          array.splice(opIndex - 1, 3, acc);
          acc = 0;
          break;
        case "-":
          acc +=
            parseFloat(array[opIndex - 1]) - parseFloat(array[opIndex + 1]);
          array.splice(opIndex - 1, 3, acc);
          acc = 0;
          break;
        default:
          break;
      }
    }
    return array;
  };

  this.evaluate = (string) => {
    let arr = string.split(" ");

    let noDivMult = this.divideOrMultiply(arr);
    let noPlusMinus = this.addOrSubstract(noDivMult);

    return parseFloat(noPlusMinus);
  };
};

let calculate = new Calculator();

console.log(calculate.evaluate("127")); // 127
console.log(calculate.evaluate("2 + 3")); // 5
console.log(calculate.evaluate("2 - 3 - 4")); // -5
console.log(calculate.evaluate("10 * 5 / 2")); // 25
console.log(calculate.evaluate("2 / 2 + 3 * 4 - 6")); // 7
console.log(calculate.evaluate("2 + 3 * 4 / 3 - 6 / 3 * 3 + 8")); // 8
console.log(calculate.evaluate("32 / 53 * 93 - 5")); // 51.15094339622641
