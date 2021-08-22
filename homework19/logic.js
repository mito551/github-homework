"use strict";

//function definitions

function specialEleven(int) {
    return int % 11 == 0 || int % 11 == 1;
}

function more20(int) {
    return int % 20 == 1 || int % 20 == 2;
}

//function executions

console.log(
    "09 specialEleven\n",
    specialEleven(22),
    specialEleven(23),
    specialEleven(24),
    "\n10 more20\n",
    more20(20),
    more20(21),
    more20(22)
)