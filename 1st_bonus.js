//palindrome
// var emptb = []
// var word = "bcba"
// var rword = ""

// for (var i =0; i<word.length; i++){
//     emptb.push(word[i]);
// }
// // console.log(word.split(" "))
// empty = word.split("");

// for (var i =0; i<word.length; i++){
//     rword += empty.pop();
// }

// if(rword === word){
//     console.log(word+ " is a palindrome")
// }
// else {
//     console.log(word+ " is not a palindrom")
// }


// Assigment questions
//1.question

// 1st method                                           
// var a = -8                                                                  //intialization
// console.log(Math.abs(a))                                                    //using in-built function 

// 2nd method
// var a = "-8"                                                            
// var b = +a                                                               //typecasting string to number (if input is a string)
// if (b<0) {                                                               //if(condition)
//     console.log(-(b))                                                    //statement
// }
// else {                                                                   //else case 
//     console.log(b)
// }

//2.question

// var a1 = 2;                                                               
// var a2 = 2;
// var b1 = 2;
// var b2 = 2;
// var c1 = 4; 
// var c2 = 6;

// var a = Math.sqrt((Math.pow((a2-a1),2))*(Math.pow((b2-b1)),2))          //calculating distance between 'a' and 'b' using distance formula
// var b = Math.sqrt((Math.pow((b2-b1),2))*(Math.pow((c2-c1)),2))          //calculating distance between 'b' and 'c' using distance formula
// var c = Math.sqrt((Math.pow((c2-c1),2))*(Math.pow((a2-a1)),2))          //calculating distance between 'c' and 'a' using distance formula


// if (a + b <= c || a + c <= b || b + c <= a){                            // In traingle sum of two sides should not be less than or equal to third side
//     console.log("it is not a triangle")                                 // statement

// }
// else 
//     {
//         if (a == b && b == c){                                          // If three sides are equal(both conditions should be true in AND)
//             console.log("Equilateral Triangle");
//         }
//         else if (a == b || b == c || c == a) {                          // If any two sides are equal(one should be true in OR) 
//             console.log("Isosceles Triangle");
//         }
    
//         else {                                                          
//             console.log("Scalene Triangle");
//         }
// }


// 3.question

// const amount = 100;                                                     // Intialization & defining & declaring using const
// var quantity = 12;                                                           
// var price = amount*quantity;                                     

// if(price>1000){                                                         // If price is greater than thousand then if-condition is true
//     Discount = (10/100)*price ;
//     var Discountprice = price - Discount                                // finalprice after discount applied to the price
//     console.log(Discountprice)
// }
// else {
//     console.log(price)                                                  // else case 
// }

//4.question

// let a = 2.6                                                                                                                 
// let b = 4

// switch (8) {                                                            // Using switch case
//   case 0:                                                               // case 0
//     addition = (a+b);                                                   // adding two numbers
//     console.log(addition)
//     break;

//   case 1:                                                               //case 1
//     subtraction = (a-b)                                                 // subtracting two numbers
//     console.log()
//     break;

//     case 2:                                                             //case 2
//     multiply = (a*b);                                                   // multiplying two numbers 
//     console.log(multiply)
//     break;

//     case 3:                                                             //case 3
//     divide = (a/b)                                                      //dividing two numbesr
//     console.log(  divide)
//     break;

//     case 4  :                                                           //case 4
//     squareroot = a**(1/2);                                              // square root of a number
//     console.log(squareroot)
//     break;

//     case 5:                                                            //case 5
//     exponentiation = (a**b);                                           // power of a number
//       console.log(exponentiation)
//     break;

//     case 6:                                                            //case 6
//     floory = Math.floor(a)                                             //rounds a number DOWN to the nearest integer.
//     console.log(floor)

//     case 7:                                                            //case 7
//     ceili = Math.ceil(a)                                               //rounds a number UP to the nearest integer.
//     console.log(ceil)
//     break;

//   default:                                                             // if no value is equal to given case then nothing happens by default 
//                                                                        //if there is no match, the default code block is executed.

// }


//5

// let root1, root2;

// let a = 1;                                                                                          //Intializing the value of a 
// let b = 8;                                                                                          //Intializing the value of b
// let c = 16;                                                                                          //Intializing the value of c

// let D = b * b - 4 * a * c;                                                                          //to find the nature of roots

// if (D > 0) {                                                                                        //condition: if roots are > 0
//     root1 = (-b + Math.sqrt(D)) / (2 * a);                                                          //Intializing  root1
//     root2 = (-b - Math.sqrt(D)) / (2 * a);                                                          //Intializing  root1
//     console.log(`The roots of quadratic equation ${root1} and ${root2} are real and different`);    //statement
// }

// else if (D == 0) {                                                                                  //condition: if roots are equal to zero 
//     root1 = root2 = -b / (2 * a);
//     console.log(`The roots of quadratic equation  ${root1} and ${root2} are real and equal`);       //statement
// }


// else {                                                                                              //else case
//     let realPart = (-b / (2 * a)).toFixed(2);                                                       //Intializing real part
//     let imagPart = (Math.sqrt(-D) / (2 * a)).toFixed(2);                                            //Intializing  imaginary part

//     console.log(
//     `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i are Imaginary`
//   );
// }


