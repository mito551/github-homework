let fieldX = 4; // 4 and 5 give a very legible table as an output in WebStorm,
let fieldY = 5; // which helps with finding errors and such
let bombs = 5;

let MSField = []; // MS for minesweeper, output array with bombs and hints for solving
let bombsCoords = []; // array with coordinates of the bombs, to serve as basis for offsetsArray
let offsetsArray = []; // array to generate hints

function generateField(x, y) {
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            MSField.push(0)
        }
    }
}

generateField(fieldX, fieldY)

function generateBombs(bombs) {
    for (let i = 0; i < bombs; i++) {
        let randomIndex = Math.floor(Math.random() * MSField.length);
        if (MSField[randomIndex] === "bomb") {
            i--;
        } else {
            MSField[randomIndex] = "bomb";
            bombsCoords.push(randomIndex)
        }
    }
}

generateBombs(bombs)

function generateOffsets() {
    let result = [];
    for (let j in bombsCoords) {
        result.push(bombsCoords[j] - fieldX)
        result.push(bombsCoords[j] + fieldX)
        if (bombsCoords[j] % fieldX !== 0){
            result.push(bombsCoords[j] - 1)
            result.push(bombsCoords[j] - fieldX - 1)
            result.push(bombsCoords[j] + fieldX - 1)
        }
        if ((bombsCoords[j] + 1) % fieldX !== 0){
            result.push(bombsCoords[j] + fieldX + 1)
            result.push(bombsCoords[j] + 1)
            result.push(bombsCoords[j] - fieldX + 1)
        }
    }
    return result
}

offsetsArray = generateOffsets();

function generateHints() {
    for (let k in offsetsArray) {
        if (MSField[offsetsArray[k]] !== undefined && MSField[offsetsArray[k]] !== "bomb"){
            MSField[offsetsArray[k]] += 1;
        }
    }
}

generateHints()

console.log(MSField)