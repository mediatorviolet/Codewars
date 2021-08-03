/**
 * 5kyu - Human Readable Time
 *
 * Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
 *
 *     HH = hours, padded to 2 digits, range: 00 - 99
 *     MM = minutes, padded to 2 digits, range: 00 - 59
 *     SS = seconds, padded to 2 digits, range: 00 - 59
 *
 * The maximum time never exceeds 359999 (99:59:59)
 *
 * You can find some examples in the test fixtures.
 *
 */

const humanReadable = (seconds) => {
  var pad = function (x) {
    return x < 10 ? "0" + x : x;
  };
  return (
    pad(parseInt(seconds / 3600)) +
    ":" +
    pad(parseInt((seconds / 60) % 60)) +
    ":" +
    pad(parseInt(seconds % 60))
  );
};

console.log(humanReadable(0)); // "00:00:00"
console.log(humanReadable(5)); // "00:00:05"
console.log(humanReadable(60)); // "00:01:00"
console.log(humanReadable(86399)); // "23:59:59"
console.log(humanReadable(359999)); // "99:59:59"
