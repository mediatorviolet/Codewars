/**
 * 6kyu - Highest Scoring Word
 *
 * Given a string of words, you need to find the highest scoring word.
 *
 * Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
 *
 * You need to return the highest scoring word as a string.
 *
 * If two words score the same, return the word that appears earliest in the original string.
 *
 * All letters will be lowercase and all inputs will be valid.
 */

const high = (x) => {
    let words = x.split(' ')
    let score = {}

    const calculateScore = (word) => {
        let wordScore = []
        for (let i = 0; i < word.length; i++) {
            wordScore.push(word.charCodeAt(i) - 96)
        }
        return wordScore.reduce((a, b) => a + b, 0)
    }

    for (let i = 0; i < words.length; i++) {
        score[words[i]] = calculateScore(words[i])
    }

    return Object.keys(score).reduce((a, b) => score[a] === score[b] ? a : score[a] > score[b] ? a : b)
}

high('man i need a taxi up to ubud') // 'taxi'
high('what time are we climbing up the volcano') // 'volcano'
high('aa b') // 'aa'