// function findMin(arr){
//     let output = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (output > arr[i]){
//             output = arr[i];
//         }
//     }
//     console.log("findMin output = ", output)
//     return output
// }
//
// function organizeStatues(statues){
//     let interArr = statues;
//     let resultArr = [];
//     for (let k in statues){
//         resultArr.push(findMin(statues));
//         interArr.splice(k, 1);
//     }
//     console.log("resultArr = ", resultArr)
//     return resultArr
// }
//
// function makeArrayConsecutive2(statues) {
//     statues = organizeStatues(statues)
//     console.log(statues)
//     let compArr = [];
//     let neededStatues = [];
//     for (let i = findMin(statues); i < statues.length; i++) {
//         compArr.push(i);
//         console.log(i)
//     }
//     console.log(compArr)
//     for (let k = 0; k < statues.length; k++) {
//         console.log(compArr[k])
//         console.log(statues[k])
//         if (compArr[k] !== statues[k]){
//             neededStatues.push(k);
//         }
//     }
//     return neededStatues.length
// }

function findMin(arr){
    let output = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (output > arr[i]){
            output = arr[i];
        }
    }
    return output
}

function findMax(arr){
    let output = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (output < arr[i]){
            output = arr[i];
        }
    }
    return output
}

function doesArrContainInt(int, arr){
    let output = false;
    for (let i = 0; i < arr.length; i++){
        if (int === arr[i]){
            output = true;
        }
    }
    return output
}

function makeArrayConsecutive2(statues){
    let outputArr = [];
    let int = findMin(statues);
    for (let i = findMin(statues); i < findMax(statues); i++){
        if (!doesArrContainInt(int, statues)){
            outputArr.push(int);
        }
        int++;
    }
    return outputArr.length
}

const statues1 = [6, 2, 3, 8]
const statues2 = [0, 3]
const statues3 = [6, 3]
const statues4 = [1]

console.log(makeArrayConsecutive2(statues3))
// console.log(makeArrayConsecutive2(statues2))
// console.log(makeArrayConsecutive2(statues3))
// console.log(makeArrayConsecutive2(statues4))