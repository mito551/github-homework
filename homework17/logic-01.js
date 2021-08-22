"use strict";

//function definitions

function squirrelPlay(temp, isSummer){
    if (isSummer && temp >= 90 && temp <= 100){
        return true
    } else if (temp < 60 || temp > 90){
        return false
    } else {
        return true
    }
}

function squirrelPlayTwo(temp, isSummer) {
    return !(temp < 60 || temp > 90);
}

function caughtSpeeding(speed, isBirthday){
    let userSpeed = speed
    if (isBirthday) {
        userSpeed = 61 - 5
    }
    if (userSpeed >= 61 && userSpeed <= 80){
        return 1
    } else if (userSpeed >= 81) {
        return 2
    } else return 0
}

//executing functions

console.log(
    " 03 squirrelPlay \n" +
    squirrelPlay(70, false),
    squirrelPlay(95, false),
    squirrelPlay(95, true),
    squirrelPlayTwo(70, false),
    squirrelPlayTwo(95, false),
    squirrelPlayTwo(95, true),
    "\n 04 caughtSpeeding \n" +
    caughtSpeeding(60, false),
    caughtSpeeding(65, false),
    caughtSpeeding(65, true)
)