/**
 * 6kyu - Calculate String Rotation
 * 
 *  Write a function that receives two strings and returns n, where n is equal to the number of characters we should shift the first string forward to match the second. The check should be case sensitive.
 * 
 * For instance, take the strings "fatigue" and "tiguefa". In this case, the first string has been rotated 5 characters forward to produce the second string, so 5 would be returned.
 * If the second string isn't a valid rotation of the first string, the method returns -1.
 * Examples:
 * 
 * "coffee", "eecoff" => 2
 * "eecoff", "coffee" => 4
 * "moose", "Moose" => -1
 * "isn't", "'tisn" => 2
 * "Esham", "Esham" => 0
 * "dog", "god" => -1
 * 
 */

const shiftedDiff = (first, second) => {
    let i = 0
    first = first.split('')
    second = second.split('')
    while (i < first.length) {
        if (first.join('') === second.join('')) return i
        let lastLetter = first.pop()
        first.unshift(lastLetter)
        i++
    }
    return -1
}

console.log(shiftedDiff("eecoff", "coffee")); // 4
console.log(shiftedDiff("Moose","moose")); // -1
console.log(shiftedDiff("isn't", "'tisn")); // 2
console.log(shiftedDiff("Esham", "Esham")); // 0