/**
 * There is an array with some numbers. All numbers are equal except for one. Try to find it!
 *
 * findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
 * findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
 *
 * It’s guaranteed that array contains at least 3 numbers.
 *
 * The tests contain some very huge arrays, so think about performance.
 *
 */

function findUniq(arr) {
    return arr.sort()[0] === arr.sort()[1]
        ? arr.sort()[arr.sort().length - 1]
        : arr.sort()[0];
}

findUniq([0, 1, 0]); // 1
findUniq([1, 1, 1, 2, 1, 1]); // 2
findUniq([3, 10, 3, 3, 3]); // 10
