"use strict";

//function definitions

let sameFirstLast = function (arr) {
    return arr[0] == arr[arr.length - 1];
}

let sum3 = function (arr) {
    return arr[0] + arr[1] + arr[2];
}

let findMax = function (arr) {
    let i = 1;
    let output = arr[0];
    while (i < arr.length) {
        if (arr[i] > output) {
            output = arr[i];
        }
        i++;
    }
    return output
}

let maxEnd3 = function (arr){
    let maxInt = findMax(arr);
    return [maxInt, maxInt, maxInt];
}

let makeEnds = function(arr) {
    return [arr[0], arr[arr.length-1]]
}

//function executions

console.log(
    "sameFirstLast:\n",
    sameFirstLast([1, 2, 3]),
    sameFirstLast([1, 2, 3, 1]),
    sameFirstLast([1, 2, 1]),
    "\nsum3:\n",
    sum3([1, 2, 3]),
    sum3([5, 11, 2]),
    sum3([7, 0, 0]),
    "\nmaxEnd3:\n",
    maxEnd3([1, 2, 3]),
    maxEnd3([11, 5, 9]),
    maxEnd3([2, 11, 3]),
    "\nmakeEnds:\n",
    makeEnds([1, 2, 3]),
    makeEnds([1, 2, 3, 4]),
    makeEnds([7, 4, 6, 2])
)