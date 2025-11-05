/-------find the longest word in js--------
function longestWordInSentence(sentence) {
let longest = "";
let current = "";
for(let i = 0; i <= sentence.length; i++) {
  let char = sentence[i];
 
if(char === '' || i === sentence.length) {
  if(current.length > longest.length){
    longest = current;
  }
  current ='';
} else {
  current += char;
}
}
return longest;
}
let sentence = "Click here to run the Javascript";
let result = longestWordInSentence(sentence);
console.log("The longest word is", result);

//---arrow functions-----
const square = x => x * x;
console.log(square(2));

// const greet = name => {
  const message = "Hello" + name;
  return message;
 };
  console.log(greet("Manny"));

//------repeat a string N times---
const repeatString = (str, n) => {
  let result = "";
  for( let i = 0; i < n ; i++) {
    result += str;
  }
  return result;
 };
 console.log(repeatString("cat " , 4));

