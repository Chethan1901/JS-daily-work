import readlineSync from "readline-sync";
import Encode from "./Encoding.js";
import Decode from "./Decoding.js";

function user() {
	let input = readlineSync.question(
		`\n \nDo you want to continue? \nEnter "y" to continue \nEnter "n" to exit:- `
	);
	// if (input === "y" || input === "n" || input === "yes" || input === "no") {
		if (input === "y" || input === "yes" || input === "Y") {
			shift();
		} else if (input === "n" || input === "no" || input === "N") {
			console.log(`Exit`)
			process.exit();
		// }
	} else {
		console.log(`invalid input`);
	}
}

function shift() {
	let input = readlineSync.questionInt(
		"\n \nEnter 0 to Exit \nEnter 1 to Encode \nEnter 2 to Decode \n"
	);
	switch (input) {
		case 1: {
			console.log(`The encoded value is:- ${Encode()}`);
			user();
			break;
		}

		case 2: {
			console.log(`The decoded value is:- ${Decode()}`);
			user();
			break;
		}

		case 0: {
      console.log(`Exit`)
			process.exit();
			break;
		}

		default: {
			console.log("please select value in between given options");
			shift();
		}
	}
}

shift();
