// ------reverse a string-------

let original = "Likitha";
let reversed = "";
for (let i = original.length -1 ; i >= 0 ; i--) {
  reversed += original[i]
}
console.log(reversed); // output---->ahtikiL

// --------count vowels in a string------
let sentence = "It is a beautiful day";
let count = "0";
let vowels = "aeiouAEIOU";

for(let i = 0; i < sentence.length; i++){
  if(vowels.indexOf(sentence[i]) !== -1){
    count++;
  }
}
console.log(count); // output---->9

//--------replace all space with dashes------
let word ="hello, how are you?";
let result = "";
for (let i = 0; i < word.length; i++ ){
if (word[i] === " ") {
result += "-";
}
else {
result += word[i];
}
}
console.log(result); //------>hello,-how-are-you?


