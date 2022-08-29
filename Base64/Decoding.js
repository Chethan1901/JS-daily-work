import readlinsync from "readline-sync"


function Decode(){

let Base64String = readlinsync.question("Decoding......... \nEnter the string:-  ") 

if(Base64String.length !== 0)
{
    let SplitString = Base64String.split("") 
// console.log("the given string:- ",SplitString)


// let Base64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

let Base64 = ""
for(let i=65 ; i<91 ; i++){
    Base64 += String.fromCharCode(i)
}
for(let i=97 ; i<123 ; i++){
    Base64 += String.fromCharCode(i)
}
for(let i=48 ; i<58 ; i++){
    Base64 += String.fromCharCode(i)
}
Base64 += String.fromCharCode(43)
Base64 += String.fromCharCode(47)

// console.log(typeof(A))

let check = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/

if (check.test(Base64String)){

    let value = []
    for(let i=0;i<SplitString.length;i++){
        for(let j=0;j<Base64.length;j++){
            if(SplitString[i]==Base64[j]){
                value.push(Base64.indexOf(Base64[j]))
            }
        }
    }
    // console.log("the Base64 values:- ",value)
    
    let binaryCodes = value.map((num) => num.toString(2));
    // console.log("Binary Codes: ", binaryCodes);
    
    for (let i=0;i<binaryCodes.length;i++){
        let n = "0"
        while(binaryCodes[i].length<6){
            binaryCodes[i] = n + binaryCodes[i]
        }
        }
        // console.log("6bit:- ",binaryCodes)
    
    let oneBinary = binaryCodes.join("").split("");
    // console.log(oneBinary)
    
    let binaryCode8Bit = [];
      while (oneBinary.length != 0) {
        binaryCode8Bit.push(oneBinary.splice(0, 8).join(""));
      }
    //   console.log("Binaries in 8 Bits are : ", binaryCode8Bit);
    
    let BitoDec = binaryCode8Bit.map((num) => parseInt(num,2));
    // console.log("Decimals:- ", BitoDec);
    
    let lastElement = BitoDec[BitoDec.length - 1];
    let sum = 0 
    for(let i=0;i<lastElement;i++){
     sum += lastElement[i]
    }
    
    if(sum == 0){
        BitoDec.pop()
    }
    
    let chars = BitoDec.map((num) => String.fromCharCode(num));
    // console.log("Decimals:- ", chars);
    
    let final = chars.join("")
    // console.log("final :-",final)
    return final;

}
else{
    console.log(`you have entered invalid input, please enter valid input`)
    Decode();
}
}
else {
    console.log(`Input cannot be empty`)
    Decode();
}

}

// Decode()

export default Decode


