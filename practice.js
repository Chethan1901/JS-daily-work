var empty = []
var word = "abcba"
var rword = ""

for (var i =0; i<word.length; i++){
    empty.push(word[i]);
}
// console.log(word.split(" "))
empty = word.split("");

for (var i =0; i<word.length; i++){
    rword += empty.pop();
}

if(rword === word){
    console.log(word+ " is a palindrome")
}
else {
    console.log(word+ " is not a palindrom")
}