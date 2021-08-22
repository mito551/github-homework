"use strict";

//defining functions

function makeOutWord(brackets, words) {
    let begin = brackets.substring(0, 1);
    let end = brackets.substring(2, 3);
    //      alternatively:
    // middle = words
    // return begin + middle + end
    return begin + words + end
}

function extraEnd(words) {
    let end = words.substring(words.length - 2);
    return end + end + end
}

function firstTwo(words) {
    return words.substring(0, 2)
}

function firstHalf(words) {
    return words.substring(0, words.length / 2)
}

//executing functions

console.log(
    " 04 makeOutWord: \n" +
    makeOutWord('<<>>', 'Yay'),
    makeOutWord('<<>>', 'WooHoo'),
    makeOutWord('[[]]', 'word'),
    "\n 05 extraEnd: \n" +
    extraEnd('Hello'),
    extraEnd('ab'),
    extraEnd('Hi'),
    "\n 06 firstTwo: \n" +
    firstTwo('Hello'),
    firstTwo('abcdefg'),
    firstTwo('ab'),
    firstTwo('X'),
    firstTwo(""),
    "\n 07 firstHalf: \n" +
    firstHalf('WooHoo'),
    firstHalf('HelloThere'),
    firstHalf('abcdefg')
)