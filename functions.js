////ques-1
////WAP to Check whether given year is a leap year or not?

// function leap(year){
// if((year%4)==0){
//     console.log("leap year")
// }
// else{
//     console.log("not a leap year")
// }
// }
// leap(2022)

 

////ques-2
////WAP to check whether given string is a palindrome or not?

// function palindrome(word){

// var empty = []
// var rword = []

// for (var i =0; i<word.length; i++){
//     empty.push(word[i]);
// }

// for (var i =0; i<word.length; i++){
//     rword += empty.pop();
// }

// if(rword === word){
//     console.log(word+ " is a palindrome")
// }
// else {
//     console.log(word+ " is not a palindrome")
// }
// }

// palindrome("wow")



////ques-3
////WAP to find sum of all the digits of given input number? 

// function sum(N) {
//     let a = 0
//     var sap =  []
    
//     while (N > 0) {
//         sap.push(N % 10);
//        N = Math.trunc(N / 10);
//     }

//     console.log(sap)
//     for(i=0;i<=sap.length-1;i++){
//     //   console.log(sap[i])
//         a+=sap[i]
//     }
//     console.log(a)
    
// }

// sum(5464545)


////ques-4
////WAP to delete all the positive numbers from the arr

// let arr = [2,-8,5,-7,2,-2]
// function remove(){

//     arr.sort(function(a,b){return a - b })
//     // console.log(arr)

//     for(i=arr.length-1;i>=0;i--){
//     if(arr[i]<0){
//         arr.pop()
//     }
//     }
//     console.log(arr)
// }

// remove()



////ques-5
////WAP to remove duplicates from the given array?

// var a = [1,5,8,9,7,5,1];
//     function Duplicates(a) {
//         var empty = [];
//         for(i=0; i < a.length; i++){ 
//             if(empty.indexOf(a[i]) === -1) { 
//                 empty.push(a[i]); 
//             } 
//         }
//         return empty;
//     }
 
//     console.log(Duplicates(a));


//// another method
// let a = [1,8,6,8]
// for (i=0;i<a.length;i++){            // 0 1 2 3 4 5 
// for (j=1;j<=a.length-1;j++){        // 1 2 3 4 5 6
//         if(a[i]===a[j]){
//             console.log(i,j)

//             console.log(a[i],a[j])
//             a.splice(j,1)
//         }
//     }
//     console.log(a)
// }



    