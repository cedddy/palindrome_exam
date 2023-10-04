const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// TODO: rename this file from '.txt' to '.js'
function isPalindrome(str) {


  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }

  if (str === reversedString) {
    return reversedString;
      
  } else {
    return false;
  }
}
// Call the function and pass an argument.
rl.question('Enter a string to check for palindrome: ', (origString) => {
  if (/^[A-Za-z]+$/.test(origString)) {
    if (isPalindrome(origString)) {
      console.log("The given string:", origString, "is an example of a palindrome, the reversed value is:",isPalindrome(origString));
      
    } else {
      console.log("The given string:", origString, "is not an example of a palindrome");
    }
  } else {
    console.log("The given value:", origString, "is not a string! The expected data type of the value is string");
  }

  rl.close();
});
