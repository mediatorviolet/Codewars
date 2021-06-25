/**
 * 5kyu String incrementer
 *
 * Your job is to write a function which increments a string, to create a new string.
 *
 *     If the string already ends with a number, the number should be incremented by 1.
 *     If the string does not end with a number. the number 1 should be appended to the new string.
 *
 * Examples:
 *
 * foo -> foo1
 *
 * foobar23 -> foobar24
 *
 * foo0042 -> foo0043
 *
 * foo9 -> foo10
 *
 * foo099 -> foo100
 *
 * Attention: If the number has leading zeros the amount of digits should be considered.
 *
 */

const incrementString = (strng) => {
    if (!strng.match(/[0-9]/)) {
        console.log(strng + 1);
        return strng + 1;
    } else {
        let toArr = strng.split("");
        let num = toArr.filter((el) => el.match(/[0-9]/)).join("");
        let paddedNum = (num * 1 + 1 + "").padStart(num.length, "0");
        console.log(strng.replace(/[0-9]+/, paddedNum));
        return strng.replace(/[0-9]+/, paddedNum);
    }
};

incrementString("foobar000"); // foobar001
incrementString("foo"); // foo1
incrementString("foobar001"); // foobar002
incrementString("foobar99"); // foobar100
incrementString("foobar099"); // foobar100
incrementString(""); // 1
