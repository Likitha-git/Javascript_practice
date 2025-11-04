//------reverse a string-------
function reverseString (str){
  return str.split('').reverse().join('');
}
let before = "Liki";
let after =reverseString(before);
console.log(after);

// -----------CAplitalize first letter---------
function firstLetterCapital (str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
let input ="liki";
let afterName = firstLetterCapital(input);
console.log(afterName);

// --------count vowels in a string------
function countVowels (str){
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char))
    count++;
  }
  return count;
}
const fruit = "Apple";
const vowelCount = countVowels(fruit);
console.log(vowelCount);
