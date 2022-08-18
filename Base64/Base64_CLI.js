import readlineSync from "readline-sync";

function Encode(){
  let A = readlineSync.question("Enter the string:- ")

  let B = A.split("");
  console.log(`splitted given string:- ${B}`)

  let ASCII = B.map((char) => char.charCodeAt());
  console.log(`ASCII:- ${ASCII}`)

  let BI = ASCII.map((num) => num.toString(2));
  console.log("Binary Codes: ", BI);

  let BIT8 = BI.map((bin) => {
   while (bin.length < 8) {
     bin = "0" + bin;
   }
   return bin;
   });
   console.log("Binaries in 8 Bits are : ",BIT8 );

  let oneBI = BIT8.join("").split("");
  console.log(`joining :- ${oneBI}`);

  let BIT6 = [];
  while (oneBI.length != 0) {
    BIT6.push(oneBI.splice(0, 6).join(""));
  }
  console.log("Binaries in 6 Bits are : ", BIT6);

  let CheckLast = BIT6[BIT6.length - 1];
  if (CheckLast.length != 6) {
   var counter = 0;
   while (CheckLast.length < 6) {
     CheckLast = CheckLast + "0";
     counter++;
   }
   BIT6[BIT6.length-1]=CheckLast;
   }
 console.log("Binaries in 6 Bits are : ", BIT6);

  let BiTOdec=BIT6.map((str)=>parseInt(str,2));
 console.log("Base 64 Decimals : ",BiTOdec);


  let base64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  let base64last = BiTOdec.map((dec)=>base64[dec]);
 console.log("Base 64 String : ",base64last);
 if(counter==2){
   base64last.push("=");
 }else if (counter==4){
   base64last.push("==");
 }

 let finalBase64=base64last.join("");
 console.log("Your Base 64 Output is : ",finalBase64);


}




function Decode(){

let Base64String = readlineSync.question("Enter the Base64 string:- ") 

let SplitString = Base64String.split("") 
console.log("the given string:- ",SplitString)

let Base64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

let value = []
for(let i=0;i<SplitString.length;i++){
    for(let j=0;j<Base64.length;j++){
        if(SplitString[i]==Base64[j]){
            value.push(Base64.indexOf(Base64[j]))
        }
    }
}
console.log("the Base64 values:- ",value)

let binaryCodes = value.map((num) => num.toString(2));
console.log("Binary Codes: ", binaryCodes);

for (let i=0;i<binaryCodes.length;i++){
    let n = "0"
    while(binaryCodes[i].length<6){
        binaryCodes[i] = n + binaryCodes[i]
    }
    }
    console.log("6bit:- ",binaryCodes)

let oneBinary = binaryCodes.join("").split("");
console.log(oneBinary)

let binaryCode8Bit = [];
  while (oneBinary.length != 0) {
    binaryCode8Bit.push(oneBinary.splice(0, 8).join(""));
  }
  console.log("Binaries in 8 Bits are : ", binaryCode8Bit);

let BitoDec = binaryCode8Bit.map((num) => parseInt(num,2));
console.log("Decimals:- ", BitoDec);

let lastElement = BitoDec[BitoDec.length - 1];
let sum = 0 
for(let i=0;i<lastElement;i++){
 sum += lastElement[i]
}

if(sum == 0){
    BitoDec.pop()
}

let chars = BitoDec.map((num) => String.fromCharCode(num));
console.log("Decimals:- ", chars);

let final = chars.join("")
console.log("final :-",final)

}

function user(){
  let input = readlineSync.questionInt("Do you want to continue ")
}

let input = readlineSync.questionInt("Enter 0 to Exit \nEnter 1 to Encode \nEnter 2 to Decode \n")


switch (input) {
  case 1: {
    Encode();
    user();
    break;
  }
  
  case 2: {
    Decode();
    user();
    break;
  }

  case 0: {
    process.exit()
    break;
  }

  default: {
  }
}
