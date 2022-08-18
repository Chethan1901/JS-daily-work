// functions
//syntax 


// function declaration
// function function_name(parameters){
//     statement/task
// }

// //function defination
// function_name(arguments)                //function callback


// const myArray = [20, 23, 27,768];

// let maxElement = myArray[0];
// for (let i = 1; i <= 3; i++) {
//     if (myArray[i] > maxElement) {
//         maxElement = myArray[i];
//     }
// }

// console.log(maxElement); 


// a = new Array(1,2,3,4,5)
// console.log(a)

// const myArray = [20, 23, 27,30];

// function checkAge(age){
// return age > 23
// }


// 0 1 1 2 3 5 8 13 21............

// function fib(n){

//      let n1 = 0
//      let n2 = 1
//     //  let n = 11
//     output = ""
//     for (let i = 1; i <= n; i++) {
//         output += `${n1} `;
//         next = n1 + n2;
//         n1 = n2;
//         n2 = next;
//     }
//     console.log(output)
// }

// fib(9)

// let a = "153"
// var b = a.split("")                               //toString().
// // var c = b.map(Number)
// console.log(`length:- ${b.length}` )
// sum = 0
// console.log(b)
// // // console.log(b)
// for(i=0;i<=b.length-1;i++){
// sum += Math.pow(b[i],b.length)
// // console.log(sum)
// }
// if(a==sum){
//     console.log("it is a armstrong number ")
// }
// else {
//     console.log("it is not a armstrong number ")
// }
// console.log(sum)

//// Recursion

// i = 0
// function f1(){
//     if(i==10){
//         return
//     }
//     else{
//         console.log(i)
//         return f1(i++)
//     }
// }

// f1()


// function f(x,y){
//     if(x==0) return y;
//     return f(x-1,x+y)
// }
// console.log(f(5,6));

// function f(n){
//     a=""
//     if(n==0) return;
//     a+=(n%2)
//     console.log(a)
//     f(Math.floor(n/2))
// }
// console.log(f(25))
// console.log(a)



// function f(x,y){
//     if (y==0) return 0;
//     return (x+f(x,y-1))
// }
// console.log(f(20,10))

// function f(x,y){
//     if (y==0) return 0;
//     return (x+f(x,y-1))
// }
// function f2(a,b){
//     if (b==0) return 1;
//     return f(a,f2(a,b-1))
// }
// console.log(f2(4,5))


// function f(n){
//     if (n==0 || n==1) return n;
//     if (n%3 !=0) return 0;
//     return f(n/3)
// }
// console.log(f(26))


// function  robot(n,a,b){
//     if (n<=0){return;}
//     robot(n-1,b,b+n)
//     console.log(n,a,b)
//     robot(n-1,b,a+n)
// }
// robot(2,5,2)


// function count(n) {
//     var d=1
//     console.log(n)
//     console.log(d)
//     d++;
//     if(n>1){count(n-1)}
//     console.log(d)
// }
// count(3)


// function factorial(n){
//     if ((n==0) || (n==1)) return 1
//     return n*factorial(n-1)
// }
// console.log(factorial(1))



//  function fib(n){

//          let n1 = 0
//          let n2 = 1
//         //  let n = 11

//         output = ""
//         for (let i = 1; i <= n; i++) {
//             output += `${n1} `;
//             next = n1 + n2;
//             n1 = n2;
//             n2 = next;
//         }
//         console.log(output)
//     }
    
//     fib(9)



// function fibonacci(num) {
//     if(num < 2) {
//         return num;
//     }
//     else {
//         return fibonacci(num-1) + fibonacci(num - 2);
//     }
// }

// console.log(fibonacci(10))

// const D = 10;

// if(D <=0) {
//     console.log('Enter a positive integer.');
// }
// else {
//     for(let i = 0; i < D; i++) {
//         console.log(fibonacci(i));
//     }
// }


// function sum(n) {
//     if(n==1) return 1;
//     return n + sum(n-1)
// }
// console.log((sum(5)))


// function count(n) {
// if (n<0) return 1;
// return Math.trunc(count(n%10))
// }

// console.log(count(12))



// function count(n){
// if(n==0){
//     return 0
// }
// return (n%10)+count(Math.floor(n/10))
// }

// console.log(count(125))


//// multiple tables using recursion
// let table = (n) => {
//     if(n==11) return ;
//     for(i=1;i<=10;i++)
//     console.log(`${n}x${i}=${n*i}`)
//     return table(n+1);
// }

// table(5)


////Regular function
// function hello(){
// return "hi hello good morning"
// }
// console.log(hello())

//// ES6 
// hello = function(){
// return "hi hello good morning"
// }
// console.log(hello())

////Arrow function
// hello = () => {
// return "hi hello good morning"
// }
// console.log(hello())

////for in 
// text=""
// const person = {fname:"John", lname:"Doe", age:25};                                                             // keys
// for(let i in person){
//     text+=person[i] + ' '
// }
// console.log(text)

////for of 
// text=""
// const person = ["John", "Doe", "25"];                                                                            // values
// for(let i of person){
//     console.log(i)
// }


// ////for each
// 


// multiply two numbers without using * operator
