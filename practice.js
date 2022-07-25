var empty = []
var word = "nmpr"
var rword = ""

for (var i =0; i<word.length; i++){
    empty.push(word[i]);
}

for (var i =0; i<word.length; i++){
    rword += empty.pop();
}

if(rword === word){
    console.log(word+ "is a palindrome")
}
else {
    console.log(word+ "is not a palindrome")
}