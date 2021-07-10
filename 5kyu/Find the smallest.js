// 5kyu Find the smallest

// You have a positive number n consisting of digits. You can do at most one operation: Choosing the index of a digit in the number, remove this digit at that index and insert it back to another or at the same place in the number in order to find the smallest number you can get.
// Task:

// Return an array or a tuple or a string depending on the language (see "Sample Tests") with

//         the smallest number you got
//         the index i of the digit d you took, i as small as possible
//         the index j (as small as possible) where you insert this digit d to have the smallest number.

// Examples:

// smallest(261235) --> [126235, 2, 0] or (126235, 2, 0) or "126235, 2, 0"

// 126235 is the smallest number gotten by taking 1 at index 2 and putting it at index 0

// smallest(209917) --> [29917, 0, 1] or ...

// [29917, 1, 0] could be a solution too but index `i` in [29917, 1, 0] is greater than
// index `i` in [29917, 0, 1].

// 29917 is the smallest number gotten by taking 2 at index 0 and putting it at index 1 which gave 029917 which is the number 29917.

// smallest(1000000) --> [1, 0, 6] or ...

const smallest = (n) => {
    let arrayOfDigits = Array.from(String(n), Number);
    let switched = [];
    console.log(arrayOfDigits);
    let comparison = [];

    const switchPlace = (arr, from, to) => {
        let cutOut = arr.splice(from, 1)[0];
        arr.splice(to, 0, cutOut);
        return [arr, from, to];
    };
    const switchPlace = (arr, from, to) => {
        let copy = arr;
        let targetDigit = copy.slice(from, from + 1);
        let targetIndex = arr.indexOf(targetDigit);
        copy.splice()
    };
    arrayOfDigits.map((digit) => {
        if (digit < arrayOfDigits[0]) {
            comparison.push(
                switchPlace(arrayOfDigits, arrayOfDigits.indexOf(digit), 0)
            );
        }
        if (arrayOfDigits[1] > digit > arrayOfDigits[0]) {
            comparison.push(
                switchPlace(arrayOfDigits, arrayOfDigits.indexOf(digit), 1)
            );
        }
    });

    // for (let i = 0; i < arrayOfDigits.length; ++i) {
    //     console.log("digit", arrayOfDigits[i], i);
    //     if (arrayOfDigits[i] < arrayOfDigits[0]) {
    //         switched = switchPlace(arrayOfDigits, i, 0);
    //         comparison.push(switched);
    //     } else if (arrayOfDigits[1] < arrayOfDigits[i] < arrayOfDigits[0]) {
    //         // arrayOfDigits.splice(i, 1);
    //         // arrayOfDigits.splice(1, 0, arrayOfDigits[i]);
    //         // comparison.push(arrayOfDigits);
    //         switched = switchPlace(arrayOfDigits, i, 1);
    //         comparison.push(switched);
    //     }
    // }
    console.log("comparison", comparison);
};

smallest(261235); // [126235, 2, 0]
smallest(209917); // [29917, 0, 1]
smallest(285365); // [238565, 3, 1]
smallest(269045); // [26945, 3, 0]
smallest(296837); // [239687, 4, 1]
