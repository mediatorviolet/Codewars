// 6kyu - Srot the inner ctonnet in dsnnieedcg oredr

// You have to sort the inner content of every word of a string in descending order.
// The inner content is the content of a word without first and the last char.

// Some examples:

// "sort the inner content in descending order" -> "srot the inner ctonnet in dsnnieedcg oredr"
// "wait for me" -> "wiat for me"
// "this kata is easy" -> "tihs ktaa is esay"

// The string will never be null and will never be empty.
// It will contain only lowercase-letters and whitespaces.

const sortTheInnerContent = (words) => {
    words = words.split(' ')
    let result = []
    words.map(word => word.length > 1 ? result.push(word.charAt(0) + word.substring(1, word.length - 1).split("").sort().reverse().join('') + word.charAt(word.length - 1)) : result.push(word))
    return result.join(' ')
}

console.log(sortTheInnerContent("sort the inner content in descending order")) // "srot the inner ctonnet in dsnnieedcg oredr"
console.log(sortTheInnerContent("wait for me")) // "wiat for me"
console.log(sortTheInnerContent("this kata is easy")) // "tihs ktaa is esay"