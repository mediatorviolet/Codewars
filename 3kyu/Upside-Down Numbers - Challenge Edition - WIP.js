// 3kyu - Upside-Down Numbers - Challenge Edition
//
// Input:
//     Your function will receive two strings, each comprised of digits representing a positive integer. These two values will represent the upper and lower bounds of a range.
//
//     Output:
// Your function must return the number of valid upside down numbers within the range of the two input arguments, including both upper and lower bounds.
//
//     What is an Upside-Down Number?
//     An upside down number is an integer that appears the same when rotated 180 degrees, as illustrated below.
//
// 1961 - OK, 88 - OK, 101 - OK, 25 - No
//
// Example:
//
//     const x = '0',
//         y = '25';
// upsideDown(x,y); //4
// //the valid numbers in the range are 0, 1, 8, and 11
// Additional Notes:
//     All inputs will be valid.
//     The first argument will always be less than the second argument (i.e. the range will always be valid).

const upsideDown = (x, y) => {
    let minLength = x.length
    let maxLength = y.length
    let result = []
    let i = maxLength
    while (i >= minLength) {
        result.push(numDef(i, i))
        i--
    }
    console.log(result)
    return result.reduce((acc, val) => [...acc, ...val], []).filter(num => Number(num) <= y && Number(num) >= x).length
}

const numDef = (n, length) => {
    if (Number(n) === 0) {
        return [""]
    }
    if (Number(n) === 1) {
        return ["1", "0", "8"]
    }

    let middles = numDef(n - 2, length)
    let result = []

    for (middle of middles) {
        if (n !== length) {
            result.push("0" + middle + "0")
        }

        result.push("8" + middle + "8")
        result.push("1" + middle + "1")
        result.push("9" + middle + "6")
        result.push("6" + middle + "9")
    }
    return result
}

// console.log(upsideDown('0', '10')) // 3
// console.log(upsideDown('6', '25')) //2
// console.log(upsideDown('10', '100')) //4
// console.log(upsideDown('100', '1000')) //12
// console.log(upsideDown('100000', '12345678900000000')) //718650
console.log(upsideDown('1', '45898942362076547326957326537845432452352')) //209808349609373

// todo: timeout -> améliorer efficacité algo