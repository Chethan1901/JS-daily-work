import readlineSync from "readline-sync";

function matrix(){

let R = readlineSync.questionInt("enter Rows:")
let C = readlineSync.questionInt("enter Cols:")
console.log(`given matrix is in ${R} * ${C}`)

let create = new Array(R)
for(let i=0;i<create.length;i++){
    create[i] = new Array(C)
}


for(let i=0;i<create.length;i++){
    for(let j=0;j<C;j++){
        create[i][j] = readlineSync.questionInt(`enter element of ${i},${j}:`)
    }
}
console.log(create)
return create;
}

// let mat = matrix()
function PrintMatrix(create){
    for(let i=0;i<create.length;i++){
        let A = ""
        for(let j=0;j<create[0].length;j++){
            A += create[i][j]+" "
        }
        console.log(A)
    }
}

// PrintMatrix(mat)

export { matrix,PrintMatrix}