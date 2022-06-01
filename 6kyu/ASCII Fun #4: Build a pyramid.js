/**
 * 6kyu - ASCII Fun #4: Build a pyramid
 *
 * You will get a String str with an even length and a Integer n which represents the height of the pyramid and your task is to draw following pattern. Each line
 * is seperated with '\n'.
 *
 *     Integer n will always be greater than 3. No need to check for invalid parameters.
 *     There are no whitespaces at the end of each line.
 *
 * e.g.:
 *
 *
 *
 *                                                                     00-00..00-00
 *                                                               0000--0000....0000--0000
 *                                                         000000---000000......000000---000000
 * build_pyramid("00-00..00-00",7)=>                  00000000----00000000........00000000----00000000
 *                                             0000000000-----0000000000..........0000000000-----0000000000
 *                                       000000000000------000000000000............000000000000------000000000000
 *                                 00000000000000-------00000000000000..............00000000000000-------00000000000000
 *
 *
 */

function buildPyramid(str, n) {
    let pyramid = [];
    
}

console.log(buildPyramid("00-00..00-00", 3)); // "00-00..00-00\n0000--0000....0000--0000\n000000---000000......000000---000000"
console.log(buildPyramid("00-00..00-00", 7)); // "00-00..00-00\n0000--0000....0000--0000\n000000---000000......000000---000000\n00000000----00000000........00000000----00000000\n0000000000-----0000000000..........0000000000-----0000000000\n000000000000------000000000000............000000000000------000000000000\n00000000000000-------00000000000000..............00000000000000-------00000000000000"
console.log(buildPyramid("M-M  M-M", 9));
