import readlineSync from "readline-sync"


  function matrix(){
    let rows = readlineSync.questionInt("Enter number of rows:")
    let cols = readlineSync.questionInt("Enter number of cols:")
    console.log(`the matrix has ${rows} rows and ${cols} cols `)

    let matrix = new Array(rows)
    for(let i=0;i<matrix.length;i++){
        matrix[i] = new Array(cols)
    }
    
    for (let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            matrix[i][j]=readlineSync.questionInt(`enter element ${i},${j}:`)//[]
        }
    } 
   return matrix;
  
  }

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

