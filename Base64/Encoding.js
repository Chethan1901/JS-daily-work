// import readlineSync from "readline-sync";

// function Encode(){
//    let A = readlineSync.question("Enter the string:- ")

//    let B = A.split("");
//    console.log(`splitted given string:- ${B}`)

//    let ASCII = B.map((char) => char.charCodeAt());
//    console.log(`ASCII:- ${ASCII}`)

//    let BI = ASCII.map((num) => num.toString(2));
//    console.log("Binary Codes: ", BI);

//    let BIT8 = BI.map((bin) => {
//     while (bin.length < 8) {
//       bin = "0" + bin;
//     }
//     return bin;
//     });
//     console.log("Binaries in 8 Bits are : ",BIT8 );

//    let oneBI = BIT8.join("").split("");
//    console.log(`joining :- ${oneBI}`);

//    let BIT6 = [];
//    while (oneBI.length != 0) {
//      BIT6.push(oneBI.splice(0, 6).join(""));
//    }
//    console.log("Binaries in 6 Bits are : ", BIT6);

//    let CheckLast = BIT6[BIT6.length - 1];
//    if (CheckLast.length != 6) {
//     var counter = 0;
//     while (CheckLast.length < 6) {
//       CheckLast = CheckLast + "0";
//       counter++;
//     }
//     BIT6[BIT6.length-1]=CheckLast;
//     }
//   console.log("Binaries in 6 Bits are : ", BIT6);

//    let BiTOdec=BIT6.map((str)=>parseInt(str,2));
//   console.log("Base 64 Decimals : ",BiTOdec);
 

//    let base64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

//    let base64last = BiTOdec.map((dec)=>base64[dec]);
//   console.log("Base 64 String : ",base64last);
//   if(counter==2){
//     base64last.push("=");
//   }else if (counter==4){
//     base64last.push("==");
//   }

//   let finalBase64=base64last.join("");
//   console.log("Your Base 64 Output is : ",finalBase64);


// }
// // Encode()

// export default Encode


