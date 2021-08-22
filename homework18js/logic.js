"use strict";

//Function Definitions

function sortaSum(a, b) {
    let result = a + b
    if (a + b >= 10 && a + b <= 19) {
        result = 20
    }
    return result
}

function alarmClock(weekday, isVacation) {
    let output = "The alarm is set to 10:00. ";
    if (!isVacation && weekday <= 5) {
        output = "The alarm is set to 7:00. ";
    } else if (isVacation && weekday > 5) {
        output = "The alarm clock is off. ";
    }
    return output
}

//Function Executions

console.log(
    "0? sortaSum \n" +
    sortaSum(3, 4),
    sortaSum(9, 4),
    sortaSum(10, 11),
    "\n06 alarmClock \n" +
    alarmClock(1, false),
    alarmClock(6, false),
    alarmClock(6, true),
    alarmClock(0, false)
)