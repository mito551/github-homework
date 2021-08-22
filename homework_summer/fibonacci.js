// Original Function to draw a simple fibonacci tree upside down.
// Lame.

// function drawFibonacci(length){
//     let fibonacci = 1;
//     let output = "|\n";
//     for (let i = length; i > 0; i--) {
//         for (let k = fibonacci; k > 0; k--){
//             output += "|"
//         }
//         fibonacci = fibonacci + fibonacci
//         output += "\n"
//     }
//     return output
// }

// Separating various calculations needed to draw a pretty fibonacci tree

function calculateFibonacci(length) {
    let adjustment = length - 1
    let int1 = 0;
    let int2 = 1;
    let output = 1;
    for (let i = adjustment; i > 0; i--) {
        output = int1 + int2;
        int1 = int2;
        int2 = output;
    }
    return output
}

// Calculating how much space do we need
// kind of a hacky solution, but for what I need it - drawing a reasonable, pretty fibonacci tree, it works

function makeSpace(length) {
    let arr = []
    for (let i = 0; i < length; i++) {
        arr.push(calculateFibonacci(i + 1));
        arr[i] = arr[1] - length / 2;
    }
    return arr;
}

function drawFibonacci(length) {
    let fibonacci = calculateFibonacci(length);
    let lengthArr = makeSpace(length);
    let output = "";

    // going through the lines, i.e. tree levels...
    for (let i = 1; i < length; i++) {

        // adding the branches...
        for (let k = 0; k < fibonacci; k++) {
            output += "|"
        }

        // breaking the line to start a new level
        // marking the level so that it looks more human-friendly
        output += " — " + fibonacci + "\n";

        // so how many branches did we need again?
        fibonacci = calculateFibonacci(length - i);

        // making it look a bit more like an actual tree and moving the trunk closer to the middle
        // after length = 13, the output doesn't fit on the screen, but the code should still work
        for (let l = 0; l < Math.ceil(lengthArr[i] / i + length / l - l + i + length); l++) {
            output += " "
        }
    }

    // an additional line so that it looks prettier
    // I have no idea why but an even "length" doesn't give me the offset I need?
    // what the hell
    if (length % 2 === 1){
        output += "| — 1"
    }

    return output
}

// and now that we're done, we can draw a fibonacci tree that is also going to be kind of pretty, and look kind of like a tree.
// I'm not a fan of all the hackiness in this code, but as it stands, it does what I need it to:
// (1) draw a fibonacci tree
// (2) make it look halfway decent; where the trunk will be at least somewhat centered
// (3) the branches are on top and the trunk is at the bottom
// (4) works with reasonable ranges - up to 12 fibonacci numbers

console.log(drawFibonacci(11))