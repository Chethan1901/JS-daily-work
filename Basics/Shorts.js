// hi, today we are learnig about how to reverse a string in js
//There are two ways to reverse a string in js
// the first method is by using for loop

// var str = "REVERSE"
// var empty = ""

// for(i=str.length-1;i>=0;i--){
//     empty += str[i]
// }

// console.log(empty)

// Second method is by using the inbuilt functions of js

var str = "REVERSE"
var empty;

empty = str.split('').reverse().join('')

console.log(empty)


// that's it for today, lets meet in next video..............