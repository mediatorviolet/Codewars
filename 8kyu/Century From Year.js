/**
 * 8kyu Century From Year
 *
 * Given a year, return the century it is in.
 *
 * 1705 --> 18
 * 1900 --> 19
 * 1601 --> 17
 * 2000 --> 20
 *
 */

const century = (year) => {
    return Math.ceil(year / 100);
};

century(1705); // Output: 18
century(1900); // Output: 19
century(89); // Output: 1
