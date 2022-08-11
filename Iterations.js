// // iterations 
// --> intialization
// --> while(condition, terminates till condition satisfy){
//   //  statement
//   // Increment/decrement (step  value)  
// }


//print 1-15

// i = 1                         
// while(i<=5){                    
//     console.log(i)                 
//     i++
// }

// at initial stage
// i = 1; i<=5; 1 (2)
// i = 2; i<=5; 2 (3)
// i = 3; i<=5; 3 (4)
// i = 4; i<=5; 4 (5)
// i = 5; i<=5; 5 (6)
// i = 6; i<=5; condition not satisfy so no further iteration


//print 10-1

// i = 10
// while(i>=1){
//     console.log(i)
//     i--
// }

 // print even between 50-100
// i = 50 
// while(i<=100){
//     console.log(i)
//     i+=2
// }

 // print odd between 50-100
//  i = 51 
//  while(i<=100){
//      console.log(i)
//      i+=2
//  }


 // print even between 50-100
// count = 1
//  i = 50 
// while(i<=100){
//     if((i%2)==0){
//     console.log(i)
//     console.log(`count is ${count++}`)
// }
//     i++
// }

 // print odd between 50-100
//  i = 51
//  while(i<=100){
//     if((i%2)==1){
//      console.log(i)
//     }
//     i++
//  }



//  i = 1
//  while(i<=200){
//     if((i%7)==0){
//      console.log(i)
//     }
//     i++
//  }


// print 2 table


// count = 0
//  i = 1
//  while(i<=20){
//     if((i%2)==0){
//     count++
//     console.log(`2 * ${count} = ${i}`)
//     }
//     i++
//  }



//  switch (2) {
//         case 2:
//         count = 0
//         i = 1
//         while(i<=20){
//            if((i%2)==0){
//            count++
//            console.log(`2 * ${count} = ${i}`)
//            }
//            i++
//         }
    
//         break;
    
//          case 3:
//         count = 0
//         i = 1
//         while(i<=30){
//            if((i%3)==0){
//            count++
//            console.log(`3 * ${count} = ${i}`)
//            }
//            i++
//         }
    
//         break;

//         case 4:
//         count = 0
//         i = 1
//         while(i<=40){
//            if((i%4)==0){
//            count++
//            console.log(`4 * ${count} = ${i}`)
//            }
//            i++
//         }
    
//         break;

//         case 5:
//         count = 0
//         i = 1
//         while(i<=50){
//            if((i%5)==0){
//            count++
//            console.log(`5 * ${count} = ${i}`)
//            }
//            i++
//         }
    
//         break;
//         default:
//     text = "No table";
// }

//  


// a = "abcd"
// i = 0;
//  while(i <=(m.length-1)){
//      console.log()
//     i+=2
//  }

// a = {1:'abc',2:'bcd',3:'cde',4:'def',}


// m = Object.keys(a)
// n = Object.values(a)

// i = 0;
//  while(i <=(m.length-1)){
// console.log(`${m[i]}:${n[i]}`)
// i++
//  }


// for loop 
// for (Intialization,condition,inc/dec){
//     

// for (i=1;i<=5;i++){                         
//     console.log(i)
// }

// if i = 1  1<=5   1+1=2
// if i = 2  2<=5   2+1=3
// if i = 3  3<=5   3+1=4
// if i = 4  4<=5   4+1=5
// if i = 5  5<=5   5+1=6
// if i = 6  6!=5   no inc happens

// for (i=10;i>=5;i--){
//     console.log(i)
// }


// for (i=50;i<=100;i+=2){
//         console.log(i)
//     }

// for (i=51;i<=100;i+=2){
//         console.log(i)
//     }


// count = 1
// for(var i=50; i<=100;i+=2){
//     ((i%2)==0);
//     console.log(i)
//     console.log(`count is ${count++}`)
// }

// var a = "code"
// s=""
// for(i=0;i<=a.length-1;i++){
//     s=s+a[i]+"**"
// }
// b = s.slice(s[1],s.length-2)
// console.log(b)

// var a ="1"
// b=""
// for(i=1;i<=5;i++){
//    b=a+b
//    console.log(b)
// }

// var a ="*"
// b=""
// for(i=1;i<=10;i++){
//    b=a+b
//    console.log(b)
// }


// var a = "";                                                             //pattern
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//    a+=j;
//   }
//  a+="\n";
// }
// console.log(a);


// var a ="* * * * * "                                           //do it another way
// // var b='';
// for (i=0;i<=a.length-1;i++){
//     b=a.slice((i))
//     console.log(b)
// }


// var a ="1"
// for(let i =0;i<=10;i++){

//    a+=i
//     console.log(a)
// }

// a = '';                                                                            //pattern Rtriangle
// for(let i=1; i<=5; i++){
//   for(let j=1; j<=5-i; j++){
//     a += ' ';
//   }
//   for(let k=1; k<=i; k++){
//     a += '*';
//   }
//   a += '\n';
// }
// console.log(a)

// count = 0
// for(let i=1; i<=5; i++){
// count++
// console.log(count)
// }

// n =10                                                                                        //print multiples
//  for(let i=1;i<=n;i++){
//     a=""

//   for(let j=1;j<=i;j++){
//     // console.log(i*j)
//   a = a + (i*j) + " "

//   }
//    console.log(a)
//  }

// for(let i =1; i<=10;i++){                                                                        //break usage
//     if(i==5)continue;
//     console.log(i)
// }

// i=1
// while(i<=10){
//     console.log(i)
//     if(i==5){
//         break;
//     }
//     i++;
// }

// i=1
// while(i<=10){
//     if(i==5){
//         i++
//        continue;
//     }
//     console.log(i)
//     i++;
// }


// let n = 5;
// let a ="";

// for(let i=0;i<5;i++){
//     for(let j=0;j<n;j++){
//         if(i===0 || i=== n-1){
//             a+="*";
//         }
//         else{
//             if(j===0 || j=== n-1){
//                 a+="*";
//         }
//         else{
//             a+=" ";
//         }
//             }
//     }
//     a+="\n"
// }
// console.log(a)


// for (let i=1;i<=10;i++){
//     console.log(i,11-i)
// }
// // console.log(i)
// for (;i<=50;i++){
//     console.log(i,11-i)
// }

// for (let i=1,j=10; i<=10,j>=1;i++,j--){
//    console.log(i,j)
// }