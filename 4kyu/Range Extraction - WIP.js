/**
 * 4kyu Range Extraction
 *
 * A format for expressing an ordered list of integers is to use a comma separated list of either
 *
 *      individual integers
 *      or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range
 *      includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers.
 *      For example "12,13,15-17"
 *
 * Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range
 * format.
 *
 */

const solution = (list) => {
    console.log(list);
    console.log(list.join(','))
    let range = [];
    let isRange = range.length >= 3;
    let rangeExtract = [];
    for (let i = 0; i < list.length; ++i) {
        if (list[i] === list[i + 1] - 1 || list[i] === list[i - 1] + 1) {
            range.push(list[i]);
        }
        if (list[i] !== list[i + 1] - 1 && list[i] !== list[i - 1] + 1) {
            if (isRange) {
                rangeExtract.push(range[0] + "-" + range[range.length - 1]);
                range = [];
            } else {
                range.map((n) => rangeExtract.push(n));
                range = [];
            }
            rangeExtract.push(list[i]);
        }
    }
    // for (let i = 0; i < list.length; ++i) {
    //     if (list[i] + 1 === list[i + 1] || list[i] - 1 === list[i - 1]) {
    //         range.push(list[i]);
    //     }
    //     if (list[i] !== list[i + 1]) {
    //         rangeExtract.push(list[i]);
    //     }
    // }
    console.log("***range***", range);
    console.log("***rangeExtract***", rangeExtract);
};

solution([
    -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
]); // Output: "-6,-3-1,3-5,7-11,14,15,17-20"
// solution([-6, -3, -2, -1, 0, 1, 3]); // Output: "-6,-3-1,3"
