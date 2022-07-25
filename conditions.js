// Control Flow
// 1. Sequential
// 2. Conditions
// 3. Iterations

// Condition 
// if condition
// if - else condition
// if - else if - else  conditions
// // Nested conditions

// if (5) {
//     console.log("statement")
// }

// if("zero") {
//     console.log("statement")
// }

// if([]) {
//     console.log("statement")
// }

// if(0) {
//     console.log("statement")
// }

// if ((0) && []) {
//     console.log("one")
// }

// if (8&7) {
//     console.log("tw0")
// }

// if ([1,2]==[2,1])
// {
//     console.log("sndvahsv")
// }

// if ((2 =='2') | ((2) == 2.0)){
//     console.log("typecasting")
// }

// if ((4^2)<<(6|7)){
//     console.log("hey")
// }

// var a=3,b=5
//    if(a&b | b|a){
//     console.log("jgdhfj")
//    }

//    console.log(a&b | b|a)

// var a=5,b=7
// if (a>=b &  a<b ){
//     console.log()
// }

// if ("abc" === "Abc"){    //try it with == & ===
//     console.log("hbdskhk")
// }

// let a = 0                      // use strings as well         // positive negative  
// if (a>0){
//     console.log("positive")
// }
// else if (a<0){
// console.log("negatiive")
// }

// else {
//     console.log("zero")
// }

// let a = -4                                  //even odd              
//  if ((a%3)==0){
//     console.log("of 3")
//     }
    
//   else  if ((a%5)==0){
//         console.log("0f 5")
//         }
// else {
//     console.log("not questioned")
// }

// let a = 5                                     //use strings as well 
// let b = 5

// if(a>b){
// console.log("a is greater")
// }
// else if (b>a)
// {
//     console.log("b is greater")
// }
// else {
//     console.log("equal")
// }


//bonus question

let a = 7
let b = 4
let c = 5

if (a==b && b==c)
{
    console.log("a,b,c are equal") 
}
else if (a==b && c<a)
{
    console.log("a,b are equal and C is the smallest number'") 
}
else if (b==c && a<b)
{
    console.log("b,c are equal and A is the smallest number'") 
}
else if (c==a && b<c)
{
    console.log("a,c are equal and B is the smallest number'") 
}
else if (a > b && a > c) 
{
		console.log("a is the biggest number'") 
} 
else if (b > a && b > c) {

		console.log("b is the biggest number'") 
} 
else 
{
        console.log("c is the  biggest number")
}

// palindrome check using push,pop and if conditions
var empty = []
var word = "nmpr"
var rword = ""

for (var i =0; i<word.length; i++){
    empty.push(word[i]);
}

for (var i =0; i<word.length; i++){
    rword += empty.pop();
}

if(rword === word){
    console.log(word+ "is a palindrome")
}
else {
    console.log(word+ "is not a palindrome")
}

