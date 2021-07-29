/**
 * 7kyu Just Adding and Multiplying
 *
 * Question: Can you get to the number 59 from the number 1, by
 * sequentially either adding 5 or multiplying by 7?
 *
 * Answer: yes! 59 = 1 x7 x7 +5 +5
 *
 * Your task is to implement the more general function:
 *
 * canReach(aim, add, mult)
 *
 * It returns a boolean value, indicating whether it is
 * possible to reach the number aim from the number 1, by
 * sequentially either adding add or multiplying by mult.
 *
 * So e.g.
 * canReach(59, 5, 7) // returns True
 *
 * N.B. Assume aim, add, and mult will always be positive
 * integers.
 *
 */

const canReach = (aim, add, mult) => {
  if (mult === 1) {
    console.log((aim - 1) % add === 0);
    return (aim - 1) % add === 0;
  }
  for (let i = 1; i <= aim; i *= mult) {
    if ((aim - i) % add === 0) {
      console.log(true);
      return true;
    }
  }
  console.log(false);
  return false;
};

canReach(924, 14, 12); // false
canReach(452, 6, 20); // true
canReach(203, 2, 8); // true
