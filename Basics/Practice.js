// let n = 5;
// let a = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     a += " ";
//   }
//   for (let k = 0; k < 2 * i - 1; k++) {
//     a += "*";
//   }
//   a += "\n";
// }
// console.log(a);


// let n = 5;
// let string = "";
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < 2 * (n-i) - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);



// a =""
// let b = 8
// let c =""
// for(let i=9;i>=2;i--){
//     a=a+i
//     b=b-1
// for(let j=9;j>=i;j--){
//     c=c+" "
// }
// console.log(`${a} * 9 + ${b}`+`${c}=`)
// }


// let create = new Array(10)
// console.log(create)



// Date

// var a = new Date()
// console.log(a)
// a.getDay()

// input = "pass9"
// var a = /[a-z]/.input
// console.log(a)

// console.log(1+1+1+1)

// console.log(1+'1')

// console.log('1'+1+1+1)

// console.log(1+'1'+1+1)

// console.log(1+1+'1'+1)

// console.log(1+1+1+'1')


// console.log(false + false)
// console.log(false + true)
// console.log(false + 0)
// console.log(true+ 0)
// console.log(1+ true)

// console.log(12+'hi')
// console.log('12' + 'hi')
// console.log('hi'+12)

// console.log('100' + 1 + 2 + '3' + 4) 
// console.log(100 + 1 + 2 + '3' + 4) 

// console.log('1' + '2') 
// console.log('1' + 2) 
// console.log(1 + '2')  
// console.log(100 + 1 + '2')  //
// console.log('100' + 1 + '2')  
// console.log('100' + 1 + 2)  

// //logical equality - values
// console.log(0==1) //f
// console.log(100==10) //f
// console.log(0.0==0) //t
// console.log('0'=='zero') //f
// console.log('0'=='0') //t

// console.log('0'=='0.0')
// console.log('o'=='o')
// console.log('oil'=='oil')
// console.log('oil'=='oli')

// console.log('true'=='true')
// console.log('false'=='0')

// console.log('false'==false) //f
// console.log(false==0) //t
// console.log(true==1) //t
// console.log(true==10) //t


// // //Strict equality - values+type
// console.log(00===0) //t
// console.log(0.0===0) //t
// console.log(0===false) //f
// console.log('zero'===0) //f
// console.log('0'==='0') //t
// console.log(true!==1) //f

// var a=40,b=25
// console.log(a&b)


// var sum=0
// while(true){
//     let value =0;
//     if (!value) break;
//     sum+=value;

// }
// console.log('sum:'+sum);



// n = 87
// a=n.toString(2);
// console.log(a)

// x =  new Date
// console.log(x)


// function  num(n){
//     if(n==0) return false
// }
// console.log(num (0))


// let A  = "HELLO"
// A.split()
// b = []
// c=[]
// for(i=0;i<A.length;i++){
//   b.push(A.charCodeAt(i))
// }
// // console.log(b)
// for(i=0;i<A.length;i++){
//     c.push(b[i].toString(2))
//   }
// //   console.log(c)
//   empty = []
//   for (i=0;i<c.length;i++){
//   var n = '0'
//   n += c[i]
//   empty.push(n)
// }
// console.log(empty)


// let d = empty.join("")
// let e = (d.match(/.{1,6}/g));
// console.log(d)

// for (i=0;i<e.length;i++){
//     n = "0"
// while(e[i].length<6){
//     // console.log(e[i])
//     e[i]+= n
// // count++
// }
// }
// console.log(e)

// f = []
// for (i=0;i<e.length;i++){
//     f.push(parseInt(e[i],2))
// }
// console.log(f)

// let G = []
// let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012345789+/"
// for(i=0;i<e.length;i++){
// G.push(str.charAt(e[i]))
// }
// console.log(str.charAt(e[i]))


// function base64_decode(s)
// {
//   var base64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
//   // remove/ignore any characters not in the base64 characters list
//   //  or the pad character -- particularly newlines
//    s = s.replace(new RegExp('[^'+base64chars.split("")+'=]', 'g'), "");

//   // replace any incoming padding with a zero pad (the 'A' character is zero)
//   var p = (s.charAt(s.length-1) == '=' ? 
//           (s.charAt(s.length-2) == '=' ? 'AA' : 'A') : ""); 
//   var r = ""; 
//   s = s.substr(0, s.length - p.length) + p;

//   // increment over the length of this encoded string, four characters at a time
//   for (var c = 0; c < s.length; c += 4) {

//     // each of these four characters represents a 6-bit index in the base64 characters list
//     //  which, when concatenated, will give the 24-bit number for the original 3 characters
//     var n = (base64chars.indexOf(s.charAt(c)) << 18) + (base64chars.indexOf(s.charAt(c+1)) << 12) +
//             (base64chars.indexOf(s.charAt(c+2)) << 6) + base64chars.indexOf(s.charAt(c+3));

//     // split the 24-bit number into the original three 8-bit (ASCII) characters
//     r += String.fromCharCode((n >>> 16) & 255, (n >>> 8) & 255, n & 255);
//   }
//    // remove any zero pad that was added to make this a multiple of 24 bits
//   return r.substring(0, r.length - p.length);
// }

// console.log(base64_decode("chethan"))


// let A = ""
// for(let i=65 ; i<91 ; i++){
// A += String.fromCharCode(i)
// }
// for(let i=97 ; i<123 ; i++){
// A += String.fromCharCode(i)
// }
// for(let i=48 ; i<58 ; i++){
// A += String.fromCharCode(i)
// }
// A += String.fromCharCode(43)
// A += String.fromCharCode(47)
// console.log(A)