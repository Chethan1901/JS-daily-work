// * * * * *
// * * * *
// * * * 
// * *
// *


// a=""
// n=5;
// for(i=1;i<=n;i++){
//     for(j=0;j<=n-i;j++){
//         a+="* "
//     }
//     a+="\n"
// }
// console.log(a)



//     *
//    **
//   ***
//  ****
// *****

// a=""
// n=5;
// for(i=1;i<=n;i++){
//     for(j=0;j<=n-i;j++){
//         a+=" "
//     }
//     for(k=0;k<i;k++){
//         a+="*"
//     }
//     a+="\n"
// }
// console.log(a)




//     *
//    ***
//   *****
//  *******
// *********

// a=""
// n=5;
// for(i=1;i<=n;i++){
//     for(j=0;j<=n-i;j++){
//         a+=" "
//     }
//     for(k=0;k<i*2-1;k++){
//         a+="*"
//     }
//     a+="\n"
// }
// console.log(a)




// *********
//  ******* 
//   *****  
//    ***   
//     *

// n=5;
// a="";
// for(i=0;i<n;i++){
//   for(let j=0;j<i;j++){
//    a+=" ";
//   }
//   for(let k=0;k<2*(n-i)-1;k++){
//    a+="*";
//   }
//  a+="\n";
// }
// console.log(a);




// 1
// 11
// 111
// 1111
// 11111

// a=""
// for(i=5;i>=1;i--){
//         a+="1"
//     console.log(a)
// }




// 1
// 12
// 123 
// 1234
// 12345
// 123456
// 1234567
// 12345678

// a=""
// for(i=1;i<=8;i++){
//         a+=i
//     console.log(a)
// }




// 2  9
// 3  8
// 4  7
// 5  6
// 6  5
// 7  4
// 8  3
// 9  2
// 10 1

// for(i=2;i<=10;i++){
//     console.log(`${i} ${11-i}`)
// }



// 1
// 22
// 333
// 4444
// 55555

// for(i=1;i<=5;i++){
//     a=""
//     for(j=1;j<=i;j++){
//         a+=i
//     }
//     console.log(a)
// }



// 54321
// 4321
// 321
// 21
// 1

// n=5; 
// a="";
// for(let i=1;i<=n;i++){
//   for(let j=1;j<=n-i+1;j++){
//     a+=n-j+1;
//   }
//   a+="\n";
// }
// console.log(a);


// 1
// 2  3
// 4  5  6
// 7  8  9  10
// 11 12 13 14 15

// n=5
// a=""
// count = 1
// for(i=1;i<=n;i++){
//     for(j=1;j<=i;j++){
//     a+=count+" ";
//     count++
//     }
//     a+="\n"
// }
// console.log(a)


// 1  2  3  4  5
// 6  7  8  9
// 10 11 12
// 13 14
// 15

// n=5
// a=""
// count = 1
// for(i=5;i>=1;i--){
//     for(j=1;j<=i;j++){
//         if(count<9){
//         a+=count+"  ";
//         }
//         else{
//         a+=count+" ";
//         }
//     count++
//     }
//     a+="\n"
// }
// console.log(a)

// A 
// A A 
// A A A 
// A A A A 
// A A A A A

// a=""
// for(i=5;i>=1;i--){
//         a+="A"+" "
//     console.log(a)
// }




// A
// AB
// ABC
// ABCD
// ABCDE

// a="";
// for(i=1;i<=5;i++){
//     for(j=0;j<i;j++){
//         a += String.fromCharCode(j+65);
//     }
//     a+="\n"
// }
// console.log(a)



//   A
//  ABC
// ABCDE

// n=3
// a="";
// for(i=1;i<=n;i++){
//     for(j=0;j<n-i;j++){
//         a+=" "
//     }
//     for(k=0;k<2*i-1;k++){
//         a += String.fromCharCode(k+65);
//     }
//     a+="\n"
// }
// console.log(a)




//             1
//           2 3
//         4 5 6
//      7 8 9 10
//11 12 13 14 15

// let n =5                                                //copied
// let a = "";
// let count = 1;
// // External loop
// for (let i=1;i<=n;i++) {
// //   Internal loop
//   if(i<=4){
//      for(j=i;j<10;j++)
//      {
//         a+=' '
//       }
//      for (let j=1;j<=i;j++) {
//        a +=count+ '  ';
//        count++;
//        }
//      }
//    else{
//         for(j=i;j<n;j++)
//         {
//            a +='  '
//          }
//         for (let j=1;j<=i;j++) {
//           a +=count+' ';
//           count++;
//           }
//    }
//   a += "\n";
// }
// console.log(a);

// 1
// 2 4
// 3 6 9
// 4 8 12 16
// 5 10 15 20 25
// 6 12 18 24 30 36
// 7 14 21 28 35 42 49
// 8 16 24 32 40 48 56 64
// 9 18 27 36 45 54 63 72 81
// 10 20 30 40 50 60 70 80 90 100

// for (let i=1;i<=10;i++){
//     temp=''
//     for (let j=1;j<=i;j++){
//         temp = temp+ (i*j) + " "
//     }
//     console.log(temp)
// }

// 0 * 9 + 8        = 8
// 9 * 9 + 7        = 88
// 98 * 9 + 6       = 888
// 987 * 9 + 5      = 8888
// 9876 * 9 + 4     = 88888
// 98765 * 9 + 3    = 888888
// 987654 * 9 + 2   = 8888888
// 9876543 * 9 + 1  = 88888888
// 98765432 * 9 + 0 = 888888888


// console.log(`0 * 9 + 7        = 8`)
// for(i=9;i>=2;i--){
//     a=''
//     b=''
//     for(j = 9;j>=i;j--){
//         a=a+j
//     }for(k=2;k<=i;k++){
//         b=b+' '
//     }
//     console.log(`${a} * 9 + ${i-2}${b}= ${a*9+i-2}`)
// }


