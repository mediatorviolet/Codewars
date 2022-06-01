/**
 * 5kyu - Array Erasing
 *
 * Task
 *
 * You are given an sequence of zeros and ones. With each operation you are allowed to remove consecutive equal elements, however you may only remove single
 * elements if no more groups of consective elements remain. How many operations will it take to remove all of the elements from the given sequence?
 * Example
 *
 * For arr = [0, 1, 1, 1, 0], the result should be 2.
 *
 * It can be cleared in two steps:
 *
 * [0, 1, 1, 1, 0] -> [0, 0] -> [].
 *
 * For arr = [0, 1, 0, 0, 0], the result should be 3.
 *
 * It can be cleared in three steps:
 *
 * [0, 1, 0, 0, 0] -> [0, 1] -> [0] -> []
 *
 * Note that you can not remove 1 at the first step, because you cannot remove just one element while there are still groups of consective elements (see the rule
 * above ^_^)
 * Input
 *
 * An array arr of 0s and 1s.
 * 1 <= arr.length <= 100
 * Output
 *
 * The minimum number (integer) of operations.
 *
 */

const arrayErasing = (arr) => {
    let count = 0;
    let streak = [];
    let streaks = [];

    while (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            streak.push(arr[i]);
            if (arr[i] !== arr[i + 1]) {
                streaks.push(streak);
                streak = [];
            }
        }
        // console.log("streaks", streaks);
        let maxStreak = Math.max(...streaks.map((streak) => streak.length));
        // console.log("maxstreak", maxStreak);
        if (maxStreak === 1) {
            arr = streaks
                .filter((el) => streaks.indexOf(el) !== 1)
                .reduce((acc, val) => acc.concat(val), []);
        } else {
            let maxStreakIndex = streaks.findIndex(
                (el) => streaks.indexOf(el) === maxStreak
            );
            arr = streaks
                .filter((el) => el.length !== maxStreak)
                .reduce((acc, val) => acc.concat(val), []);
        }
        // console.log("arr", arr);
        streaks = [];
        count++;
        // console.log('count loop', count)
        if (arr.length === 1) return count + 1;
    }
    return count;
};

console.log(arrayErasing([1, 1, 1, 1])); // 1
console.log(arrayErasing([0, 1, 1, 1, 0])); // 2
console.log(arrayErasing([0, 1])); // 2
console.log(arrayErasing([1, 0, 1, 0])); // 3
console.log(arrayErasing([1, 1, 0, 0, 1, 1, 0])); // 3
console.log(arrayErasing([1, 0, 1, 0, 1, 0, 0, 1])); // 5
console.log(arrayErasing([1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1])); // 6
