// datatypes
// Number
// String
// Boolean
// Ojbect 
// undefined
// Array


// comparision of var,let,const
// Hoisting

//string 
// var a = "hi i'am a "
// var b = '"joker"'
// console.log(a+b)

//slice
// let str = "Apple, Banana, Kiwi";
// let part = str.slice(7, 13);
// console.log(part)
//JavaScript program to swap two variables

//swap
// let a = 5, b = 6;
// [a, b] = [b, a];
// console.log(`${a} ${b}`);


// var a = 1, b = 5;
// a=a+b;
// b=a-b;
// a=a-b;
// console.log(a,b)


// let a = 1;
// let b = 5;
// a = a ^ b
// b = a ^ b
// a = a ^ b
// console.log(a)
// console.log(b)

//methods of string
//charAt()
// let chat = "hi, good morning"
// let letter = chat.charAt(9);
// let lastone = chat.charAt(chat.length-1);
// console.log(letter)
// console.log(lastone)

//concat 
// let T1 = "rope";
// let T2 = "way"
// let T3 = T1.concat(T2);
// let T4 = T1.concat(" ", T2);
// console.log(T4)

//inclde
// let A = "abcdef"
// let result = A.includes("e");
// let result = A.includes("g");
// console.log(result)

//indexof
// let Act = "vscode is a integrated development environment"
// let result = Act.indexOf("is")
// let result = Act.indexOf("Is")
// console.log(result)

//length
// let Act = "vscode is a integrated development environment"
// console.log(Act.length)

//repeat
// let Name = "Rehmath"
// console.log(Name.repeat(10))

//replace 
// let text = "chekri is a good boy";
// console.log(text.replace(/chekri|good/gi, "bad"))

// local / global scope

// var a = 3 
// console.log(a)
// {
//     var a = 4
//     console.log(a)
//     a = 5
// }
// console.log(a)

//let 
// let a  = 4
// console.log(a)
// {
//     a = 5 
//     console.log(a)
// }


// let a  = 4
// console.log(a)
// {
//    let a = 5 
//     console.log(a)
// }
// console.log(a)

// let a  = 4
// console.log(a)
// {
//    let a = 5 
//     console.log(a)
// }
//    a = 7
// console.log(a)

//  var b  = 4
// console.log(b)
// {
//    let a = 5 
//     console.log(a)
//     var b = 7
//     console.log(b)
// }
// let a = 6
// console.log(a)

//const
// / no redefining
// const a = 5
// const a =6
// console.log(a)

// no reinstializing 
// var a =5
// const a = 5
// console.log(a)

// const a = 1
// console.log(a)
// {
//     let a = 2
//     console.log(a)
// }
// var b = 3
// console.log(b)
 
// imp
// let  a = 1;
// {
//     console.log(a)
//      {
//            console.log(b)
//          const b = 9;
//         // console.log(a)
//     }
//      console.log(a)
// }
//  console.log(a)


// Arrays

let a =["a",'b','c','d','e']
console.log(a)
console.log(a.length)
console.log(a[0])
console.log(a.slice(0,3))
console.log()
console.log()

