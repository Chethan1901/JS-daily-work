import readlineSync from "readline-sync";
import Encode from "./Encoding.js";
import Decode from "./Decoding.js";

function user(){
  let input = readlineSync.question(`\n \n do you want to continue \nEnter "y" to continue \nEnter "n" to exit:- `)
  if(input === "y" || input === "n"){
    if(input === "y"){
      shift()
    }
    else if(input === "y"){
      process.exit()
    }
  }
  else {
    console.log(`invalid input`)
    
  }
}


function shift() {
let input = readlineSync.questionInt("\n \nEnter 0 to Exit \nEnter 1 to Encode \nEnter 2 to Decode \n")
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
    console.log("Input invalid")
  }
}
}

shift()