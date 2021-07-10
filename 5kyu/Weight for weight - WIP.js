/**
 * 5kyu Weight for weight
 *
 * My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members
 * is published and each month he is the last on the list which means he is the heaviest.
 *
 * I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to
 * attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.
 *
 * For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.
 *
 * Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?
 * Example:
 *
 * "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes:
 *
 * "100 180 90 56 65 74 68 86 99"
 *
 * When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:
 *
 * 180 is before 90 since, having the same "weight" (9), it comes before as a string.
 *
 * All numbers in the list are positive numbers and the list can be empty.
 */

const orderWeight = (strng) => {
    console.log("strng: ", strng);
    let toArr = strng.split(" ");
    console.log(toArr.sort());

    (async () => {
        toArr = toArr.sort();
    })().then(
        (toArr = toArr.sort(async (a, b) => {
            a = a.split("").reduce((b, c) => b * 1 + c * 1, 0);
            b = b.split("").reduce((d, e) => d * 1 + e * 1, 0);
            a - b;
        }))
    );

    // toArr
    //     .sort()
    //     .sort(
    //         (a, b) =>
    //             a.split("").reduce((b, c) => b * 1 + c * 1, 0) -
    //             b.split("").reduce((d, e) => d * 1 + e * 1, 0)
    //     );
    // console.log("toArr postSort: ", toArr);
    console.log("resut: ", toArr.join(" "));
    return toArr.join(" ");
};

orderWeight("103 123 4444 99 2000"); // Output: "2000 103 123 4444 99"
orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"); // Output: "11 11 2000 10003 22 123 1234000 44444444 9999"
orderWeight(
    "71899703 200 6 91 425 4 67407 7 96488 6 4 2 7 31064 9 7920 1 34608557 27 72 18 81"
); // Output: "1 2 200 4 4 6 6 7 7 18 27 72 81 9 91 425 31064 7920 67407 96488 34608557 71899703"
