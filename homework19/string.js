"use strict";

//function definitions

function right2(str) {
    return str.substring(str.length - 2) + str.substring(0, str.length - 2);
}

let theEnd = function (str, isFront) {
    return (isFront ? str.substring(0, 1) : str.substring(str.length - 1));
}


//function executions

console.log(
    "12 right2:\n",
    right2('Hello'),
    right2('java'),
    right2('Hi'),
    "\n13 theEnd\n",
    theEnd('Hello', true),
    theEnd('Hello', false),
    theEnd('oh', true)
)