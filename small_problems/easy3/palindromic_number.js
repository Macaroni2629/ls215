Palindromic Number
Write a function that returns true if its integer argument is palindromic, or false otherwise. A palindromic number reads the same forwards and backwards.

Examples:

Copy Code
isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true

function isPalindromicNumber(number) { return isPalindrome(String(number)) }

// someone else's answer
function isPalindromicNumber(number) {
  let string = String(number);
  return console.log(( string === string.split('').reverse().join('')));
}