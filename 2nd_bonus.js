//2nd_bonus.question
//printing multi tables using for loop
// for (var table = 2; table <= 5; table++) {
//    for (var i = 1; i <= 10; i++) {
//    console.log(table + " * " + (i) + " = " + (table * (i)));
//    }
//    console.log("----------");
// }

// printing tables using while loop
// var table = 2                                                                // intialization
// while(table <= 5){                                                           // condition: if table value is less than 5 then execute
//    i = 1                                                                     // intializing "i" value
//    while(i <= 10){                                                           // condition: if "i" value is less than or equal to 10 then execution happens
//    console.log(table + " * " + (i) + " = " + (table * (i)));    
//    i++;                                                                      // Increment
//    }
//    table++;                                                                  // Increment
//    console.log("----------");                                                // adding line between each iteration
// }

//1st.question
// var a = "8"                                                               // input
// if((a>=100) && (a<1000)){                                                 //condition: 3 digit number exist only in between 100 to 1000
//    console.log(`${a} is  a three digit number`)
// }
// else if((a<=100) || (a>1000)){                                            // else if case: not a 3 digit number
//    console.log(`${a} is not a three digit number`)
//    // break;
// }
// else {                                                                    //else case: invalid
//    console.log("not a valid number")
// }

// }


//2nd.question
// var a = 12345;                                                            // initializing var value as 12345
// var count = 1;                                                            // initializing count value as 0

//   while (a / 10 >= 1) {                                                   // if value of a is >= 1 after dividing with 10
//     a /= 10;                                                              // updating a value
//     ++count;                                                              // Increment
//   }
//   console.log(count)                                                      // output


//3rd.question
// var a = 74;                                                                  // 
// var pr = "false"                                                             // temporary flag it means some condition exists

// if(a>75){                                                                    // condition: if a>75 then execute
//    console.log("allow to exam")
// }
// else if((a<75) && pr == "true" ){                                            // condition: if a<75 and (temp flag is true) execute / if flag is false then no execution
//    console.log("allow to exam")
// }
//  else{                                                                       // else 
//    console.log("not allowed to exam")
//  }


 //4th.question
//  const num=22;                                                                 
//  let flag=true;//flg                                                           // temporary flag it means some condition exists
// if (num === 1) {                                                               // if the given number is equal to one then it is not a prime nor composite number
//     console.log("1 is neither prime nor composite number");                  
// }
// else if (num > 1) {                                                            // if a num is greater than one 
//     for (let i = 2; i < num; i++) {                                            // it will run untill the number is less than given number 
//         if (num % i == 0)                                                      // if the num divide by itself and == 0 then execute 
//         //not to be multiple of any number
//             flag = false;                                                      
//             break;
        
//     }
//     if(flag){                                                                   // if flag is true
//         console.log(`${num}  is prime number`)
//         }
//     else{                                                                       // if flag is false
//         console.log(`${num}   is not a prime number`)
//         }
//  }
// else{                                                                           // if given number is less than zero
//  console.log("not a positive integer")
//     }


