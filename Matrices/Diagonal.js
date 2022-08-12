// import {MatrixInput,PrintMatrix} from './matrix_sum.js'


// function Diag_Matrix(){
//     let Matrix = MatrixInput('Matrix')
//     console.log(`Matrix is : `)
//     PrintMatrix(Matrix)

//     if(Matrix.length == Matrix[0].length){
//     let A=0
//     let B=0
//     for (let i=0;i<Matrix.length;i++){
//         for (let j=0;j<Matrix[0].length;j++){
//             if(i === j){
//                 A += Matrix[i][j];
//              }
//              if ((i + j) == (Matrix.length-1))
//                 B += Matrix[i][j];
//     }
//     }
//     // console.log(A)
//     // console.log(B)

//     if((A-B)==0){
//         console.log(`${A-B} is equal to zero`)
//     }
//     else{
//         console.log(`${A-B} is not equal to zero`)
//     }
// }
// else{
//     console.log("this is not a square matrix")
// }
// }
// Diag_Matrix()



// var newString = ' '
// console.log(newString.length)

// console.log(1 && true)

// function getMultiples(str) {
//     var digits = str.split('');
//     var digitsDiv3 = digits.map(function(number) {
//     return number / 3;
//     });
//     console.log(digitsDiv3);
//     var wholeNumbers = digitsDiv3.filter(function(number) {
//         console.log(number.toString().indexOf('.'))
//     return number.toString().indexOf('.') === -1;
//     });
//     console.log(wholeNumbers);
//     var multiplesOf3 = wholeNumbers.map(function(number) {
//     return number * 3;
//     });
//     console.log(multiplesOf3)
//     return multiplesOf3;
//     }
//     console.log(getMultiples('0123456789')[2])