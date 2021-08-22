"use strict";

//function definitions

function no23(arr) {
    return !((arr[0] == 2 || arr[0] == 3) || (arr[1] == 2 || arr[1] == 3))
}

function fix23(arr) {
    // a general solution with a loop seemed to make more sense to me
    // than to go through every combination manually
    let i = 0;
    let output = arr;
    while (i < arr.length - 1) {
        if (arr[i] == 2 && arr[i + 1] == 3) {
            output[i + 1] = 0;
        }
        i++;
    }
    return output
}

function makeMiddle(arr) {
    return [arr[arr.length / 2 - 1], arr[arr.length / 2]]
}

//function executions

console.log(
    "Array 5:\n" +
    no23([4, 5]),
    no23([4, 2]),
    no23([3, 5]),
    "\nArray 6:\n" +
    fix23([1, 2, 3]),
    fix23([2, 3, 5]),
    fix23([1, 2, 1]),
    "\nArray 7:\n" +
    makeMiddle([1, 2, 3, 4]),
    makeMiddle([7, 1, 2, 3, 4, 9]),
    makeMiddle([1, 2])
)