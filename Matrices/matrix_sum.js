// import readlineSync from "readline-sync"


//   function matrix(){
//     let rows = readlineSync.questionInt("Enter number of rows:")
//     let cols = readlineSync.questionInt("Enter number of cols:")
//     console.log(`the matrix has ${rows} rows and ${cols} cols `)

//     let matrix = new Array(rows)
//     for(let i=0;i<matrix.length;i++){
//         matrix[i] = new Array(cols)
//     }
    
//     for (let i=0;i<rows;i++){
//         for(let j=0;j<cols;j++){
//             matrix[i][j]=readlineSync.questionInt(`enter element ${i},${j}:`)//[]
//         }
//     } 
//    return matrix;
  
  // }

// //   let b = matrix()

// //   let a = ""
// //   for (let i=0;i<b.length;i++){
// //     for(let j=0;j<b.length;j++){
// //       a += b[i][j] + " "
// //     }
// //      a+="\n"

// // }
// // console.log(a)


// let mat = matrix()
// function printmatrix(matrix){
//     for (let i=0;i<matrix.length;i++){
//         var res=""
//         for(let j=0;j<matrix[i].length;j++){
//             res+=(matrix[i][j])+" "
//         }
//         console.log(res)
//     }
// }
// printmatrix(mat)


////// sir program

import readlineSync from "readline-sync"
import colour from "colour-cli"


function MatrixInput(name){
    let rows = readlineSync.questionInt(colour.pink(`Enter ${name} number of rows: `))
    let cols = readlineSync.questionInt(`Enter  ${name} number of columns: `)
    console.log(`Given matrix is ${name} which has ${rows} x ${cols} dimension`)
    
    let Matrix = new Array(rows) //[_ _ _]
    // console.log(MatrixA.length)
    for (let i=0;i<Matrix.length;i++){
        Matrix[i] = new Array(cols)
    } //[[][][]]
    // console.log(Matrix)

    for (let i=0;i<rows;i++){
        for (let j=0;j<cols;j++){
            Matrix[i][j] = readlineSync.questionInt(`Enter element of ${name} ${i},${j}: `)
        }
    }
    return Matrix

}
// console.log(MatrixInput())
// MatrixInput()
// let mat = MatrixInput()
function PrintMatrix(matrix){
    for (let i=0;i<matrix.length;i++){
        var res = ""
        for (let j=0;j<matrix[i].length;j++){
            res+=(matrix[i][j])+' '
        }
        console.log(res)
    }
}
// PrintMatrix(mat)


// export default MatrixInput;
export {MatrixInput, PrintMatrix}