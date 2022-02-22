Reverse Number
Write a function that takes a positive integer as an argument and returns that number with its digits reversed.

Examples:

Copy Code
reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that zeros get dropped!
reverseNumber(1);        // 1

function reverseNumber(number) {
  const numberStringArray = String(number).split('');
  return parseInt(numberStringArray.reverse().join(''), 10);
}
