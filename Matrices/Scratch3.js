// import { matrix,PrintMatrix } from "./Scratch.js";
import readlineSync from "readline-sync";

function CheckMatrix(){

let R = readlineSync.questionInt("enter Rows:")
let C = readlineSync.questionInt("enter Cols:")
console.log(`given CheckMatrix is in ${R} * ${C}`)

let newMatrix = new Array(R)
for(let i=0;i<newMatrix.length;i++){
    newMatrix[i] = new Array(C)
}


for(let i=0;i<newMatrix.length;i++){
    for(let j=0;j<C;j++){
        newMatrix[i][j] = readlineSync.questionInt(`enter element of ${i},${j}:`)
    }
}
console.log(newMatrix)
return newMatrix;
}

let mat = CheckMatrix()
// function Check(newMatrix){
//  let N= []
// let P= []
// for(let i=0;i<newMatrix.length;i++){
// for(let j=0;j<newMatrix[0].length;j++){
//     if(newMatrix[i][j]>0){
//         P.push(newMatrix[i][j])
//     }
//     else{
//         N.push(newMatrix[i][j])
//     }
// }
// }
// console.log(`${N} and ${P}`)
// }
// Check(mat)


// function Prime(newMatrix){
//     console.log(newMatrix)
//     console.log(newMatrix[0][0])
//     for(let i=0;i<newMatrix.length;i++){
//         for(let j=0;j<newMatrix[0].length;j++){

//            let isPrime=true
//             // if (newMatrix[i][j] > 1) {
//                 // console.log(newMatrix[i][j])
//             for (let i=2; i< newMatrix[i][j]; i++) {
//             if (newMatrix[i][j] % i == 0) {
//             isPrime = false;
//             break;
//              }
//               }
//               if (isPrime) {
//                  console.log(`${newMatrix[i][j]} is a prime newMatrix[i][j]`);
//              }
//              else {
//                  console.log(`${newMatrix[i][j]} is a not prime newMatrix[i][j]`);
//               }
// }
//                     }
//     }
//    Prime(mat)
   
function Check(newMatrix){
    for(let i=0;i<newMatrix.length;i++){
                for(let j=0;j<newMatrix[0].length;j++){
let a = newMatrix[i][j]
console.log(a)
var b = a.toString()   
console.log(b)               
let sum = 0
for(i=0;i<=b.length-1;i++){
sum += Math.pow(b[i],b.length)
console.log(sum)               
}
if(a==sum){
    console.log( "it is a armstrong number ")
}
else {
    console.log("it is not a armstrong number")
}
}
}
}
Check(mat)