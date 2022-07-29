/**
 * 6kyu - What century is it?
 *
 * Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.
 *
 * Examples
 * "1999" --> "20th"
 * "2011" --> "21st"
 * "2154" --> "22nd"
 * "2259" --> "23rd"
 * "1124" --> "12th"
 * "2000" --> "20th"
 *
 */

function whatCentury(year) {
    let cent = Math.ceil(year / 100)

    if (cent < 19) {
        return `${cent}th`;
    }
    switch (cent.toString()[1]) {
        case '1':
            return `${cent}st`
        case '2':
            return `${cent}nd`
        case '3':
            return `${cent}rd`
        default:
            return `${cent}th`
    }
}

console.log(whatCentury(1999))
console.log(whatCentury(2011))
console.log(whatCentury(2154))
console.log(whatCentury(2259))
console.log(whatCentury(1124))
console.log(whatCentury(2000))