"use strict";

//Function Definitions

function comboString(strA, strB) {
    if (strA.length > strB.length) {
        return strB + strA + strB
    } else {
        return strA + strB + strA
    }
}


function withoutEnd(str) {
    return str.slice(1, str.length - 1)
}

//Function Executions

console.log(
    "08 withoutEnd \n" +
    withoutEnd('Hello'),
    withoutEnd('java'),
    withoutEnd('coding'),
    "\n09 comboString \n" +
    comboString('Hello', 'hi'),
    comboString('Hi', 'Hello'),
    comboString('aaa', 'b')
)

