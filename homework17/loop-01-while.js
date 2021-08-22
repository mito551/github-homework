"use strict";

//function definitions
//all functions are written so that they return a string
//with this comment I recognise that another way exists and may be more suitable

function printDivisors(limit) {
    // a bunch of garbage to remind me of my bad code :)
    let n = limit;
    let amount = 0;
    let output = "";
    while (n >= 0) {
        // while (n >= 0) {
            if (limit % n === 0) {
                output += n + ", ";
                amount++;
            }
            // n--;
            // console.log(n);
        // }
        n--;
        // console.log(limit);
    }
    return output + "\n Total divisors: " + amount
}

// Proper Solution
// function printDivisors(numb) {
//     let i = numb;
//     let amount = 0;
//     while (i >= 0) {
//         if (numb % i === 0) {
//             console.log(i)
//             amount++;
//         }
//         i--;
//     }
//     console.log("Total Divisors: " + amount)
// }

function integerRemains(a, b) {
    let output = "";
    while (b >= a) {
        if (b % 7 == 1 || b % 7 == 2 || b % 7 == 5) {
            output += b + ", ";
        }
        b--;
    }
    return output
}

//my misunderstood solution

function mySecondLine(limit) {
    let n = 1;
    let i = limit;
    let output = "";
    while (i > 0) {
        while (n < 53) {
            if (i === 2 ** n) {
                output += i + ", ";
            }
            n++;
        }
        n = 53;
        i--;
    }
    return output
}

//the proper solution

function mySecondLineTwo(limit) {
    let i = 1;
    let result = "";
    while (i < limit) {
        result += i + " ";
        i = i * 2;
    }
    return result;
}


function findGreatWord(word) {
    if (word.includes("я")) {
        return word + " - великое слово!"
    } else {
        return word + " - не великое слово!"
    }
}

function digitPowerTwo(a){
    let i = a;
    let result = 0;
    while (i > 0){
        i--;
        result = result + a;
    }
    return result;
}

//Executing funcitons
console.log("10 printDivisors: \n" +
    printDivisors(32),
    "\n 12 Натуральные числа \n" +
    integerRemains(35, 87),
    "\n 13 Последовательность (1000) \n" +
    mySecondLine(1000),
    mySecondLineTwo(1000),
    "\n 14 Буква 'я' \n" +
    findGreatWord("яблоко") + "\n" +
    findGreatWord("тыблоко"),
    "\n 17 Степень числа \n" +
    digitPowerTwo(5),
    digitPowerTwo(10),
    digitPowerTwo(4)
)


