// 4kyu - Permutations

// In this kata you have to create all permutations of a non empty input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

// Examples:

// * With input 'a'
// * Your function should return: ['a']
// * With input 'ab'
// * Your function should return ['ab', 'ba']
// * With input 'aabb'
// * Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

// The order of the permutations doesn't matter.

const permutations = (string) => {
    if (string.length <= 2) return string.length === 2 ? Array.from(new Set([string[0] + string[1], string[1] + string[0]])) : [string]
    return Array.from(new Set(string.split('').reduce((acc, letter, i) => acc.concat(permutations(string.slice(0, i) + string.slice(i + 1)).map(val => letter + val)), [])))
}

console.log(permutations('a')); // ['a']
console.log(permutations('ab').sort()); // ['ab', 'ba']
console.log(permutations('aabb').sort()); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']