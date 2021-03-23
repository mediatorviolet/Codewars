/**
 * This time we want to write calculations using functions and get the results. Let's have a look at some examples:
 *
 * seven(times(five()) // must return 35
 * four(plus(nine()) // must return 13
 * eight(minus(three()) // must return 5
 * six(dividedBy(two()) // must return 3
 *
 * Requirements:
 *
 *     There must be a function for each number from 0 ("zero") to 9 ("nine")
 *     There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by
 *     in Ruby and Python)
 *     Each calculation consist of exactly one operation and two numbers
 *     The most outer function represents the left operand, the most inner function represents the right operand
 *     Division should be integer division. For example, this should return 2, not 2.666666...:
 *
 * eight(dividedBy(three())
 *
 */

function zero(calc) {
    return calc ? calc(0) : 0;
}
function one(calc) {
    return calc ? calc(1) : 1;
}
function two(calc) {
    return calc ? calc(2) : 2;
}
function three(calc) {
    return calc ? calc(3) : 3;
}
function four(calc) {
    return calc ? calc(4) : 4;
}
function five(calc) {
    return calc ? calc(5) : 5;
}
function six(calc) {
    return calc ? calc(6) : 6;
}
function seven(calc) {
    return calc ? calc(7) : 7;
}
function eight(calc) {
    return calc ? calc(8) : 8;
}
function nine(calc) {
    return calc ? calc(9) : 9;
}

function plus(y) {
    return function (x) {
        return x + y;
    };
}
function minus(y) {
    return function (x) {
        return x - y;
    };
}
function times(y) {
    return function (x) {
        return x * y;
    };
}
function dividedBy(y) {
    return function (x) {
        return Math.floor(x / y);
    };
}

seven(times(five())); // 35
four(plus(nine())); // 13
eight(minus(three())); // 5
six(dividedBy(two())); // 3
