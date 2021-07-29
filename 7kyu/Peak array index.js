/**
 * 7kyu Peak array index
 *
 * Given an array of ints, return the index such that the sum of the elements to the right of that index equals the sum of the elements to the left of that index.
 * If there is no such index, return -1. If there is more than one such index, return the left-most index.
 *
 * For example:
 *
 * peak([1,2,3,5,3,2,1]) = 3, because the sum of the elements at indexes 0,1,2 == sum of elements at indexes 4,5,6. We don't sum index 3.
 * peak([1,12,3,3,6,3,1]) = 2
 * peak([10,20,30,40]) = -1
 *
 * The special case of an array of zeros (for instance [0,0,0,0]) will not be tested.
 *
 */

const peak = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let leftSum = arr.slice(0, i).reduce((a, b) => a + b, 0);
    let rightSum = arr.slice(i + 1).reduce((a, b) => a + b, 0);
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
};

console.log(peak([1, 2, 3, 5, 3, 2, 1])); // 3
console.log(peak([1, 12, 3, 3, 6, 3, 1])); // 2
console.log(peak([10, 20, 30, 40])); // -1
