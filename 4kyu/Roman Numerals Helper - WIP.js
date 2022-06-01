/**
 * 4kyu - Roman Numerals Helper
 *
 * Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below.
 * Multiple roman numeral values will be tested for each helper method.
 *
 * Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman
 * numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending
 * order: MDCLXVI.
 *
 * In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").
 * Examples
 *
 * RomanNumerals.toRoman(1000); // should return 'M'
 * RomanNumerals.fromRoman('M'); // should return 1000
 *
 */

const RomanNumerals = {
    helperToRoman: {
        1: "I",
        4: "IV",
        5: "V",
        10: "X",
        50: "L",
        100: "C",
        500: "D",
        1000: "M",
    },

    helperFromRoman: {
        I: 1,
        IV: 4,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    },

    toRoman: (number) => {
        let splitted = (number + "").split("");
        let arr = [];

        for (let i = 0; i < splitted.length; ++i) {
            arr.push(splitted[i].padEnd(splitted.length - i, "0") * 1);
        }
        let chunkedNumber = arr.filter((el) => el !== 0);
    },

    fromRoman: (romanNum) => {
        let toNum = romanNum.split("").map((el) => {
            return RomanNumerals.helperFromRoman[el];
        });
        console.log(toNum)

        return toNum.reduce((acc, cur) => {
            if (cur > acc) {
                return acc - cur;
            } else {
                return acc + cur;
            }
        }, 0);
    },
};

// console.log(RomanNumerals.toRoman(1000)); // "M"
// console.log(RomanNumerals.toRoman(999)); // "CMXCIX"
// console.log(RomanNumerals.toRoman(998)); // "CMXCVIII"
// console.log(RomanNumerals.toRoman(4)); // "IV"
// console.log(RomanNumerals.toRoman(2020)); // "MMXX"

console.log(RomanNumerals.fromRoman("XXI")); // 21
console.log(RomanNumerals.fromRoman("I")); // 1
console.log(RomanNumerals.fromRoman("III")); // 3
console.log(RomanNumerals.fromRoman("IV")); // 4
console.log(RomanNumerals.fromRoman("MMVII")); // 2007
console.log(RomanNumerals.fromRoman("MDCLXIX")); // 1669
